// Copyright 2024 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Unit tests for GoalListComponent
 */

import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';
import {waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';
import {MockTranslatePipe} from 'tests/unit-test-utils';
import {AssetsBackendApiService} from 'services/assets-backend-api.service';
import {GoalListComponent} from './goal-list.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {LearnerTopicSummary} from 'domain/topic/learner-topic-summary.model';
import {StorySummary} from 'domain/story/story-summary.model';

describe('GoalListComponent', () => {
  let component: GoalListComponent;
  let fixture: ComponentFixture<GoalListComponent>;
  let assetsBackendApiService: AssetsBackendApiService;

  let subtopic = {
    skill_ids: ['skill_id_2'],
    id: 1,
    title: 'subtopic_name',
    thumbnail_filename: 'image.svg',
    thumbnail_bg_color: '#F8BF74',
    url_fragment: 'subtopic-name',
  };

  let nodeDict = {
    id: 'node_1',
    thumbnail_filename: 'image.png',
    title: 'Title 1',
    description: 'Description 1',
    prerequisite_skill_ids: ['skill_1'],
    acquired_skill_ids: ['skill_2'],
    destination_node_ids: ['node_2'],
    outline: 'Outline',
    exploration_id: null,
    outline_is_finalized: false,
    thumbnail_bg_color: '#a33f40',
    status: 'Published',
    planned_publication_date_msecs: 100,
    last_modified_msecs: 100,
    first_publication_date_msecs: 200,
    unpublishing_reason: null,
  };

  let sampleStoryNode = {
    id: '0',
    title: 'Story Title',
    description: 'Story Description',
    node_titles: ['Chapter 1'],
    thumbnail_filename: 'image.svg',
    thumbnail_bg_color: '#F8BF74',
    story_is_published: true,
    completed_node_titles: ['Chapter 1'],
    url_fragment: 'story-title',
    all_node_dicts: [nodeDict],
  };

  let sampleLearnerTopicSummaryBackendDict = {
    id: 'sample_topic_id',
    name: 'Topic Name',
    language_code: 'en',
    description: 'description',
    version: 1,
    story_titles: ['Story 1'],
    total_published_node_count: 2,
    thumbnail_filename: 'image.svg',
    thumbnail_bg_color: '#C6DCDA',
    classroom_name: 'math',
    classroom_url_fragment: 'math',
    practice_tab_is_displayed: false,
    canonical_story_summary_dict: [sampleStoryNode],
    url_fragment: 'topic-name',
    subtopics: [subtopic],
    degrees_of_mastery: {
      skill_id_1: 0.5,
      skill_id_2: 0.3,
    },
    skill_descriptions: {
      skill_id_1: 'Skill Description 1',
      skill_id_2: 'Skill Description 2',
    },
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      providers: [AssetsBackendApiService],
      declarations: [GoalListComponent, MockTranslatePipe],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalListComponent);
    component = fixture.componentInstance;
    assetsBackendApiService = TestBed.inject(AssetsBackendApiService);
    component.goalTopic = LearnerTopicSummary.createFromBackendDict(
      sampleLearnerTopicSummaryBackendDict
    );
  });

  it('should set imgUrl correctly', () => {
    const assetBackendSpy = spyOn(
      assetsBackendApiService,
      'getThumbnailUrlForPreview'
    ).and.returnValue(
      '/assetsdevhandler/topic/sample_topic_id/assets/thumbnail/image.svg'
    );

    component.ngOnInit();
    fixture.detectChanges();

    expect(assetBackendSpy).toHaveBeenCalledWith(
      'topic',
      'sample_topic_id',
      'image.svg'
    );
    expect(component.imgUrl).toEqual(
      '/assetsdevhandler/topic/sample_topic_id/assets/thumbnail/image.svg'
    );
  });
});
