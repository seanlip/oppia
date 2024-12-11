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
 * @fileoverview Component for language banner in the Learner Dashboard
 * page.
 */

import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie';

@Component({
  selector: 'language-banner',
  templateUrl: './language-banner.component.html',
  styleUrls: ['./language-banner.component.scss'],
})
export class LanguageBannerComponent implements OnInit {
  isVisible: boolean;
  isChecked: boolean = false;
  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    if (this.cookieService.get('doNotShowLanguageBanner') !== 'true') {
      this.isVisible = navigator.language.slice(0, 2) !== 'en';
    }
  }

  onButtonClick(): void {
    this.isVisible = false;
    if (this.isChecked) {
      this.cookieService.put('doNotShowLanguageBanner', 'true');
    }
  }
}
