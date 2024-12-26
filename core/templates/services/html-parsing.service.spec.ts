import {TestBed} from '@angular/core/testing';

import {HtmlParsingService} from './html-parsing.service';

describe('HtmlParsingService', () => {
  let service: HtmlParsingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlParsingService);
  });

  it('should count image tags in the given HTML string', () => {
    const html = `<div>
      <oppia-noninteractive-image filepath-with-value="img1"></oppia-noninteractive-image>
      <oppia-noninteractive-image filepath-with-value="img2"></oppia-noninteractive-image>
    </div>`;
    expect(service.countImageTags(html)).toBe(2);
  });

  it('should return 0 if no image tags are present', () => {
    const html = `<div>No images here!</div>`;
    expect(service.countImageTags(html)).toBe(0);
  });

  it('should return true if an image tag is removed', () => {
    const initialHtml = `<div>
      <oppia-noninteractive-image filepath-with-value="img1"></oppia-noninteractive-image>
      <oppia-noninteractive-image filepath-with-value="img2"></oppia-noninteractive-image>
    </div>`;
    const currentHtml = `<div>
      <oppia-noninteractive-image filepath-with-value="img1"></oppia-noninteractive-image>
    </div>`;
    expect(service.isImageRemoved(initialHtml, currentHtml)).toBe(true);
  });

  it('should return false if no image tags are removed', () => {
    const initialHtml = `<div>
      <oppia-noninteractive-image filepath-with-value="img1"></oppia-noninteractive-image>
    </div>`;
    const currentHtml = `<div>
      <oppia-noninteractive-image filepath-with-value="img1"></oppia-noninteractive-image>
    </div>`;
    expect(service.isImageRemoved(initialHtml, currentHtml)).toBe(false);
  });
});
