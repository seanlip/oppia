# coding: utf-8
#
# Copyright 2018 The Oppia Authors. All Rights Reserved.
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
# limitations under the License.]

"""Domain objects for Classroom."""

from __future__ import annotations

from typing import List, TypedDict


class ClassroomDict(TypedDict):
    """Dictionary representing the Classroom object."""

    name: str
    url_fragment: str
    topic_ids: List[str]
    course_details: str
    topic_list_intro: str
    is_diagnostic_test_enabled: bool

# TODO(#17246): Currently, the classroom data is stored in the config model and
# we are planning to migrate the storage into a new Classroom model. After the
# successful migration, this file should be deleted.


class Classroom:
    """Domain object for a classroom."""

    def __init__(
        self,
        name: str,
        url_fragment: str,
        topic_ids: List[str],
        course_details: str,
        topic_list_intro: str,
        is_diagnostic_test_enabled: bool = False,
    ) -> None:
        """Constructs a Classroom domain object.

        Args:
            name: str. The name of the classroom.
            url_fragment: str. The url fragment of the classroom.
            topic_ids: list(str). List of topic ids attached to the classroom.
            course_details: str. Course details for the classroom.
            topic_list_intro: str. Topic list introduction for the classroom.
        """
        self.name = name
        self.url_fragment = url_fragment
        self.topic_ids = topic_ids
        self.course_details = course_details
        self.topic_list_intro = topic_list_intro
        self.is_diagnostic_test_enabled = is_diagnostic_test_enabled

    def to_dict(self) -> ClassroomDict:
        """Converts this Classroom domain instance into a dictionary form with
        its keys as the attributes of this class.

        Returns:
            dict. A dictionary containing the Classroom class information in a
            dictionary form.
        """
        return {
            'name': self.name,
            'url_fragment': self.url_fragment,
            'topic_ids': self.topic_ids,
            'course_details': self.course_details,
            'topic_list_intro': self.topic_list_intro,
            'is_diagnostic_test_enabled': self.is_diagnostic_test_enabled
        }
    @classmethod
    def from_dict(cls, classroom_dict: ClassroomDict) -> Classroom:
        return cls(
            name=classroom_dict['name'],
            url_fragment=classroom_dict['url_fragment'],
            topic_ids=classroom_dict['topic_ids'],
            course_details=classroom_dict['course_details'],
            topic_list_intro=classroom_dict['topic_list_intro'],
            is_diagnostic_test_enabled=classroom_dict.get('is_diagnostic_test_enabled', False)
        )

