# coding: utf-8
#
# Copyright 2024 The Oppia Authors. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS-IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Unit tests for translation migration jobs."""

from __future__ import annotations

from core.jobs import job_test_utils
from core.jobs.batch_jobs import missing_translation_images_repair_jobs
from core.jobs.types import job_run_result
from core.platform import models
from core.tests import test_utils
from core import feconf

import result
from typing import Iterable, Set

MYPY = False
if MYPY:  # pragma: no cover
    from mypy_imports import app_identity_services
    from mypy_imports import storage_services
    from mypy_imports import suggestion_models

(suggestion_models, ) = models.Registry.import_models([
    models.Names.SUGGESTION])
storage_services = models.Registry.import_storage_services()
app_identity_services = models.Registry.import_app_identity_services()

BUCKET = app_identity_services.get_gcs_resource_bucket_name()
SRC1 = 'exploration/e1/assets/image/image1.png'
SRC2 = 'exploration/e1/assets/image/image2.png'
DST1 = 'exploration_suggestions/e1/assets/image/image1.png'
DST2 = 'exploration_suggestions/e1/assets/image/image2.png'


class MissingTranslationImagesJobTestsBase(job_test_utils.JobTestBase):
    """Base class for tests."""

    AUTHOR = 'author'
    EXP_CATEGORY = 'exp_category'
    DATA = b'data'
    MIME_TYPE = 'image/png'

    @staticmethod
    def _make_translation_html(images: Iterable[str]) -> str:
        """Generate HTML with image elements with the provided filenames.

        Args:
            images: iterable(str). The image filenames to use.

        Returns:
            str. The HTML.
        """
        tags = [
            f'<oppia-noninteractive-image filepath-with-value="{image}">'
            for image in images
        ]
        return '\n'.join(tags)

    def _add_suggestion(
        self, sugg_id: str, exp_id: str, image_filenames: Iterable[str],
        make_dst: bool, make_src: bool
    ) -> None:
        """Add a translation suggestion.

        Args:
            sugg_id: str. Suggestion ID
            exp_id: str. ID of the target exploration the suggestion is for.
            image_filenames: iterable(str). The images to include in the
                translation suggestion.
            make_dst: bool. Whether to create the destination files under
                exploration_suggestions/ in GCS.
            make_src: bool. Whether to create the source files under
                exploration/ in GCS.
        """
        score_cat = '%s%s%s' % (
            suggestion_models.SCORE_TYPE_TRANSLATION,
            suggestion_models.SCORE_CATEGORY_DELIMITER,
            self.EXP_CATEGORY,
        )
        model = self.create_model(
            suggestion_models.GeneralSuggestionModel,
            suggestion_type=feconf.SUGGESTION_TYPE_TRANSLATE_CONTENT,
            target_type=feconf.ENTITY_TYPE_EXPLORATION,
            target_id=exp_id,
            target_version_at_submission=1,
            status=suggestion_models.STATUS_IN_REVIEW,
            author_id=self.AUTHOR,
            change_cmd={
                'translation_html': self._make_translation_html(image_filenames)
            },
            score_category=score_cat,
        )
        model.update_timestamps()
        model.put_multi([model])
        for filename in image_filenames:
            # MIME type is for PNGs.
            assert filename.endswith('.png')
            if make_src:
                storage_services.commit(
                    BUCKET, f'exploration/{exp_id}/assets/image/{filename}',
                    self.DATA, self.MIME_TYPE)
            if make_dst:
                storage_services.commit(
                    BUCKET,
                    f'exploration_suggestions/{exp_id}/assets/image/{filename}',
                    self.DATA, self.MIME_TYPE)

    def _gcs_ls(self, path: str) -> Set[str]:
        """List the files in GCS under the provided path."""
        if not path.endswith('/'):
            path += '/'
        return {
            blob.name[len(path):]
            for blob in storage_services.listdir(BUCKET, path)}


class CopyMissingTranslationImagesJobTests(
    MissingTranslationImagesJobTestsBase
):
    """Tests for CopyMissingTranslationImagesJob."""

    JOB_CLASS = (
        missing_translation_images_repair_jobs.CopyMissingTranslationImagesJob)

    def test_copy_images_when_dst_missing(self) -> None:
        self._add_suggestion(
            's1', 'e1', ['image1.png', 'image2.png'], False, True)
        self.assertSetEqual(
            self._gcs_ls('exploration/e1/assets/image'),
            {'image1.png', 'image2.png'}
        )
        self.assertSetEqual(
            self._gcs_ls('exploration_suggestions/e1/assets/image'),
            set(),
        )
        self.assert_job_output_is([
            job_run_result.JobRunResult.as_stdout(result.Ok((
                SRC1,
                DST1,
                'Copied',
            ))),
            job_run_result.JobRunResult.as_stdout(result.Ok((
                SRC2,
                DST2,
                'Copied',
            ))),
        ])

        self.assertSetEqual(
            self._gcs_ls('exploration/e1/assets/image'),
            {'image1.png', 'image2.png'}
        )
        self.assertSetEqual(
            self._gcs_ls('exploration_suggestions/e1/assets/image'),
            {'image1.png', 'image2.png'}
        )

    def test_do_not_copy_images_when_dst_present(self) -> None:
        self._add_suggestion(
            's1', 'e1', ['image1.png', 'image2.png'], True, True)
        self.assertSetEqual(
            self._gcs_ls('exploration/e1/assets/image'),
            {'image1.png', 'image2.png'}
        )
        self.assertSetEqual(
            self._gcs_ls('exploration_suggestions/e1/assets/image'),
            {'image1.png', 'image2.png'}
        )
        self.assert_job_output_is([])

        self.assertSetEqual(
            self._gcs_ls('exploration/e1/assets/image'),
            {'image1.png', 'image2.png'}
        )
        self.assertSetEqual(
            self._gcs_ls('exploration_suggestions/e1/assets/image'),
            {'image1.png', 'image2.png'}
        )

    def test_do_not_copy_images_when_src_missing(self) -> None:
        self._add_suggestion(
            's1', 'e1', ['image1.png', 'image2.png'], True, False)
        self.assertSetEqual(
            self._gcs_ls('exploration/e1/assets/image'),
            set()
        )
        self.assertSetEqual(
            self._gcs_ls('exploration_suggestions/e1/assets/image'),
            {'image1.png', 'image2.png'}
        )
        self.assert_job_output_is([])

        self.assertSetEqual(
            self._gcs_ls('exploration/e1/assets/image'),
            set()
        )
        self.assertSetEqual(
            self._gcs_ls('exploration_suggestions/e1/assets/image'),
            {'image1.png', 'image2.png'}
        )

    def test_do_nothing_when_no_suggestions(self) -> None:
        self.assertSetEqual(
            self._gcs_ls('exploration/e1/assets/image'),
            set()
        )
        self.assertSetEqual(
            self._gcs_ls('exploration_suggestions/e1/assets/image'),
            set()
        )
        self.assert_job_output_is([])

        self.assertSetEqual(
            self._gcs_ls('exploration/e1/assets/image'),
            set()
        )
        self.assertSetEqual(
            self._gcs_ls('exploration_suggestions/e1/assets/image'),
            set()
        )

class AuditMissingTranslationImagesJobTests(
    MissingTranslationImagesJobTestsBase
):
    """Tests for CopyMissingTranslationImagesJob."""

    JOB_CLASS = (
        missing_translation_images_repair_jobs.AuditMissingTranslationImagesJob)

    def test_copy_images_when_dst_missing(self) -> None:
        self._add_suggestion(
            's1', 'e1', ['image1.png', 'image2.png'], False, True)
        self.assertSetEqual(
            self._gcs_ls('exploration/e1/assets/image'),
            {'image1.png', 'image2.png'}
        )
        self.assertSetEqual(
            self._gcs_ls('exploration_suggestions/e1/assets/image'),
            set(),
        )
        self.assert_job_output_is([
            job_run_result.JobRunResult.as_stdout((
                SRC1,
                {
                    'dst': [DST1],
                    'copy_info': [{
                        'dst': [DST1],
                        'src_exist': [True],
                        'dst_exist': [False]
                    }]
                }
            )),
            job_run_result.JobRunResult.as_stdout((
                SRC2,
                {
                    'dst': [DST2],
                    'copy_info': [{
                        'dst': [DST2],
                        'src_exist': [True],
                        'dst_exist': [False]
                    }]
                }
            ))
        ])

        self.assertSetEqual(
            self._gcs_ls('exploration/e1/assets/image'),
            {'image1.png', 'image2.png'}
        )
        self.assertSetEqual(
            self._gcs_ls('exploration_suggestions/e1/assets/image'),
            set(),
        )

    def test_do_not_copy_images_when_dst_present(self) -> None:
        self._add_suggestion(
            's1', 'e1', ['image1.png', 'image2.png'], True, True)
        self.assertSetEqual(
            self._gcs_ls('exploration/e1/assets/image'),
            {'image1.png', 'image2.png'}
        )
        self.assertSetEqual(
            self._gcs_ls('exploration_suggestions/e1/assets/image'),
            {'image1.png', 'image2.png'}
        )
        self.assert_job_output_is([
            job_run_result.JobRunResult.as_stdout((
                SRC1,
                {
                    'dst': [],
                    'copy_info': [{
                        'dst': [DST1],
                        'src_exist': [True],
                        'dst_exist': [True]
                    }]
                }
            )),
            job_run_result.JobRunResult.as_stdout((
                SRC2,
                {
                    'dst': [],
                    'copy_info': [{
                        'dst': [DST2],
                        'src_exist': [True],
                        'dst_exist': [True]
                    }]
                }
            ))
        ])

        self.assertSetEqual(
            self._gcs_ls('exploration/e1/assets/image'),
            {'image1.png', 'image2.png'}
        )
        self.assertSetEqual(
            self._gcs_ls('exploration_suggestions/e1/assets/image'),
            {'image1.png', 'image2.png'}
        )

    def test_do_not_copy_images_when_src_missing(self) -> None:
        self._add_suggestion(
            's1', 'e1', ['image1.png', 'image2.png'], True, False)
        self.assertSetEqual(
            self._gcs_ls('exploration/e1/assets/image'),
            set()
        )
        self.assertSetEqual(
            self._gcs_ls('exploration_suggestions/e1/assets/image'),
            {'image1.png', 'image2.png'}
        )
        self.assert_job_output_is([
            job_run_result.JobRunResult.as_stdout((
                SRC1,
                {
                    'dst': [],
                    'copy_info': [{
                        'dst': [DST1],
                        'src_exist': [False],
                        'dst_exist': [True]
                    }]
                }
            )),
            job_run_result.JobRunResult.as_stdout((
                SRC2,
                {
                    'dst': [],
                    'copy_info': [{
                        'dst': [DST2],
                        'src_exist': [False],
                        'dst_exist': [True]
                    }]
                }
            ))
        ])

        self.assertSetEqual(
            self._gcs_ls('exploration/e1/assets/image'),
            set()
        )
        self.assertSetEqual(
            self._gcs_ls('exploration_suggestions/e1/assets/image'),
            {'image1.png', 'image2.png'}
        )

    def test_do_nothing_when_no_suggestions(self) -> None:
        self.assertSetEqual(
            self._gcs_ls('exploration/e1/assets/image'),
            set()
        )
        self.assertSetEqual(
            self._gcs_ls('exploration_suggestions/e1/assets/image'),
            set()
        )
        self.assert_job_output_is([])

        self.assertSetEqual(
            self._gcs_ls('exploration/e1/assets/image'),
            set()
        )
        self.assertSetEqual(
            self._gcs_ls('exploration_suggestions/e1/assets/image'),
            set()
        )
