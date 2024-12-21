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
import {downgradeComponent} from '@angular/upgrade/static';
import {CookieService} from 'ngx-cookie';
import {AppConstants} from 'app.constants';

@Component({
  selector: 'language-banner',
  templateUrl: './language-banner.component.html',
  styleUrls: ['./language-banner.component.scss'],
})
export class LanguageBannerComponent implements OnInit {
  COOKIE_NAME_COOKIES_ACKNOWLEDGED = 'OPPIA_COOKIES_ACKNOWLEDGED';
  COOKIE_NAME_DO_NOT_SHOW_LANGUAGE_BANNER = 'DO_NOT_SHOW_LANGUAGE_BANNER';
  isVisible: boolean = false;
  isChecked: boolean = false;
  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    let cookieSetDateMsecs = this.cookieService.get(
      this.COOKIE_NAME_COOKIES_ACKNOWLEDGED
    );
    if (
      !cookieSetDateMsecs ||
      Number(cookieSetDateMsecs) < AppConstants.COOKIE_POLICY_LAST_UPDATED_MSECS
    ) {
      return;
    }
    if (!this.cookieService.get(this.COOKIE_NAME_DO_NOT_SHOW_LANGUAGE_BANNER)) {
      this.isVisible = navigator.language.slice(0, 2) !== 'en';
    }
  }

  onButtonClick(): void {
    this.isVisible = false;
    if (this.isChecked) {
      this.cookieService.put(
        this.COOKIE_NAME_DO_NOT_SHOW_LANGUAGE_BANNER,
        'true'
      );
    }
  }
}

angular
  .module('oppia')
  .directive(
    'languageBannerComponent',
    downgradeComponent({component: LanguageBannerComponent})
  );
