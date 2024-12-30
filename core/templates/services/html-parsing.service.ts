// Copyright 2023 The Oppia Authors. All Rights Reserved.
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
 * @fileoverview Service for handling HTML parsing
 * operations focused on image tag detection and comparison.
 */

import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HtmlParsingService {
  private readonly IMAGE_TAG_REGEX =
    /<oppia-noninteractive-image\b[^>]*?filepath-with-value=/g;

  constructor() {}

  /**
   * Counts the number of <oppia-noninteractive-image> tags in the provided HTML string.
   * @param {string} htmlString - The HTML string to analyze.
   * @returns {number} The number of image tags found.
   */
  countImageTags(htmlString: string): number {
    const imageTags = htmlString.match(this.IMAGE_TAG_REGEX);
    return imageTags ? imageTags.length : 0;
  }

  /**
   * Compares the initial and current HTML strings to determine if any image tags were removed.
   * This is the main public method to test.
   * @param {string} initialHtml - The initial HTML string with image tags.
   * @param {string} currentHtml - The current (edited) HTML string with image tags.
   * @returns {boolean} True if the number of image tags in the current HTML is less than the initial HTML.
   */
  isImageRemoved(initialHtml: string, currentHtml: string): boolean {
    const initialImageCount = this.countImageTags(initialHtml);
    const currentImageCount = this.countImageTags(currentHtml);
    return currentImageCount < initialImageCount;
  }
}
