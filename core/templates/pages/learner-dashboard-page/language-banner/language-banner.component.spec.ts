// Copyright 2021 The Oppia Authors. All Rights Reserved.
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
 * @fileoverview Unit tests for LanguageBannerComponent.
 */

import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LanguageBannerComponent} from './language-banner.component';

describe('LanguageBannerComponent', () => {
  let component: LanguageBannerComponent;
  let fixture: ComponentFixture<LanguageBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanguageBannerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
