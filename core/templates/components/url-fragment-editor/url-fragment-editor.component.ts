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
 * @fileoverview Component for a URL fragment.
 */

import {Component, Input, Output, EventEmitter} from '@angular/core';
import {AppConstants} from 'app.constants';

@Component({
  selector: 'URLFragmentEditorComponent',
  templateUrl: './url-fragment-editor.component.html',
})
export class URLFragmentEditorComponent {
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() maxLength: number = 50;
  @Input() fragmentType: string = 'story';
  @Input() generatedUrlPrefix!: string;
  @Input() fragmentExists: boolean = false;
  @Input() inputId: string = 'urlFragment';
  @Input() e2eTestUrlFragment!: string;
  @Input() accessingPage: string;
  @Input() e2eTestUrlFragmentHeadingClass!: string;
  @Input() tabIndex!: number;
  @Input() disabled: boolean;
  @Input() blur!: boolean;
  @Input() urlFragment: string = '';
  @Output() urlFragmentChange: EventEmitter<string> =
    new EventEmitter<string>();

  validUrlFragmentRegex = new RegExp(AppConstants.VALID_URL_FRAGMENT_REGEX);

  generalTransformationUrlFragment(): void {
    this.urlFragment = this.urlFragment
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-');
  }
  onChange(): void {
    if (!this.urlFragment) {
      this.urlFragment = '';
    }
    this.generalTransformationUrlFragment();
    this.urlFragmentChange.emit(this.urlFragment);
  }
}
