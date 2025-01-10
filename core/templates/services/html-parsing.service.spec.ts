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
 * @fileoverview Unit tests for HtmlParsingService.
 */

import {TestBed} from '@angular/core/testing';

import {HtmlParsingService} from './html-parsing.service';

describe('HtmlParsingService', () => {
  let htmlParsingService: HtmlParsingService;

  const htmlWithImage = `
    <p>Content with image</p>
    <oppia-noninteractive-image
      alt-with-value="&amp;quot;Image description&amp;quot;"
      filepath-with-value="&amp;quot;img_20241109_030945_oc195e5356_height_350_width_450.svg&amp;quot;">
    </oppia-noninteractive-image>
  `;
  const htmlWithoutImage = '<p>Content without image</p>';
  const htmlWithTwoImages = `
    <p>Content with two images</p>
    <oppia-noninteractive-image
      alt-with-value="&amp;quot;Image 1&amp;quot;"
      filepath-with-value="&amp;quot;img1.svg&amp;quot;">
    </oppia-noninteractive-image>
    <oppia-noninteractive-image
      alt-with-value="&amp;quot;Image 2&amp;quot;"
      filepath-with-value="&amp;quot;img2.svg&amp;quot;">
    </oppia-noninteractive-image>
  `;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    htmlParsingService = TestBed.inject(HtmlParsingService);
  });


  describe('countImageTags', () => {
    it('should count single image tag correctly', () => {
      expect(htmlParsingService).toBeDefined();
      expect(htmlWithImage).toContain('oppia-noninteractive-image');
      expect(htmlWithImage).toContain('filepath-with-value');

      expect(htmlParsingService.countImageTags(htmlWithImage)).toBe(1);
    });

    it('should return 0 when no image tags are present', () => {
      expect(htmlParsingService).toBeDefined();
      expect(htmlWithoutImage).not.toContain('oppia-noninteractive-image');

      expect(htmlParsingService.countImageTags(htmlWithoutImage)).toBe(0);
    });

    it('should count multiple image tags correctly', () => {
      expect(htmlParsingService).toBeDefined();
      expect(htmlWithTwoImages).toContain('oppia-noninteractive-image');

      expect(htmlParsingService.countImageTags(htmlWithTwoImages)).toBe(2);
    });

    it('should handle empty string input', () => {
      expect(htmlParsingService).toBeDefined();
      expect(htmlParsingService.countImageTags('')).toBe(0);
    });

    it('should only count images with filepath-with-value attribute', () => {
      expect(htmlParsingService).toBeDefined();

      const htmlWithIncompleteImage = `
        <p>Content with incomplete image tag</p>
        <oppia-noninteractive-image alt-with-value="test">
        </oppia-noninteractive-image>
      `;

      expect(htmlParsingService.countImageTags(htmlWithIncompleteImage)).toBe(0);
    });
  });

  describe('isImageCountMismatched', () => {
    it('should detect mismatch when images are removed', () => {
      expect(htmlParsingService).toBeDefined();
      expect(htmlWithImage).toContain('oppia-noninteractive-image');
      expect(htmlWithoutImage).not.toContain('oppia-noninteractive-image');

      expect(htmlParsingService.isImageCountMismatched(htmlWithImage, htmlWithoutImage))
        .toBeTrue();
    });

    it('should detect mismatch when images are added', () => {
      expect(htmlParsingService).toBeDefined();
      expect(htmlWithoutImage).not.toContain('oppia-noninteractive-image');
      expect(htmlWithImage).toContain('oppia-noninteractive-image');

      expect(htmlParsingService.isImageCountMismatched(htmlWithoutImage, htmlWithImage))
        .toBeTrue();
    });

    it('should return false when image counts match', () => {
      expect(htmlParsingService).toBeDefined();
      expect(htmlWithImage).toContain('oppia-noninteractive-image');

      expect(htmlParsingService.isImageCountMismatched(htmlWithImage, htmlWithImage))
        .toBeFalse();
    });

    it('should return false when no images exist in either content', () => {
      expect(htmlParsingService).toBeDefined();
      expect(htmlWithoutImage).not.toContain('oppia-noninteractive-image');

      expect(htmlParsingService.isImageCountMismatched(htmlWithoutImage, htmlWithoutImage))
        .toBeFalse();
    });

    it('should handle multiple images correctly', () => {
      expect(htmlParsingService).toBeDefined();
      expect(htmlWithTwoImages).toContain('oppia-noninteractive-image');

      expect(htmlParsingService.isImageCountMismatched(htmlWithTwoImages, htmlWithTwoImages))
        .toBeFalse();
      expect(htmlParsingService.isImageCountMismatched(htmlWithTwoImages, htmlWithImage))
        .toBeTrue();
    });
  });
});
