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

  beforeEach(() => {
    TestBed.configureTestingModule({});
    htmlParsingService = TestBed.inject(HtmlParsingService);
  });

  describe('countImageTags', () => {
    it('should count image tags correctly when present', () => {
      expect(htmlParsingService.countImageTags(htmlWithImage)).toBe(1);
    });

    it('should return 0 when no image tags are present', () => {
      expect(htmlParsingService.countImageTags(htmlWithoutImage)).toBe(0);
    });

    it('should handle multiple image tags', () => {
      const multipleImages = `${htmlWithImage}${htmlWithImage}`;
      expect(htmlParsingService.countImageTags(multipleImages)).toBe(2);
    });

    it('should handle empty string input', () => {
      expect(htmlParsingService.countImageTags('')).toBe(0);
    });
  });

  describe('isImageRemoved', () => {
    it('should return true when image is removed', () => {
      expect(
        htmlParsingService.isImageRemoved(htmlWithImage, htmlWithoutImage)
      ).toBeTrue();
    });

    it('should return false when no images were initially present', () => {
      expect(
        htmlParsingService.isImageRemoved(htmlWithoutImage, htmlWithoutImage)
      ).toBeFalse();
    });

    it('should return false when image count remains the same', () => {
      expect(
        htmlParsingService.isImageRemoved(htmlWithImage, htmlWithImage)
      ).toBeFalse();
    });

    it('should return false when images are added', () => {
      expect(
        htmlParsingService.isImageRemoved(htmlWithoutImage, htmlWithImage)
      ).toBeFalse();
    });

    it('should handle multiple images being partially removed', () => {
      const multipleImages = `${htmlWithImage}${htmlWithImage}`;
      expect(
        htmlParsingService.isImageRemoved(multipleImages, htmlWithImage)
      ).toBeTrue();
    });
  });
});
