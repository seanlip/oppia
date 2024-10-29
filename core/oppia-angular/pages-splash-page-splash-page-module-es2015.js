(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['pages-splash-page-splash-page-module'],
  {
    /***/ '2t2x':
      /*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./core/templates/pages/splash-page/splash-page.component.html ***!
  \******************************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__['default'] =
          '<div class="splash-page">\n  <div class="oppia-splash-section-one" dir="auto">\n    <div class="oppia-splash-section-one-left" tabindex="0">\n      <h1 class="oppia-splash-h1" [innerHTML]="\'I18N_SPLASH_TITLE\' | translate"></h1>\n      <div class="oppia-splash-h2-container">\n        <h2 class="oppia-splash-h2 oppia-splash-h2-text" [innerHTML]="\'I18N_SPLASH_SUBTITLE\' | translate"></h2>\n      </div>\n      <div class="oppia-splash-button-container">\n        <button type="submit" (click)="onClickBrowseLessonsButton()"\n                class="btn oppia-splash-button oppia-splash-button-browse oppia-splash-browse-button-position oppia-transition-200">\n          {{ \'I18N_EXPLORE_OPPIA_CLASSROOM\' | translate }}\n        </button>\n      </div>\n      <div class="oppia-splash-button-container">\n        <button type="submit" (click)="onClickAccessAndroidButton()"\n                class="btn oppia-splash-button oppia-splash-button-browse oppia-splash-browse-button-position oppia-transition-200">\n          {{ \'I18N_ACTION_ACCESS_ANDROID_APP\' | translate }}\n        </button>\n      </div>\n    </div>\n    <div class="oppia-splash-section-one-right">\n      <picture class="oppia-splash-main-image" *ngIf="!isWindowNarrow">\n        <source type="image/webp" [srcset]="getImageSet(\'/splash/splashMainDesktop\', \'webp\')">\n        <source type="image/png" [srcset]="getImageSet(\'/splash/splashMainDesktop\', \'png\')">\n        <img [src]="getStaticImageUrl(\'/splash/splashMainDesktop1x.png\')"\n             width="800"\n             height="663"\n             alt="Photo of two kids and a tutor">\n      </picture>\n      <picture class="oppia-splash-main-image" *ngIf="isWindowNarrow">\n        <source type="image/webp" [srcset]="getStaticImageUrl(\'/splash/splashMainMobile.webp\')">\n        <source type="image/png" [srcset]="getStaticImageUrl(\'/splash/splashMainMobile.png\')">\n        <img [src]="getStaticImageUrl(\'/splash/splashMainMobile.png\')"\n             width="629"\n             height="415"\n             alt="Photo of a girl in front of computer">\n      </picture>\n    </div>\n  </div>\n\n  <div class="oppia-splash-section-two">\n    <div class="oppia-splash-icon-1-container">\n      <img [src]="getStaticImageUrl(\'/splash/userIcon.svg\')"\n           class="oppia-splash-icon-1"\n           width="35"\n           height="35"\n           alt="">\n      <div class="splash-icon-text-container">\n        <span class="splash-icon-text"\n              [innerHTML]="\'I18N_SPLASH_ICON_ONE_TEXT\' | translate">\n        </span>\n      </div>\n    </div>\n    <div class="oppia-splash-icon-2-container">\n      <img [src]="getStaticImageUrl(\'/splash/languageIcon.svg\')"\n           class="oppia-splash-icon-2"\n           width="35"\n           height="35"\n           alt="">\n      <div class="splash-icon-text-container">\n        <span class="splash-icon-text"\n              [innerHTML]="\'I18N_SPLASH_ICON_TWO_TEXT\' | translate:{languageCount: 4}">\n        </span>\n      </div>\n    </div>\n    <div class="oppia-splash-icon-3-container">\n      <img [src]="getStaticImageUrl(\'/splash/lessonIcon.svg\')"\n           class="oppia-splash-icon-3"\n           width="35"\n           height="35"\n           alt="">\n      <div class="splash-icon-text-container">\n        <span class="splash-icon-text"\n              [innerHTML]="\'I18N_SPLASH_ICON_THREE_TEXT\' | translate:{lessonCount: 40}">\n        </span>\n      </div>\n    </div>\n  </div>\n\n\n  <div class="oppia-splash-section-three">\n    <div class="oppia-splash-section-three-left">\n      <h3 *ngIf="isWindowNarrow" [innerHTML]="\'I18N_SPLASH_BENEFITS_TITLE\' | translate"></h3>\n      <img class="splash-matthew-image"\n           [src]="getStaticImageUrl(\'/splash/matthew_fractions.svg\')"\n           width="600"\n           height="340"\n           loading="lazy"\n           alt="Illustration of a young person in front of part of Oppia fraction lesson">\n    </div>\n    <div class="oppia-splash-section-three-right">\n      <h3 *ngIf="!isWindowNarrow" [innerHTML]="\'I18N_SPLASH_BENEFITS_TITLE\' | translate"></h3>\n      <div class="splash-benefits-list">\n        <div class="splash-benefit-bullets-column">\n          <img [src]="getStaticImageUrl(\'/splash/bullet1.svg\')"\n               width="17"\n               height="33"\n               loading="lazy"\n               alt="">\n          <img [src]="getStaticImageUrl(\'/splash/bullet2.svg\')"\n               width="25"\n               height="33"\n               loading="lazy"\n               alt="">\n          <img [src]="getStaticImageUrl(\'/splash/bullet3.svg\')"\n               width="39"\n               height="33"\n               loading="lazy"\n               alt="">\n        </div>\n        <div class="splash-benefit-text-items-column">\n          <h2 [innerHTML]="\'I18N_SPLASH_BENEFITS_ONE\' | translate" class="splash-benefits"></h2>\n          <h2 [innerHTML]="\'I18N_SPLASH_BENEFITS_TWO\' | translate" class="splash-benefits"></h2>\n          <h2 [innerHTML]="\'I18N_SPLASH_BENEFITS_THREE\' | translate" class="splash-benefits"></h2>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="oppia-splash-section-four">\n    <div class="oppia-splash-section-four-image-mobile" *ngIf="isWindowNarrow">\n      <picture class="splash-student-desk-image">\n        <source type="image/webp" [srcset]="getStaticImageUrl(\'/splash/student_desk_mobile.webp\')">\n        <source type="image/png" [srcset]="getStaticImageUrl(\'/splash/student_desk_mobile.png\')">\n        <img [src]="getStaticImageUrl(\'/splash/student_desk_mobile.png\')"\n             width="500"\n             height="520"\n             loading="lazy"\n             alt="">\n      </picture>\n    </div>\n    <div class="oppia-splash-section-four-left" tabindex="0">\n      <h2 [innerHTML]="\'I18N_SPLASH_FOR_STUDENTS\' | translate"></h2>\n      <h3 [innerHTML]="\'I18N_SPLASH_STUDENTS_TITLE\' | translate"></h3>\n      <p [innerHTML]="\'I18N_SPLASH_STUDENTS_CONTENT\' | translate"></p>\n      <div class="oppia-splash-button-container">\n        <button type="submit"\n                class="btn oppia-splash-button oppia-splash-button-browse oppia-splash-browse-button-position oppia-transition-200"\n                [innerHTML]="\'I18N_SPLASH_START_LEARNING\' | translate"\n                (click)="onClickStartLearningButton()">\n        </button>\n      </div>\n    </div>\n    <div class="oppia-splash-section-four-right" *ngIf="!isWindowNarrow">\n      <picture class="splash-student-desk-image">\n        <source type="image/webp" [srcset]="getImageSet(\'/splash/student_desk\', \'webp\')">\n        <source type="image/png" [srcset]="getImageSet(\'/splash/student_desk\', \'png\')">\n        <img [src]="getStaticImageUrl(\'/splash/student_desk1x.png\')"\n             width="500"\n             height="520"\n             loading="lazy"\n             alt="Photo of a kid thinking about fractions">\n      </picture>\n    </div>\n  </div>\n\n  <div class="oppia-splash-section-five" [ngStyle]="{\'background-image\': \'getTestimonialBackgroundUrl()\'}">\n    <div class="oppia-splash-section-five-image" *ngIf="isWindowNarrow">\n      <picture class="splash-student-image">\n        <source type="image/webp" [srcset]="testimonials[displayedTestimonialId].imageUrlWebp">\n        <source type="image/png" [srcset]="testimonials[displayedTestimonialId].imageUrl">\n        <img [src]="testimonials[displayedTestimonialId].imageUrlPng"\n             ng-class="{\'image-with-border\': testimonials[displayedTestimonialId].borderPresent}"\n             width="350"\n             height="350"\n             loading="lazy"\n             alt="">\n      </picture>\n    </div>\n    <div class="oppia-splash-section-five-left">\n      <div>\n        <p class="testimonial-quote-details" [innerHTML]="testimonials[displayedTestimonialId].quote | translate"></p>\n        <p class="testimonial-student-details" [innerHTML]="testimonials[displayedTestimonialId].studentDetails | translate"></p>\n      </div>\n      <div dir="ltr" class="splash-arrows-container">\n        <span (click)="decrementDisplayedTestimonialId()" class="fas fa-angle-left oppia-splash-testimonial-arrow">\n        </span>\n        <span (click)="incrementDisplayedTestimonialId()" class="fas fa-angle-right oppia-splash-testimonial-arrow">\n        </span>\n      </div>\n    </div>\n    <div class="oppia-splash-section-five-right" *ngIf="!isWindowNarrow">\n      <picture class="splash-student-image">\n        <source type="image/webp" [srcset]="testimonials[displayedTestimonialId].imageUrlWebp">\n        <source type="image/png" [srcset]="testimonials[displayedTestimonialId].imageUrl">\n        <img [src]="testimonials[displayedTestimonialId].imageUrlPng"\n             [ngClass]="{\'image-with-border\': testimonials[displayedTestimonialId].borderPresent}"\n             width="350"\n             height="350"\n             loading="lazy"\n             alt="">\n      </picture>\n    </div>\n  </div>\n\n  <div class="oppia-splash-section-six">\n    <div class="oppia-splash-section-six-left">\n      <img class="splash-books-image"\n           [src]="getStaticImageUrl(\'/splash/books_dsk.svg\')"\n           width="500"\n           height="390"\n           loading="lazy"\n           alt="Illustration of a book">\n    </div>\n    <div class="oppia-splash-section-six-right" tabindex="0">\n      <h2 [innerHTML]="\'I18N_SPLASH_FOR_TEACHERS\' | translate"></h2>\n      <h3 [innerHTML]="\'I18N_SPLASH_TEACHERS_TITLE\' | translate"></h3>\n      <p [innerHTML]="\'I18N_SPLASH_TEACHERS_CONTENT\' | translate"></p>\n      <div class="oppia-splash-button-container">\n        <button type="submit"\n                class="btn oppia-splash-button oppia-splash-button-browse oppia-splash-browse-button-position oppia-transition-200"\n                [innerHTML]="\'I18N_SPLASH_START_TEACHING\' | translate"\n                (click)="onClickStartTeachingButton()">\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <div class="oppia-splash-section-seven" [ngStyle]="{\'background-image\': \'getCommunityBackgroundUrl()\'}">\n    <div class="oppia-splash-section-seven-image" *ngIf="isWindowNarrow">\n      <picture class="splash-vol-image">\n        <source type="image/webp" [srcset]="getImageSet(\'/splash/volunteer_section\', \'webp\')">\n        <source type="image/png" [srcset]="getImageSet(\'/splash/volunteer_section\', \'png\')">\n        <img [src]="getStaticImageUrl(\'/splash/volunteer_section1x.png\')"\n             width="400"\n             height="428"\n             loading="lazy"\n             alt="Logo of Oppia containing photos of contributors">\n      </picture>\n    </div>\n    <div class="oppia-splash-section-seven-left" tabindex="0">\n      <h2 [innerHTML]="\'I18N_SPLASH_FOR_VOLUNTEERS\' | translate"></h2>\n      <h3 [innerHTML]="\'I18N_SPLASH_VOLUNTEERS_TITLE\' | translate"></h3>\n      <p [innerHTML]="\'I18N_SPLASH_VOLUNTEERS_CONTENT\' | translate"></p>\n      <div class="oppia-splash-button-container">\n        <button type="submit"\n                class="btn oppia-splash-button oppia-splash-button-browse oppia-splash-browse-button-position oppia-transition-200"\n                [innerHTML]="\'I18N_SPLASH_START_CONTRIBUTING\' | translate"\n                (click)="onClickStartContributingButton()">\n        </button>\n      </div>\n    </div>\n    <div class="oppia-splash-section-seven-right" *ngIf="!isWindowNarrow">\n      <picture class="splash-vol-image">\n        <source type="image/webp" [srcset]="getImageSet(\'/splash/volunteer_section\', \'webp\')">\n        <source type="image/png" [srcset]="getImageSet(\'/splash/volunteer_section\', \'png\')">\n        <img [src]="getStaticImageUrl(\'/splash/volunteer_section1x.png\')"\n             width="400"\n             height="428"\n             loading="lazy"\n             alt="Logo of Oppia containing photos of contributors">\n      </picture>\n    </div>\n  </div>\n</div>\n';

        /***/
      },

    /***/ '62vA':
      /*!************************************************************************!*\
  !*** ./core/templates/pages/splash-page/splash-page-root.component.ts ***!
  \************************************************************************/
      /*! exports provided: SplashPageRootComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'SplashPageRootComponent',
          function () {
            return SplashPageRootComponent;
          }
        );
        /* harmony import */ var _raw_loader_splash_page_root_component_html__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! raw-loader!./splash-page-root.component.html */ 'xLhm'
          );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
        /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @ngx-translate/core */ 'sYmb');
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! rxjs */ 'qCKp');
        /* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! app.constants */ 'DhAQ');
        /* harmony import */ var services_page_head_service__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! services/page-head.service */ 'wyl/');
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
        var __decorate =
          (undefined && undefined.__decorate) ||
          function (decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function (k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        /**
         * @fileoverview Root component for Splash Page.
         */

        let SplashPageRootComponent = class SplashPageRootComponent {
          constructor(pageHeadService, translateService) {
            this.pageHeadService = pageHeadService;
            this.translateService = translateService;
            this.directiveSubscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__[
              'Subscription'
            ]();
          }
          setPageTitleAndMetaTags() {
            let translatedTitle = this.translateService.instant(
              app_constants__WEBPACK_IMPORTED_MODULE_4__['AppConstants']
                .PAGES_REGISTERED_WITH_FRONTEND.SPLASH.TITLE
            );
            this.pageHeadService.updateTitleAndMetaTags(
              translatedTitle,
              app_constants__WEBPACK_IMPORTED_MODULE_4__['AppConstants']
                .PAGES_REGISTERED_WITH_FRONTEND.SPLASH.META
            );
          }
          ngOnInit() {
            this.directiveSubscriptions.add(
              this.translateService.onLangChange.subscribe(() => {
                this.setPageTitleAndMetaTags();
              })
            );
          }
          ngOnDestroy() {
            this.directiveSubscriptions.unsubscribe();
          }
        };
        SplashPageRootComponent.ctorParameters = () => [
          {
            type: services_page_head_service__WEBPACK_IMPORTED_MODULE_5__[
              'PageHeadService'
            ],
          },
          {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__[
              'TranslateService'
            ],
          },
        ];
        SplashPageRootComponent = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Component'])({
              selector: 'oppia-splash-page-root',
              template:
                _raw_loader_splash_page_root_component_html__WEBPACK_IMPORTED_MODULE_0__[
                  'default'
                ],
            }),
            __metadata('design:paramtypes', [
              services_page_head_service__WEBPACK_IMPORTED_MODULE_5__[
                'PageHeadService'
              ],
              _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__[
                'TranslateService'
              ],
            ]),
          ],
          SplashPageRootComponent
        );

        /***/
      },

    /***/ I5L4:
      /*!****************************************************************!*\
  !*** ./core/templates/pages/splash-page/splash-page.module.ts ***!
  \****************************************************************/
      /*! exports provided: SplashPageModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'SplashPageModule',
          function () {
            return SplashPageModule;
          }
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/common */ 'ofXK');
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/common/http */ 'tk/3');
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
        /* harmony import */ var base_components_base_module__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! base-components/base.module */ 'WWVo');
        /* harmony import */ var rich_text_components_rich_text_components_module__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! rich_text_components/rich-text-components.module */ 'lIFn'
          );
        /* harmony import */ var _splash_page_component__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ./splash-page.component */ 'bNZf');
        /* harmony import */ var _splash_page_root_component__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! ./splash-page-root.component */ '62vA');
        /* harmony import */ var _splash_page_routing_module__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! ./splash-page-routing.module */ 'j+r4');
        // Copyright 2019 The Oppia Authors. All Rights Reserved.
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
        var __decorate =
          (undefined && undefined.__decorate) ||
          function (decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        /**
         * @fileoverview Module for the splash page.
         */

        let SplashPageModule = class SplashPageModule {};
        SplashPageModule = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__['NgModule'])({
              imports: [
                base_components_base_module__WEBPACK_IMPORTED_MODULE_3__[
                  'BaseModule'
                ],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__['CommonModule'],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__[
                  'HttpClientModule'
                ],
                rich_text_components_rich_text_components_module__WEBPACK_IMPORTED_MODULE_4__[
                  'RichTextComponentsModule'
                ],
                _splash_page_routing_module__WEBPACK_IMPORTED_MODULE_7__[
                  'SplashPageRoutingModule'
                ],
              ],
              declarations: [
                _splash_page_component__WEBPACK_IMPORTED_MODULE_5__[
                  'SplashPageComponent'
                ],
                _splash_page_root_component__WEBPACK_IMPORTED_MODULE_6__[
                  'SplashPageRootComponent'
                ],
              ],
              entryComponents: [
                _splash_page_component__WEBPACK_IMPORTED_MODULE_5__[
                  'SplashPageComponent'
                ],
                _splash_page_root_component__WEBPACK_IMPORTED_MODULE_6__[
                  'SplashPageRootComponent'
                ],
              ],
            }),
          ],
          SplashPageModule
        );

        /***/
      },

    /***/ WvD5:
      /*!********************************************************************!*\
  !*** ./core/templates/pages/splash-page/splash-page.component.css ***!
  \********************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__['default'] =
          '/*\n  NOTE to developers: We generate RTL CSS from this file in the webpack\n  compilation, here are sme additional rules that can be added to the CSS files:\n  https://rtlcss.com/learn/usage-guide/control-directives .\n*/\n.splash-page .image-mobile {\n  display: none;\n}\n.splash-page {\n  text-align: left;\n}\n.splash-page .image-with-border {\n  border-radius: 11em;\n}\n.splash-page .oppia-splash-section-one {\n  background-color: #e7f6ff;\n  display: flex;\n  height: 75vh;\n  max-height: 75vw;\n  overflow: hidden;\n}\n.splash-page .oppia-splash-section-two {\n  background-color: #fff;\n  display: flex;\n  justify-content: space-evenly;\n  padding: 30px;\n  text-align: center;\n}\n.splash-page .oppia-splash-h1,\n.splash-page .oppia-splash-h2 {\n  color: #005c5e;\n  display: flex;\n  font-family: "Capriola", "Roboto", Arial, sans-serif;\n}\n.splash-page .oppia-splash-h1 {\n  margin-left: 10vw;\n  margin-right: 10vw;\n  width: 90%;\n}\n.splash-page .oppia-splash-h2-container {\n  margin-left: 10vw;\n  margin-right: 10vw;\n  max-width: 900px;\n  width: 90%;\n}\n.splash-page .oppia-splash-h2 {\n  line-height: 1.6em;\n  padding-bottom: 72px;\n}\n.splash-page .oppia-splash-section-three {\n  background-color: #f4f4f4;\n  color: #2c4841;\n  display: flex;\n  gap: 8vw;\n  justify-content: center;\n  padding: 50px 5vw;\n  width: 100vw;\n}\n.splash-page .oppia-splash-button {\n  background-color: #015c53;\n  border-radius: 5px;\n  color: #fff;\n  font-family: "Capriola", "Roboto", Arial, sans-serif;\n  font-size: 16px;\n  margin-bottom: 40px;\n  margin-top: -20px;\n  min-width: 300px;\n  padding: 10px;\n  text-transform: none;\n}\n.splash-page .oppia-splash-button:hover,\n.splash-page .oppia-splash-button:focus,\n.splash-page .oppia-splash-button:active {\n  background-color: rgba(5, 190, 178, 1);\n  color: #fff;\n}\n@media only screen and (max-width: 500px) {\n  .splash-page button.btn.oppia-splash-button {\n    font-size: 3.6vw;\n  }\n}\n.splash-page .oppia-splash-button-container {\n  float: left;\n  margin-left: 10vw;\n  margin-right: 10vw;\n  max-width: 500px;\n  position: relative;\n  transform: translate(0, 10px);\n  z-index: 10;\n}\n@media (min-width: 768px) {\n  .splash-page .oppia-splash-button-browse {\n    left: -o-calc(50% - 200px);\n    left: calc(50% - 200px);\n  }\n}\n@media (min-width: 575px) {\n  .splash-page .oppia-splash-button {\n    left: -o-calc(130px - -15%);\n    left: calc(130px - -15%);\n  }\n}\n@media (max-width: 365px) {\n  .splash-page .oppia-splash-button {\n    min-width: 95%;\n  }\n}\n.splash-page .oppia-splash-section-four {\n  background-color: #fff;\n  display: flex;\n  padding-bottom: 50px;\n  padding-top: 40px;\n  width: 100vw;\n}\n.splash-page .oppia-splash-testimonial-arrow {\n  color: #6d6d6d;\n  font-size: 3.0em;\n  margin-right: 20px;\n  margin-top: 50px;\n}\n.splash-page .splash-arrows-container {\n  position: absolute;\n}\n.splash-page .oppia-splash-section-one-left {\n  margin-bottom: auto;\n  margin-top: auto;\n  position: relative;\n  width: 45vw;\n}\n.splash-page .splash-icon-text-container {\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 5px;\n}\n.splash-page .oppia-splash-section-one-right {\n  margin-bottom: auto;\n  margin-left: auto;\n  margin-top: auto;\n}\n.splash-page .material-icons {\n  color: #6d6d6d;\n  cursor: pointer;\n  font-size: 2.5em;\n  margin-top: 50px;\n}\n.splash-page .splash-vol-image img {\n  max-width: 400px;\n  width: 100%;\n}\n.splash-page .splash-books-image {\n  height: auto;\n  max-width: 500px;\n  width: 100%;\n}\n.splash-page .splash-student-image img {\n  height: auto;\n  max-width: 350px;\n  width: 100%;\n}\n.splash-page .oppia-splash-section-five,\n.splash-page .oppia-splash-section-seven {\n  background-color: #fff;\n  background-size: cover;\n  display: flex;\n  margin-bottom: -1px;\n  margin-top: -1px;\n  padding-bottom: 15vh;\n  padding-top: 20vh;\n  width: 100vw;\n}\n.splash-page .oppia-splash-section-five {\n  background-image: url(/assets/images/splash/dsk_testimonial_background.png);\n}\n.splash-page .oppia-splash-section-seven {\n  background-image: url(/assets/images/splash/dsk_community_background.png);\n  padding-top: 30vh;\n}\n.splash-page .oppia-splash-section-six .oppia-splash-button-container,\n.splash-page .oppia-splash-section-seven .oppia-splash-button-container {\n  margin-left: 0;\n  margin-top: 50px;\n}\n.splash-page .oppia-splash-section-six {\n  background-color: #fff;\n  display: flex;\n  padding-top: 50px;\n  width: 100vw;\n}\n.splash-page .oppia-splash-section-seven-right {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: -5vh;\n  width: 50vw;\n}\n.splash-page .oppia-splash-section-five-left {\n  margin-bottom: auto;\n  margin-left: 10vw;\n  margin-top: auto;\n  width: 50vw;\n}\n.splash-page .oppia-splash-section-seven-left {\n  margin-bottom: auto;\n  margin-left: 10vw;\n  margin-top: auto;\n  width: 50vw;\n}\n.splash-page .oppia-splash-section-six-left {\n  margin-left: 2vw;\n  margin-right: 5vw;\n}\n.splash-page .oppia-splash-section-five-right {\n  margin-left: auto;\n  margin-right: auto;\n}\n.splash-page .oppia-splash-section-six-right {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: auto;\n  margin-left: auto;\n  margin-top: auto;\n  width: 40vw;\n}\n.splash-page .oppia-splash-section-four .oppia-splash-button-container {\n  margin-left: 0;\n  margin-top: 50px;\n}\n.splash-page .splash-student-desk-image img {\n  height: auto;\n  max-width: 500px;\n  width: 100%;\n}\n.splash-page .oppia-splash-section-three-right h3 {\n  align-self: flex-start;\n  color: #6d6d6d;\n  margin-bottom: 25px;\n  margin-left: 10px;\n}\n.splash-page .oppia-splash-section-four-left h2,\n.splash-page .oppia-splash-section-five-left .testimonial-student-details,\n.splash-page .oppia-splash-section-six-right h2,\n.splash-page .oppia-splash-section-seven-left h2 {\n  color: #6d6d6d;\n  font-size: 1.17em;\n  font-weight: bold;\n  line-height: 1.1;\n}\n.splash-page .oppia-splash-section-four-left h3,\n.splash-page .oppia-splash-section-five-left .testimonial-quote-details,\n.splash-page .oppia-splash-section-six-right h3,\n.splash-page .oppia-splash-section-seven-left h3 {\n  color: #094142;\n  font-family: "Capriola", "Roboto", Arial, sans-serif;\n  font-size: 2.1em;\n  font-weight: 400;\n  line-height: 1.2;\n}\n.splash-page .oppia-splash-section-five-left .testimonial-quote-details {\n  line-height: 1.75em;\n}\n.splash-page .oppia-splash-section-four-left p,\n.splash-page .oppia-splash-section-six-right p,\n.splash-page .oppia-splash-section-seven-left p {\n  font-family: "Roboto", Arial, sans-serif;\n  line-height: 1.5;\n  padding-right: 10vw;\n}\n.splash-page .oppia-splash-section-four-right {\n  margin-left: auto;\n  margin-right: auto;\n}\n.splash-page .oppia-splash-section-four-left {\n  margin-bottom: auto;\n  margin-left: 10vw;\n  margin-top: auto;\n  width: 40vw;\n}\n.splash-page .splash-benefits-section {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 25px;\n}\n.splash-page .splash-matthew-image {\n  height: auto;\n  max-width: 600px;\n  width: 100%;\n}\n.splash-page .splash-benefits {\n  color: #094142;\n  font-size: 1.4em;\n  margin: 0;\n}\n.splash-page .splash-benefits-list {\n  display: flex;\n}\n.splash-page .splash-benefit-bullets-column {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 220px;\n  justify-content: space-between;\n  margin-right: 25px;\n  width: 40px;\n}\n.splash-page .splash-benefit-bullets-column img {\n  height: auto;\n}\n.splash-page .splash-benefit-text-items-column {\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column;\n  height: 220px;\n  justify-content: space-between;\n}\n.splash-page .oppia-splash-icon-1-container,\n.splash-page .oppia-splash-icon-2-container,\n.splash-page .oppia-splash-icon-3-container {\n  display: flex;\n}\n@media (max-width: 950px) {\n  .splash-page .oppia-splash-icon-1-container,\n  .splash-page .oppia-splash-icon-2-container,\n  .splash-page .oppia-splash-icon-3-container {\n    display: flow-root;\n  }\n}\n.splash-page .oppia-splash-icon-3-container img {\n  max-height: 2.05em;\n}\n.splash-page .splash-icon-text {\n  color: #6d6d6d;\n  font-size: 1.2em;\n  font-weight: bold;\n}\n.splash-page .oppia-splash-main-image img {\n  height: auto;\n  max-width: 800px;\n  width: 100%;\n}\n.splash-page .oppia-splash-browse-button-position {\n  bottom: 210px;\n  z-index: 10;\n}\n.splash-page .oppia-splash-create-button-position {\n  bottom: 150px;\n  z-index: 10;\n}\n.splash-page .oppia-splash-h2-text {\n  color: #4c4c4c;\n  font-family: "Roboto", Arial, sans-serif;\n  font-size: 1.3em;\n  font-weight: 500;\n  max-width: 700px;\n  padding-bottom: 30px;\n  padding-top: 0;\n}\n@media (max-width: 768px) {\n  .splash-page .oppia-splash-section-one ,\n  .splash-page .oppia-splash-section-three,\n  .splash-page .oppia-splash-section-four,\n  .splash-page .oppia-splash-section-five,\n  .splash-page .oppia-splash-section-six,\n  .splash-page .oppia-splash-section-seven {\n    display: block;\n    height: auto;\n    max-height: -moz-fit-content;\n    max-height: fit-content;\n  }\n\n  .splash-page .image-mobile {\n    display: inherit;\n  }\n\n  .splash-page .oppia-splash-section-five {\n    background-image: url(/assets/images/splash/m_testimonial_background.png);\n  }\n\n  .splash-page .image-desktop {\n    display: none;\n  }\n\n  .splash-page .oppia-splash-button-browse {\n    left: 50%;\n  }\n\n  .splash-page .oppia-splash-button-container {\n    margin-left: 0;\n    max-width: none;\n    transform: translate(0, 0);\n    width: 100%;\n    z-index: 10;\n  }\n\n  .splash-page .oppia-splash-button {\n    min-width: auto;\n  }\n\n  .splash-page .oppia-splash-section-seven-image {\n    margin-left: auto;\n    margin-right: auto;\n    padding-top: 50px;\n    width: 50vw;\n  }\n\n  .splash-page .oppia-splash-section-seven {\n    background-image: url(/assets/images/splash/m_community_background.png);\n    padding-top: 20vh;\n  }\n\n  .splash-page .splash-vol-image img {\n    height: auto;\n    max-width: -moz-fit-content;\n    max-width: fit-content;\n  }\n\n  .splash-page .oppia-splash-section-four-image-mobile {\n    margin-left: 10vw;\n  }\n\n  .splash-page .oppia-splash-section-three {\n    display: flex;\n    flex-direction: column;\n    padding-bottom: 50px;\n    padding-top: 15px;\n  }\n\n  .splash-page .oppia-splash-section-three-left {\n    display: block;\n    width: 100%;\n  }\n\n  .splash-page .oppia-splash-section-three-right {\n    align-self: center;\n  }\n\n  .splash-page .oppia-splash-section-five-image {\n    margin-left: auto;\n    margin-right: auto;\n    width: 10em;\n  }\n\n  .splash-page .oppia-splash-section-three-left,\n  .splash-page .oppia-splash-section-six-right,\n  .splash-page .oppia-splash-section-seven-left {\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n  }\n\n  .splash-page .oppia-splash-section-six-right,\n  .splash-page .oppia-splash-section-seven-left {\n    width: 90vw;\n  }\n\n  .splash-page .oppia-splash-section-one-left {\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 7.5vh;\n    text-align: center;\n    width: 75vw;\n  }\n\n  .splash-page .oppia-splash-section-six-right p,\n  .splash-page .oppia-splash-section-seven-left p {\n    padding-right: 0;\n    text-align: center;\n  }\n\n  .splash-page .oppia-splash-section-five-left {\n    margin-right: 10vw;\n    text-align: center;\n    width: auto;\n  }\n\n  .splash-page .oppia-splash-section-four-left h3,\n  .splash-page .oppia-splash-section-five-left .testimonial-quote-details,\n  .splash-page .oppia-splash-section-six-right h3,\n  .splash-page .oppia-splash-section-seven-left h3 {\n    font-size: 1.5em;\n  }\n\n  .splash-page .splash-student-image img {\n    height: auto;\n    max-width: 150px;\n  }\n\n  .splash-page .oppia-splash-section-four-left {\n    width: auto;\n  }\n\n  .splash-page .splash-arrows-container {\n    position: relative;\n  }\n\n  .splash-page .oppia-splash-section-four-left .oppia-splash-button,\n  .splash-page .oppia-splash-section-six-right .oppia-splash-button,\n  .splash-page .oppia-splash-section-seven-left .oppia-splash-button {\n    width: 90%;\n  }\n\n  .splash-page .oppia-splash-section-six-left {\n    margin-left: auto;\n    margin-right: auto;\n    width: 70vw;\n  }\n\n  .splash-page .splash-icon-text {\n    display: block;\n    font-size: 0.8em;\n  }\n\n  .splash-page .oppia-splash-h1,\n  .splash-page .oppia-splash-h2 {\n    display: block;\n    margin-left: 0;\n  }\n\n  .splash-page .oppia-splash-h1 {\n    font-size: 1.7em;\n    line-height: 1.5;\n  }\n\n  .splash-page .oppia-splash-h2-container {\n    margin-left: 0;\n  }\n\n  .splash-page .oppia-splash-h2-text {\n    font-size: 1.05em;\n    font-weight: 600;\n  }\n  @media screen and (max-width: 768px) {\n    .splash-page .oppia-splash-icon-3-container {\n      display: block;\n    }\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Q0FJQztBQUNEO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUVBOztFQUVFLGNBQWM7RUFDZCxhQUFhO0VBQ2Isb0RBQW9EO0FBQ3REO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGFBQWE7RUFDYixRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG9EQUFvRDtFQUNwRCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG9CQUFvQjtBQUN0QjtBQUVBOzs7RUFHRSxzQ0FBc0M7RUFDdEMsV0FBVztBQUNiO0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGO0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixXQUFXO0FBQ2I7QUFFQTtFQUNFO0lBR0UsMEJBQTBCO0lBQzFCLHVCQUF1QjtFQUN6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RSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0VBRUE7OztJQUdFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztFQUVBOztJQUVFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0VBRUE7O0lBRUUsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztFQUVBOzs7O0lBSUUsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTs7O0lBR0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztFQUVBOztJQUVFLGNBQWM7SUFDZCxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRTtNQUNFLGNBQWM7SUFDaEI7RUFDRjtBQUNGIiwiZmlsZSI6InNwbGFzaC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBOT1RFIHRvIGRldmVsb3BlcnM6IFdlIGdlbmVyYXRlIFJUTCBDU1MgZnJvbSB0aGlzIGZpbGUgaW4gdGhlIHdlYnBhY2tcbiAgY29tcGlsYXRpb24sIGhlcmUgYXJlIHNtZSBhZGRpdGlvbmFsIHJ1bGVzIHRoYXQgY2FuIGJlIGFkZGVkIHRvIHRoZSBDU1MgZmlsZXM6XG4gIGh0dHBzOi8vcnRsY3NzLmNvbS9sZWFybi91c2FnZS1ndWlkZS9jb250cm9sLWRpcmVjdGl2ZXMgLlxuKi9cbi5zcGxhc2gtcGFnZSAuaW1hZ2UtbW9iaWxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNwbGFzaC1wYWdlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnNwbGFzaC1wYWdlIC5pbWFnZS13aXRoLWJvcmRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDExZW07XG59XG5cbi5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLXNlY3Rpb24tb25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZjZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA3NXZoO1xuICBtYXgtaGVpZ2h0OiA3NXZ3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1zZWN0aW9uLXR3byB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBwYWRkaW5nOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLWgxLFxuLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtaDIge1xuICBjb2xvcjogIzAwNWM1ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiQ2FwcmlvbGFcIiwgXCJSb2JvdG9cIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbi5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLWgxIHtcbiAgbWFyZ2luLWxlZnQ6IDEwdnc7XG4gIG1hcmdpbi1yaWdodDogMTB2dztcbiAgd2lkdGg6IDkwJTtcbn1cblxuLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtaDItY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwdnc7XG4gIG1hcmdpbi1yaWdodDogMTB2dztcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtaDIge1xuICBsaW5lLWhlaWdodDogMS42ZW07XG4gIHBhZGRpbmctYm90dG9tOiA3MnB4O1xufVxuXG4uc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1zZWN0aW9uLXRocmVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbiAgY29sb3I6ICMyYzQ4NDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHZ3O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNTBweCA1dnc7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxNWM1MztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiQ2FwcmlvbGFcIiwgXCJSb2JvdG9cIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4uc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1idXR0b246aG92ZXIsXG4uc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1idXR0b246Zm9jdXMsXG4uc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1LCAxOTAsIDE3OCwgMSk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5zcGxhc2gtcGFnZSBidXR0b24uYnRuLm9wcGlhLXNwbGFzaC1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMy42dnc7XG4gIH1cbn1cblxuLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtYnV0dG9uLWNvbnRhaW5lciB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTB2dztcbiAgbWFyZ2luLXJpZ2h0OiAxMHZ3O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDEwcHgpO1xuICB6LWluZGV4OiAxMDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLWJ1dHRvbi1icm93c2Uge1xuICAgIGxlZnQ6IC13ZWJraXQtY2FsYyg1MCUgLSAyMDBweCk7XG4gICAgbGVmdDogLW1vei1jYWxjKDUwJSAtIDIwMHB4KTtcbiAgICBsZWZ0OiAtby1jYWxjKDUwJSAtIDIwMHB4KTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDIwMHB4KTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc1cHgpIHtcbiAgLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtYnV0dG9uIHtcbiAgICBsZWZ0OiAtd2Via2l0LWNhbGMoMTMwcHggLSAtMTUlKTtcbiAgICBsZWZ0OiAtbW96LWNhbGMoMTMwcHggLSAtMTUlKTtcbiAgICBsZWZ0OiAtby1jYWxjKDEzMHB4IC0gLTE1JSk7XG4gICAgbGVmdDogY2FsYygxMzBweCAtIC0xNSUpO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAzNjVweCkge1xuICAuc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1idXR0b24ge1xuICAgIG1pbi13aWR0aDogOTUlO1xuICB9XG59XG5cbi5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLXNlY3Rpb24tZm91ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG4uc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC10ZXN0aW1vbmlhbC1hcnJvdyB7XG4gIGNvbG9yOiAjNmQ2ZDZkO1xuICBmb250LXNpemU6IDMuMGVtO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi5zcGxhc2gtcGFnZSAuc3BsYXNoLWFycm93cy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLXNlY3Rpb24tb25lLWxlZnQge1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA0NXZ3O1xufVxuXG4uc3BsYXNoLXBhZ2UgLnNwbGFzaC1pY29uLXRleHQtY29udGFpbmVyIHtcbiAgbWluLXdpZHRoOiBmaXQtY29udGVudDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1zZWN0aW9uLW9uZS1yaWdodCB7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuXG4uc3BsYXNoLXBhZ2UgLm1hdGVyaWFsLWljb25zIHtcbiAgY29sb3I6ICM2ZDZkNmQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyLjVlbTtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnNwbGFzaC1wYWdlIC5zcGxhc2gtdm9sLWltYWdlIGltZyB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3BsYXNoLXBhZ2UgLnNwbGFzaC1ib29rcy1pbWFnZSB7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zcGxhc2gtcGFnZSAuc3BsYXNoLXN0dWRlbnQtaW1hZ2UgaW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi1maXZlLFxuLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi1zZXZlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXZoO1xuICBwYWRkaW5nLXRvcDogMjB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG4uc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1zZWN0aW9uLWZpdmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvc3BsYXNoL2Rza190ZXN0aW1vbmlhbF9iYWNrZ3JvdW5kLnBuZyk7XG59XG5cbi5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLXNlY3Rpb24tc2V2ZW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvc3BsYXNoL2Rza19jb21tdW5pdHlfYmFja2dyb3VuZC5wbmcpO1xuICBwYWRkaW5nLXRvcDogMzB2aDtcbn1cblxuLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi1zaXggLm9wcGlhLXNwbGFzaC1idXR0b24tY29udGFpbmVyLFxuLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi1zZXZlbiAub3BwaWEtc3BsYXNoLWJ1dHRvbi1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi1zaXgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgd2lkdGg6IDEwMHZ3O1xufVxuXG4uc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1zZWN0aW9uLXNldmVuLXJpZ2h0IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogLTV2aDtcbiAgd2lkdGg6IDUwdnc7XG59XG5cbi5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLXNlY3Rpb24tZml2ZS1sZWZ0IHtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDEwdnc7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIHdpZHRoOiA1MHZ3O1xufVxuXG4uc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1zZWN0aW9uLXNldmVuLWxlZnQge1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMTB2dztcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgd2lkdGg6IDUwdnc7XG59XG5cbi5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLXNlY3Rpb24tc2l4LWxlZnQge1xuICBtYXJnaW4tbGVmdDogMnZ3O1xuICBtYXJnaW4tcmlnaHQ6IDV2dztcbn1cblxuLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi1maXZlLXJpZ2h0IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi1zaXgtcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgd2lkdGg6IDQwdnc7XG59XG5cbi5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLXNlY3Rpb24tZm91ciAub3BwaWEtc3BsYXNoLWJ1dHRvbi1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnNwbGFzaC1wYWdlIC5zcGxhc2gtc3R1ZGVudC1kZXNrLWltYWdlIGltZyB7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLXNlY3Rpb24tdGhyZWUtcmlnaHQgaDMge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBjb2xvcjogIzZkNmQ2ZDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLXNlY3Rpb24tZm91ci1sZWZ0IGgyLFxuLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi1maXZlLWxlZnQgLnRlc3RpbW9uaWFsLXN0dWRlbnQtZGV0YWlscyxcbi5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLXNlY3Rpb24tc2l4LXJpZ2h0IGgyLFxuLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi1zZXZlbi1sZWZ0IGgyIHtcbiAgY29sb3I6ICM2ZDZkNmQ7XG4gIGZvbnQtc2l6ZTogMS4xN2VtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbn1cblxuLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi1mb3VyLWxlZnQgaDMsXG4uc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1zZWN0aW9uLWZpdmUtbGVmdCAudGVzdGltb25pYWwtcXVvdGUtZGV0YWlscyxcbi5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLXNlY3Rpb24tc2l4LXJpZ2h0IGgzLFxuLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi1zZXZlbi1sZWZ0IGgzIHtcbiAgY29sb3I6ICMwOTQxNDI7XG4gIGZvbnQtZmFtaWx5OiBcIkNhcHJpb2xhXCIsIFwiUm9ib3RvXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIuMWVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG4uc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1zZWN0aW9uLWZpdmUtbGVmdCAudGVzdGltb25pYWwtcXVvdGUtZGV0YWlscyB7XG4gIGxpbmUtaGVpZ2h0OiAxLjc1ZW07XG59XG5cbi5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLXNlY3Rpb24tZm91ci1sZWZ0IHAsXG4uc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1zZWN0aW9uLXNpeC1yaWdodCBwLFxuLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi1zZXZlbi1sZWZ0IHAge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwdnc7XG59XG5cbi5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLXNlY3Rpb24tZm91ci1yaWdodCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLXNlY3Rpb24tZm91ci1sZWZ0IHtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDEwdnc7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIHdpZHRoOiA0MHZ3O1xufVxuXG4uc3BsYXNoLXBhZ2UgLnNwbGFzaC1iZW5lZml0cy1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uc3BsYXNoLXBhZ2UgLnNwbGFzaC1tYXR0aGV3LWltYWdlIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNwbGFzaC1wYWdlIC5zcGxhc2gtYmVuZWZpdHMge1xuICBjb2xvcjogIzA5NDE0MjtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc3BsYXNoLXBhZ2UgLnNwbGFzaC1iZW5lZml0cy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnNwbGFzaC1wYWdlIC5zcGxhc2gtYmVuZWZpdC1idWxsZXRzLWNvbHVtbiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMjIwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICB3aWR0aDogNDBweDtcbn1cblxuLnNwbGFzaC1wYWdlIC5zcGxhc2gtYmVuZWZpdC1idWxsZXRzLWNvbHVtbiBpbWcge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5zcGxhc2gtcGFnZSAuc3BsYXNoLWJlbmVmaXQtdGV4dC1pdGVtcy1jb2x1bW4ge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAyMjBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1pY29uLTEtY29udGFpbmVyLFxuLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtaWNvbi0yLWNvbnRhaW5lcixcbi5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLWljb24tMy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTUwcHgpIHtcbiAgLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtaWNvbi0xLWNvbnRhaW5lcixcbiAgLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtaWNvbi0yLWNvbnRhaW5lcixcbiAgLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtaWNvbi0zLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxvdy1yb290O1xuICB9XG59XG5cbi5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLWljb24tMy1jb250YWluZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogMi4wNWVtO1xufVxuXG4uc3BsYXNoLXBhZ2UgLnNwbGFzaC1pY29uLXRleHQge1xuICBjb2xvcjogIzZkNmQ2ZDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLW1haW4taW1hZ2UgaW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtYnJvd3NlLWJ1dHRvbi1wb3NpdGlvbiB7XG4gIGJvdHRvbTogMjEwcHg7XG4gIHotaW5kZXg6IDEwO1xufVxuLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtY3JlYXRlLWJ1dHRvbi1wb3NpdGlvbiB7XG4gIGJvdHRvbTogMTUwcHg7XG4gIHotaW5kZXg6IDEwO1xufVxuLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtaDItdGV4dCB7XG4gIGNvbG9yOiAjNGM0YzRjO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLXNlY3Rpb24tb25lICxcbiAgLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi10aHJlZSxcbiAgLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi1mb3VyLFxuICAuc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1zZWN0aW9uLWZpdmUsXG4gIC5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLXNlY3Rpb24tc2l4LFxuICAuc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1zZWN0aW9uLXNldmVuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XG4gIH1cblxuICAuc3BsYXNoLXBhZ2UgLmltYWdlLW1vYmlsZSB7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbiAgfVxuXG4gIC5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLXNlY3Rpb24tZml2ZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3NwbGFzaC9tX3Rlc3RpbW9uaWFsX2JhY2tncm91bmQucG5nKTtcbiAgfVxuXG4gIC5zcGxhc2gtcGFnZSAuaW1hZ2UtZGVza3RvcCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLWJ1dHRvbi1icm93c2Uge1xuICAgIGxlZnQ6IDUwJTtcbiAgfVxuXG4gIC5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLWJ1dHRvbi1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDtcbiAgfVxuXG4gIC5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLWJ1dHRvbiB7XG4gICAgbWluLXdpZHRoOiBhdXRvO1xuICB9XG5cbiAgLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi1zZXZlbi1pbWFnZSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIHdpZHRoOiA1MHZ3O1xuICB9XG5cbiAgLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi1zZXZlbiB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL3NwbGFzaC9tX2NvbW11bml0eV9iYWNrZ3JvdW5kLnBuZyk7XG4gICAgcGFkZGluZy10b3A6IDIwdmg7XG4gIH1cblxuICAuc3BsYXNoLXBhZ2UgLnNwbGFzaC12b2wtaW1hZ2UgaW1nIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbiAgfVxuXG4gIC5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLXNlY3Rpb24tZm91ci1pbWFnZS1tb2JpbGUge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xuICB9XG5cbiAgLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi10aHJlZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICB9XG5cbiAgLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi10aHJlZS1sZWZ0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLXNlY3Rpb24tdGhyZWUtcmlnaHQge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxuXG4gIC5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLXNlY3Rpb24tZml2ZS1pbWFnZSB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMGVtO1xuICB9XG5cbiAgLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi10aHJlZS1sZWZ0LFxuICAuc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1zZWN0aW9uLXNpeC1yaWdodCxcbiAgLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi1zZXZlbi1sZWZ0IHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi1zaXgtcmlnaHQsXG4gIC5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLXNlY3Rpb24tc2V2ZW4tbGVmdCB7XG4gICAgd2lkdGg6IDkwdnc7XG4gIH1cblxuICAuc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1zZWN0aW9uLW9uZS1sZWZ0IHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNy41dmg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA3NXZ3O1xuICB9XG5cbiAgLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi1zaXgtcmlnaHQgcCxcbiAgLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi1zZXZlbi1sZWZ0IHAge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi1maXZlLWxlZnQge1xuICAgIG1hcmdpbi1yaWdodDogMTB2dztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cblxuICAuc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1zZWN0aW9uLWZvdXItbGVmdCBoMyxcbiAgLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi1maXZlLWxlZnQgLnRlc3RpbW9uaWFsLXF1b3RlLWRldGFpbHMsXG4gIC5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLXNlY3Rpb24tc2l4LXJpZ2h0IGgzLFxuICAuc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1zZWN0aW9uLXNldmVuLWxlZnQgaDMge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gIH1cblxuICAuc3BsYXNoLXBhZ2UgLnNwbGFzaC1zdHVkZW50LWltYWdlIGltZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gIH1cblxuICAuc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1zZWN0aW9uLWZvdXItbGVmdCB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cblxuICAuc3BsYXNoLXBhZ2UgLnNwbGFzaC1hcnJvd3MtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAuc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1zZWN0aW9uLWZvdXItbGVmdCAub3BwaWEtc3BsYXNoLWJ1dHRvbixcbiAgLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtc2VjdGlvbi1zaXgtcmlnaHQgLm9wcGlhLXNwbGFzaC1idXR0b24sXG4gIC5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLXNlY3Rpb24tc2V2ZW4tbGVmdCAub3BwaWEtc3BsYXNoLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuXG4gIC5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLXNlY3Rpb24tc2l4LWxlZnQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNzB2dztcbiAgfVxuXG4gIC5zcGxhc2gtcGFnZSAuc3BsYXNoLWljb24tdGV4dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgfVxuXG4gIC5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLWgxLFxuICAuc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1oMiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAuc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1oMSB7XG4gICAgZm9udC1zaXplOiAxLjdlbTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG5cbiAgLnNwbGFzaC1wYWdlIC5vcHBpYS1zcGxhc2gtaDItY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gIC5zcGxhc2gtcGFnZSAub3BwaWEtc3BsYXNoLWgyLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMS4wNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuc3BsYXNoLXBhZ2UgLm9wcGlhLXNwbGFzaC1pY29uLTMtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxufVxuIl19 */';

        /***/
      },

    /***/ bNZf:
      /*!*******************************************************************!*\
  !*** ./core/templates/pages/splash-page/splash-page.component.ts ***!
  \*******************************************************************/
      /*! exports provided: SplashPageComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'SplashPageComponent',
          function () {
            return SplashPageComponent;
          }
        );
        /* harmony import */ var _raw_loader_splash_page_component_html__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! raw-loader!./splash-page.component.html */ '2t2x'
          );
        /* harmony import */ var _splash_page_component_css__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./splash-page.component.css */ 'WvD5');
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
        /* harmony import */ var domain_utilities_url_interpolation_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! domain/utilities/url-interpolation.service */ 'X9eu'
          );
        /* harmony import */ var services_site_analytics_service__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! services/site-analytics.service */ 'YA5X');
        /* harmony import */ var services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! services/contextual/window-ref.service */ 'AFwG'
          );
        /* harmony import */ var services_contextual_window_dimensions_service__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! services/contextual/window-dimensions.service */ 'fAos'
          );
        /* harmony import */ var services_loader_service__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! services/loader.service */ 'xk7M');
        /* harmony import */ var services_user_service__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! services/user.service */ 'upnj');
        /* harmony import */ var services_i18n_language_code_service__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! services/i18n-language-code.service */ 'PVMg'
          );
        // Copyright 2014 The Oppia Authors. All Rights Reserved.
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
        var __decorate =
          (undefined && undefined.__decorate) ||
          function (decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function (k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };

        /**
         * @fileoverview Component for the Oppia splash page.
         */

        let SplashPageComponent = class SplashPageComponent {
          constructor(
            i18nLanguageCodeService,
            siteAnalyticsService,
            urlInterpolationService,
            windowDimensionService,
            windowRef,
            userService,
            loaderService
          ) {
            this.i18nLanguageCodeService = i18nLanguageCodeService;
            this.siteAnalyticsService = siteAnalyticsService;
            this.urlInterpolationService = urlInterpolationService;
            this.windowDimensionService = windowDimensionService;
            this.windowRef = windowRef;
            this.userService = userService;
            this.loaderService = loaderService;
            this.isWindowNarrow = false;
            this.testimonials = [];
            this.userIsLoggedIn = false;
          }
          getStaticImageUrl(imagePath) {
            return this.urlInterpolationService.getStaticImageUrl(imagePath);
          }
          getImageSet(imageName, imageExt) {
            return (
              this.getStaticImageUrl(imageName + '1x.' + imageExt) +
              ' 1x, ' +
              this.getStaticImageUrl(imageName + '15x.' + imageExt) +
              ' 1.5x, ' +
              this.getStaticImageUrl(imageName + '2x.' + imageExt) +
              ' 2x'
            );
          }
          _nagivateToClassroomPage() {
            this.windowRef.nativeWindow.location.href = '/learn';
          }
          onClickStartLearningButton() {
            this.siteAnalyticsService.registerClickHomePageStartLearningButtonEvent();
            this._nagivateToClassroomPage();
          }
          onClickBrowseLessonsButton() {
            this.siteAnalyticsService.registerClickBrowseLessonsButtonEvent();
            this._nagivateToClassroomPage();
          }
          onClickAccessAndroidButton() {
            this.windowRef.nativeWindow.location.href = '/android';
          }
          onClickStartContributingButton() {
            this.siteAnalyticsService.registerClickStartContributingButtonEvent();
            this.windowRef.nativeWindow.location.href = '/volunteer';
          }
          onClickStartTeachingButton() {
            this.siteAnalyticsService.registerClickStartTeachingButtonEvent();
            this.windowRef.nativeWindow.location.href = '/creator-guidelines';
          }
          // TODO(#11657): Extract the testimonials code into a separate component.
          // The 2 functions below are to cycle between values:
          // 0 to (testimonialCount - 1) for displayedTestimonialId.
          incrementDisplayedTestimonialId() {
            // This makes sure that incrementing from (testimonialCount - 1)
            // returns 0 instead of testimonialCount,since we want the testimonials
            // to cycle through.
            this.displayedTestimonialId =
              (this.displayedTestimonialId + 1) % this.testimonialCount;
          }
          decrementDisplayedTestimonialId() {
            // This makes sure that decrementing from 0, returns
            // (testimonialCount - 1) instead of -1, since we want the testimonials
            // to cycle through.
            this.displayedTestimonialId =
              (this.displayedTestimonialId + this.testimonialCount - 1) %
              this.testimonialCount;
          }
          getTestimonials() {
            return [
              {
                quote: 'I18N_SPLASH_TESTIMONIAL_1',
                studentDetails: 'I18N_SPLASH_STUDENT_DETAILS_1',
                imageUrl: this.getImageSet('/splash/mira', 'png'),
                imageUrlWebp: this.getImageSet('/splash/mira', 'webp'),
                borderPresent: false,
              },
              {
                quote: 'I18N_SPLASH_TESTIMONIAL_2',
                studentDetails: 'I18N_SPLASH_STUDENT_DETAILS_2',
                imageUrl: this.getImageSet('/splash/Dheeraj', 'png'),
                imageUrlWebp: this.getImageSet('/splash/Dheeraj', 'webp'),
                borderPresent: true,
              },
              {
                quote: 'I18N_SPLASH_TESTIMONIAL_3',
                studentDetails: 'I18N_SPLASH_STUDENT_DETAILS_3',
                imageUrl: this.getImageSet('/splash/sama', 'png'),
                imageUrlWebp: this.getImageSet('/splash/sama', 'webp'),
                borderPresent: false,
              },
              {
                quote: 'I18N_SPLASH_TESTIMONIAL_4',
                studentDetails: 'I18N_SPLASH_STUDENT_DETAILS_4',
                imageUrl: this.getImageSet('/splash/Gaurav', 'png'),
                imageUrlWebp: this.getImageSet('/splash/Gaurav', 'webp'),
                borderPresent: true,
              },
            ];
          }
          ngOnInit() {
            this.displayedTestimonialId = 0;
            this.testimonialCount = 4;
            this.testimonials = this.getTestimonials();
            this.loaderService.showLoadingScreen('Loading');
            this.userService.getUserInfoAsync().then(userInfo => {
              this.userIsLoggedIn = userInfo.isLoggedIn();
              this.loaderService.hideLoadingScreen();
            });
            this.isWindowNarrow = this.windowDimensionService.isWindowNarrow();
            this.windowDimensionService.getResizeEvent().subscribe(() => {
              this.isWindowNarrow =
                this.windowDimensionService.isWindowNarrow();
            });
          }
        };
        SplashPageComponent.ctorParameters = () => [
          {
            type: services_i18n_language_code_service__WEBPACK_IMPORTED_MODULE_9__[
              'I18nLanguageCodeService'
            ],
          },
          {
            type: services_site_analytics_service__WEBPACK_IMPORTED_MODULE_4__[
              'SiteAnalyticsService'
            ],
          },
          {
            type: domain_utilities_url_interpolation_service__WEBPACK_IMPORTED_MODULE_3__[
              'UrlInterpolationService'
            ],
          },
          {
            type: services_contextual_window_dimensions_service__WEBPACK_IMPORTED_MODULE_6__[
              'WindowDimensionsService'
            ],
          },
          {
            type: services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_5__[
              'WindowRef'
            ],
          },
          {
            type: services_user_service__WEBPACK_IMPORTED_MODULE_8__[
              'UserService'
            ],
          },
          {
            type: services_loader_service__WEBPACK_IMPORTED_MODULE_7__[
              'LoaderService'
            ],
          },
        ];
        SplashPageComponent = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__['Component'])({
              selector: 'oppia-splash-page',
              template:
                _raw_loader_splash_page_component_html__WEBPACK_IMPORTED_MODULE_0__[
                  'default'
                ],
              styles: [
                _splash_page_component_css__WEBPACK_IMPORTED_MODULE_1__[
                  'default'
                ],
              ],
            }),
            __metadata('design:paramtypes', [
              services_i18n_language_code_service__WEBPACK_IMPORTED_MODULE_9__[
                'I18nLanguageCodeService'
              ],
              services_site_analytics_service__WEBPACK_IMPORTED_MODULE_4__[
                'SiteAnalyticsService'
              ],
              domain_utilities_url_interpolation_service__WEBPACK_IMPORTED_MODULE_3__[
                'UrlInterpolationService'
              ],
              services_contextual_window_dimensions_service__WEBPACK_IMPORTED_MODULE_6__[
                'WindowDimensionsService'
              ],
              services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_5__[
                'WindowRef'
              ],
              services_user_service__WEBPACK_IMPORTED_MODULE_8__['UserService'],
              services_loader_service__WEBPACK_IMPORTED_MODULE_7__[
                'LoaderService'
              ],
            ]),
          ],
          SplashPageComponent
        );

        /***/
      },

    /***/ 'j+r4':
      /*!************************************************************************!*\
  !*** ./core/templates/pages/splash-page/splash-page-routing.module.ts ***!
  \************************************************************************/
      /*! exports provided: SplashPageRoutingModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'SplashPageRoutingModule',
          function () {
            return SplashPageRoutingModule;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/router */ 'tyNb');
        /* harmony import */ var _splash_page_root_component__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./splash-page-root.component */ '62vA');
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
        var __decorate =
          (undefined && undefined.__decorate) ||
          function (decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        /**
         * @fileoverview Routing module for splash page.
         */

        const routes = [
          {
            path: '',
            component:
              _splash_page_root_component__WEBPACK_IMPORTED_MODULE_2__[
                'SplashPageRootComponent'
              ],
          },
        ];
        let SplashPageRoutingModule = class SplashPageRoutingModule {};
        SplashPageRoutingModule = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'])({
              imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__[
                  'RouterModule'
                ].forChild(routes),
              ],
              exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'],
              ],
            }),
          ],
          SplashPageRoutingModule
        );

        /***/
      },

    /***/ 'wyl/':
      /*!******************************************************!*\
  !*** ./core/templates/services/page-head.service.ts ***!
  \******************************************************/
      /*! exports provided: PageHeadService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PageHeadService',
          function () {
            return PageHeadService;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
        /* harmony import */ var services_page_title_service__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! services/page-title.service */ 'VeBn');
        /* harmony import */ var _contextual_meta_tag_customization_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./contextual/meta-tag-customization.service */ 'res8'
          );
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
        var __decorate =
          (undefined && undefined.__decorate) ||
          function (decorators, target, key, desc) {
            var c = arguments.length,
              r =
                c < 3
                  ? target
                  : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
              d;
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.decorate === 'function'
            )
              r = Reflect.decorate(decorators, target, key, desc);
            else
              for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                  r =
                    (c < 3
                      ? d(r)
                      : c > 3
                        ? d(target, key, r)
                        : d(target, key)) || r;
            return c > 3 && r && Object.defineProperty(target, key, r), r;
          };
        var __metadata =
          (undefined && undefined.__metadata) ||
          function (k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };
        /**
         * @fileoverview Service to update page's title and meta tags.
         */

        let PageHeadService = class PageHeadService {
          constructor(pageTitleService, metaTagCustomizationService) {
            this.pageTitleService = pageTitleService;
            this.metaTagCustomizationService = metaTagCustomizationService;
          }
          updateTitleAndMetaTags(pageTitle, pageMetaAttributes) {
            // Update default title.
            this.pageTitleService.setDocumentTitle(pageTitle);
            let metaAttributes = [];
            for (let i = 0; i < pageMetaAttributes.length; i++) {
              metaAttributes.push({
                propertyType: pageMetaAttributes[i].PROPERTY_TYPE,
                propertyValue: pageMetaAttributes[i].PROPERTY_VALUE,
                content: pageMetaAttributes[i].CONTENT,
              });
            }
            // Update meta tags.
            this.metaTagCustomizationService.addOrReplaceMetaTags(
              metaAttributes
            );
          }
        };
        PageHeadService.ctorParameters = () => [
          {
            type: services_page_title_service__WEBPACK_IMPORTED_MODULE_1__[
              'PageTitleService'
            ],
          },
          {
            type: _contextual_meta_tag_customization_service__WEBPACK_IMPORTED_MODULE_2__[
              'MetaTagCustomizationService'
            ],
          },
        ];
        PageHeadService = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])({
              providedIn: 'root',
            }),
            __metadata('design:paramtypes', [
              services_page_title_service__WEBPACK_IMPORTED_MODULE_1__[
                'PageTitleService'
              ],
              _contextual_meta_tag_customization_service__WEBPACK_IMPORTED_MODULE_2__[
                'MetaTagCustomizationService'
              ],
            ]),
          ],
          PageHeadService
        );

        /***/
      },

    /***/ xLhm:
      /*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./core/templates/pages/splash-page/splash-page-root.component.html ***!
  \***********************************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__['default'] =
          '<oppia-angular-root>\n  <oppia-base-content>\n    <content>\n      <oppia-splash-page class="e2e-test-splash-page"></oppia-splash-page>\n    </content>\n  </oppia-base-content>\n</oppia-angular-root>\n';

        /***/
      },
  },
]);
//# sourceMappingURL=pages-splash-page-splash-page-module-es2015.js.map
