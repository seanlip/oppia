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
import {FormsModule} from '@angular/forms';
import {MockTranslatePipe} from 'tests/unit-test-utils';
import {CookieService, CookieModule} from 'ngx-cookie';
import {AppConstants} from 'app.constants';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('LanguageBannerComponent', () => {
  let component: LanguageBannerComponent;
  let fixture: ComponentFixture<LanguageBannerComponent>;
  let cookieService: CookieService;
  let debugElement: DebugElement;

  let COOKIE_NAME_COOKIES_ACKNOWLEDGED = 'OPPIA_COOKIES_ACKNOWLEDGED';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, CookieModule.forRoot()],
      declarations: [LanguageBannerComponent, MockTranslatePipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    cookieService = TestBed.inject(CookieService);
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not be visible if the cookies has not been acknowledged', () => {
    component.ngOnInit();
    expect(component.isVisible).toBeFalse();
  });

  it('should not be visible if the acknowledged cookie is expired', () => {
    spyOn(cookieService, 'get').and.callFake((key: string) => {
      if (key === COOKIE_NAME_COOKIES_ACKNOWLEDGED) {
        return String(AppConstants.COOKIE_POLICY_LAST_UPDATED_MSECS - 100000);
      }
      return null;
    });
    component.ngOnInit();
    expect(component.isVisible).toBeFalse();
  });

  it('should be visible if the language is not English and no cookie is set', () => {
    spyOn(cookieService, 'get').and.callFake((key: string) => {
      if (key === COOKIE_NAME_COOKIES_ACKNOWLEDGED) {
        return String(AppConstants.COOKIE_POLICY_LAST_UPDATED_MSECS + 100000);
      }
      return null;
    });

    spyOnProperty(navigator, 'language', 'get').and.returnValue('fr-FR');
    component.ngOnInit();
    expect(component.isVisible).toBeTrue();
  });

  it('should not be visible if the language is English', () => {
    spyOn(cookieService, 'get').and.callFake((key: string) => {
      if (key === COOKIE_NAME_COOKIES_ACKNOWLEDGED) {
        return String(AppConstants.COOKIE_POLICY_LAST_UPDATED_MSECS + 100000);
      }
      return null;
    });

    spyOnProperty(navigator, 'language', 'get').and.returnValue('en-US');
    component.ngOnInit();
    expect(component.isVisible).toBeFalse();
  });

  it('should not be visible if the DO_NOT_SHOW_LANGUAGE_BANNER cookie is set', () => {
    cookieService.put(
      component.COOKIE_NAME_DO_NOT_SHOW_LANGUAGE_BANNER,
      'true'
    );
    component.ngOnInit();
    expect(component.isVisible).toBeFalse();
  });

  it('should hide the banner when the button is clicked', () => {
    component.isVisible = true;
    fixture.detectChanges();

    const button = debugElement.query(By.css('.banner-button')).nativeElement;
    button.click();

    expect(component.isVisible).toBeFalse();
  });

  it('should set the DO_NOT_SHOW_LANGUAGE_BANNER cookie when checkbox is checked and button is clicked', () => {
    component.isVisible = true;
    component.isChecked = true;
    fixture.detectChanges();

    const button = debugElement.query(By.css('.banner-button')).nativeElement;
    button.click();

    expect(
      cookieService.get(component.COOKIE_NAME_DO_NOT_SHOW_LANGUAGE_BANNER)
    ).toBe('true');
  });

  it('should not set the DO_NOT_SHOW_LANGUAGE_BANNER cookie when checkbox is not checked and button is clicked', () => {
    component.isVisible = true;
    component.isChecked = false;
    fixture.detectChanges();

    const button = debugElement.query(By.css('.banner-button')).nativeElement;
    button.click();

    expect(
      cookieService.get(component.COOKIE_NAME_DO_NOT_SHOW_LANGUAGE_BANNER)
    ).toBeUndefined();
  });
});
