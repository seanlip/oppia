(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['main'],
  {
    /***/ 0:
      /*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! /app/oppia/src/main.ts */ 'zUnb'
        );

        /***/
      },

    /***/ '3eoD':
      /*!**************************************************************!*\
  !*** ./core/templates/services/contextual/logger.service.ts ***!
  \**************************************************************/
      /*! exports provided: LoggerService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'LoggerService',
          function () {
            return LoggerService;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
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
         * @fileoverview Service for logging.
         */

        let LoggerService = class LoggerService {
          constructor() {}
          /**
           * Logs a message to console at the debug level.
           * @param msg - A message to log.
           */
          debug(msg) {
            // eslint-disable-next-line no-console
            console.debug(msg);
          }
          /**
           * Logs a message to console at the info level.
           * @param msg - A message to log.
           */
          info(msg) {
            // eslint-disable-next-line no-console
            console.info(msg);
          }
          /**
           * Logs a message to console at the warning level.
           * @param msg - A message to log.
           */
          warn(msg) {
            console.warn(msg);
          }
          /**
           * Logs a message to console at the error level.
           * @param msg - A message to log.
           */
          error(msg) {
            console.error(msg);
          }
          /**
           * Logs a message to console.
           * @param msg - A message to log.
           */
          log(msg) {
            // eslint-disable-next-line no-console
            console.log(msg);
          }
        };
        LoggerService.ctorParameters = () => [];
        LoggerService = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])({
              providedIn: 'root',
            }),
            __metadata('design:paramtypes', []),
          ],
          LoggerService
        );

        /***/
      },

    /***/ AFwG:
      /*!******************************************************************!*\
  !*** ./core/templates/services/contextual/window-ref.service.ts ***!
  \******************************************************************/
      /*! exports provided: WindowRef */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'WindowRef',
          function () {
            return WindowRef;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
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
        /**
         * @fileoverview Service to wrap the window object.
         */

        let WindowRef = class WindowRef {
          /**
           * @returns The global native browser window object.
           */
          _window() {
            return window;
          }
          /**
           * @returns The global native browser window object.
           */
          get nativeWindow() {
            return this._window();
          }
        };
        WindowRef = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])({
              providedIn: 'root',
            }),
          ],
          WindowRef
        );

        /***/
      },

    /***/ DhAQ:
      /*!*****************************************!*\
  !*** ./core/templates/app.constants.ts ***!
  \*****************************************/
      /*! exports provided: AppConstants, NavbarAndFooterGATrackingPages */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AppConstants',
          function () {
            return AppConstants;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'NavbarAndFooterGATrackingPages',
          function () {
            return NavbarAndFooterGATrackingPages;
          }
        );
        /* harmony import */ var assets_constants__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! assets/constants */ 'g/rd');
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
        /**
         * @fileoverview Shared constants for the Oppia module.
         */

        const AppConstants = Object.assign(
          Object.assign(
            {},
            assets_constants__WEBPACK_IMPORTED_MODULE_0__['default']
          ),
          {
            DEFAULT_TRANSLATIONS: {
              I18N_LIBRARY_PAGE_TITLE_FRAGMENT_FOR_WEB: 'Library',
              I18N_LIBRARY_LOADING: 'Loading',
              I18N_SIGNUP_PAGE_SUBTITLE: 'Registration',
              I18N_SIGNUP_PAGE_TITLE_FRAGMENT_FOR_WEB: 'Oppia',
              I18N_LIBRARY_SEARCH_PLACEHOLDER: 'What are you curious about?',
              I18N_LIBRARY_ALL_LANGUAGES: 'All Languages',
              I18N_LIBRARY_LANGUAGES_EN: 'English',
              I18N_LIBRARY_ALL_CATEGORIES: 'All Categories',
              I18N_TOPNAV_SIGN_IN: 'Sign in',
              I18N_SPLASH_PAGE_TITLE_FRAGMENT_FOR_WEB:
                'Oppia | Free, Online and Interactive Lessons for Anyone',
              I18N_SIGNUP_REGISTRATION: 'Registration',
              I18N_SIGNUP_LOADING: 'Loading',
            },
            ACTIVITY_STATUS_PRIVATE: 'private',
            ACTIVITY_STATUS_PUBLIC: 'public',
            RULE_SUMMARY_WRAP_CHARACTER_COUNT: 30,
            /* Called when the learner moves to a new card that they haven't seen
       before. */
            EDITABLE_EXPLORATION_DATA_DRAFT_URL_TEMPLATE:
              '/createhandler/data/<exploration_id>?apply_draft=<apply_draft>',
            EDITABLE_EXPLORATION_DATA_URL_TEMPLATE:
              '/createhandler/data/<exploration_id>',
            EXPLORATION_DATA_URL_TEMPLATE:
              '/explorehandler/init/<exploration_id>',
            EXPLORATION_VERSION_DATA_URL_TEMPLATE:
              '/explorehandler/init/<exploration_id>?v=<version>',
            ENTITY_TRANSLATIONS_HANDLER_URL_TEMPLATE:
              '/entity_translations_handler/<entity_type>/<entity_id>/<entity_version>/' +
              '<language_code>',
            EXPLORATION_PROGRESS_PID_URL_TEMPLATE:
              '/explorehandler/init/<exploration_id>?pid=<pid>',
            WARNING_TYPES: {
              // These must be fixed before the exploration can be saved.
              CRITICAL: 'critical',
              // These must be fixed before publishing an exploration to the public
              // library.
              ERROR: 'error',
            },
            STATE_ERROR_MESSAGES: {
              ADD_INTERACTION: 'Please add an interaction to this card.',
              STATE_UNREACHABLE: 'This card is unreachable.',
              UNABLE_TO_END_EXPLORATION:
                "There's no way to complete the exploration starting from this card. " +
                'To fix this, make sure that the last card in the chain starting from' +
                " this one has an 'End Exploration' question type.",
              INCORRECT_SOLUTION:
                'The current solution does not lead to another card.',
              UNRESOLVED_ANSWER:
                'There is an answer among the top 10 which has no explicit feedback.',
              INVALID_REDIRECTION:
                'Learner should not be directed back by more than' +
                ' 3 cards in the lesson.',
            },
            CHECKPOINT_ERROR_MESSAGES: {
              INIT_CARD: 'The first card of the lesson must be a checkpoint.',
              TERMINAL_CARD:
                'Checkpoints are not allowed on the last card of the lesson.',
              CHECKPOINT_COUNT:
                'Only a maximum of 8 checkpoints are allowed per lesson.',
              BYPASSABLE_CARD:
                'Checkpoints must not be assigned to cards that can be bypassed.',
            },
            EXPLORATION_SUMMARY_DATA_URL_TEMPLATE:
              '/explorationsummarieshandler/data',
            EXPLORATION_AND_SKILL_ID_PATTERN: /^[a-zA-Z0-9_-]+$/,
            // We use a slash because this character is forbidden in a state name.
            PLACEHOLDER_OUTCOME_DEST: '/',
            PLACEHOLDER_OUTCOME_DEST_IF_STUCK: '/',
            INTERACTION_DISPLAY_MODE_INLINE: 'inline',
            LOADING_INDICATOR_URL: '/activity/loadingIndicator.gif',
            OBJECT_EDITOR_URL_PREFIX: '/object_editor_template/',
            // Feature still in development.
            // NOTE TO DEVELOPERS: This should be synchronized with the value in feconf.
            ENABLE_ML_CLASSIFIERS: false,
            // Feature still in development.
            INFO_MESSAGE_SOLUTION_IS_INVALID_FOR_EXPLORATION:
              'The current solution does not lead to another card.',
            PARAMETER_TYPES: {
              REAL: 'Real',
              UNICODE_STRING: 'UnicodeString',
            },
            // Flag to toggle the support for a new state to direct the learners
            // to if they get stuck.
            DEST_IF_REALLY_STUCK_FEAT_ENABLED: false,
            INTERACTION_NAMES: {
              TEXT_INPUT: 'TextInput',
            },
            // The maximum number of nodes to show in a row of the state graph.
            MAX_NODES_PER_ROW: 4,
            // The following variable must be at least 3. It represents the maximum
            // length, in characters, for the name of each node label in the state graph.
            MAX_NODE_LABEL_LENGTH: 15,
            // If an $http request fails with the following error codes, a warning is
            // displayed.
            FATAL_ERROR_CODES: [400, 401, 404, 500],
            // Maximum number of states the learner can be directed back from a state
            // by an editor in an exploration.
            MAX_CARD_COUNT_FOR_VALID_REDIRECTION: 3,
            // Do not modify these, for backwards-compatibility reasons. These strings are
            // used to identify components, to generate content ids, and to determine what
            // type of content a given content id is associated with. If you wish to
            // change one of these, a state migration of all existing content ids is
            // required. The component content type should be sufficiently small such that
            // the commit messages that use the content type strings do not exceed 375
            // characters (which is the maximum length of a commit message).
            COMPONENT_NAME_CONTENT: 'content',
            COMPONENT_NAME_FEEDBACK: 'feedback',
            COMPONENT_NAME_HINT: 'hint',
            COMPONENT_NAME_INTERACTION_CUSTOMIZATION_ARGS: 'ca',
            COMPONENT_NAME_RULE_INPUT: 'rule_input',
            COMPONENT_NAME_SOLUTION: 'solution',
            COMPONENT_NAME_EXPLANATION: 'explanation',
            COMPONENT_NAME_WORKED_EXAMPLE: {
              QUESTION: 'worked_example_question',
              EXPLANATION: 'worked_example_explanation',
            },
            ACTION_TYPE_EXPLORATION_START: 'ExplorationStart',
            ACTION_TYPE_ANSWER_SUBMIT: 'AnswerSubmit',
            ACTION_TYPE_EXPLORATION_QUIT: 'ExplorationQuit',
            ISSUE_TYPE_EARLY_QUIT: 'EarlyQuit',
            ISSUE_TYPE_MULTIPLE_INCORRECT_SUBMISSIONS:
              'MultipleIncorrectSubmissions',
            ISSUE_TYPE_CYCLIC_STATE_TRANSITIONS: 'CyclicStateTransitions',
            // A block refers to a set of learner actions displayed together so that
            // they are part of the same context. If two consecutive learner actions are
            // from different states, we consider them unrelated. This constant refers to
            // the maximum number of such actions that can exist in one block. (Note that
            // all related actions are shown together, regardless of how many there are.)
            MAX_UNRELATED_ACTIONS_PER_BLOCK: 4,
            SITE_NAME: 'Oppia.org',
            DEFAULT_PROFILE_IMAGE_WEBP_PATH: '/avatar/user_blue_150px.webp',
            DEFAULT_PROFILE_IMAGE_PNG_PATH: '/avatar/user_blue_150px.png',
            // TODO(vojtechjelinek): Move these to separate file later, after we establish
            // process to follow for Angular constants (#6731).
            SUBTOPIC_PAGE_EDITOR_DATA_URL_TEMPLATE:
              '/subtopic_page_editor_handler/data/<topic_id>/<subtopic_id>',
            // This should be synchronized with SUBTOPIC_MASTERY_DATA_URL
            // in feconf.
            SUBTOPIC_MASTERY_DATA_URL_TEMPLATE:
              '/subtopic_mastery_handler/data',
            EDITABLE_TOPIC_DATA_URL_TEMPLATE:
              '/topic_editor_handler/data/<topic_id>',
            LABEL_FOR_CLEARING_FOCUS: 'labelForClearingFocus',
            // TODO(bhenning): This constant should be provided by the backend.
            COLLECTION_DATA_URL_TEMPLATE:
              '/collection_handler/data/<collection_id>',
            ENTITY_TYPE: {
              COLLECTION: 'collection',
              EXPLORATION: 'exploration',
              TOPIC: 'topic',
              SKILL: 'skill',
              STORY: 'story',
              QUESTION: 'question',
              BLOG_POST: 'blog_post',
              CLASSROOM: 'classroom',
            },
            AUDIO_UPLOAD_URL_TEMPLATE:
              '/createhandler/audioupload/<exploration_id>',
            IMAGE_UPLOAD_URL_TEMPLATE:
              '/createhandler/imageupload/<entity_type>/<entity_id>',
            MAX_NUM_AUDIO_FILES_TO_DOWNLOAD_SIMULTANEOUSLY: 3,
            MAX_NUM_IMAGE_FILES_TO_DOWNLOAD_SIMULTANEOUSLY: 3,
            IMAGE_CONTEXT: {
              EXPLORATION_SUGGESTIONS: 'exploration_suggestions',
              QUESTION_SUGGESTIONS: 'question_suggestions',
            },
            IMAGE_SAVE_DESTINATION_SERVER: 'imageSaveDestinationServer',
            IMAGE_SAVE_DESTINATION_LOCAL_STORAGE:
              'imageSaveDestinationLocalStorage',
            SVG_MIME_TYPE: 'data:image/svg+xml',
            CONTRIBUTION_STATS_TYPE_TRANSLATION: 'translation',
            CONTRIBUTION_STATS_TYPE_QUESTION: 'question',
            CONTRIBUTION_STATS_SUBTYPE_SUBMISSION: 'submission',
            CONTRIBUTION_STATS_SUBTYPE_REVIEW: 'review',
            CONTRIBUTION_STATS_SUBTYPE_CORRECTION: 'correction',
            CONTRIBUTION_STATS_TYPES: {
              TRANSLATION_CONTRIBUTION: {
                NAME: 'translationContribution',
                DISPLAY_NAME: 'Translation Contributions',
              },
              TRANSLATION_REVIEW: {
                NAME: 'translationReview',
                DISPLAY_NAME: 'Translation Reviews',
              },
              QUESTION_CONTRIBUTION: {
                NAME: 'questionContribution',
                DISPLAY_NAME: 'Question Contributions',
              },
              QUESTION_REVIEW: {
                NAME: 'questionReview',
                DISPLAY_NAME: 'Question Reviews',
              },
            },
            LESSON_CREATORS_DATA_TEACH_PAGE: [
              {
                name: 'I18N_TEACH_PAGE_LESSON_CREATOR_1_NAME',
                country: 'I18N_TEACH_PAGE_LESSON_CREATOR_1_COUNTRY',
                role: 'I18N_TEACH_PAGE_LESSON_CREATOR_1_ROLE',
                linkedInUrl:
                  'https://www.linkedin.com/in/rita-santos-guimaraes-prof-matematica/',
                imagePngUrl: '/teach/creators/rita.png',
                imageWebpUrl: '/teach/creators/rita.webp',
              },
              {
                name: 'I18N_TEACH_PAGE_LESSON_CREATOR_2_NAME',
                country: 'I18N_TEACH_PAGE_LESSON_CREATOR_2_COUNTRY',
                role: 'I18N_TEACH_PAGE_LESSON_CREATOR_2_ROLE',
                linkedInUrl:
                  'https://www.linkedin.com/in/rafiat-sulaimon-54b817205/',
                imagePngUrl: '/teach/creators/rafiat.png',
                imageWebpUrl: '/teach/creators/rafiat.webp',
              },
              {
                name: 'I18N_TEACH_PAGE_LESSON_CREATOR_3_NAME',
                country: 'I18N_TEACH_PAGE_LESSON_CREATOR_3_COUNTRY',
                role: 'I18N_TEACH_PAGE_LESSON_CREATOR_3_ROLE',
                linkedInUrl:
                  'https://www.linkedin.com/in/aanuoluwapo-adeoti-a25b93188/',
                imagePngUrl: '/teach/creators/aanuoluwapo.png',
                imageWebpUrl: '/teach/creators/aanuoluwapo.webp',
              },
              {
                name: 'I18N_TEACH_PAGE_LESSON_CREATOR_4_NAME',
                country: 'I18N_TEACH_PAGE_LESSON_CREATOR_4_COUNTRY',
                role: 'I18N_TEACH_PAGE_LESSON_CREATOR_4_ROLE',
                linkedInUrl: 'https://www.linkedin.com/in/erin-c-drake/',
                imagePngUrl: '/teach/creators/erin.png',
                imageWebpUrl: '/teach/creators/erin.webp',
              },
              {
                name: 'I18N_TEACH_PAGE_LESSON_CREATOR_5_NAME',
                country: 'I18N_TEACH_PAGE_LESSON_CREATOR_5_COUNTRY',
                role: 'I18N_TEACH_PAGE_LESSON_CREATOR_5_ROLE',
                linkedInUrl: 'https://www.linkedin.com/in/adewumimobolaji/',
                imagePngUrl: '/teach/creators/adewumi.png',
                imageWebpUrl: '/teach/creators/adewumi.webp',
              },
              {
                name: 'I18N_TEACH_PAGE_LESSON_CREATOR_6_NAME',
                country: 'I18N_TEACH_PAGE_LESSON_CREATOR_6_COUNTRY',
                role: 'I18N_TEACH_PAGE_LESSON_CREATOR_6_ROLE',
                linkedInUrl: 'https://www.linkedin.com/in/successoghogho/',
                imagePngUrl: '/teach/creators/successOghogho.png',
                imageWebpUrl: '/teach/creators/successOghogho.webp',
              },
            ],
            TESTIMONIAlS_DATA_TEACHERS: [
              {
                personDetails: 'I18N_TEACH_STUDENT_DETAILS_1',
                role: 'I18N_TEACH_PAGE_TESTIMONIAL_ROLE_TEACHER',
                quote: 'I18N_TEACH_TESTIMONIAL_1',
                imageUrl: '/teach/testimonials/riya.jpg',
                imageUrlWebp: '/teach/testimonials/riya.webp',
                altText: 'Riya Sogani',
              },
              {
                personDetails: 'I18N_TEACH_STUDENT_DETAILS_2',
                role: 'I18N_TEACH_PAGE_TESTIMONIAL_ROLE_TEACHER',
                quote: 'I18N_TEACH_TESTIMONIAL_2',
                imageUrl: '/teach/testimonials/awad.jpg',
                imageUrlWebp: '/teach/testimonials/awad.webp',
                altText: 'Wala Awad',
              },
              {
                personDetails: 'I18N_TEACH_STUDENT_DETAILS_3',
                role: 'I18N_TEACH_PAGE_TESTIMONIAL_ROLE_TEACHER',
                quote: 'I18N_TEACH_TESTIMONIAL_3',
                imageUrl: '/teach/testimonials/himanshu.jpg',
                imageUrlWebp: '/teach/testimonials/himanshu.webp',
                altText: 'Himanshu Taneja',
              },
            ],
            CONTRIBUTOR_BADGE_INITIAL_LEVELS: [
              1, 10, 20, 50, 100, 200, 300, 400, 500,
            ],
            CONTRIBUTOR_CERTIFICATE_LOGO:
              '/assets/images/contributor_dashboard/oppia-logo.jpg',
            PARTNERSHIPS_FORM_LINK:
              'https://docs.google.com/forms/d/e/1FAIpQLSdL5mjFO7RxDtg8yfXluEtciYj8WnAqTL9fZWnwPgOqXV-9lg/viewform',
            PARTNERSHIPS_FORM_TRANSLATED_LINK: {
              PREFIX:
                'https://docs-google-com.translate.goog/forms/d/e/1FAIpQLSdL5mjFO7RxDtg8yfXluEtciYj8WnAqTL9fZWnwPgOqXV-9lg/viewform?_x_tr_sl=en&_x_tr_tl=',
              SUFFIX: '&_x_tr_hl=en-US&_x_tr_pto=wapp',
            },
            VOLUNTEER_FORM_LINK:
              'https://docs.google.com/forms/d/e/1FAIpQLSc5_rwUjugT_Jt_EB49_zAKWVY68I3fTXF5w9b5faIk7rL6yg/viewform',
            IMPACT_REPORT_LINK:
              'https://drive.google.com/file/d/1uRe145ou9Ka5O2duTB-N-i89NVPEtxh1/view',
            PARENTS_TEACHERS_PDF_GUIDE_LINK:
              'https://drive.google.com/file/d/1gMixZ2c0j5XAGPx4qDBDvRgiFvF6PMkk/view',
            TEACHER_STORY_TAGGED_BLOGS_LINK:
              'https://www.oppia.org/blog/search/find?q=&tags=(%22Teacher%20story%22)',
            VOLUNTEER_EXPECTATIONS: [
              'I18N_VOLUNTEER_PAGE_VOLUNTEER_SECTION_EXPECTATION_1',
              'I18N_VOLUNTEER_PAGE_VOLUNTEER_SECTION_EXPECTATION_2',
              'I18N_VOLUNTEER_PAGE_VOLUNTEER_SECTION_EXPECTATION_3',
              'I18N_VOLUNTEER_PAGE_VOLUNTEER_SECTION_EXPECTATION_4',
            ],
            VOLUNTEER_PREFERRED_SKILLS: {
              OUTREACH: [
                {
                  title: 'I18N_VOLUNTEER_PAGE_SKILLS_OUTREACH_SET1_HEADING',
                  skills: [
                    'I18N_VOLUNTEER_PAGE_SKILLS_OUTREACH_SET1_SKILL1',
                    'I18N_VOLUNTEER_PAGE_SKILLS_OUTREACH_SET1_SKILL2',
                    'I18N_VOLUNTEER_PAGE_SKILLS_OUTREACH_SET1_SKILL3',
                    'I18N_VOLUNTEER_PAGE_SKILLS_OUTREACH_SET1_SKILL4',
                  ],
                },
                {
                  title: 'I18N_VOLUNTEER_PAGE_SKILLS_OUTREACH_SET2_HEADING',
                  skills: [
                    'I18N_VOLUNTEER_PAGE_SKILLS_OUTREACH_SET2_SKILL1',
                    'I18N_VOLUNTEER_PAGE_SKILLS_OUTREACH_SET2_SKILL2',
                    'I18N_VOLUNTEER_PAGE_SKILLS_OUTREACH_SET2_SKILL3',
                    'I18N_VOLUNTEER_PAGE_SKILLS_OUTREACH_SET2_SKILL4',
                    'I18N_VOLUNTEER_PAGE_SKILLS_OUTREACH_SET2_SKILL5',
                  ],
                },
              ],
              SOFTWARE: [
                {
                  title: 'I18N_VOLUNTEER_PAGE_SKILLS_SOFTWARE_SET1_HEADING',
                  skills: [
                    'I18N_VOLUNTEER_PAGE_SKILLS_SOFTWARE_SET1_SKILL1',
                    'I18N_VOLUNTEER_PAGE_SKILLS_SOFTWARE_SET1_SKILL2',
                    'I18N_VOLUNTEER_PAGE_SKILLS_SOFTWARE_SET1_SKILL3',
                    'I18N_VOLUNTEER_PAGE_SKILLS_SOFTWARE_SET1_SKILL4',
                  ],
                },
              ],
              ART_AND_DESIGN: [
                {
                  title:
                    'I18N_VOLUNTEER_PAGE_SKILLS_ART_AND_DESIGN_SET1_HEADING',
                  skills: [
                    'I18N_VOLUNTEER_PAGE_SKILLS_ART_AND_DESIGN_SET1_SKILL1',
                    'I18N_VOLUNTEER_PAGE_SKILLS_ART_AND_DESIGN_SET1_SKILL2',
                    'I18N_VOLUNTEER_PAGE_SKILLS_ART_AND_DESIGN_SET1_SKILL3',
                  ],
                },
              ],
              TRANSLATION: [
                {
                  title: 'I18N_VOLUNTEER_PAGE_SKILLS_TRANSLATION_SET1_HEADING',
                  skills: [
                    'I18N_VOLUNTEER_PAGE_SKILLS_TRANSLATION_SET1_SKILL1',
                    'I18N_VOLUNTEER_PAGE_SKILLS_TRANSLATION_SET1_SKILL2',
                    'I18N_VOLUNTEER_PAGE_SKILLS_TRANSLATION_SET1_SKILL3',
                  ],
                },
                {
                  title: 'I18N_VOLUNTEER_PAGE_SKILLS_TRANSLATION_SET2_HEADING',
                  skills: [
                    'I18N_VOLUNTEER_PAGE_SKILLS_TRANSLATION_SET2_SKILL1',
                    'I18N_VOLUNTEER_PAGE_SKILLS_TRANSLATION_SET2_SKILL2',
                    'I18N_VOLUNTEER_PAGE_SKILLS_TRANSLATION_SET2_SKILL3',
                    'I18N_VOLUNTEER_PAGE_SKILLS_TRANSLATION_SET2_SKILL4',
                  ],
                },
              ],
              LESSON_CREATION: [
                {
                  title:
                    'I18N_VOLUNTEER_PAGE_SKILLS_LESSON_CREATION_SET1_HEADING',
                  skills: [
                    'I18N_VOLUNTEER_PAGE_SKILLS_LESSON_CREATION_SET1_SKILL1',
                    'I18N_VOLUNTEER_PAGE_SKILLS_LESSON_CREATION_SET1_SKILL2',
                    'I18N_VOLUNTEER_PAGE_SKILLS_LESSON_CREATION_SET1_SKILL3',
                    'I18N_VOLUNTEER_PAGE_SKILLS_LESSON_CREATION_SET1_SKILL4',
                  ],
                },
              ],
            },
            LAST_PAGE_VIEW_TIME_LOCAL_STORAGE_KEYS_FOR_GA: {
              ABOUT: 'lastAboutPageViewTime',
              TEACH: 'lastTeachPageViewTime',
              VOLUNTEER: 'lastVolunteerPageViewTime',
            },
            ONE_WEEK_IN_MILLIS: 7 * 24 * 60 * 60 * 1000,
            ONE_MONTH_IN_MILLIS: 30 * 24 * 60 * 60 * 1000,
          }
        );
        var NavbarAndFooterGATrackingPages;
        (function (NavbarAndFooterGATrackingPages) {
          NavbarAndFooterGATrackingPages['ABOUT'] = 'About';
          NavbarAndFooterGATrackingPages['VOLUNTEER'] = 'Volunteer';
          NavbarAndFooterGATrackingPages['TEACH'] = 'Teach';
        })(
          NavbarAndFooterGATrackingPages ||
            (NavbarAndFooterGATrackingPages = {})
        );

        /***/
      },

    /***/ Ep4r:
      /*!*******************************************************!*\
  !*** ./core/templates/services/csrf-token.service.ts ***!
  \*******************************************************/
      /*! exports provided: CsrfTokenService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'CsrfTokenService',
          function () {
            return CsrfTokenService;
          }
        );
        /* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/upgrade/static */ 'BBPO');
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/common/http */ 'tk/3');
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
         * @fileoverview Service for managing CSRF tokens.
         */
        // This needs to be imported first instead of using the global definition
        // because Angular doesn't support global definitions and every library used
        // needs to be imported explicitly.

        // eslint-disable-next-line oppia/disallow-httpclient

        let CsrfTokenService = class CsrfTokenService {
          constructor(httpBackend) {
            // 'tokenPromise' will be null when token is not initialized.
            this.tokenPromise = null;
            // We pass HttpBackend into this constructor in order to bypass the default
            // REQUEST_INTERCEPTER which we use and which depends on CsrfTokenService.
            this.http = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__[
              'HttpClient'
            ](httpBackend);
          }
          initializeToken() {
            if (this.tokenPromise !== null) {
              throw new Error('Token request has already been made');
            }
            this.tokenPromise = this.http
              .get('/csrfhandler', {responseType: 'text'})
              .toPromise()
              .then(
                responseText => {
                  // Remove the protective XSSI (cross-site scripting inclusion) prefix.
                  return JSON.parse(responseText.substring(5)).token;
                },
                err => {
                  throw err;
                }
              );
          }
          getTokenAsync() {
            if (this.tokenPromise === null) {
              throw new Error('Token needs to be initialized');
            }
            return this.tokenPromise;
          }
        };
        CsrfTokenService.ctorParameters = () => [
          {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__[
              'HttpBackend'
            ],
          },
        ];
        CsrfTokenService = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])({
              providedIn: 'root',
            }),
            __metadata('design:paramtypes', [
              _angular_common_http__WEBPACK_IMPORTED_MODULE_2__['HttpBackend'],
            ]),
          ],
          CsrfTokenService
        );

        angular
          .module('oppia')
          .factory(
            'CsrfTokenService',
            Object(
              _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_0__[
                'downgradeInjectable'
              ]
            )(CsrfTokenService)
          );

        /***/
      },

    /***/ FfoF:
      /*!***************************************************************!*\
  !*** ./core/templates/services/assets-backend-api.service.ts ***!
  \***************************************************************/
      /*! exports provided: AssetsBackendApiService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AssetsBackendApiService',
          function () {
            return AssetsBackendApiService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/common/http */ 'tk/3');
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
        /* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/upgrade/static */ 'BBPO');
        /* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! app.constants */ 'DhAQ');
        /* harmony import */ var domain_utilities_audio_file_model__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! domain/utilities/audio-file.model */ 'j2Py');
        /* harmony import */ var domain_utilities_file_download_request_model__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! domain/utilities/file-download-request.model */ 'hMZf'
          );
        /* harmony import */ var domain_utilities_image_file_model__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! domain/utilities/image-file.model */ 'oqKw');
        /* harmony import */ var domain_utilities_url_interpolation_service__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! domain/utilities/url-interpolation.service */ 'X9eu'
          );
        /* harmony import */ var services_csrf_token_service__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! services/csrf-token.service */ 'Ep4r');
        // Copyright 2020 The Oppia Authors. All Rights Reserved.
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
        var __awaiter =
          (undefined && undefined.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : adopt(result.value).then(fulfilled, rejected);
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
              );
            });
          };
        var AssetsBackendApiService_1;
        /**
         * @fileoverview Service to serve as the interface for fetching and uploading
         * assets from Google Cloud Storage.
         */

        let AssetsBackendApiService =
          (AssetsBackendApiService_1 = class AssetsBackendApiService {
            constructor(csrfTokenService, http, urlInterpolationService) {
              this.csrfTokenService = csrfTokenService;
              this.http = http;
              this.urlInterpolationService = urlInterpolationService;
              /** List of audio files that have been requested but have not returned. */
              this.audioFileDownloadRequests = [];
              /** List of image files that have been requested but have not returned. */
              this.imageFileDownloadRequests = [];
              /** Map from asset filename to asset blob. */
              this.assetsCache = new Map();
              let urlPrefix = '/assetsdevhandler';
              if (!AssetsBackendApiService_1.EMULATOR_MODE) {
                urlPrefix =
                  'https://storage.googleapis.com/' +
                  AssetsBackendApiService_1.GCS_RESOURCE_BUCKET_NAME;
              }
              this.downloadUrlTemplate =
                urlPrefix +
                '/<entity_type>/<entity_id>/assets/<asset_type>/<filename>';
              this.profileImagePngUrlTemplate =
                urlPrefix + '/user/<username>/assets/profile_picture.png';
              this.profileImageWebpUrlTemplate =
                urlPrefix + '/user/<username>/assets/profile_picture.webp';
            }
            static get EMULATOR_MODE() {
              return app_constants__WEBPACK_IMPORTED_MODULE_3__['AppConstants']
                .EMULATOR_MODE;
            }
            static get GCS_RESOURCE_BUCKET_NAME() {
              return app_constants__WEBPACK_IMPORTED_MODULE_3__['AppConstants']
                .GCS_RESOURCE_BUCKET_NAME;
            }
            loadAudio(explorationId, filename) {
              return __awaiter(this, void 0, void 0, function* () {
                let data = this.assetsCache.get(filename);
                if (this.isCached(filename) && data !== undefined) {
                  return new domain_utilities_audio_file_model__WEBPACK_IMPORTED_MODULE_4__[
                    'AudioFile'
                  ](filename, data);
                }
                return this.fetchFile(
                  app_constants__WEBPACK_IMPORTED_MODULE_3__['AppConstants']
                    .ENTITY_TYPE.EXPLORATION,
                  explorationId,
                  filename,
                  app_constants__WEBPACK_IMPORTED_MODULE_3__['AppConstants']
                    .ASSET_TYPE_AUDIO
                );
              });
            }
            loadImage(entityType, entityId, filename) {
              return __awaiter(this, void 0, void 0, function* () {
                let data = this.assetsCache.get(filename);
                if (this.isCached(filename) && data !== undefined) {
                  return new domain_utilities_image_file_model__WEBPACK_IMPORTED_MODULE_6__[
                    'ImageFile'
                  ](filename, data);
                }
                return this.fetchFile(
                  entityType,
                  entityId,
                  filename,
                  app_constants__WEBPACK_IMPORTED_MODULE_3__['AppConstants']
                    .ASSET_TYPE_IMAGE
                );
              });
            }
            saveAudio(explorationId, filename, rawAssetData) {
              return __awaiter(this, void 0, void 0, function* () {
                const form = new FormData();
                form.append('raw_audio_file', rawAssetData);
                form.append('payload', JSON.stringify({filename}));
                form.append(
                  'csrf_token',
                  yield this.csrfTokenService.getTokenAsync()
                );
                try {
                  return yield this.http
                    .post(this.getAudioUploadUrl(explorationId), form)
                    .toPromise();
                  // We use unknown type because we are unsure of the type of error
                  // that was thrown. Since the catch block cannot identify the
                  // specific type of error, we are unable to further optimise the
                  // code by introducing more types of errors.
                } catch (error) {
                  if (
                    error instanceof
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__[
                      'HttpErrorResponse'
                    ]
                  ) {
                    return Promise.reject(error.error);
                  }
                  throw error;
                }
              });
            }
            saveMathExpressionImage(
              resampledFile,
              filename,
              entityType,
              entityId
            ) {
              return __awaiter(this, void 0, void 0, function* () {
                const form = new FormData();
                form.append('image', resampledFile);
                form.append(
                  'payload',
                  JSON.stringify({filename, filename_prefix: 'image'})
                );
                form.append(
                  'csrf_token',
                  yield this.csrfTokenService.getTokenAsync()
                );
                try {
                  return yield this.http
                    .post(this.getImageUploadUrl(entityType, entityId), form)
                    .toPromise();
                  // We use unknown type because we are unsure of the type of error
                  // that was thrown. Since the catch block cannot identify the
                  // specific type of error, we are unable to further optimise the
                  // code by introducing more types of errors.
                } catch (error) {
                  if (
                    error instanceof
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__[
                      'HttpErrorResponse'
                    ]
                  ) {
                    return Promise.reject(error.error);
                  }
                  throw error;
                }
              });
            }
            postThumbnailFile(resampledFile, filename, entityType, entityId) {
              let form = new FormData();
              form.append('image', resampledFile);
              form.append(
                'payload',
                JSON.stringify({
                  filename: filename,
                  filename_prefix: 'thumbnail',
                })
              );
              let imageUploadUrlTemplate =
                '/createhandler/imageupload/' + '<entity_type>/<entity_id>';
              let thumbnailFileUrl =
                this.urlInterpolationService.interpolateUrl(
                  imageUploadUrlTemplate,
                  {
                    entity_type: entityType,
                    entity_id: entityId,
                  }
                );
              return this.http.post(thumbnailFileUrl, form);
            }
            isCached(filename) {
              return this.assetsCache.has(filename);
            }
            abortAllCurrentAudioDownloads() {
              this.abortAllCurrentDownloads(
                app_constants__WEBPACK_IMPORTED_MODULE_3__['AppConstants']
                  .ASSET_TYPE_AUDIO
              );
            }
            abortAllCurrentImageDownloads() {
              this.abortAllCurrentDownloads(
                app_constants__WEBPACK_IMPORTED_MODULE_3__['AppConstants']
                  .ASSET_TYPE_IMAGE
              );
            }
            getAssetsFilesCurrentlyBeingRequested() {
              return {
                [app_constants__WEBPACK_IMPORTED_MODULE_3__['AppConstants']
                  .ASSET_TYPE_AUDIO]: this.audioFileDownloadRequests,
                [app_constants__WEBPACK_IMPORTED_MODULE_3__['AppConstants']
                  .ASSET_TYPE_IMAGE]: this.imageFileDownloadRequests,
              };
            }
            getAudioDownloadUrl(entityType, entityId, filename) {
              return this.getDownloadUrl(
                entityType,
                entityId,
                filename,
                app_constants__WEBPACK_IMPORTED_MODULE_3__['AppConstants']
                  .ASSET_TYPE_AUDIO
              );
            }
            getImageUrlForPreview(entityType, entityId, filename) {
              return this.getDownloadUrl(
                entityType,
                entityId,
                filename,
                app_constants__WEBPACK_IMPORTED_MODULE_3__['AppConstants']
                  .ASSET_TYPE_IMAGE
              );
            }
            getThumbnailUrlForPreview(entityType, entityId, filename) {
              return this.getDownloadUrl(
                entityType,
                entityId,
                filename,
                app_constants__WEBPACK_IMPORTED_MODULE_3__['AppConstants']
                  .ASSET_TYPE_THUMBNAIL
              );
            }
            getDownloadUrl(entityType, entityId, filename, assetType) {
              let downloadUrl = this.urlInterpolationService.interpolateUrl(
                this.downloadUrlTemplate,
                {
                  entity_type: entityType,
                  entity_id: entityId,
                  asset_type: assetType,
                  filename: filename,
                }
              );
              return downloadUrl;
            }
            getFileDownloadRequestsByAssetType(assetType) {
              if (
                assetType ===
                app_constants__WEBPACK_IMPORTED_MODULE_3__['AppConstants']
                  .ASSET_TYPE_AUDIO
              ) {
                return this.audioFileDownloadRequests;
              } else {
                return this.imageFileDownloadRequests;
              }
            }
            fetchFile(entityType, entityId, filename, assetType) {
              return __awaiter(this, void 0, void 0, function* () {
                let onResolve;
                let onReject;
                const blobPromise = new Promise((resolve, reject) => {
                  onResolve = resolve;
                  onReject = reject;
                });
                const subscription = this.http
                  .get(
                    this.getDownloadUrl(
                      entityType,
                      entityId,
                      filename,
                      assetType
                    ),
                    {
                      responseType: 'blob',
                    }
                  )
                  .subscribe(onResolve, onReject);
                const fileDownloadRequests =
                  this.getFileDownloadRequestsByAssetType(assetType);
                fileDownloadRequests.push(
                  new domain_utilities_file_download_request_model__WEBPACK_IMPORTED_MODULE_5__[
                    'FileDownloadRequest'
                  ](filename, subscription)
                );
                try {
                  const blob = yield blobPromise;
                  this.assetsCache.set(filename, blob);
                  if (
                    assetType ===
                    app_constants__WEBPACK_IMPORTED_MODULE_3__['AppConstants']
                      .ASSET_TYPE_AUDIO
                  ) {
                    return new domain_utilities_audio_file_model__WEBPACK_IMPORTED_MODULE_4__[
                      'AudioFile'
                    ](filename, blob);
                  } else {
                    return new domain_utilities_image_file_model__WEBPACK_IMPORTED_MODULE_6__[
                      'ImageFile'
                    ](filename, blob);
                  }
                } catch (_a) {
                  return Promise.reject(filename);
                } finally {
                  const i = fileDownloadRequests.findIndex(
                    r => r.filename === filename
                  );
                  if (i !== -1) {
                    fileDownloadRequests.splice(i, 1);
                  }
                }
              });
            }
            abortAllCurrentDownloads(assetType) {
              const fileDownloadRequests =
                this.getFileDownloadRequestsByAssetType(assetType);
              fileDownloadRequests.forEach(r => r.subscription.unsubscribe());
              fileDownloadRequests.length = 0;
            }
            getAudioUploadUrl(explorationId) {
              let audioUploadUrl = this.urlInterpolationService.interpolateUrl(
                app_constants__WEBPACK_IMPORTED_MODULE_3__['AppConstants']
                  .AUDIO_UPLOAD_URL_TEMPLATE,
                {
                  exploration_id: explorationId,
                }
              );
              return audioUploadUrl;
            }
            getImageUploadUrl(entityType, entityId) {
              let imageUploadUrl = this.urlInterpolationService.interpolateUrl(
                app_constants__WEBPACK_IMPORTED_MODULE_3__['AppConstants']
                  .IMAGE_UPLOAD_URL_TEMPLATE,
                {entity_type: entityType, entity_id: entityId}
              );
              return imageUploadUrl;
            }
          });
        AssetsBackendApiService.ctorParameters = () => [
          {
            type: services_csrf_token_service__WEBPACK_IMPORTED_MODULE_8__[
              'CsrfTokenService'
            ],
          },
          {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__[
              'HttpClient'
            ],
          },
          {
            type: domain_utilities_url_interpolation_service__WEBPACK_IMPORTED_MODULE_7__[
              'UrlInterpolationService'
            ],
          },
        ];
        AssetsBackendApiService = AssetsBackendApiService_1 = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])({
              providedIn: 'root',
            }),
            __metadata('design:paramtypes', [
              services_csrf_token_service__WEBPACK_IMPORTED_MODULE_8__[
                'CsrfTokenService'
              ],
              _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
              domain_utilities_url_interpolation_service__WEBPACK_IMPORTED_MODULE_7__[
                'UrlInterpolationService'
              ],
            ]),
          ],
          AssetsBackendApiService
        );

        angular
          .module('oppia')
          .factory(
            'AssetsBackendApiService',
            Object(
              _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_2__[
                'downgradeInjectable'
              ]
            )(AssetsBackendApiService)
          );

        /***/
      },

    /***/ G9mq:
      /*!********************************************************************************!*\
  !*** ./core/templates/domain/feature-flag/feature-flag-backend-api.service.ts ***!
  \********************************************************************************/
      /*! exports provided: FeatureFlagBackendApiService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FeatureFlagBackendApiService',
          function () {
            return FeatureFlagBackendApiService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/common/http */ 'tk/3');
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
        /* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/upgrade/static */ 'BBPO');
        /* harmony import */ var domain_feature_flag_feature_status_summary_model__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! domain/feature-flag/feature-status-summary.model */ 'PxPE'
          );
        /* harmony import */ var domain_feature_flag_feature_flag_domain_constants__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! domain/feature-flag/feature-flag-domain.constants */ 'Gk/H'
          );
        /* harmony import */ var domain_feature_flag_feature_flag_model__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! domain/feature-flag/feature-flag.model */ 'lfBC'
          );
        // Copyright 2020 The Oppia Authors. All Rights Reserved.
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
        var __awaiter =
          (undefined && undefined.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : adopt(result.value).then(fulfilled, rejected);
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
              );
            });
          };
        /**
         * @fileoverview Service to get feature flags.
         */

        let FeatureFlagBackendApiService = class FeatureFlagBackendApiService {
          constructor(http) {
            this.http = http;
          }
          /**
           * Gets the feature flags.
           *
           * @returns {Promise<FeatureStatusSummary>} - A promise that resolves to
           * the feature status summary.
           */
          fetchFeatureFlags() {
            return __awaiter(this, void 0, void 0, function* () {
              const backendDict = yield this.http
                .get(
                  domain_feature_flag_feature_flag_domain_constants__WEBPACK_IMPORTED_MODULE_4__[
                    'FeatureFlagDomainConstants'
                  ].FEATURE_FLAGS_EVALUATION_HANDLER_URL
                )
                .toPromise();
              return domain_feature_flag_feature_status_summary_model__WEBPACK_IMPORTED_MODULE_3__[
                'FeatureStatusSummary'
              ].createFromBackendDict(backendDict);
            });
          }
          /**
           * Gets the feature flags to display on release-coordinator page.
           *
           * @returns {Promise<FeatureFlagsResponse>} - A promise that resolves to
           * the feature flag response.
           */
          getFeatureFlags() {
            return __awaiter(this, void 0, void 0, function* () {
              return new Promise((resolve, reject) => {
                this.http
                  .get(
                    domain_feature_flag_feature_flag_domain_constants__WEBPACK_IMPORTED_MODULE_4__[
                      'FeatureFlagDomainConstants'
                    ].FEATURE_FLAGS_URL
                  )
                  .toPromise()
                  .then(
                    response => {
                      resolve({
                        featureFlags: response.feature_flags.map(dict =>
                          domain_feature_flag_feature_flag_model__WEBPACK_IMPORTED_MODULE_5__[
                            'FeatureFlag'
                          ].createFromBackendDict(dict)
                        ),
                        serverStage: response.server_stage,
                      });
                    },
                    errorResponse => {
                      reject(errorResponse.error.error);
                    }
                  );
              });
            });
          }
          /**
           * Update feature flag present on release-coordinator page.
           */
          updateFeatureFlag(
            name,
            forceEnableForAllUsers,
            rolloutPercentage,
            userGroupIds
          ) {
            return __awaiter(this, void 0, void 0, function* () {
              yield this.http
                .put(
                  domain_feature_flag_feature_flag_domain_constants__WEBPACK_IMPORTED_MODULE_4__[
                    'FeatureFlagDomainConstants'
                  ].FEATURE_FLAGS_URL,
                  {
                    action:
                      domain_feature_flag_feature_flag_domain_constants__WEBPACK_IMPORTED_MODULE_4__[
                        'FeatureFlagDomainConstants'
                      ].UPDATE_FEATURE_FLAG_ACTION,
                    feature_flag_name: name,
                    force_enable_for_all_users: forceEnableForAllUsers,
                    rollout_percentage: rolloutPercentage,
                    user_group_ids: userGroupIds,
                  }
                )
                .toPromise();
            });
          }
        };
        FeatureFlagBackendApiService.ctorParameters = () => [
          {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__[
              'HttpClient'
            ],
          },
        ];
        FeatureFlagBackendApiService = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])({
              providedIn: 'root',
            }),
            __metadata('design:paramtypes', [
              _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
            ]),
          ],
          FeatureFlagBackendApiService
        );

        angular
          .module('oppia')
          .factory(
            'FeatureFlagBackendApiService',
            Object(
              _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_2__[
                'downgradeInjectable'
              ]
            )(FeatureFlagBackendApiService)
          );

        /***/
      },

    /***/ 'Gk/H':
      /*!*****************************************************************************!*\
  !*** ./core/templates/domain/feature-flag/feature-flag-domain.constants.ts ***!
  \*****************************************************************************/
      /*! exports provided: FeatureFlagDomainConstants */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FeatureFlagDomainConstants',
          function () {
            return FeatureFlagDomainConstants;
          }
        );
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
         * @fileoverview Constants for feature flag domain.
         */
        const FeatureFlagDomainConstants = {
          // Url for the dummy backend handler gated by the
          // dummy_feature_flag_for_e2e_tests.
          DUMMY_HANDLER_URL: '/feature_flag_dummy_handler',
          // Url for the backend handler for evaluation of platform features.
          FEATURE_FLAGS_EVALUATION_HANDLER_URL:
            '/feature_flags_evaluation_handler',
          // Url for the backend handler to perform actions for feature flags.
          FEATURE_FLAGS_URL: '/feature_flags',
          // Action name for request to the admin handler that updates the rules
          // of feature flags.
          UPDATE_FEATURE_FLAG_ACTION: 'update_feature_flag',
        };

        /***/
      },

    /***/ 'K+ee':
      /*!**************************************************************!*\
  !*** ./core/templates/pages/oppia-root/app-error-handler.ts ***!
  \**************************************************************/
      /*! exports provided: AppErrorHandler, AppErrorHandlerProvider */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AppErrorHandler',
          function () {
            return AppErrorHandler;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AppErrorHandlerProvider',
          function () {
            return AppErrorHandlerProvider;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/common/http */ 'tk/3');
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
        /* harmony import */ var services_contextual_logger_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! services/contextual/logger.service */ '3eoD');
        // Copyright 2022 The Oppia Authors. All Rights Reserved.
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
         * @fileoverview Error handler for frontend.
         */
        // This infrastructure file needs to use HttpClient. The general rule restricts
        // such imports to only be used in backend-api.service.ts files, but we cannot
        // use these here because we are explicitly specifying the dependencies of a
        // provider, which cannot be done using a injectable (service).
        // eslint-disable-next-line oppia/disallow-httpclient

        class AppErrorHandler extends _angular_core__WEBPACK_IMPORTED_MODULE_1__[
          'ErrorHandler'
        ] {
          constructor(http, loggerService) {
            super();
            this.http = http;
            this.loggerService = loggerService;
            this.UNHANDLED_REJECTION_STATUS_CODE_REGEX =
              /Possibly unhandled rejection: {.*"status":-1/;
            this.MIN_TIME_BETWEEN_ERRORS_MSEC = 5000;
            this.timeOfLastPostedError =
              Date.now() - this.MIN_TIME_BETWEEN_ERRORS_MSEC;
          }
          handleError(error) {
            if (
              AppErrorHandler.EXPECTED_ERROR_CODES.includes(
                // The firebase.auth.Error is not compatible with javascript's Error type.
                // That's why explicit type conversion is used here.
                error.code
              )
            ) {
              return;
            }
            // Suppress unhandled rejection errors status code -1, because -1 is the
            // status code for aborted requests.
            if (
              this.UNHANDLED_REJECTION_STATUS_CODE_REGEX.test(error.message)
            ) {
              return;
            }
            let errorType = Object.prototype.toString.call(error);
            if (
              errorType !== '[object Error]' &&
              errorType !== '[object DOMException]' &&
              !(errorType instanceof Error)
            ) {
              // The error passed to this handler in some cases does not provide
              // a meaningful stack trace of the exception. Different browsers set
              // this value at different times. To ensure that the stack property is
              // populated we use try/catch.
              // see: https://web.archive.org/web/20140210004225/http://msdn.microsoft.com/en-us/library/windows/apps/hh699850.aspx
              try {
                throw new Error(`${error}`);
              } catch (errorInstance) {
                error = errorInstance;
              }
            }
            let messageAndStackTrace = [
              '',
              error.message,
              '',
              '    at URL: ' + window.location.href,
            ].join('\n');
            let timeDifference = Date.now() - this.timeOfLastPostedError;
            // To prevent an overdose of errors, throttle to at most 1 error
            // every MIN_TIME_BETWEEN_ERRORS_MSEC.
            if (timeDifference > this.MIN_TIME_BETWEEN_ERRORS_MSEC) {
              this.http
                .post('/frontend_errors', {
                  error: messageAndStackTrace,
                })
                .toPromise()
                .then(
                  () => {
                    this.timeOfLastPostedError = Date.now();
                  },
                  () => {
                    this.loggerService.warn('Error logging failed.');
                  }
                );
            }
            this.loggerService.error(error.message);
            super.handleError(error);
          }
        }
        // AngularFire throws duplicate errors because it uses setTimeout() to manage
        // promises internally. Errors thrown from those setTimeout() calls are not
        // accessible to our code. Because of this, even though LoginPageComponent
        // catches errors thrown by AngularFire, their duplicates are treated as
        // "Unhandled Promise Rejections" and result in top-level error messages.
        //
        // To prevent these errors from interfering with end-to-end tests and from
        // polluting the server, we ignore the following list of EXPECTED error codes.
        AppErrorHandler.EXPECTED_ERROR_CODES = [
          // Users pending deletion have their Firebase accounts disabled. When they
          // try to sign in anyway, we redirect them to the /pending-account-deletion
          // page.
          'auth/user-disabled',
          // In emulator mode we use signInWithEmailAndPassword() and, if that throws
          // an 'auth/user-not-found' error, createUserWithEmailAndPassword() for
          // convenience. In production mode we use signInWithRedirect(), which
          // doesn't throw 'auth/user-not-found' because it handles both signing in
          // and creating users in the same way.
          'auth/user-not-found',
        ];
        const AppErrorHandlerProvider = {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__['ErrorHandler'],
          useClass: AppErrorHandler,
          deps: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
            services_contextual_logger_service__WEBPACK_IMPORTED_MODULE_2__[
              'LoggerService'
            ],
          ],
        };

        /***/
      },

    /***/ KJCt:
      /*!*****************************************************************************************!*\
  !*** ./core/templates/pages/lightweight-oppia-root/lightweight-oppia-root.component.ts ***!
  \*****************************************************************************************/
      /*! exports provided: LightweightOppiaRootComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'LightweightOppiaRootComponent',
          function () {
            return LightweightOppiaRootComponent;
          }
        );
        /* harmony import */ var _raw_loader_lightweight_oppia_root_component_html__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! raw-loader!./lightweight-oppia-root.component.html */ 'NOmm'
          );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
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
         * @fileoverview Oppia root component.
         */

        let LightweightOppiaRootComponent = class LightweightOppiaRootComponent {};
        LightweightOppiaRootComponent = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Component'])({
              selector: 'lightweight-oppia-root',
              template:
                _raw_loader_lightweight_oppia_root_component_html__WEBPACK_IMPORTED_MODULE_0__[
                  'default'
                ],
            }),
          ],
          LightweightOppiaRootComponent
        );

        /***/
      },

    /***/ LNMK:
      /*!*************************************!*\
  !*** ./core/templates/Polyfills.ts ***!
  \*************************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var globalthis_auto__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! globalthis/auto */ 'kx12');
        /* harmony import */ var globalthis_auto__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            globalthis_auto__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var proxy_polyfill__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! proxy-polyfill */ 'KEVk');
        /* harmony import */ var proxy_polyfill__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            proxy_polyfill__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _webcomponents_custom_elements__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @webcomponents/custom-elements */ 'aVe3');
        /* harmony import */ var _webcomponents_custom_elements__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _webcomponents_custom_elements__WEBPACK_IMPORTED_MODULE_2__
          );
        // Copyright 2020 The Oppia Authors. All Rights Reserved.
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
        var __awaiter =
          (undefined && undefined.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : adopt(result.value).then(fulfilled, rejected);
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
              );
            });
          };
        /**
         * @fileoverview Polyfills for Oppia.
         */

        // Add a String.prototype.trim() polyfill for IE8.
        if (typeof String.prototype.trim !== 'function') {
          String.prototype.trim = function () {
            return this.replace(/^\s+|\s+$/g, '');
          };
        }
        // Add an Object.create() polyfill for IE8.
        if (typeof Object.create !== 'function') {
          (function () {
            var F = function () {};
            Object.create = function (o) {
              if (arguments.length > 1) {
                throw new Error(
                  'Second argument for Object.create() is not supported'
                );
              }
              if (o === null) {
                throw new Error('Cannot set a null [[Prototype]]');
              }
              if (typeof o !== 'object') {
                throw new TypeError('Argument must be an object');
              }
              F.prototype = o;
              return new F();
            };
          })();
        }
        // Add a Number.isInteger() polyfill for IE.
        Number.isInteger =
          Number.isInteger ||
          function (value) {
            return (
              typeof value === 'number' &&
              isFinite(value) &&
              Math.floor(value) === value
            );
          };
        // Add Array.fill() polyfill for IE.
        if (!Array.prototype.fill) {
          Object.defineProperty(Array.prototype, 'fill', {
            value: function (value) {
              // Steps 1-2.
              if (this === null) {
                throw new TypeError('this is null or not defined');
              }
              var O = Object(this);
              // Steps 3-5.
              var len = O.length >>> 0;
              // Steps 6-7.
              var start = arguments[1];
              var relativeStart = start >> 0;
              // Step 8.
              var k =
                relativeStart < 0
                  ? Math.max(len + relativeStart, 0)
                  : Math.min(relativeStart, len);
              // Steps 9-10.
              var end = arguments[2];
              var relativeEnd = end === undefined ? len : end >> 0;
              // Step 11.
              var final =
                relativeEnd < 0
                  ? Math.max(len + relativeEnd, 0)
                  : Math.min(relativeEnd, len);
              // Step 12.
              while (k < final) {
                O[k] = value;
                k++;
              }
              // Step 13.
              return O;
            },
          });
        }
        // Add SVGElement.prototype.outerHTML polyfill for IE.
        if (!('outerHTML' in SVGElement.prototype)) {
          Object.defineProperty(SVGElement.prototype, 'outerHTML', {
            get: function () {
              var $node, $temp;
              $temp = document.createElement('div');
              $node = this.cloneNode(true);
              $temp.appendChild($node);
              return $temp.innerHTML;
            },
            enumerable: false,
            configurable: true,
          });
        }
        // Older browsers might not implement mediaDevices at all,
        // so we set an empty object first.
        if (navigator.mediaDevices === undefined) {
          // This throws "Cannot assign to 'mediaDevices' because it
          // is a read-only property.". We need to suppress this error because some
          // browsers may not have this property at all. So, we need to set it to
          // an empty object.
          // @ts-ignore
          navigator.mediaDevices = {};
        }
        // Some browsers partially implement mediaDevices.
        // We can't just assign an object with getUserMedia
        // as it would overwrite existing properties.
        // Here, we will just add the getUserMedia property
        // if it's missing.
        if (navigator.mediaDevices.getUserMedia === undefined) {
          navigator.mediaDevices.getUserMedia = function (constraints) {
            return __awaiter(this, void 0, void 0, function* () {
              // First get ahold of the legacy getUserMedia, if present.
              var getUserMedia =
                // This throws "Property 'webkitGetUserMedia' does not exist on
                // type 'Navigator'." This is because this API is deprecated.
                // (https://developer.mozilla.org/en-US/docs/Web/API/Navigator
                // /getUserMedia). We need to suppress this error because some browsers
                // still have this functionality.
                // @ts-ignore
                navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
              // If getUserMedia is not implemented, return a rejected promise
              // with an error to keep a consistent interface.
              if (!getUserMedia) {
                return Promise.reject(
                  new Error('getUserMedia is not implemented in this browser')
                );
              }
              // Otherwise, wrap the call to the old navigator.getUserMedia
              // with a Promise.
              return new Promise(function (resolve, reject) {
                getUserMedia.call(navigator, constraints, resolve, reject);
              });
            });
          };
        }
        // Object.entries() polyfill for Chrome 53 and below.
        if (!Object.entries) {
          Object.entries = obj => {
            let objectProperties = Object.keys(obj);
            let i = objectProperties.length;
            let objectEntriesArray = new Array(i); // Preallocate the array.
            while (i--) {
              objectEntriesArray[i] = [
                objectProperties[i],
                obj[objectProperties[i]],
              ];
              return objectEntriesArray;
            }
          };
        }

        /***/
      },

    /***/ MAh8:
      /*!******************************************!*\
  !*** ./core/templates/pages/mock-ajs.ts ***!
  \******************************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
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
         * @fileoverview Mock angular object for pages that don't use AngularJS.
         */
        /**
         * We are at a stage where we can have some pages in Angular. But we share
         * component in between pages. So we can't remove the code that downgrades
         * components and services. This code is found in most Angular components and
         * services (towards the end of the file). In order to not have to create a
         * separate file for each service and component just for the sake of downgrading
         * , we have created this mock AngularJS object that will be used in the pages
         * that don't use AngularJS.
         */
        // TODO(#13080): Remove the mock-ajs.ts file after the migration is complete.

        let mockAngular = {
          $$minErr: () => mockAngular,
          component: () => mockAngular,
          config: () => mockAngular,
          constant: () => mockAngular,
          controller: () => mockAngular,
          directive: () => mockAngular,
          factory: () => mockAngular,
          filter: () => mockAngular,
          info: () => mockAngular,
          module: () => mockAngular,
          provider: () => mockAngular,
          requires: () => [],
          run: () => mockAngular,
          service: () => mockAngular,
          value: () => mockAngular,
          version: _angular_core__WEBPACK_IMPORTED_MODULE_0__['VERSION'],
        };
        // This throws "Property 'angular' does not exist on type 'Window & typeof
        // globalThis'." when the `as unknown as ...` is not used.
        window.angular = mockAngular;

        /***/
      },

    /***/ NOmm:
      /*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/raw-loader/dist/cjs.js!./core/templates/pages/lightweight-oppia-root/lightweight-oppia-root.component.html ***!
  \****************************************************************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__['default'] =
          '<router-outlet custom="light"></router-outlet>\n';

        /***/
      },

    /***/ 'Nk/g':
      /*!****************************************************************!*\
  !*** ./core/templates/services/request-interceptor.service.ts ***!
  \****************************************************************/
      /*! exports provided: RequestInterceptor */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'RequestInterceptor',
          function () {
            return RequestInterceptor;
          }
        );
        /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! rxjs */ 'qCKp');
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
        /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! rxjs/operators */ 'kU1M');
        /* harmony import */ var _csrf_token_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./csrf-token.service */ 'Ep4r');
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
        var __metadata =
          (undefined && undefined.__metadata) ||
          function (k, v) {
            if (
              typeof Reflect === 'object' &&
              typeof Reflect.metadata === 'function'
            )
              return Reflect.metadata(k, v);
          };
        var RequestInterceptor_1;
        /**
         * @fileoverview Http Interceptor.
         */

        let RequestInterceptor =
          (RequestInterceptor_1 = class RequestInterceptor {
            constructor(csrf) {
              this.csrf = csrf;
            }
            intercept(request, next) {
              var csrf = this.csrf;
              try {
                csrf.initializeToken();
                // We use unknown type because we are unsure of the type of error
                // that was thrown. Since the catch block cannot identify the
                // specific type of error, we are unable to further optimise the
                // code by introducing more types of errors.
              } catch (e) {
                if (
                  e instanceof Error &&
                  e.message !== 'Token request has already been made'
                ) {
                  throw e;
                }
              }
              RequestInterceptor_1.checkForNullParams(request);
              if (request.body) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__['from'])(
                  this.csrf.getTokenAsync()
                ).pipe(
                  Object(
                    rxjs_operators__WEBPACK_IMPORTED_MODULE_2__['switchMap']
                  )(token => {
                    if (request.method === 'POST' || request.method === 'PUT') {
                      // If the body of the http request created is already in FormData
                      // form, no need to create the FormData object here.
                      if (!(request.body instanceof FormData)) {
                        var body = new FormData();
                        body.append('payload', JSON.stringify(request.body));
                        // This throws "Cannot assign to 'body' because it is a
                        // read-only property". We need to suppress this error because
                        // this is a request interceptor and we need to modify the
                        // contents of the request.
                        // @ts-ignore
                        request.body = body;
                      }
                      request.body.append('csrf_token', token);
                      request.body.append('source', document.URL);
                    } else {
                      // This throws "Cannot assign to 'body' because it is a
                      // read-only property". We need to suppress this error because
                      // this is a request interceptor and we need to modify the
                      // contents of the request.
                      // @ts-ignore
                      request.body = {
                        csrf_token: token,
                        source: document.URL,
                        payload: JSON.stringify(request.body),
                      };
                    }
                    return next.handle(request);
                  })
                );
              } else {
                return next.handle(request);
              }
            }
            static checkForNullParams(request) {
              // We only disallow null params for GET and DELETE requests.
              if (request.method !== 'GET' && request.method !== 'DELETE') {
                return;
              }
              request.params.keys().forEach(key => {
                var _a;
                (_a = request.params.getAll(key)) === null || _a === void 0
                  ? void 0
                  : _a.forEach(value => {
                      if (value === 'null' || value === 'None') {
                        throw new Error(
                          'Cannot supply params with value "None" or "null".'
                        );
                      }
                    });
              });
            }
          });
        RequestInterceptor.ctorParameters = () => [
          {
            type: _csrf_token_service__WEBPACK_IMPORTED_MODULE_3__[
              'CsrfTokenService'
            ],
          },
        ];
        RequestInterceptor = RequestInterceptor_1 = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])({
              providedIn: 'root',
            }),
            __metadata('design:paramtypes', [
              _csrf_token_service__WEBPACK_IMPORTED_MODULE_3__[
                'CsrfTokenService'
              ],
            ]),
          ],
          RequestInterceptor
        );

        /***/
      },

    /***/ PiPN:
      /*!*************************************************************!*\
  !*** ./core/templates/services/user-backend-api.service.ts ***!
  \*************************************************************/
      /*! exports provided: UserBackendApiService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'UserBackendApiService',
          function () {
            return UserBackendApiService;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/common/http */ 'tk/3');
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
        /* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/upgrade/static */ 'BBPO');
        /* harmony import */ var domain_user_user_info_model__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! domain/user/user-info.model */ 'v1VX');
        // Copyright 2018 The Oppia Authors. All Rights Reserved.
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
        var __awaiter =
          (undefined && undefined.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : adopt(result.value).then(fulfilled, rejected);
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
              );
            });
          };
        /**
         * @fileoverview Service for user data.
         */

        let UserBackendApiService = class UserBackendApiService {
          constructor(http) {
            this.http = http;
            this.USER_INFO_URL = '/userinfohandler';
            this.PREFERENCES_DATA_URL = '/preferenceshandler/data';
            this.USER_CONTRIBUTION_RIGHTS_DATA_URL =
              '/usercontributionrightsdatahandler';
            this.SITE_LANGUAGE_URL = '/save_site_language';
          }
          getUserInfoAsync() {
            return __awaiter(this, void 0, void 0, function* () {
              return this.http
                .get(this.USER_INFO_URL)
                .toPromise()
                .then(backendDict => {
                  return backendDict.user_is_logged_in
                    ? domain_user_user_info_model__WEBPACK_IMPORTED_MODULE_3__[
                        'UserInfo'
                      ].createFromBackendDict(backendDict)
                    : domain_user_user_info_model__WEBPACK_IMPORTED_MODULE_3__[
                        'UserInfo'
                      ].createDefault();
                });
            });
          }
          setProfileImageDataUrlAsync(newProfileImageDataUrl) {
            return __awaiter(this, void 0, void 0, function* () {
              return this.updateMultiplePreferencesDataAsync([
                {
                  update_type: 'profile_picture_data_url',
                  data: newProfileImageDataUrl,
                },
              ]);
            });
          }
          getLoginUrlAsync(currentUrl) {
            return __awaiter(this, void 0, void 0, function* () {
              const urlParameters = {
                current_url: currentUrl,
              };
              return this.http
                .get('/url_handler', {params: urlParameters})
                .toPromise()
                .then(backendDict => {
                  return backendDict.login_url;
                });
            });
          }
          getUserContributionRightsDataAsync() {
            return __awaiter(this, void 0, void 0, function* () {
              return this.http
                .get(this.USER_CONTRIBUTION_RIGHTS_DATA_URL)
                .toPromise();
            });
          }
          updatePreferredSiteLanguageAsync(currentLanguageCode) {
            return __awaiter(this, void 0, void 0, function* () {
              return this.http
                .put(this.SITE_LANGUAGE_URL, {
                  site_language_code: currentLanguageCode,
                })
                .toPromise();
            });
          }
          getPreferencesAsync() {
            return __awaiter(this, void 0, void 0, function* () {
              return this.http.get(this.PREFERENCES_DATA_URL).toPromise();
            });
          }
          updateMultiplePreferencesDataAsync(updates) {
            return __awaiter(this, void 0, void 0, function* () {
              return this.http
                .put(this.PREFERENCES_DATA_URL, {
                  updates: updates,
                })
                .toPromise();
            });
          }
        };
        UserBackendApiService.ctorParameters = () => [
          {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__[
              'HttpClient'
            ],
          },
        ];
        UserBackendApiService = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])({
              providedIn: 'root',
            }),
            __metadata('design:paramtypes', [
              _angular_common_http__WEBPACK_IMPORTED_MODULE_0__['HttpClient'],
            ]),
          ],
          UserBackendApiService
        );

        angular
          .module('oppia')
          .factory(
            'UserBackendApiService',
            Object(
              _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_2__[
                'downgradeInjectable'
              ]
            )(UserBackendApiService)
          );

        /***/
      },

    /***/ PxPE:
      /*!****************************************************************************!*\
  !*** ./core/templates/domain/feature-flag/feature-status-summary.model.ts ***!
  \****************************************************************************/
      /*! exports provided: FeatureNames, FeatureStatusSummary */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FeatureNames',
          function () {
            return FeatureNames;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FeatureStatusSummary',
          function () {
            return FeatureStatusSummary;
          }
        );
        // Copyright 2020 The Oppia Authors. All Rights Reserved.
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
         * @fileoverview Factory model for FeatureStatusSummary.
         */
        /**
         * Names of all feature flags should be defined here, with format:
         * FeatureName = 'feature_name', where the LHS is the feature name in
         * PascalCase, and the RHS is in snake_case, which is the naming convention
         * of features in the backend.
         */
        var FeatureNames;
        (function (FeatureNames) {
          FeatureNames['DummyFeatureFlagForE2ETests'] =
            'dummy_feature_flag_for_e2e_tests';
          FeatureNames['EndChapterCelebration'] = 'end_chapter_celebration';
          FeatureNames['CheckpointCelebration'] = 'checkpoint_celebration';
          FeatureNames['DiagnosticTest'] = 'diagnostic_test';
          FeatureNames['SerialChapterLaunchCurriculumAdminView'] =
            'serial_chapter_launch_curriculum_admin_view';
          FeatureNames['SerialChapterLaunchLearnerView'] =
            'serial_chapter_launch_learner_view';
          FeatureNames['ShowTranslationSize'] = 'show_translation_size';
          FeatureNames['ShowFeedbackUpdatesInProfilePicDropdownMenu'] =
            'show_feedback_updates_in_profile_pic_dropdown';
          FeatureNames['ShowRedesignedLearnerDashboard'] =
            'show_redesigned_learner_dashboard';
          FeatureNames['IsImprovementsTabEnabled'] =
            'is_improvements_tab_enabled';
          FeatureNames['LearnerGroupsAreEnabled'] =
            'learner_groups_are_enabled';
          FeatureNames['CdAdminDashboardNewUi'] = 'cd_admin_dashboard_new_ui';
          FeatureNames['NewLessonPlayer'] = 'new_lesson_player';
          FeatureNames['AddVoiceoverWithAccent'] = 'add_voiceover_with_accent';
          FeatureNames['CdAllowUndoingTranslationReview'] =
            'cd_allow_undoing_translation_review';
          FeatureNames['EnableVoiceoverContribution'] =
            'enable_voiceover_contribution';
          FeatureNames['AutoUpdateExpVoiceArtistLink'] =
            'auto_update_exp_voice_artist_link';
          FeatureNames['ExplorationEditorCanModifyTranslations'] =
            'exploration_editor_can_modify_translations';
          FeatureNames['ExplorationEditorCanTagMisconceptions'] =
            'exploration_editor_can_tag_misconceptions';
          FeatureNames['EnableMultipleClassrooms'] =
            'enable_multiple_classrooms';
          FeatureNames['RedesignedTopicViewerPage'] =
            'redesigned_topic_viewer_page';
        })(FeatureNames || (FeatureNames = {}));
        /**
         * Item of the status checker of feature flags, which represents the status of
         * one feature flag, providing the '.isEnabled' interface to check the status
         * of that feature flag.
         */
        class FeatureStatusCheckerItem {
          /**
           * Constructor of the FeatureStatusCheckerDictItem class.
           *
           * @param {() => boolean} getterFn - Function that returns the status of
           *     the feature.
           */
          constructor(getterFn) {
            this.getterFn = getterFn;
          }
          /**
           * Checks if the feature is enabled.
           *
           * @returns {boolean} - True if the feature is enabled.
           */
          get isEnabled() {
            return this.getterFn();
          }
        }
        /**
         * Represents the evaluation result summary of all feature flags received from
         * the server. This is used only in the frontend feature value retrieval.
         */
        class FeatureStatusSummary {
          constructor(backendDict) {
            this.featureNameToFlag = new Map(Object.entries(backendDict));
          }
          static createFromBackendDict(backendDict) {
            return new FeatureStatusSummary(backendDict);
          }
          /**
           * Creates a default FeatureStatusSummary object such that all features are
           * disabled.
           *
           * @returns {FeatureStatusSummary} - The FeatureStatusSummary object instance
           *     with all feature disabled.
           */
          static createDefault() {
            const defaultDict = {};
            const featureNamesKeys = Object.keys(FeatureNames);
            featureNamesKeys.forEach(
              name => (defaultDict[FeatureNames[name]] = false)
            );
            return this.createFromBackendDict(defaultDict);
          }
          /**
           * Creates a dict representation of the instance.
           *
           * @returns {FeatureStatusSummaryBackendDict} - The dict representation
           * of the instance.
           */
          toBackendDict() {
            const backendDict = {};
            for (const [key, value] of this.featureNameToFlag.entries()) {
              backendDict[key] = value;
            }
            return backendDict;
          }
          /**
           * Construct and returns the feature status checker.
           *
           * @returns {FeatureStatusChecker} - The feature status checker.
           */
          toStatusChecker() {
            const checker = {};
            const featureNamesKeys = Object.keys(FeatureNames);
            featureNamesKeys.forEach(name => {
              Object.defineProperty(checker, name, {
                value: new FeatureStatusCheckerItem(() =>
                  this.isFeatureEnabled(FeatureNames[name])
                ),
              });
            });
            return checker;
          }
          /**
           * Gets the value of a feature flag in the result.
           *
           * @param {string} featureName - The name of the feature.
           *
           * @returns {boolean} - The value of the feature flag, true if enabled.
           * @throws {Error} - If the feature with the specified name doesn't exist.
           */
          isFeatureEnabled(featureName) {
            const isEnabled = this.featureNameToFlag.get(featureName);
            if (isEnabled === undefined) {
              throw new Error(`Feature '${featureName}' does not exist.`);
            }
            return isEnabled;
          }
        }

        /***/
      },

    /***/ RY2A:
      /*!**************************************************!*\
  !*** ./core/templates/services/utils.service.ts ***!
  \**************************************************/
      /*! exports provided: UtilsService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'UtilsService',
          function () {
            return UtilsService;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
        /* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/upgrade/static */ 'BBPO');
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
        /**
         * @fileoverview Service for storing all generic functions which have to be
         * used at multiple places in the codebase.
         */

        let UtilsService = class UtilsService {
          /**
           * Determines if a variable is defined and not null.
           * @param {Object, Array<Object>, string, string[], undefined, null}value
           * @return {boolean} - true if object is defined, false otherwise.
           */
          isDefined(value) {
            return typeof value !== 'undefined' && value !== null;
          }
          // The function here is to check whether the argument is empty or not. So, we
          // cannot have any specific type defined for the argument and the argument
          // is given a generic type of Object.
          /**
           * @param {Object} obj - the object to be checked.
           * @return {boolean} - true if object is empty, false otherwise.
           */
          isEmpty(obj) {
            for (var property in obj) {
              if (obj.hasOwnProperty(property)) {
                return false;
              }
            }
            return true;
          }
          // The function here is to check whether the argument is a string. So, we
          // cannot have any specific type defined for the argument and the argument
          // is given a generic type of Object.
          /**
           * @param {Object} input - the object to be checked.
           * @return {boolean} - true if input is string, false otherwise.
           */
          isString(input) {
            return typeof input === 'string' || input instanceof String;
          }
          // The function here is to check whether the two arguments are equivalent or
          // not empty or not. So, we cannot have any specific type defined for the
          // arguments and the arguments are given a generic type of Object.
          /**
           * @param {Object} a - the first object to be compared.
           * @param {Object} b - the second object to be compared.
           * @return {boolean} - true if a is equivalent to b, false otherwise.
           */
          isEquivalent(a, b) {
            if (a === null || b === null) {
              return a === b;
            }
            if (typeof a !== typeof b) {
              return false;
            }
            if (typeof a !== 'object') {
              return a === b;
            }
            // Create arrays of property names.
            var aProps = Object.getOwnPropertyNames(a);
            var bProps = Object.getOwnPropertyNames(b);
            if (aProps.length !== bProps.length) {
              return false;
            }
            // The indexing of an Object with a string implicitly returns
            // 'any' type. This issue is solved according to
            // https://github.com/microsoft/TypeScript/issues/35859.
            // Additionally a cast was added to the Record type in order not
            // to modify the structure of the Object interface.
            for (var i = 0; i < aProps.length; i++) {
              var propName = aProps[i];
              const getKeyValue = key => obj => obj[key];
              if (
                !this.isEquivalent(
                  getKeyValue(propName)(a),
                  getKeyValue(propName)(b)
                )
              ) {
                return false;
              }
            }
            return true;
          }
          // Determines if the provided value is an Error.
          // Loosely based on https://www.npmjs.com/package/iserror
          /**
           * @param {Object} value - the object to be checked.
           * @return {boolean} - true if value is an Error object, false otherwise.
           */
          isError(value) {
            switch (Object.prototype.toString.call(value)) {
              case '[object Error]':
                return true;
              case '[object DOMException]':
                return true;
              default:
                return value instanceof Error;
            }
          }
          isOverflowing(element) {
            if (!element) {
              return false;
            } else {
              return (
                element.offsetWidth < element.scrollWidth ||
                element.offsetHeight < element.scrollHeight
              );
            }
          }
          // Determines whether the URL is pointing to a page on the Oppia site.
          getSafeReturnUrl(urlString) {
            try {
              // Make sure the URL can be decoded properly.
              urlString = decodeURIComponent(urlString);
            } catch (_) {
              // The URL could not be decoded, so reject it and return '/' instead.
              return '/';
            }
            try {
              // Throws an exception when the URL does not have a scheme.
              const url = new URL(urlString);
              // Does this URL originate from this website?
              if (
                url.origin !== new URL(document.URL, document.baseURI).origin
              ) {
                // This is an external URL, so reject it and return '/' instead.
                return '/';
              }
            } catch (_) {
              // Continue to the next validation strategy.
            }
            try {
              // Throws an exception if the URL is truly malformed in some way.
              new URL(urlString, document.baseURI);
            } catch (_) {
              // This is a truly malformed URL, so reject it and return '/' instead.
              return '/';
            }
            if (urlString.charAt(0) !== '/' || urlString.charAt(1) === '/') {
              // The URL is not a relative path, so reject it and return '/' instead.
              return '/';
            } else {
              // The URL is a safe, relative path.
              return urlString;
            }
          }
        };
        UtilsService = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])({
              providedIn: 'root',
            }),
          ],
          UtilsService
        );

        angular
          .module('oppia')
          .factory(
            'UtilsService',
            Object(
              _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_1__[
                'downgradeInjectable'
              ]
            )(UtilsService)
          );

        /***/
      },

    /***/ U4ot:
      /*!***************************************************!*\
  !*** ./core/templates/services/alerts.service.ts ***!
  \***************************************************/
      /*! exports provided: AlertsService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AlertsService',
          function () {
            return AlertsService;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
        /* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/upgrade/static */ 'BBPO');
        /* harmony import */ var services_contextual_logger_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! services/contextual/logger.service */ '3eoD');
        // Copyright 2016 The Oppia Authors. All Rights Reserved.
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
        var AlertsService_1;
        /**
         * @fileoverview Factory for handling warnings and info messages.
         */

        let AlertsService = (AlertsService_1 = class AlertsService {
          constructor(log) {
            this.log = log;
            // This is to prevent infinite loops.
            this.MAX_TOTAL_WARNINGS = 10;
            this.MAX_TOTAL_MESSAGES = 10;
            // Since warnings and messages are static, clearing them in the constructor
            // retain "instance-like" behavior.
            this.clearWarnings();
            this.clearMessages();
          }
          get warnings() {
            return AlertsService_1.warnings;
          }
          get messages() {
            return AlertsService_1.messages;
          }
          /**
           * Adds a warning message.
           * @param {string} warning - The warning message to display.
           */
          addWarning(warning) {
            this.log.error(warning);
            if (this.warnings.length >= this.MAX_TOTAL_WARNINGS) {
              return;
            }
            this.warnings.push({
              type: 'warning',
              content: warning,
            });
          }
          /**
           * Adds a warning in the same way as addWarning(), except it also throws an
           * exception to cause a hard failure in the frontend.
           * @param {string} warning - The warning message to display.
           */
          fatalWarning(warning) {
            this.addWarning(warning);
            throw new Error(warning);
          }
          /**
           * Deletes the warning from the warnings list.
           * @param {Object} warningToDelete - The warning message to be deleted.
           */
          deleteWarning(warningToDelete) {
            const filteredWarnings = this.warnings.filter(
              w => w.content !== warningToDelete.content
            );
            this.warnings.splice(0, this.warnings.length, ...filteredWarnings);
          }
          /**
           * Clears all warnings.
           */
          clearWarnings() {
            this.warnings.splice(0, this.warnings.length);
          }
          /**
           * Adds a message, can be info messages or success messages.
           * @param {string} type - Type of message
           * @param {string} message - Message content
           * @param {number|undefined} timeoutMilliseconds - Timeout for the toast.
           */
          addMessage(type, message, timeoutMilliseconds) {
            if (this.messages.length >= this.MAX_TOTAL_MESSAGES) {
              return;
            }
            this.messages.push({
              type: type,
              content: message,
              timeout: timeoutMilliseconds,
            });
          }
          /**
           * Deletes the message from the messages list.
           * @param {Object} messageToDelete - Message to be deleted.
           */
          deleteMessage(messageToDelete) {
            const isMessageToKeep = m =>
              m.type !== messageToDelete.type ||
              m.content !== messageToDelete.content;
            const filteredMessages = this.messages.filter(isMessageToKeep);
            this.messages.splice(0, this.messages.length, ...filteredMessages);
          }
          /**
           * Adds an info message.
           * @param {string} message - Info message to display.
           * @param {number|undefined} timeoutMilliseconds - Timeout for the toast.
           */
          addInfoMessage(message, timeoutMilliseconds) {
            if (timeoutMilliseconds === undefined) {
              timeoutMilliseconds = 1500;
            }
            this.addMessage('info', message, timeoutMilliseconds);
          }
          /**
           * Adds a success message.
           * @param {string} message - Success message to display
           * @param {number|undefined} timeoutMilliseconds - Timeout for the toast.
           */
          addSuccessMessage(message, timeoutMilliseconds) {
            if (timeoutMilliseconds === undefined) {
              timeoutMilliseconds = 3000;
            }
            this.addMessage('success', message, timeoutMilliseconds);
          }
          /**
           * Clears all messages.
           */
          clearMessages() {
            this.messages.splice(0, this.messages.length);
          }
        });
        /**
         * Each element in each of the arrays here is an object with two keys:
         *   - type:  a string specifying the type of message or warning.
         *            Possible types - "warning", "info" or "success".
         *   - content: a string containing the warning or message.
         */
        // TODO(#8472): Remove static when migration is complete.
        // Until then, we need to use static so that the two instances of the service
        // created by our hybrid app (one for Angular, the other for AngularJS) can
        // refer to the same objects.
        AlertsService.warnings = [];
        AlertsService.messages = [];
        AlertsService.ctorParameters = () => [
          {
            type: services_contextual_logger_service__WEBPACK_IMPORTED_MODULE_2__[
              'LoggerService'
            ],
          },
        ];
        AlertsService = AlertsService_1 = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])({
              providedIn: 'root',
            }),
            __metadata('design:paramtypes', [
              services_contextual_logger_service__WEBPACK_IMPORTED_MODULE_2__[
                'LoggerService'
              ],
            ]),
          ],
          AlertsService
        );

        angular
          .module('oppia')
          .factory(
            'AlertsService',
            Object(
              _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_1__[
                'downgradeInjectable'
              ]
            )(AlertsService)
          );

        /***/
      },

    /***/ V9QP:
      /*!************************************************!*\
  !*** ./core/templates/pages/common-imports.ts ***!
  \************************************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! core-js/es7/reflect */ 'FZcq');
        /* harmony import */ var core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_es7_reflect__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! zone.js */ '0TWp');
        /* harmony import */ var zone_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            zone_js__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var pages_mock_ajs__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! pages/mock-ajs */ 'MAh8');
        /* harmony import */ var _Polyfills__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ../Polyfills */ 'LNMK');
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
         * @fileoverview Common imports required in all oppia pages.
         */

        // TODO(#13080): Remove the mock-ajs.ts file after the migration is complete.

        /***/
      },

    /***/ WFO7:
      /*!******************************************!*\
  !*** ./core/templates/utility/hashes.ts ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _assets_hashes_json__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ../../../assets/hashes.json */ 'p1/J');
        var _assets_hashes_json__WEBPACK_IMPORTED_MODULE_0___namespace =
          /*#__PURE__*/ __webpack_require__.t(
            /*! ../../../assets/hashes.json */ 'p1/J',
            1
          );
        // Copyright 2022 The Oppia Authors. All Rights Reserved.
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
         * @fileoverview File that exports that hashes that are generated by our build
         * process.
         */
        // Relative path used as an work around to get the angular compiler and webpack
        // build to not complain.
        // Webpack absolute import is just "hashes.json".
        // AoT version is "assets/hashes.json".
        // TODO(#16309): Fix relative imports.

        /* harmony default export */ __webpack_exports__['default'] = {
          _hashes: _assets_hashes_json__WEBPACK_IMPORTED_MODULE_0__,
          get hashes() {
            return _assets_hashes_json__WEBPACK_IMPORTED_MODULE_0__;
          },
        };

        /***/
      },

    /***/ Wxm2:
      /*!***********************************************************!*\
  !*** ./core/templates/services/contextual/url.service.ts ***!
  \***********************************************************/
      /*! exports provided: UrlService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'UrlService',
          function () {
            return UrlService;
          }
        );
        /* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/upgrade/static */ 'BBPO');
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
        /* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! app.constants */ 'DhAQ');
        /* harmony import */ var services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! services/contextual/window-ref.service */ 'AFwG'
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
         * @fileoverview Service for manipulating the page URL. Also allows
         * functions on $window to be mocked in unit tests.
         */

        let UrlService = class UrlService {
          constructor(windowRef) {
            this.windowRef = windowRef;
          }
          /**
           * This function is used to find the current location
           * of the window.
           * @return {boolean} the current location.
           */
          getCurrentLocation() {
            return this.windowRef.nativeWindow.location;
          }
          /**
           * This function is used to find the current query string.
           * @return {boolean} the current query string.
           */
          getCurrentQueryString() {
            return this.getCurrentLocation().search;
          }
          /* As params[key] is overwritten, if query string has multiple fieldValues
       for same fieldName, use getQueryFieldValuesAsList(fieldName) to get it
       in array form. */
          /* This function returns an object which has dynamic keys
     since the keys generated depend on the URL being provided.
    So exact type of this function can not be determined
    https://github.com/oppia/oppia/pull/7834#issuecomment-547896982 */
          getUrlParams() {
            let params = {};
            this.getCurrentQueryString().replace(
              /[?&]+([^=&]+)=([^&]*)/gi,
              function (m, key, value) {
                return (params[decodeURIComponent(key)] =
                  decodeURIComponent(value));
              }
            );
            return params;
          }
          /**
           * This function is used to check whether the url is framed.
           * @return {boolean} whether the url is framed.
           */
          isIframed() {
            let pathname = this.getPathname();
            let urlParts = pathname.split('/');
            return urlParts[1] === 'embed';
          }
          /**
           * This function is used to find the current path name.
           * @return {string} the current path name.
           */
          getPathname() {
            return this.getCurrentLocation().pathname;
          }
          /**
           * This function is used to find the topic id from url.
           * @return {string} the topic id.
           * @throws Will throw an error if the url is invalid.
           */
          getTopicIdFromUrl() {
            let pathname = this.getPathname();
            if (pathname.match(/\/topic_editor\/(\w|-){12}/g)) {
              return pathname.split('/')[2];
            }
            throw new Error('Invalid topic id url');
          }
          /**
           * This function is used to find the topic URL fragment
           * from the learner's url.
           * @return {string} the topic URL fragment.
           * @throws Will throw an error if the url is invalid.
           */
          getTopicUrlFragmentFromLearnerUrl() {
            let pathname = this.getPathname();
            if (pathname.startsWith('/learn')) {
              return decodeURIComponent(pathname.split('/')[3]);
            } else if (pathname.startsWith('/explore')) {
              // The following section is for getting the URL fragment from the
              // exploration player.
              if (
                this.getUrlParams().hasOwnProperty('topic_url_fragment') &&
                this.getUrlParams().topic_url_fragment.match(
                  app_constants__WEBPACK_IMPORTED_MODULE_2__['AppConstants']
                    .VALID_URL_FRAGMENT_REGEX
                )
              ) {
                return this.getUrlParams().topic_url_fragment;
              }
            }
            throw new Error('Invalid URL for topic');
          }
          getStoryUrlFragmentFromLearnerUrl() {
            let pathname = this.getPathname();
            // The following segment is for getting the fragment from the new learner
            // pages.
            if (
              pathname.startsWith('/learn') &&
              pathname.match(/\/story\/|\/review-test\//g)
            ) {
              return decodeURIComponent(pathname.split('/')[5]);
            }
            // The following section is for getting the URL fragment from the
            // exploration player.
            if (pathname.startsWith('/explore')) {
              if (
                this.getUrlParams().hasOwnProperty('story_url_fragment') &&
                this.getUrlParams().story_url_fragment.match(
                  app_constants__WEBPACK_IMPORTED_MODULE_2__['AppConstants']
                    .VALID_URL_FRAGMENT_REGEX
                )
              ) {
                return this.getUrlParams().story_url_fragment;
              }
            }
            // Shouldn't throw an error, since this is called whenever an exploration
            // starts, to check if it is linked to a story.
            return null;
          }
          getSubtopicUrlFragmentFromLearnerUrl() {
            let pathname = this.getPathname();
            if (
              pathname.startsWith('/learn') &&
              pathname.includes('/revision')
            ) {
              return decodeURIComponent(pathname.split('/')[5]);
            }
            throw new Error('Invalid URL for subtopic');
          }
          getClassroomUrlFragmentFromLearnerUrl() {
            let pathname = this.getPathname();
            if (pathname.startsWith('/learn')) {
              return decodeURIComponent(pathname.split('/')[2]);
            } else if (pathname.startsWith('/explore')) {
              // The following section is for getting the URL fragment from the
              // exploration player.
              if (
                this.getUrlParams().hasOwnProperty('classroom_url_fragment') &&
                this.getUrlParams().classroom_url_fragment.match(
                  app_constants__WEBPACK_IMPORTED_MODULE_2__['AppConstants']
                    .VALID_URL_FRAGMENT_REGEX
                )
              ) {
                return this.getUrlParams().classroom_url_fragment;
              }
            }
            throw new Error('Invalid URL for classroom');
          }
          /**
           * This function is used to find the subtopic name from the learner's URL.
           * @return {string} the subtopic name.
           * @throws Will throw an error if the url for practice session is invalid.
           */
          getSelectedSubtopicsFromUrl() {
            let pathname = this.getPathname();
            let queryStrings = this.getCurrentQueryString().split('=');
            if (pathname.match(/\/practice/g) && queryStrings.length === 2) {
              return decodeURIComponent(queryStrings[1]);
            }
            throw new Error('Invalid URL for practice session');
          }
          /**
           * This function is used to find the classroom URL fragment from the learner's
           * URL.
           * @return {string} the classroom URL fragment.
           * @throws Will throw an error if the URL is invalid.
           */
          getClassroomUrlFragmentFromUrl() {
            let pathname = this.getPathname();
            let argumentsArray = pathname.split('/');
            if (pathname.startsWith('/learn') && argumentsArray.length === 3) {
              return decodeURIComponent(pathname.split('/')[2]);
            }
            throw new Error('Invalid URL for classroom');
          }
          /**
           * This function is used to find the subtopic id from the learner's url.
           * @return {string} the subtopic id.
           * @throws Will throw an error if the url is invalid.
           */
          getSubtopicIdFromUrl() {
            let pathname = this.getPathname();
            let argumentsArray = pathname.split('/');
            if (pathname.match(/\/revision/g) && argumentsArray.length === 6) {
              return decodeURIComponent(argumentsArray[5]);
            }
            throw new Error('Invalid URL for subtopic');
          }
          /**
           * This function is used to find the story id from the learner's url.
           * @return {string} the story id.
           * @throws Will Throw an error if the url is invalid.
           */
          getStoryIdFromUrl() {
            let pathname = this.getPathname();
            var matchedPath = pathname.match(
              /\/(story_editor|review-test)\/(\w|-){12}/g
            );
            if (matchedPath) {
              return matchedPath[0].split('/')[2];
            }
            throw new Error('Invalid story id url');
          }
          /**
           * This function is used to find the story id from the viewer's url.
           * @return {string} the story id.
           * @throws Will throw an error if the url is invalid.
           */
          getStoryIdFromViewerUrl() {
            let pathname = this.getPathname();
            if (pathname.match(/\/story\/(\w|-){12}/g)) {
              return pathname.split('/')[5];
            }
            throw new Error('Invalid story id url');
          }
          /**
           * This function is used to find the skill id from the url.
           * @return {string} the skill id.
           * @throws Will throw an error if the skill Id is invalid.
           */
          getSkillIdFromUrl() {
            let pathname = this.getPathname();
            let skillId = pathname.split('/')[2];
            if (skillId.length !== 12) {
              throw new Error('Invalid Skill Id');
            }
            return skillId;
          }
          /**
           * This function is used to find the blog id from the url.
           * @return {string} the blog post id.
           * @throws Will throw an error if the blog post Id is invalid.
           */
          getBlogPostIdFromUrl() {
            let pathname = this.getHash();
            let blogPostId = pathname.split('/')[2];
            if (blogPostId.length !== 12) {
              throw new Error('Invalid Blog Post Id.');
            }
            return blogPostId;
          }
          /**
           * This function is used to find the blog post url fragment from the url.
           * @return {string} the blog post url fragment.
           * @throws Will throw an error if the blog post url is invalid.
           */
          getBlogPostUrlFromUrl() {
            let pathname = this.getPathname();
            let argumentsArray = pathname.split('/');
            if (pathname.startsWith('/blog') && argumentsArray.length === 3) {
              return decodeURIComponent(pathname.split('/')[2]);
            } else {
              throw new Error('Invalid Blog Post Url.');
            }
          }
          /**
           * This function is used to find the blog author username from the url.
           * @return {string} the blog author username fragment.
           * @throws Will throw an error if the url is invalid.
           */
          getBlogAuthorUsernameFromUrl() {
            let pathname = this.getPathname();
            let argumentsArray = pathname.split('/');
            if (
              pathname.startsWith('/blog/author') &&
              argumentsArray.length === 4
            ) {
              return decodeURIComponent(pathname.split('/')[3]);
            } else {
              throw new Error('Invalid Blog Author Profile Page Url.');
            }
          }
          /**
           * This function is used to find the query values as a list.
           * @param {string} fieldName - the name of the field.
           * @return {string[]} the list of query field values.
           */
          getQueryFieldValuesAsList(fieldName) {
            let fieldValues = [];
            if (this.getCurrentQueryString().indexOf('?') > -1) {
              // Each queryItem return one field-value pair in the url.
              let queryItems = this.getCurrentQueryString()
                .slice(this.getCurrentQueryString().indexOf('?') + 1)
                .split('&');
              for (let i = 0; i < queryItems.length; i++) {
                let currentFieldName = decodeURIComponent(
                  queryItems[i].split('=')[0]
                );
                let currentFieldValue = decodeURIComponent(
                  queryItems[i].split('=')[1]
                );
                if (currentFieldName === fieldName) {
                  fieldValues.push(currentFieldValue);
                }
              }
            }
            return fieldValues;
          }
          /**
           * This function is used to combine the url, the field name,
           * and the field value together.
           * @param {string} url - the url.
           * @param {string} fieldName - the field name.
           * @param {string} fieldValue - the field value.
           * @return {string[]} the list of query field values.
           */
          addField(url, fieldName, fieldValue) {
            let encodedFieldValue = encodeURIComponent(fieldValue);
            let encodedFieldName = encodeURIComponent(fieldName);
            return (
              url +
              (url.indexOf('?') !== -1 ? '&' : '?') +
              encodedFieldName +
              '=' +
              encodedFieldValue
            );
          }
          /**
           * This function is used to find the hashed value
           * from the current location.
           */
          getHash() {
            return this.getCurrentLocation().hash;
          }
          /**
           * This function is used to find the origin from the current location.
           */
          getOrigin() {
            return this.getCurrentLocation().origin;
          }
          /**
           * This function is used to find the collection id from
           * the exploration url.
           * @return {string} a collection id if
           * the url parameter doesn't have a 'parent' property
           * but have a 'collection_id' property; @return {null} if otherwise.
           */
          getCollectionIdFromExplorationUrl() {
            let urlParams = this.getUrlParams();
            if (urlParams.hasOwnProperty('parent')) {
              return null;
            }
            if (urlParams.hasOwnProperty('collection_id')) {
              return urlParams.collection_id;
            }
            return null;
          }
          /**
           * This function is used to find the username from the profile url.
           * @return {string} the username.
           * @throws Will throw exception if the profile URL is invalid.
           */
          getUsernameFromProfileUrl() {
            let pathname = this.getPathname();
            if (pathname.match(/\/(profile)/g)) {
              return decodeURIComponent(pathname.split('/')[2]);
            }
            throw new Error('Invalid profile URL');
          }
          /**
           * This function is used to find the collection id from the url.
           * @return {string} the collection id.
           * @throws Will throw exception if the profile URL is invalid.
           */
          getCollectionIdFromUrl() {
            let pathname = this.getPathname();
            if (pathname.match(/\/(collection)/g)) {
              return decodeURIComponent(pathname.split('/')[2]);
            }
            throw new Error('Invalid collection URL');
          }
          /**
           * This function is used to find
           * the collection id from the editor url.
           * @return {string} the collection id.
           * @throws Will throw exception if the editor URL is invalid.
           */
          getCollectionIdFromEditorUrl() {
            let pathname = this.getPathname();
            if (pathname.match(/\/(collection_editor\/create)/g)) {
              return decodeURIComponent(pathname.split('/')[3]);
            }
            throw new Error('Invalid collection editor URL');
          }
          /**
           * This function is used to find the exploration
           * version id from the url.
           * @return {number} the exploration version from Url
           * if an exploration version can be extracted;
           * {null} if otherwise.
           */
          getExplorationVersionFromUrl() {
            let urlParams = this.getUrlParams();
            if (urlParams.hasOwnProperty('v')) {
              let version = urlParams.v;
              if (version.includes('#')) {
                // For explorations played in an iframe.
                version = version.substring(0, version.indexOf('#'));
              }
              return Number(version);
            }
            return null;
          }
          getPidFromUrl() {
            let urlParams = this.getUrlParams();
            if (urlParams.hasOwnProperty('pid')) {
              let pid = urlParams.pid;
              return String(pid);
            }
            return null;
          }
        };
        UrlService.ctorParameters = () => [
          {
            type: services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_3__[
              'WindowRef'
            ],
          },
        ];
        UrlService = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])({
              providedIn: 'root',
            }),
            __metadata('design:paramtypes', [
              services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_3__[
                'WindowRef'
              ],
            ]),
          ],
          UrlService
        );

        angular
          .module('oppia')
          .factory(
            'UrlService',
            Object(
              _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_0__[
                'downgradeInjectable'
              ]
            )(UrlService)
          );

        /***/
      },

    /***/ X1ow:
      /*!*******************************************************************!*\
  !*** ./core/templates/pages/lightweight-oppia-root/app.module.ts ***!
  \*******************************************************************/
      /*! exports provided: toastrConfig, HammerConfig, LighweightAppModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'toastrConfig',
          function () {
            return toastrConfig;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'HammerConfig',
          function () {
            return HammerConfig;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'LighweightAppModule',
          function () {
            return LighweightAppModule;
          }
        );
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/common/http */ 'tk/3');
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/platform-browser */ 'jhN1');
        /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! @angular/platform-browser/animations */ 'R1ws'
          );
        /* harmony import */ var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ./routing/app.routing.module */ 'wuJg');
        /* harmony import */ var _lightweight_oppia_root_component__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ./lightweight-oppia-root.component */ 'KJCt');
        /* harmony import */ var services_platform_feature_service__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! services/platform-feature.service */ 'YL3y');
        /* harmony import */ var services_request_interceptor_service__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! services/request-interceptor.service */ 'Nk/g'
          );
        /* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! ngx-cookie */ '4pnn');
        /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(/*! ngx-toastr */ '5eHb');
        /* harmony import */ var pages_oppia_root_app_error_handler__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(/*! pages/oppia-root/app-error-handler */ 'K+ee');
        /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(/*! hammerjs */ 'yLV6');
        /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_11___default =
          /*#__PURE__*/ __webpack_require__.n(
            hammerjs__WEBPACK_IMPORTED_MODULE_11__
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
        /**
         * @fileoverview Module for the about page.
         */

        // Modules.

        // Components.

        // Miscellaneous.

        // This throws "TS2307". We need to
        // suppress this error because hammer come from hammerjs
        // dependency. We can't import it directly.
        // @ts-ignore

        // Config for ToastrModule (helps in flashing messages and alerts).
        const toastrConfig = {
          allowHtml: false,
          iconClasses: {
            error: 'toast-error',
            info: 'toast-info',
            success: 'toast-success',
            warning: 'toast-warning',
          },
          positionClass: 'toast-bottom-right',
          messageClass: 'toast-message e2e-test-toast-message',
          progressBar: false,
          tapToDismiss: true,
          titleClass: 'toast-title',
        };
        class HammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__[
          'HammerGestureConfig'
        ] {
          constructor() {
            super(...arguments);
            this.overrides = {
              swipe: {
                direction:
                  hammerjs__WEBPACK_IMPORTED_MODULE_11__[
                    'DIRECTION_HORIZONTAL'
                  ],
              },
              pinch: {enable: false},
              rotate: {enable: false},
            };
            this.options = {
              cssProps: {
                userSelect: true,
              },
            };
          }
        }
        let LighweightAppModule = class LighweightAppModule {};
        LighweightAppModule = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['NgModule'])({
              imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__[
                  'BrowserModule'
                ],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__[
                  'BrowserAnimationsModule'
                ],
                ngx_cookie__WEBPACK_IMPORTED_MODULE_8__[
                  'CookieModule'
                ].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__[
                  'HttpClientModule'
                ],
                _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__[
                  'AppRoutingModule'
                ],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__['ToastrModule'].forRoot(
                  toastrConfig
                ),
              ],
              declarations: [
                _lightweight_oppia_root_component__WEBPACK_IMPORTED_MODULE_5__[
                  'LightweightOppiaRootComponent'
                ],
              ],
              entryComponents: [
                _lightweight_oppia_root_component__WEBPACK_IMPORTED_MODULE_5__[
                  'LightweightOppiaRootComponent'
                ],
              ],
              providers: [
                {
                  provide:
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__[
                      'HTTP_INTERCEPTORS'
                    ],
                  useClass:
                    services_request_interceptor_service__WEBPACK_IMPORTED_MODULE_7__[
                      'RequestInterceptor'
                    ],
                  multi: true,
                },
                pages_oppia_root_app_error_handler__WEBPACK_IMPORTED_MODULE_10__[
                  'AppErrorHandlerProvider'
                ],
                {
                  provide:
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__[
                      'APP_INITIALIZER'
                    ],
                  useFactory:
                    services_platform_feature_service__WEBPACK_IMPORTED_MODULE_6__[
                      'platformFeatureInitFactory'
                    ],
                  deps: [
                    services_platform_feature_service__WEBPACK_IMPORTED_MODULE_6__[
                      'PlatformFeatureService'
                    ],
                  ],
                  multi: true,
                },
                {
                  provide:
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__[
                      'HAMMER_GESTURE_CONFIG'
                    ],
                  useClass: HammerConfig,
                },
              ],
              bootstrap: [
                _lightweight_oppia_root_component__WEBPACK_IMPORTED_MODULE_5__[
                  'LightweightOppiaRootComponent'
                ],
              ],
            }),
          ],
          LighweightAppModule
        );

        /***/
      },

    /***/ X9eu:
      /*!**********************************************************************!*\
  !*** ./core/templates/domain/utilities/url-interpolation.service.ts ***!
  \**********************************************************************/
      /*! exports provided: UrlInterpolationService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'UrlInterpolationService',
          function () {
            return UrlInterpolationService;
          }
        );
        /* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/upgrade/static */ 'BBPO');
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
        /* harmony import */ var services_alerts_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! services/alerts.service */ 'U4ot');
        /* harmony import */ var services_contextual_url_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! services/contextual/url.service */ 'Wxm2');
        /* harmony import */ var services_utils_service__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! services/utils.service */ 'RY2A');
        /* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! app.constants */ 'DhAQ');
        /* harmony import */ var utility_hashes__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! utility/hashes */ 'WFO7');
        // Copyright 2015 The Oppia Authors. All Rights Reserved.
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
         * @fileoverview Service to construct URLs by inserting variables within them as
         * necessary to have a fully-qualified URL.
         */

        let UrlInterpolationService = class UrlInterpolationService {
          constructor(alertsService, urlService, utilsService) {
            this.alertsService = alertsService;
            this.urlService = urlService;
            this.utilsService = utilsService;
          }
          get DEV_MODE() {
            return app_constants__WEBPACK_IMPORTED_MODULE_5__['AppConstants']
              .DEV_MODE;
          }
          /**
           * @param {string} resourcePath - A resource path relative to a subfolder
           * in /.
           */
          validateResourcePath(resourcePath) {
            if (!resourcePath) {
              this.alertsService.fatalWarning('Empty path passed in method.');
            }
            const RESOURCE_PATH_STARTS_WITH_FORWARD_SLASH = /^\//;
            // Ensure that resourcePath starts with a forward slash.
            if (!resourcePath.match(RESOURCE_PATH_STARTS_WITH_FORWARD_SLASH)) {
              this.alertsService.fatalWarning(
                "Path must start with '/': '" + resourcePath + "'."
              );
            }
          }
          /**
           * @param {string} resourcePath - A resource path relative to a subfolder
           * in /.
           * @return {string} The resource path with cache slug.
           */
          _getUrlWithSlug(resourcePath) {
            const hashes =
              utility_hashes__WEBPACK_IMPORTED_MODULE_6__['default'].hashes;
            if (!this.DEV_MODE) {
              if (hashes[resourcePath]) {
                let index = resourcePath.lastIndexOf('.');
                return (
                  resourcePath.slice(0, index) +
                  '.' +
                  hashes[resourcePath] +
                  resourcePath.slice(index)
                );
              }
            }
            return resourcePath;
          }
          /**
           * @param {string} prefix - The url prefix.
           * @param {string} path - A resource path relative to a subfolder.
           * @return {string} The complete url path with cache slug and prefix
           * depending on dev/prod mode.
           */
          _getCompleteUrl(prefix, path) {
            if (this.DEV_MODE) {
              return prefix + this._getUrlWithSlug(path);
            } else {
              return '/build' + prefix + this._getUrlWithSlug(path);
            }
          }
          /**
           * @param {string} resourcePath - A resource path relative to extensions
           * folder.
           * @return {string} The complete url path to that resource.
           */
          getExtensionResourceUrl(resourcePath) {
            this.validateResourcePath(resourcePath);
            return this._getCompleteUrl('/extensions', resourcePath);
          }
          /**
           * Interpolate a URL by inserting values the URL needs using an object. If a
           * URL requires a value which is not keyed within the object, the function
           * execution will stop after throwing an error.
           * @param {string} urlTemplate - A formatted URL. For example, urlTemplate
           * might be:
           *    /createhandler/resolved_answers/<exploration_id>/<escaped_state_name>
           * @param {InterpolationValuesType} interpolationValues - An object whose keys
           * are variables within the URL. For the above example, interpolationValues
           * may look something like:
           *    { 'exploration_id': '0', 'escaped_state_name': 'InputBinaryNumber' }
           * @return {string} The URL interpolated with the interpolationValues object.
           */
          interpolateUrl(urlTemplate, interpolationValues) {
            if (!urlTemplate) {
              this.alertsService.fatalWarning(
                "Invalid or empty URL template passed in: '" + urlTemplate + "'"
              );
            }
            // http://stackoverflow.com/questions/4775722
            if (
              !(interpolationValues instanceof Object) ||
              Object.prototype.toString.call(interpolationValues) ===
                '[object Array]'
            ) {
              this.alertsService.fatalWarning(
                'Expected an object of interpolation values to be passed into ' +
                  'interpolateUrl.'
              );
            }
            // Valid pattern: <alphanum>
            let INTERPOLATION_VARIABLE_REGEX = /<(\w+)>/;
            // Invalid patterns: <<stuff>>, <stuff>>>, <>
            let EMPTY_VARIABLE_REGEX = /<>/;
            let INVALID_VARIABLE_REGEX = /(<{2,})(\w*)(>{2,})/;
            if (
              urlTemplate.match(INVALID_VARIABLE_REGEX) ||
              urlTemplate.match(EMPTY_VARIABLE_REGEX)
            ) {
              this.alertsService.fatalWarning(
                "Invalid URL template received: '" + urlTemplate + "'"
              );
            }
            let nonStringParams = Object.entries(interpolationValues).filter(
              ([key, val]) => !this.utilsService.isString(val)
            );
            if (nonStringParams.length > 0) {
              this.alertsService.fatalWarning(
                'Every parameter passed into interpolateUrl must have string values, ' +
                  'but received: {' +
                  nonStringParams
                    .map(([key, val]) => key + ': ' + angular.toJson(val))
                    .join(', ') +
                  '}'
              );
            }
            let escapedInterpolationValues = {};
            for (let varName in interpolationValues) {
              let value = interpolationValues[varName];
              escapedInterpolationValues[varName] = encodeURIComponent(value);
            }
            // Ensure the URL has no nested brackets (which would lead to
            // indirection in the interpolated variables).
            let filledUrl = urlTemplate;
            let match = filledUrl.match(INTERPOLATION_VARIABLE_REGEX);
            while (match) {
              let currentVarName = match[1];
              if (!escapedInterpolationValues.hasOwnProperty(currentVarName)) {
                this.alertsService.fatalWarning(
                  "Expected variable '" +
                    currentVarName +
                    "' when interpolating URL."
                );
              }
              filledUrl = filledUrl.replace(
                INTERPOLATION_VARIABLE_REGEX,
                escapedInterpolationValues[currentVarName]
              );
              match = filledUrl.match(INTERPOLATION_VARIABLE_REGEX);
            }
            return filledUrl;
          }
          /**
           * @param {string} imagePath - An image path relative to /assets/images
           * folder.
           * @return {string} The complete url path to that image.
           */
          getStaticImageUrl(imagePath) {
            this.validateResourcePath(imagePath);
            return this._getCompleteUrl('/assets', '/images' + imagePath);
          }
          /**
           * @param {string} imagePath - An image path relative to /assets/images
           * folder.
           * @return {string} The complete url path to that image.
           */
          getStaticCopyrightedImageUrl(imagePath) {
            this.validateResourcePath(imagePath);
            return '/assets' + '/copyrighted-images' + imagePath;
          }
          /**
           * @param {string} audioPath - An audio path relative to /assets/audio folder.
           * @return {string} The complete url path to that audio.
           */
          getStaticAudioUrl(audioPath) {
            this.validateResourcePath(audioPath);
            return this._getCompleteUrl('/assets', '/audio' + audioPath);
          }
          /**
           * @param {string} assetPath - A asset path relative to /assets folder.
           * @return {string} The complete url path to that asset.
           */
          getStaticAssetUrl(assetPath) {
            this.validateResourcePath(assetPath);
            return this._getCompleteUrl('/assets', assetPath);
          }
          /**
           * @param {string} interactionId - An interaction id.
           * @return {string} The complete url path to the thumbnail image for the
           * interaction.
           */
          getInteractionThumbnailImageUrl(interactionId) {
            if (!interactionId) {
              this.alertsService.fatalWarning(
                'Empty interactionId passed in getInteractionThumbnailImageUrl.'
              );
            }
            return this.getExtensionResourceUrl(
              '/interactions/' +
                interactionId +
                '/static/' +
                interactionId +
                '.png'
            );
          }
        };
        UrlInterpolationService.ctorParameters = () => [
          {
            type: services_alerts_service__WEBPACK_IMPORTED_MODULE_2__[
              'AlertsService'
            ],
          },
          {
            type: services_contextual_url_service__WEBPACK_IMPORTED_MODULE_3__[
              'UrlService'
            ],
          },
          {
            type: services_utils_service__WEBPACK_IMPORTED_MODULE_4__[
              'UtilsService'
            ],
          },
        ];
        UrlInterpolationService = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['Injectable'])({
              providedIn: 'root',
            }),
            __metadata('design:paramtypes', [
              services_alerts_service__WEBPACK_IMPORTED_MODULE_2__[
                'AlertsService'
              ],
              services_contextual_url_service__WEBPACK_IMPORTED_MODULE_3__[
                'UrlService'
              ],
              services_utils_service__WEBPACK_IMPORTED_MODULE_4__[
                'UtilsService'
              ],
            ]),
          ],
          UrlInterpolationService
        );

        angular
          .module('oppia')
          .factory(
            'UrlInterpolationService',
            Object(
              _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_0__[
                'downgradeInjectable'
              ]
            )(UrlInterpolationService)
          );

        /***/
      },

    /***/ YL3y:
      /*!*************************************************************!*\
  !*** ./core/templates/services/platform-feature.service.ts ***!
  \*************************************************************/
      /*! exports provided: PlatformFeatureService, platformFeatureInitFactory */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'PlatformFeatureService',
          function () {
            return PlatformFeatureService;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'platformFeatureInitFactory',
          function () {
            return platformFeatureInitFactory;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
        /* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/upgrade/static */ 'BBPO');
        /* harmony import */ var domain_feature_flag_feature_status_summary_model__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! domain/feature-flag/feature-status-summary.model */ 'PxPE'
          );
        /* harmony import */ var domain_feature_flag_feature_flag_backend_api_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! domain/feature-flag/feature-flag-backend-api.service */ 'G9mq'
          );
        /* harmony import */ var services_contextual_logger_service__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! services/contextual/logger.service */ '3eoD');
        /* harmony import */ var services_contextual_url_service__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! services/contextual/url.service */ 'Wxm2');
        /* harmony import */ var services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! services/contextual/window-ref.service */ 'AFwG'
          );
        // Copyright 2020 The Oppia Authors. All Rights Reserved.
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
        var __awaiter =
          (undefined && undefined.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : adopt(result.value).then(fulfilled, rejected);
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
              );
            });
          };
        var PlatformFeatureService_1;
        /**
         * @fileoverview A service for retriving feature flags - boolean parameters
         * that are used to determine if features should be enabled.
         *
         * Once the initialization is done, the value of each feature flag is guaranteed
         * to be constant within the page.
         * The values are also cached in SessionStorage, so that even after page
         * refreshing, the values stay the same, unless:
         *   - the cache TTL of 12 hours has been reached, or
         *   - the current account is different than the account in use when the values
         *     are loaded, i.e. a different session id is present in the cookies.
         *   - there are new features defined in the code base while the cached
         *     summary is out-of-date.
         *   - the current account signed out and then signed back in, because session
         *     cookies are not consistent between separate login sessions.
         * In such cases, the values will be re-initialized and they may be changed.
         *
         * The values in SessionStorage is not shared between tabs, we don't want
         * sudden updates in the same tab but it's okay to always load the latest
         * values in a new tab.
         */

        let PlatformFeatureService =
          (PlatformFeatureService_1 = class PlatformFeatureService {
            constructor(
              featureFlagBackendApiService,
              windowRef,
              loggerService,
              urlService
            ) {
              this.featureFlagBackendApiService = featureFlagBackendApiService;
              this.windowRef = windowRef;
              this.loggerService = loggerService;
              this.urlService = urlService;
              this.initialize();
            }
            /**
             * Inializes the PlatformFeatureService. This function guarantees that the
             * service is initialized only once for subsequent calls.
             *
             * @returns {Promise} - A promise that is resolved when the initialization
             * is done.
             */
            initialize() {
              return __awaiter(this, void 0, void 0, function* () {
                if (!PlatformFeatureService_1.initializationPromise) {
                  PlatformFeatureService_1.initializationPromise =
                    this._initialize();
                }
                return PlatformFeatureService_1.initializationPromise;
              });
            }
            /**
             * Returns the status checker object for feature flags, which can be used
             * to get the value of feature flags.
             *
             * Example:
             *   platformFeatureService.status.DummyFeatureFlagForE2ETests.isEnabled === (
             *   true).
             *
             * @returns {FeatureStatusChecker} - Status checker object for feature flags.
             * @throws {Error} - If this method is called before inialization.
             */
            get status() {
              if (PlatformFeatureService_1.featureStatusSummary) {
                return PlatformFeatureService_1.featureStatusSummary.toStatusChecker();
              } else {
                throw new Error(
                  'The platform feature service has not been initialized.'
                );
              }
            }
            /**
             * Checks if there's any error, e.g. request timeout, during initialization.
             *
             * @returns {boolean} - True if there is any error during initialization.
             */
            get isInitializedWithError() {
              return PlatformFeatureService_1._isInitializedWithError;
            }
            /**
             * Checks if the loading is skipped.
             *
             * @returns {boolean} - True if the loading is skipped.
             */
            get isSkipped() {
              return PlatformFeatureService_1._isSkipped;
            }
            /**
             * Initializes the PlatformFeatureService by sending a request to the server
             * to get the feature flag result.
             *
             * @returns {Promise} - A promise that is resolved when the initialization
             * is done.
             */
            _initialize() {
              return __awaiter(this, void 0, void 0, function* () {
                try {
                  this.clearSavedResults();
                  // The user is 'partially logged-in' at the signup page, we need to skip
                  // the loading from server otherwise the request will have the cookies
                  // erased, leading to the 'Registration session expired' error.
                  if (this.urlService.getPathname() === '/signup') {
                    PlatformFeatureService_1._isSkipped = true;
                    PlatformFeatureService_1.featureStatusSummary =
                      domain_feature_flag_feature_status_summary_model__WEBPACK_IMPORTED_MODULE_2__[
                        'FeatureStatusSummary'
                      ].createDefault();
                    return;
                  }
                  PlatformFeatureService_1.featureStatusSummary =
                    yield this.loadFeatureFlagsFromServer();
                } catch (err) {
                  if (err instanceof Error) {
                    this.loggerService.error(
                      'Error during initialization of PlatformFeatureService: ' +
                        `${err.message ? err.message : err}`
                    );
                  }
                  // If any error, just disable all features.
                  PlatformFeatureService_1.featureStatusSummary =
                    domain_feature_flag_feature_status_summary_model__WEBPACK_IMPORTED_MODULE_2__[
                      'FeatureStatusSummary'
                    ].createDefault();
                  PlatformFeatureService_1._isInitializedWithError = true;
                  this.clearSavedResults();
                }
              });
            }
            loadFeatureFlagsFromServer() {
              return __awaiter(this, void 0, void 0, function* () {
                return this.featureFlagBackendApiService.fetchFeatureFlags();
              });
            }
            /**
             * Clears results from the sessionStorage, if any.
             */
            clearSavedResults() {
              if (this.windowRef.nativeWindow.sessionStorage) {
                this.windowRef.nativeWindow.sessionStorage.removeItem(
                  PlatformFeatureService_1.SESSION_STORAGE_KEY
                );
              }
            }
          });
        PlatformFeatureService.SESSION_STORAGE_KEY = 'SAVED_FEATURE_FLAGS';
        PlatformFeatureService._isInitializedWithError = false;
        PlatformFeatureService._isSkipped = false;
        PlatformFeatureService.ctorParameters = () => [
          {
            type: domain_feature_flag_feature_flag_backend_api_service__WEBPACK_IMPORTED_MODULE_3__[
              'FeatureFlagBackendApiService'
            ],
          },
          {
            type: services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_6__[
              'WindowRef'
            ],
          },
          {
            type: services_contextual_logger_service__WEBPACK_IMPORTED_MODULE_4__[
              'LoggerService'
            ],
          },
          {
            type: services_contextual_url_service__WEBPACK_IMPORTED_MODULE_5__[
              'UrlService'
            ],
          },
        ];
        PlatformFeatureService = PlatformFeatureService_1 = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])({
              providedIn: 'root',
            }),
            __metadata('design:paramtypes', [
              domain_feature_flag_feature_flag_backend_api_service__WEBPACK_IMPORTED_MODULE_3__[
                'FeatureFlagBackendApiService'
              ],
              services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_6__[
                'WindowRef'
              ],
              services_contextual_logger_service__WEBPACK_IMPORTED_MODULE_4__[
                'LoggerService'
              ],
              services_contextual_url_service__WEBPACK_IMPORTED_MODULE_5__[
                'UrlService'
              ],
            ]),
          ],
          PlatformFeatureService
        );

        const platformFeatureInitFactory = service => {
          return () =>
            __awaiter(void 0, void 0, void 0, function* () {
              return service.initialize();
            });
        };
        angular
          .module('oppia')
          .factory(
            'PlatformFeatureService',
            Object(
              _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_1__[
                'downgradeInjectable'
              ]
            )(PlatformFeatureService)
          );

        /***/
      },

    /***/ 'g/rd':
      /*!*****************************!*\
  !*** ./assets/constants.ts ***!
  \*****************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        // We are using eslint disable here for multilines because we have used quotes
        // around properties at a lot of places so it is not possible to use
        // "eslint disable next line" for each of them.
        /* eslint-disable oppia/no-multiline-disable */
        /* eslint-disable quote-props */
        /* eslint-disable  @typescript-eslint/quotes */
        /* Don't modify anything outside the {} brackets.
         * Insides of the {} brackets should be formatted as a JSON object.
         * JSON rules:
         * 1. All keys and string values must be enclosed in double quotes.
         * 2. Each key/value pair should be on a new line.
         * 3. All values and keys must be constant, you can't use any Javascript
         *    functions.
         */
        /**
         * @fileoverview Initializes constants for the Oppia codebase.
         */
        /* harmony default export */ __webpack_exports__['default'] = {
          // The term 'staging' is used instead of the classroom url fragment field
          // in the URL and classroom name for topics that are not yet attached to a classroom.
          CLASSROOM_URL_FRAGMENT_FOR_UNATTACHED_TOPICS: 'staging',
          CLASSROOM_NAME_FOR_UNATTACHED_TOPICS: 'staging',
          // Acceptable URL schemes for links.
          ACCEPTABLE_SCHEMES: ['https', ''],
          FEATURED_TRANSLATION_LANGUAGES: [
            {
              language_code: 'pt',
              explanation: 'For learners in Brazil, Angola and Mozambique.',
            },
            {
              language_code: 'ar',
              // eslint-disable-next-line max-len
              explanation:
                'For learners in Arabic-speaking countries in the Middle East.',
            },
            {
              language_code: 'pcm',
              explanation: 'For learners in Nigeria.',
            },
            {
              language_code: 'es',
              explanation: 'For learners in Latin America and South America.',
            },
            {
              language_code: 'sw',
              explanation: 'For learners in Kenya and Tanzania.',
            },
            {
              language_code: 'hi',
              explanation: 'For learners in India',
            },
            {
              language_code: 'ha',
              explanation: 'For learners in Nigeria.',
            },
            {
              language_code: 'ig',
              explanation: 'For learners in Nigeria.',
            },
            {
              language_code: 'yo',
              explanation: 'For learners in Nigeria.',
            },
          ],
          LIST_OF_DEFAULT_TAGS_FOR_BLOG_POST: [
            'News',
            'International',
            'Educators',
            'Learners',
            'Community',
            'Partnerships',
            'Volunteer',
            'Stories',
            'Languages',
            'New features',
            'New lessons',
            'Software development',
            'Content',
            'Teacher story',
          ],
          ALL_CATEGORIES: [
            'Algebra',
            'Algorithms',
            'Architecture',
            'Arithmetic',
            'Art',
            'Astronomy',
            'Biology',
            'Business',
            'Calculus',
            'Chemistry',
            'Combinatorics',
            'Computing',
            'Economics',
            'Education',
            'Engineering',
            'English',
            'Environment',
            'Gaulish',
            'Geography',
            'Geometry',
            'Government',
            'Graph Theory',
            'History',
            'Languages',
            'Latin',
            'Law',
            'Logic',
            'Mathematics',
            'Medicine',
            'Music',
            'Philosophy',
            'Physics',
            'Poetry',
            'Probability',
            'Programming',
            'Puzzles',
            'Reading',
            'Spanish',
            'Sport',
            'Statistics',
            'Trigonometry',
            'Welcome',
          ],
          ACTIVITY_TYPE_EXPLORATION: 'exploration',
          ACTIVITY_TYPE_EXPLORATION_TRANSLATIONS: 'exp_translations',
          ACTIVITY_TYPE_COLLECTION: 'collection',
          ACTIVITY_TYPE_STORY: 'story',
          ACTIVITY_TYPE_SKILL: 'skill',
          ACTIVITY_TYPE_SUBTOPIC: 'subtopic',
          ACTIVITY_TYPE_LEARN_TOPIC: 'learntopic',
          ACTIVITY_TYPE_CLASSROOM: 'classroom',
          DISABLED_EXPLORATION_IDS: ['5'],
          TESTING_CONSTANT: 'test',
          LIBRARY_TILE_WIDTH_PX: 208,
          LIBRARY_MOBILE_TILE_WIDTH_PX: 350,
          DASHBOARD_TYPE_CREATOR: 'creator',
          DASHBOARD_TYPE_LEARNER: 'learner',
          DASHBOARD_TYPE_CONTRIBUTOR: 'contributor',
          DEFAULT_COLOR: '#a33f40',
          DEFAULT_THUMBNAIL_ICON: 'Lightbulb',
          DEFAULT_CATEGORY_ICON: 'Lightbulb',
          ACTION_ACCEPT_SUGGESTION: 'accept',
          ACTION_REJECT_SUGGESTION: 'reject',
          SKILL_STATUS_OPTIONS: {
            ALL: 'All',
            ASSIGNED: 'Assigned',
            UNASSIGNED: 'Unassigned',
          },
          TOPIC_MINIMUM_QUESTIONS_TO_PRACTICE: 10,
          TOPIC_SKILL_DASHBOARD_SORT_OPTIONS: {
            IncreasingCreatedOn: 'Newly Created',
            DecreasingCreatedOn: 'Oldest Created',
            IncreasingUpdatedOn: 'Most Recently Updated',
            DecreasingUpdatedOn: 'Least Recently Updated',
          },
          TOPIC_SKILL_DASHBOARD_SORTING_OPTIONS: {
            IncreasingCreatedOn: 'Newly Created',
            DecreasingCreatedOn: 'Oldest Created',
            IncreasingUpdatedOn: 'Most Recently Updated',
            DecreasingUpdatedOn: 'Least Recently Updated',
            DecreasingUpcomingLaunches: 'Most Upcoming Launches',
            DecreasingOverdueLaunches: 'Most Launches Behind Schedule',
          },
          // Sorting categories for contributor admin dashboard.
          CD_ADMIN_STATS_SORT_OPTIONS: {
            IncreasingLastActivity: 'Most Recently Active',
            DecreasingLastActivity: 'Least Recently Active',
            IncreasingPerformance: 'Lowest to Highest Performance',
            DecreasingPerformance: 'Highest to Lowest Performance',
            IncreasingAccuracy: 'Lowest to Highest Accuracy',
            DecreasingAccuracy: 'Highest to Lowest Accuracy',
            IncreasingSubmissions: 'Lowest to Highest Submitted Contributions',
            DecreasingSubmissions: 'Highest to Lowest Submitted Contributions',
            IncreasingReviewedTranslations:
              'Lowest to Highest Reviewed Translations',
            DecreasingReviewedTranslations:
              'Highest to Lowest Reviewed Translations',
            IncreasingReviewedQuestions: 'Lowest to Highest Reviewed Questions',
            DecreasingReviewedQuestions: 'Highest to Lowest Reviewed Questions',
            DecreasingCoordinatorCounts: 'Highest to Lowest Coordinators Count',
            IncreasingCoordinatorCounts: 'Lowest to Highest Coordinators Count',
          },
          // These categories are shown in the library navbar. The categories should
          // be in sorted order.
          SEARCH_DROPDOWN_CATEGORIES: [
            'Algorithms',
            'Architecture',
            'Art',
            'Biology',
            'Business',
            'Chemistry',
            'Economics',
            'English',
            'Geography',
            'History',
            'Mathematics',
            'Medicine',
            'Music',
            'Physics',
            'Programming',
            'Reading',
            'Statistics',
          ],
          // These classrooms are shown in the add learner group syllabus filters.
          SEARCH_DROPDOWN_CLASSROOMS: ['math'],
          // These types are shown in the add learner group syllabus filters.
          SEARCH_DROPDOWN_TYPES: ['Skill', 'Story'],
          // The default language code for an exploration.
          DEFAULT_LANGUAGE_CODE: 'en',
          // Hacky translation keys for classroom, topic, skill, exploration
          // and subtopic names and descriptions. Needs to be updated whenever
          // any new class, topic, skill, exploration or subtopic is added or a
          // previous one is deleted.
          // TODO(#14645): Remove these keys once translation service is extended.
          HACKY_TRANSLATION_KEYS: [
            'I18N_CLASSROOM_MATH_NAME',
            'I18N_CLASSROOM_MATH_COURSE_DETAILS',
            'I18N_TOPIC_iX9kYCjnouWN_TITLE',
            'I18N_TOPIC_sWBXKH4PZcK6_TITLE',
            'I18N_TOPIC_C4fqwrvqWpRm_TITLE',
            'I18N_TOPIC_qW12maD4hiA8_TITLE',
            'I18N_TOPIC_dLmjjMDbCcrf_TITLE',
            'I18N_TOPIC_0abdeaJhmfPm_TITLE',
            'I18N_TOPIC_5g0nxGUmx5J5_TITLE',
            'I18N_TOPIC_VjCpR1DB2MVN_TITLE',
            'I18N_TOPIC_F4vMtwKMS6jR_TITLE',
            'I18N_TOPIC_5cbCOcglPdrn_TITLE',
            'I18N_TOPIC_iX9kYCjnouWN_DESCRIPTION',
            'I18N_TOPIC_sWBXKH4PZcK6_DESCRIPTION',
            'I18N_TOPIC_C4fqwrvqWpRm_DESCRIPTION',
            'I18N_TOPIC_qW12maD4hiA8_DESCRIPTION',
            'I18N_TOPIC_dLmjjMDbCcrf_DESCRIPTION',
            'I18N_TOPIC_0abdeaJhmfPm_DESCRIPTION',
            'I18N_TOPIC_5g0nxGUmx5J5_DESCRIPTION',
            'I18N_TOPIC_VjCpR1DB2MVN_DESCRIPTION',
            'I18N_TOPIC_F4vMtwKMS6jR_DESCRIPTION',
            'I18N_TOPIC_5cbCOcglPdrn_DESCRIPTION',
            'I18N_EXPLORATION_K645IfRNzpKy_TITLE',
            'I18N_EXPLORATION_K645IfRNzpKy_DESCRIPTION',
            'I18N_EXPLORATION_Knvx24p24qPO_TITLE',
            'I18N_EXPLORATION_Knvx24p24qPO_DESCRIPTION',
            'I18N_EXPLORATION_aAkDKVDR53cG_TITLE',
            'I18N_EXPLORATION_aAkDKVDR53cG_DESCRIPTION',
            'I18N_EXPLORATION_avwshGklKLJE_TITLE',
            'I18N_EXPLORATION_avwshGklKLJE_DESCRIPTION',
            'I18N_EXPLORATION_OKxYhsWONHZV_TITLE',
            'I18N_EXPLORATION_OKxYhsWONHZV_DESCRIPTION',
            'I18N_EXPLORATION_BJd7yHIxpqkq_TITLE',
            'I18N_EXPLORATION_BJd7yHIxpqkq_DESCRIPTION',
            'I18N_EXPLORATION_W0xq3jW5GzDF_TITLE',
            'I18N_EXPLORATION_W0xq3jW5GzDF_DESCRIPTION',
            'I18N_EXPLORATION_53Ka3mQ6ra5A_TITLE',
            'I18N_EXPLORATION_53Ka3mQ6ra5A_DESCRIPTION',
            'I18N_EXPLORATION_VKXd8qHsxLml_TITLE',
            'I18N_EXPLORATION_VKXd8qHsxLml_DESCRIPTION',
            'I18N_EXPLORATION_PsfDKdhd6Esz_TITLE',
            'I18N_EXPLORATION_PsfDKdhd6Esz_DESCRIPTION',
            'I18N_EXPLORATION_9DITEN8BUEHw_TITLE',
            'I18N_EXPLORATION_9DITEN8BUEHw_DESCRIPTION',
            'I18N_EXPLORATION_R7WpsSfmDQPV_TITLE',
            'I18N_EXPLORATION_R7WpsSfmDQPV_DESCRIPTION',
            'I18N_EXPLORATION_zIBYaqfDJrJC_TITLE',
            'I18N_EXPLORATION_zIBYaqfDJrJC_DESCRIPTION',
            'I18N_EXPLORATION_1904tpP0CYwY_TITLE',
            'I18N_EXPLORATION_1904tpP0CYwY_DESCRIPTION',
            'I18N_EXPLORATION_cQDibOXQbpi7_TITLE',
            'I18N_EXPLORATION_cQDibOXQbpi7_DESCRIPTION',
            'I18N_EXPLORATION_MRJeVrKafW6G_TITLE',
            'I18N_EXPLORATION_MRJeVrKafW6G_DESCRIPTION',
            'I18N_EXPLORATION_hNOP3TwRJhsz_TITLE',
            'I18N_EXPLORATION_hNOP3TwRJhsz_DESCRIPTION',
            'I18N_EXPLORATION_zTg2hzTz37jP_TITLE',
            'I18N_EXPLORATION_zTg2hzTz37jP_DESCRIPTION',
            'I18N_EXPLORATION_8HTzQQUPiK5i_TITLE',
            'I18N_EXPLORATION_8HTzQQUPiK5i_DESCRIPTION',
            'I18N_EXPLORATION_40a3vjmZ7Fwu_TITLE',
            'I18N_EXPLORATION_40a3vjmZ7Fwu_DESCRIPTION',
            'I18N_EXPLORATION_WulCxGAmGE61_TITLE',
            'I18N_EXPLORATION_WulCxGAmGE61_DESCRIPTION',
            'I18N_EXPLORATION_lOU0XPC2BnE9_TITLE',
            'I18N_EXPLORATION_lOU0XPC2BnE9_DESCRIPTION',
            'I18N_EXPLORATION_wE9pyaC5np3n_TITLE',
            'I18N_EXPLORATION_wE9pyaC5np3n_DESCRIPTION',
            'I18N_EXPLORATION_umPkwp0L1M0-_TITLE',
            'I18N_EXPLORATION_umPkwp0L1M0-_DESCRIPTION',
            'I18N_EXPLORATION_MjZzEVOG47_1_TITLE',
            'I18N_EXPLORATION_MjZzEVOG47_1_DESCRIPTION',
            'I18N_EXPLORATION_9trAQhj6uUC2_TITLE',
            'I18N_EXPLORATION_9trAQhj6uUC2_DESCRIPTION',
            'I18N_EXPLORATION_rfX8jNkPnA-1_TITLE',
            'I18N_EXPLORATION_rfX8jNkPnA-1_DESCRIPTION',
            'I18N_EXPLORATION_0FBWxCE5egOw_TITLE',
            'I18N_EXPLORATION_0FBWxCE5egOw_DESCRIPTION',
            'I18N_EXPLORATION_670bU6d9JGBh_TITLE',
            'I18N_EXPLORATION_670bU6d9JGBh_DESCRIPTION',
            'I18N_EXPLORATION_aHikhPlxYgOH_TITLE',
            'I18N_EXPLORATION_aHikhPlxYgOH_DESCRIPTION',
            'I18N_EXPLORATION_-tMgcP1i_4au_TITLE',
            'I18N_EXPLORATION_-tMgcP1i_4au_DESCRIPTION',
            'I18N_EXPLORATION_zW39GLG_BdN2_TITLE',
            'I18N_EXPLORATION_zW39GLG_BdN2_DESCRIPTION',
            'I18N_EXPLORATION_Xa3B_io-2WI5_TITLE',
            'I18N_EXPLORATION_Xa3B_io-2WI5_DESCRIPTION',
            'I18N_EXPLORATION_6Q6IyIDkjpYC_TITLE',
            'I18N_EXPLORATION_6Q6IyIDkjpYC_DESCRIPTION',
            'I18N_EXPLORATION_osw1m5Q3jK41_TITLE',
            'I18N_EXPLORATION_osw1m5Q3jK41_DESCRIPTION',
            'I18N_EXPLORATION_2mzzFVDLuAj8_TITLE',
            'I18N_EXPLORATION_2mzzFVDLuAj8_DESCRIPTION',
            'I18N_EXPLORATION_5NWuolNcwH6e_TITLE',
            'I18N_EXPLORATION_5NWuolNcwH6e_DESCRIPTION',
            'I18N_EXPLORATION_k2bQ7z5XHNbK_TITLE',
            'I18N_EXPLORATION_k2bQ7z5XHNbK_DESCRIPTION',
            'I18N_EXPLORATION_tIoSb3HZFN6e_TITLE',
            'I18N_EXPLORATION_tIoSb3HZFN6e_DESCRIPTION',
            'I18N_EXPLORATION_nLmUS6lbmvnl_TITLE',
            'I18N_EXPLORATION_nLmUS6lbmvnl_DESCRIPTION',
            'I18N_EXPLORATION_Vgde5_ZVqrq5_TITLE',
            'I18N_EXPLORATION_Vgde5_ZVqrq5_DESCRIPTION',
            'I18N_EXPLORATION_RvopsvVdIb0J_TITLE',
            'I18N_EXPLORATION_RvopsvVdIb0J_DESCRIPTION',
            'I18N_EXPLORATION_zVbqxwck0KaC_TITLE',
            'I18N_EXPLORATION_zVbqxwck0KaC_DESCRIPTION',
            'I18N_EXPLORATION_rDJojPOc0KgJ_TITLE',
            'I18N_EXPLORATION_rDJojPOc0KgJ_DESCRIPTION',
            'I18N_EXPLORATION_kYSrbNDCv5sH_TITLE',
            'I18N_EXPLORATION_kYSrbNDCv5sH_DESCRIPTION',
            'I18N_EXPLORATION_K89Hgj2qRSzw_TITLE',
            'I18N_EXPLORATION_K89Hgj2qRSzw_DESCRIPTION',
            'I18N_EXPLORATION_lNpxiuqufPiw_TITLE',
            'I18N_EXPLORATION_lNpxiuqufPiw_DESCRIPTION',
            'I18N_EXPLORATION_Jbgc3MlRiY07_TITLE',
            'I18N_EXPLORATION_Jbgc3MlRiY07_DESCRIPTION',
            'I18N_EXPLORATION_rwN3YPG9XWZa_TITLE',
            'I18N_EXPLORATION_rwN3YPG9XWZa_DESCRIPTION',
            'I18N_EXPLORATION_nTMZwH7i0DdW_TITLE',
            'I18N_EXPLORATION_nTMZwH7i0DdW_DESCRIPTION',
            'I18N_EXPLORATION_IrbGLTicm0BI_TITLE',
            'I18N_EXPLORATION_IrbGLTicm0BI_DESCRIPTION',
            'I18N_EXPLORATION_v8fonNnX4Ub1_TITLE',
            'I18N_EXPLORATION_v8fonNnX4Ub1_DESCRIPTION',
            'I18N_EXPLORATION_ibeLZqbbjbKF_TITLE',
            'I18N_EXPLORATION_ibeLZqbbjbKF_DESCRIPTION',
            'I18N_EXPLORATION_BDIln52yGfeH_TITLE',
            'I18N_EXPLORATION_BDIln52yGfeH_DESCRIPTION',
            'I18N_EXPLORATION_SR1IKIdLxnm1_TITLE',
            'I18N_EXPLORATION_SR1IKIdLxnm1_DESCRIPTION',
            'I18N_EXPLORATION_m1nvGABWeUoh_TITLE',
            'I18N_EXPLORATION_m1nvGABWeUoh_DESCRIPTION',
            'I18N_EXPLORATION_zNb0Bh27QtJ4_TITLE',
            'I18N_EXPLORATION_zNb0Bh27QtJ4_DESCRIPTION',
            'I18N_EXPLORATION_5I4srORrwjt2_TITLE',
            'I18N_EXPLORATION_5I4srORrwjt2_DESCRIPTION',
            'I18N_EXPLORATION_aqJ07xrTFNLF_TITLE',
            'I18N_EXPLORATION_aqJ07xrTFNLF_DESCRIPTION',
            'I18N_EXPLORATION_0X0KC9DXWwra_TITLE',
            'I18N_EXPLORATION_0X0KC9DXWwra_DESCRIPTION',
            'I18N_EXPLORATION_l0S8zoUrVQNd_TITLE',
            'I18N_EXPLORATION_l0S8zoUrVQNd_DESCRIPTION',
            'I18N_EXPLORATION_YnhDmpzewUYI_TITLE',
            'I18N_EXPLORATION_YnhDmpzewUYI_DESCRIPTION',
            'I18N_EXPLORATION_bWHHbghtVQKU_TITLE',
            'I18N_EXPLORATION_bWHHbghtVQKU_DESCRIPTION',
            'I18N_EXPLORATION_C8QUgzIETvRv_TITLE',
            'I18N_EXPLORATION_C8QUgzIETvRv_DESCRIPTION',
            'I18N_EXPLORATION_jgGYHzds2WeL_TITLE',
            'I18N_EXPLORATION_jgGYHzds2WeL_DESCRIPTION',
            'I18N_EXPLORATION_WuyjwUCVJuIn_TITLE',
            'I18N_EXPLORATION_WuyjwUCVJuIn_DESCRIPTION',
            'I18N_EXPLORATION_bf9RrsgNWZmI_TITLE',
            'I18N_EXPLORATION_bf9RrsgNWZmI_DESCRIPTION',
            'I18N_EXPLORATION_Gh6AzOEDLcz2_TITLE',
            'I18N_EXPLORATION_Gh6AzOEDLcz2_DESCRIPTION',
            'I18N_EXPLORATION_FMH1Ii1ztP4j_TITLE',
            'I18N_EXPLORATION_FMH1Ii1ztP4j_DESCRIPTION',
            'I18N_EXPLORATION_xtbP46LKl1uj_TITLE',
            'I18N_EXPLORATION_xtbP46LKl1uj_DESCRIPTION',
            'I18N_EXPLORATION_W50hotX4h_Up_TITLE',
            'I18N_EXPLORATION_W50hotX4h_Up_DESCRIPTION',
            'I18N_EXPLORATION_BlhHWkwlpOPL_TITLE',
            'I18N_EXPLORATION_BlhHWkwlpOPL_DESCRIPTION',
            'I18N_EXPLORATION_Ui9Gnop0WhAW_TITLE',
            'I18N_EXPLORATION_Ui9Gnop0WhAW_DESCRIPTION',
            'I18N_EXPLORATION_iW85v9kiZyH2_TITLE',
            'I18N_EXPLORATION_iW85v9kiZyH2_DESCRIPTION',
            'I18N_EXPLORATION_ksezbx9FUWFh_TITLE',
            'I18N_EXPLORATION_ksezbx9FUWFh_DESCRIPTION',
            'I18N_EXPLORATION_5uvM7exYOqAI_TITLE',
            'I18N_EXPLORATION_5uvM7exYOqAI_DESCRIPTION',
            'I18N_EXPLORATION_ua7FTOXRaRjb_TITLE',
            'I18N_EXPLORATION_sRqParMOyWWB_TITLE',
            'I18N_EXPLORATION_fRXacq7caMoO_TITLE',
            'I18N_EXPLORATION_Sl4TGJQhSjmk_TITLE',
            'I18N_EXPLORATION_2EOuIfQHljkN_TITLE',
            'I18N_EXPLORATION_9S3bMbqFwDMR_TITLE',
            'I18N_EXPLORATION_JCZC79V2FeIl_TITLE',
            'I18N_EXPLORATION_4HssuJT0enVP_TITLE',
            'I18N_EXPLORATION_Uwpgt08xfr9I_TITLE',
            'I18N_STORY_RRVMHsZ5Mobh_TITLE',
            'I18N_STORY_RRVMHsZ5Mobh_DESCRIPTION',
            'I18N_STORY_Qu6THxP29tOy_TITLE',
            'I18N_STORY_Qu6THxP29tOy_DESCRIPTION',
            'I18N_STORY_vfJDB3JAdwIx_TITLE',
            'I18N_STORY_vfJDB3JAdwIx_DESCRIPTION',
            'I18N_STORY_rqnxwceQyFnv_TITLE',
            'I18N_STORY_rqnxwceQyFnv_DESCRIPTION',
            'I18N_STORY_3M5VBajMccXO_TITLE',
            'I18N_STORY_3M5VBajMccXO_DESCRIPTION',
            'I18N_STORY_JhiDkq01dqgC_TITLE',
            'I18N_STORY_JhiDkq01dqgC_DESCRIPTION',
            'I18N_STORY_ialKSV0VYV0B_TITLE',
            'I18N_STORY_ialKSV0VYV0B_DESCRIPTION',
            'I18N_STORY_Aadv1RN3npAP_TITLE',
            'I18N_STORY_Aadv1RN3npAP_DESCRIPTION',
            'I18N_STORY_gvf2KlV8A8ie_TITLE',
            'I18N_STORY_gvf2KlV8A8ie_DESCRIPTION',
            'I18N_STORY_6ZbyRnajbHXy_TITLE',
            'I18N_STORY_6ZbyRnajbHXy_DESCRIPTION',
            'I18N_SUBTOPIC_iX9kYCjnouWN_place-names-and-values_TITLE',
            'I18N_SUBTOPIC_iX9kYCjnouWN_naming-numbers_TITLE',
            'I18N_SUBTOPIC_iX9kYCjnouWN_comparing-numbers_TITLE',
            'I18N_SUBTOPIC_iX9kYCjnouWN_rounding-numbers_TITLE',
            'I18N_SUBTOPIC_sWBXKH4PZcK6_adding-numbers_TITLE',
            'I18N_SUBTOPIC_sWBXKH4PZcK6_subtracting-numbers_TITLE',
            'I18N_SUBTOPIC_sWBXKH4PZcK6_addition-subtraction_TITLE',
            'I18N_SUBTOPIC_sWBXKH4PZcK6_estimation_TITLE',
            'I18N_SUBTOPIC_sWBXKH4PZcK6_sequences_TITLE',
            'I18N_SUBTOPIC_C4fqwrvqWpRm_basic-concepts_TITLE',
            'I18N_SUBTOPIC_C4fqwrvqWpRm_memorizing-expressions_TITLE',
            'I18N_SUBTOPIC_C4fqwrvqWpRm_multiplication-techniques_TITLE',
            'I18N_SUBTOPIC_C4fqwrvqWpRm_rules-to-simplify_TITLE',
            'I18N_SUBTOPIC_qW12maD4hiA8_basic-concepts_TITLE',
            'I18N_SUBTOPIC_qW12maD4hiA8_techniques-of-division_TITLE',
            'I18N_SUBTOPIC_qW12maD4hiA8_problem-solving_TITLE',
            'I18N_SUBTOPIC_dLmjjMDbCcrf_order-of-operations_TITLE',
            'I18N_SUBTOPIC_dLmjjMDbCcrf_variables_TITLE',
            'I18N_SUBTOPIC_dLmjjMDbCcrf_modelling-scenarios_TITLE',
            'I18N_SUBTOPIC_dLmjjMDbCcrf_problem-solving_TITLE',
            'I18N_SUBTOPIC_dLmjjMDbCcrf_algebraic-expressions_TITLE',
            'I18N_SUBTOPIC_dLmjjMDbCcrf_solving-equations_TITLE',
            'I18N_SUBTOPIC_0abdeaJhmfPm_what-is-a-fraction_TITLE',
            'I18N_SUBTOPIC_0abdeaJhmfPm_fractions-of-a-group_TITLE',
            'I18N_SUBTOPIC_0abdeaJhmfPm_equivalent-fractions_TITLE',
            'I18N_SUBTOPIC_0abdeaJhmfPm_mixed-numbers_TITLE',
            'I18N_SUBTOPIC_0abdeaJhmfPm_number-line_TITLE',
            'I18N_SUBTOPIC_0abdeaJhmfPm_comparing-fractions_TITLE',
            'I18N_SUBTOPIC_0abdeaJhmfPm_adding-fractions_TITLE',
            'I18N_SUBTOPIC_0abdeaJhmfPm_subtracting-fractions_TITLE',
            'I18N_SUBTOPIC_0abdeaJhmfPm_multiplying-fractions_TITLE',
            'I18N_SUBTOPIC_0abdeaJhmfPm_dividing-fractions_TITLE',
            'I18N_SUBTOPIC_5g0nxGUmx5J5_what-is-a-ratio_TITLE',
            'I18N_SUBTOPIC_5g0nxGUmx5J5_equivalent-ratios_TITLE',
            'I18N_SUBTOPIC_5g0nxGUmx5J5_calculations-with-ratios_TITLE',
            'I18N_SUBTOPIC_5g0nxGUmx5J5_combining-ratios_TITLE',
            'I18N_SUBTOPIC_VjCpR1DB2MVN_place-values_TITLE',
            'I18N_SUBTOPIC_VjCpR1DB2MVN_number-line_TITLE',
            'I18N_SUBTOPIC_VjCpR1DB2MVN_adding-decimals_TITLE',
            'I18N_SUBTOPIC_VjCpR1DB2MVN_subtracting-decimals_TITLE',
            'I18N_SUBTOPIC_VjCpR1DB2MVN_multiplying-decimals_TITLE',
            'I18N_SUBTOPIC_VjCpR1DB2MVN_dividing-decimals_TITLE',
            'I18N_SUBTOPIC_VjCpR1DB2MVN_fractions-and-decimals_TITLE',
            'I18N_SUBTOPIC_F4vMtwKMS6jR_what-is-a-percentage_TITLE',
            'I18N_SUBTOPIC_F4vMtwKMS6jR_percentage-conversions_TITLE',
            'I18N_SUBTOPIC_F4vMtwKMS6jR_relating-to-actual-values_TITLE',
            'I18N_SUBTOPIC_F4vMtwKMS6jR_solving-problems_TITLE',
          ],
          ALLOWED_THUMBNAIL_BG_COLORS: {
            chapter: ['#F8BF74', '#D68F78', '#8EBBB6', '#B3D8F1'],
            classroom: ['transparent', '#C8F5CD', '#AED2E9'],
            topic: ['#C6DCDA'],
            subtopic: ['#FFFFFF'],
            story: ['#F8BF74', '#D68F78', '#8EBBB6', '#B3D8F1'],
          },
          ALLOWED_STORY_NODE_STATUS: ['Draft', 'Ready To Publish', 'Published'],
          ALLOWED_STORY_NODE_UNPUBLISHING_REASONS: [
            'BAD_CONTENT',
            'CHAPTER_NEEDS_SPLITTING',
          ],
          STORY_NODE_STATUS_PUBLISHED: 'Published',
          STORY_NODE_STATUS_READY_TO_PUBLISH: 'Ready To Publish',
          STORY_NODE_STATUS_DRAFT: 'Draft',
          CHAPTER_PUBLICATION_NOTICE_PERIOD_IN_DAYS: 14,
          ALLOWED_IMAGE_FORMATS: ['svg', 'png', 'jpeg', 'jpg', 'gif'],
          MAX_ALLOWED_IMAGE_SIZE_IN_KB_FOR_BLOG: 1024,
          TASK_TYPE_HIGH_BOUNCE_RATE: 'high_bounce_rate',
          TASK_TYPE_INEFFECTIVE_FEEDBACK_LOOP: 'ineffective_feedback_loop',
          TASK_TYPE_SUCCESSIVE_INCORRECT_ANSWERS:
            'successive_incorrect_answers',
          TASK_TYPE_NEEDS_GUIDING_RESPONSES: 'needs_guiding_responses',
          TASK_STATUS_OPEN: 'open',
          TASK_STATUS_OBSOLETE: 'obsolete',
          TASK_STATUS_RESOLVED: 'resolved',
          TASK_ENTITY_TYPE_EXPLORATION: 'exploration',
          TASK_TARGET_TYPE_STATE: 'state',
          // Filters for adding new syllabus items to learner groups.
          DEFAULT_ADD_SYLLABUS_FILTER: 'All',
          LEARNER_GROUP_ADD_STORY_FILTER: 'Story',
          LEARNER_GROUP_ADD_SKILL_FILTER: 'Skill',
          // Roles in exploration.
          ROLE_OWNER: 'owner',
          ROLE_EDITOR: 'editor',
          ROLE_VOICE_ARTIST: 'voice artist',
          ROLE_VIEWER: 'viewer',
          // The supported tags for the mailing list subscriptions.
          MAILING_LIST_ANDROID_TAG: 'Android',
          MAILING_LIST_WEB_TAG: 'Web',
          // The error message to be displayed when the user tries to subscribe to the
          // mailing list but fails.
          // eslint-disable-next-line max-len
          MAILING_LIST_UNEXPECTED_ERROR_MESSAGE:
            'Sorry, an unexpected error occurred. Please email admin@oppia.org to be added to the mailing list.',
          // Regex to validate the format of Math rich-text component SVGs. If this is
          // changed in the future, the existing filenames on the server should be
          // handled as well.
          // eslint-disable-next-line max-len
          MATH_SVG_FILENAME_REGEX:
            'mathImg_[a-z0-9_]+_height_[0-9d]+_width_[0-9d]+_vertical_[0-9d]+.(svg)$',
          // This regex validates whether a given string is in the format of YYYY-MM-DD
          // format.
          DATE_REGEX: '^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}$',
          // The SVG tag-specific attribute allowlist is based on the list of tags and
          // and attributes specified in this project:
          // https://github.com/cure53/DOMPurify
          // The mapping of SVG tag to attribute is based on the following pages:
          // https://github.com/wooorm/svg-element-attributes/blob/master/index.json
          // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
          // https://www.w3schools.com/graphics/svg_reference.asp
          SVG_ATTRS_ALLOWLIST: {
            a: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'download',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'focusable',
              'focushighlight',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'href',
              'hreflang',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'nav-down',
              'nav-down-left',
              'nav-down-right',
              'nav-left',
              'nav-next',
              'nav-prev',
              'nav-right',
              'nav-up',
              'nav-up-left',
              'nav-up-right',
              'opacity',
              'overflow',
              'ping',
              'pointer-events',
              'property',
              'referrerpolicy',
              'rel',
              'requiredextensions',
              'requiredfeatures',
              'requiredfonts',
              'requiredformats',
              'resource',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'systemlanguage',
              'tabindex',
              'target',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'transform',
              'type',
              'typeof',
              'unicode-bidi',
              'visibility',
              'word-spacing',
              'writing-mode',
            ],
            altglyph: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'dx',
              'dy',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'format',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'glyphref',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'requiredextensions',
              'requiredfeatures',
              'resource',
              'rev',
              'rotate',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'systemlanguage',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode-bidi',
              'visibility',
              'word-spacing',
              'writing-mode',
              'x',
              'y',
            ],
            altglyphdef: [
              'about',
              'class',
              'content',
              'datatype',
              'id',
              'lang',
              'property',
              'rel',
              'resource',
              'rev',
              'style',
              'tabindex',
              'typeof',
            ],
            altglyphitem: [
              'about',
              'class',
              'content',
              'datatype',
              'id',
              'lang',
              'property',
              'rel',
              'resource',
              'rev',
              'style',
              'tabindex',
              'typeof',
            ],
            animatecolor: [
              'about',
              'accumulate',
              'additive',
              'alignment-baseline',
              'attributename',
              'attributetype',
              'baseline-shift',
              'begin',
              'by',
              'calcmode',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'dur',
              'enable-background',
              'end',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'from',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'id',
              'image-rendering',
              'kerning',
              'keysplines',
              'keytimes',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'max',
              'min',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'repeatcount',
              'repeatdur',
              'requiredextensions',
              'requiredfeatures',
              'requiredfonts',
              'requiredformats',
              'resource',
              'restart',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'systemlanguage',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'to',
              'typeof',
              'unicode-bidi',
              'values',
              'visibility',
              'word-spacing',
              'writing-mode',
            ],
            animatemotion: [
              'about',
              'accumulate',
              'additive',
              'begin',
              'by',
              'calcmode',
              'class',
              'content',
              'datatype',
              'dur',
              'end',
              'externalresourcesrequired',
              'fill',
              'from',
              'href',
              'id',
              'keypoints',
              'keysplines',
              'keytimes',
              'lang',
              'max',
              'min',
              'origin',
              'path',
              'property',
              'rel',
              'repeatcount',
              'repeatdur',
              'requiredextensions',
              'requiredfeatures',
              'requiredfonts',
              'requiredformats',
              'resource',
              'restart',
              'rev',
              'rotate',
              'style',
              'systemlanguage',
              'tabindex',
              'to',
              'typeof',
              'values',
            ],
            animatetransform: [
              'about',
              'accumulate',
              'additive',
              'attributename',
              'attributetype',
              'begin',
              'by',
              'calcmode',
              'class',
              'content',
              'datatype',
              'dur',
              'end',
              'externalresourcesrequired',
              'fill',
              'from',
              'href',
              'id',
              'keysplines',
              'keytimes',
              'lang',
              'max',
              'min',
              'property',
              'rel',
              'repeatcount',
              'repeatdur',
              'requiredextensions',
              'requiredfeatures',
              'requiredfonts',
              'requiredformats',
              'resource',
              'restart',
              'rev',
              'style',
              'systemlanguage',
              'tabindex',
              'to',
              'type',
              'typeof',
              'values',
            ],
            audio: [
              'about',
              'begin',
              'class',
              'content',
              'datatype',
              'dur',
              'end',
              'externalresourcesrequired',
              'fill',
              'id',
              'lang',
              'max',
              'min',
              'property',
              'rel',
              'repeatcount',
              'repeatdur',
              'requiredextensions',
              'requiredfeatures',
              'requiredfonts',
              'requiredformats',
              'resource',
              'restart',
              'rev',
              'style',
              'syncbehavior',
              'syncmaster',
              'synctolerance',
              'systemlanguage',
              'tabindex',
              'type',
              'typeof',
            ],
            canvas: [
              'about',
              'class',
              'content',
              'datatype',
              'id',
              'lang',
              'preserveaspectratio',
              'property',
              'rel',
              'requiredextensions',
              'resource',
              'rev',
              'style',
              'systemlanguage',
              'tabindex',
              'typeof',
            ],
            circle: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'cx',
              'cy',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'focusable',
              'focushighlight',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'nav-down',
              'nav-down-left',
              'nav-down-right',
              'nav-left',
              'nav-next',
              'nav-prev',
              'nav-right',
              'nav-up',
              'nav-up-left',
              'nav-up-right',
              'opacity',
              'overflow',
              'pathlength',
              'pointer-events',
              'property',
              'r',
              'rel',
              'requiredextensions',
              'requiredfeatures',
              'requiredfonts',
              'requiredformats',
              'resource',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'systemlanguage',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'transform',
              'typeof',
              'unicode-bidi',
              'visibility',
              'word-spacing',
              'writing-mode',
            ],
            clippath: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'clippathunits',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'requiredextensions',
              'requiredfeatures',
              'resource',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'systemlanguage',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'transform',
              'typeof',
              'unicode-bidi',
              'visibility',
              'word-spacing',
              'writing-mode',
            ],
            defs: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'requiredextensions',
              'requiredfeatures',
              'resource',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'systemlanguage',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'transform',
              'typeof',
              'unicode-bidi',
              'visibility',
              'word-spacing',
              'writing-mode',
            ],
            desc: [
              'about',
              'class',
              'content',
              'datatype',
              'id',
              'lang',
              'property',
              'rel',
              'requiredextensions',
              'requiredfeatures',
              'requiredfonts',
              'requiredformats',
              'resource',
              'rev',
              'style',
              'systemlanguage',
              'tabindex',
              'typeof',
            ],
            ellipse: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'cx',
              'cy',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'focusable',
              'focushighlight',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'nav-down',
              'nav-down-left',
              'nav-down-right',
              'nav-left',
              'nav-next',
              'nav-prev',
              'nav-right',
              'nav-up',
              'nav-up-left',
              'nav-up-right',
              'opacity',
              'overflow',
              'pathlength',
              'pointer-events',
              'property',
              'rel',
              'requiredextensions',
              'requiredfeatures',
              'requiredfonts',
              'requiredformats',
              'resource',
              'rev',
              'rx',
              'ry',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'systemlanguage',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'transform',
              'typeof',
              'unicode-bidi',
              'visibility',
              'word-spacing',
              'writing-mode',
            ],
            feblend: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'height',
              'id',
              'image-rendering',
              'in',
              'in2',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'mode',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'resource',
              'result',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode-bidi',
              'visibility',
              'width',
              'word-spacing',
              'writing-mode',
              'x',
              'y',
            ],
            fecolormatrix: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'height',
              'id',
              'image-rendering',
              'in',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'resource',
              'result',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'type',
              'typeof',
              'unicode-bidi',
              'values',
              'visibility',
              'width',
              'word-spacing',
              'writing-mode',
              'x',
              'y',
            ],
            fecomponenttransfer: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'height',
              'id',
              'image-rendering',
              'in',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'resource',
              'result',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode-bidi',
              'visibility',
              'width',
              'word-spacing',
              'writing-mode',
              'x',
              'y',
            ],
            fecomposite: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'height',
              'id',
              'image-rendering',
              'in',
              'in2',
              'k1',
              'k2',
              'k3',
              'k4',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'operator',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'resource',
              'result',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode-bidi',
              'visibility',
              'width',
              'word-spacing',
              'writing-mode',
              'x',
              'y',
            ],
            feconvolvematrix: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'bias',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'divisor',
              'dominant-baseline',
              'edgemode',
              'enable-background',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'height',
              'id',
              'image-rendering',
              'in',
              'kernelmatrix',
              'kernelunitlength',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'order',
              'overflow',
              'pointer-events',
              'preservealpha',
              'property',
              'rel',
              'resource',
              'result',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'tabindex',
              'targetx',
              'targety',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode-bidi',
              'visibility',
              'width',
              'word-spacing',
              'writing-mode',
              'x',
              'y',
            ],
            fediffuselighting: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'diffuseconstant',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'height',
              'id',
              'image-rendering',
              'in',
              'kernelunitlength',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'resource',
              'result',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'surfacescale',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode-bidi',
              'visibility',
              'width',
              'word-spacing',
              'writing-mode',
              'x',
              'y',
            ],
            fedisplacementmap: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'height',
              'id',
              'image-rendering',
              'in',
              'in2',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'resource',
              'result',
              'rev',
              'scale',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode-bidi',
              'visibility',
              'width',
              'word-spacing',
              'writing-mode',
              'x',
              'xchannelselector',
              'y',
              'ychannelselector',
            ],
            fedistantlight: [
              'about',
              'azimuth',
              'class',
              'content',
              'datatype',
              'elevation',
              'id',
              'lang',
              'property',
              'rel',
              'resource',
              'rev',
              'style',
              'tabindex',
              'typeof',
            ],
            feflood: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'height',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'resource',
              'result',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode-bidi',
              'visibility',
              'width',
              'word-spacing',
              'writing-mode',
              'x',
              'y',
            ],
            fefunca: [
              'about',
              'amplitude',
              'class',
              'content',
              'datatype',
              'exponent',
              'id',
              'intercept',
              'lang',
              'offset',
              'property',
              'rel',
              'resource',
              'rev',
              'slope',
              'style',
              'tabindex',
              'tablevalues',
              'type',
              'typeof',
            ],
            fefuncb: [
              'about',
              'amplitude',
              'class',
              'content',
              'datatype',
              'exponent',
              'id',
              'intercept',
              'lang',
              'offset',
              'property',
              'rel',
              'resource',
              'rev',
              'slope',
              'style',
              'tabindex',
              'tablevalues',
              'type',
              'typeof',
            ],
            fefuncg: [
              'about',
              'amplitude',
              'class',
              'content',
              'datatype',
              'exponent',
              'id',
              'intercept',
              'lang',
              'offset',
              'property',
              'rel',
              'resource',
              'rev',
              'slope',
              'style',
              'tabindex',
              'tablevalues',
              'type',
              'typeof',
            ],
            fefuncr: [
              'about',
              'amplitude',
              'class',
              'content',
              'datatype',
              'exponent',
              'id',
              'intercept',
              'lang',
              'offset',
              'property',
              'rel',
              'resource',
              'rev',
              'slope',
              'style',
              'tabindex',
              'tablevalues',
              'type',
              'typeof',
            ],
            fegaussianblur: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'edgemode',
              'enable-background',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'height',
              'id',
              'image-rendering',
              'in',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'resource',
              'result',
              'rev',
              'shape-rendering',
              'stddeviation',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode-bidi',
              'visibility',
              'width',
              'word-spacing',
              'writing-mode',
              'x',
              'y',
            ],
            femerge: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'height',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'resource',
              'result',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode-bidi',
              'visibility',
              'width',
              'word-spacing',
              'writing-mode',
              'x',
              'y',
            ],
            femergenode: [
              'about',
              'class',
              'content',
              'datatype',
              'id',
              'in',
              'lang',
              'property',
              'rel',
              'resource',
              'rev',
              'style',
              'tabindex',
              'typeof',
            ],
            femorphology: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'height',
              'id',
              'image-rendering',
              'in',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'operator',
              'overflow',
              'pointer-events',
              'property',
              'radius',
              'rel',
              'resource',
              'result',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode-bidi',
              'visibility',
              'width',
              'word-spacing',
              'writing-mode',
              'x',
              'y',
            ],
            feoffset: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'dx',
              'dy',
              'enable-background',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'height',
              'id',
              'image-rendering',
              'in',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'resource',
              'result',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode-bidi',
              'visibility',
              'width',
              'word-spacing',
              'writing-mode',
              'x',
              'y',
            ],
            fepointlight: [
              'about',
              'class',
              'content',
              'datatype',
              'id',
              'lang',
              'property',
              'rel',
              'resource',
              'rev',
              'style',
              'tabindex',
              'typeof',
              'x',
              'y',
              'z',
            ],
            fespecularlighting: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'height',
              'id',
              'image-rendering',
              'in',
              'kernelunitlength',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'resource',
              'result',
              'rev',
              'shape-rendering',
              'specularconstant',
              'specularexponent',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'surfacescale',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode-bidi',
              'visibility',
              'width',
              'word-spacing',
              'writing-mode',
              'x',
              'y',
            ],
            fespotlight: [
              'about',
              'class',
              'content',
              'datatype',
              'id',
              'lang',
              'limitingconeangle',
              'pointsatx',
              'pointsaty',
              'pointsatz',
              'property',
              'rel',
              'resource',
              'rev',
              'specularexponent',
              'style',
              'tabindex',
              'typeof',
              'x',
              'y',
              'z',
            ],
            fetile: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'height',
              'id',
              'image-rendering',
              'in',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'resource',
              'result',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode-bidi',
              'visibility',
              'width',
              'word-spacing',
              'writing-mode',
              'x',
              'y',
            ],
            feturbulence: [
              'about',
              'alignment-baseline',
              'basefrequency',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'height',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'numoctaves',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'resource',
              'result',
              'rev',
              'seed',
              'shape-rendering',
              'stitchtiles',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'type',
              'typeof',
              'unicode-bidi',
              'visibility',
              'width',
              'word-spacing',
              'writing-mode',
              'x',
              'y',
            ],
            filter: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'filterres',
              'filterunits',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'height',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'overflow',
              'pointer-events',
              'primitiveunits',
              'property',
              'rel',
              'resource',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode-bidi',
              'visibility',
              'width',
              'word-spacing',
              'writing-mode',
              'x',
              'y',
            ],
            font: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'horiz-adv-x',
              'horiz-origin-x',
              'horiz-origin-y',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'resource',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode-bidi',
              'vert-adv-y',
              'vert-origin-x',
              'vert-origin-y',
              'visibility',
              'word-spacing',
              'writing-mode',
            ],
            g: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'focusable',
              'focushighlight',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'nav-down',
              'nav-down-left',
              'nav-down-right',
              'nav-left',
              'nav-next',
              'nav-prev',
              'nav-right',
              'nav-up',
              'nav-up-left',
              'nav-up-right',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'requiredextensions',
              'requiredfeatures',
              'requiredfonts',
              'requiredformats',
              'resource',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'systemlanguage',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'transform',
              'typeof',
              'unicode-bidi',
              'visibility',
              'word-spacing',
              'writing-mode',
            ],
            glyph: [
              'about',
              'alignment-baseline',
              'arabic-form',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'd',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-name',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'horiz-adv-x',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'orientation',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'resource',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode',
              'unicode-bidi',
              'vert-adv-y',
              'vert-origin-x',
              'vert-origin-y',
              'visibility',
              'word-spacing',
              'writing-mode',
            ],
            glyphref: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'dx',
              'dy',
              'enable-background',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'format',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'glyphref',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'resource',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode-bidi',
              'visibility',
              'word-spacing',
              'writing-mode',
              'x',
              'y',
            ],
            hkern: [
              'about',
              'class',
              'content',
              'datatype',
              'g1',
              'g2',
              'id',
              'k',
              'lang',
              'property',
              'rel',
              'resource',
              'rev',
              'style',
              'tabindex',
              'typeof',
              'u1',
              'u2',
            ],
            image: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'crossorigin',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'focusable',
              'focushighlight',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'height',
              'href',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'nav-down',
              'nav-down-left',
              'nav-down-right',
              'nav-left',
              'nav-next',
              'nav-prev',
              'nav-right',
              'nav-up',
              'nav-up-left',
              'nav-up-right',
              'opacity',
              'overflow',
              'pointer-events',
              'preserveaspectratio',
              'property',
              'rel',
              'requiredextensions',
              'requiredfeatures',
              'requiredfonts',
              'requiredformats',
              'resource',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'systemlanguage',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'transform',
              'type',
              'typeof',
              'unicode-bidi',
              'visibility',
              'width',
              'word-spacing',
              'writing-mode',
              'x',
              'y',
            ],
            line: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'focusable',
              'focushighlight',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'nav-down',
              'nav-down-left',
              'nav-down-right',
              'nav-left',
              'nav-next',
              'nav-prev',
              'nav-right',
              'nav-up',
              'nav-up-left',
              'nav-up-right',
              'opacity',
              'overflow',
              'pathlength',
              'pointer-events',
              'property',
              'rel',
              'requiredextensions',
              'requiredfeatures',
              'requiredfonts',
              'requiredformats',
              'resource',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'systemlanguage',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'transform',
              'typeof',
              'unicode-bidi',
              'visibility',
              'word-spacing',
              'writing-mode',
              'x1',
              'x2',
              'y1',
              'y2',
            ],
            lineargradient: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'gradienttransform',
              'gradientunits',
              'href',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'resource',
              'rev',
              'shape-rendering',
              'spreadmethod',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode-bidi',
              'visibility',
              'word-spacing',
              'writing-mode',
              'x1',
              'x2',
              'y1',
              'y2',
            ],
            marker: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'markerheight',
              'markerunits',
              'markerwidth',
              'mask',
              'opacity',
              'orient',
              'overflow',
              'pointer-events',
              'preserveaspectratio',
              'property',
              'refx',
              'refy',
              'rel',
              'resource',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode-bidi',
              'viewbox',
              'visibility',
              'word-spacing',
              'writing-mode',
            ],
            mask: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'height',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'maskcontentunits',
              'maskunits',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'requiredextensions',
              'requiredfeatures',
              'resource',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'systemlanguage',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode-bidi',
              'visibility',
              'width',
              'word-spacing',
              'writing-mode',
              'x',
              'y',
            ],
            metadata: [
              'about',
              'class',
              'content',
              'datatype',
              'id',
              'lang',
              'property',
              'rel',
              'requiredextensions',
              'requiredfeatures',
              'requiredfonts',
              'requiredformats',
              'resource',
              'rev',
              'style',
              'systemlanguage',
              'tabindex',
              'typeof',
            ],
            mpath: [
              'about',
              'class',
              'content',
              'datatype',
              'externalresourcesrequired',
              'href',
              'id',
              'lang',
              'property',
              'rel',
              'resource',
              'rev',
              'style',
              'tabindex',
              'typeof',
            ],
            path: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'd',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'focusable',
              'focushighlight',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'nav-down',
              'nav-down-left',
              'nav-down-right',
              'nav-left',
              'nav-next',
              'nav-prev',
              'nav-right',
              'nav-up',
              'nav-up-left',
              'nav-up-right',
              'opacity',
              'overflow',
              'pathlength',
              'pointer-events',
              'property',
              'rel',
              'requiredextensions',
              'requiredfeatures',
              'requiredfonts',
              'requiredformats',
              'resource',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'systemlanguage',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'transform',
              'typeof',
              'unicode-bidi',
              'visibility',
              'word-spacing',
              'writing-mode',
            ],
            pattern: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'height',
              'href',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'overflow',
              'patterncontentunits',
              'patterntransform',
              'patternunits',
              'pointer-events',
              'preserveaspectratio',
              'property',
              'rel',
              'requiredextensions',
              'requiredfeatures',
              'resource',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'systemlanguage',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode-bidi',
              'viewbox',
              'visibility',
              'width',
              'word-spacing',
              'writing-mode',
              'x',
              'y',
            ],
            polygon: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'focusable',
              'focushighlight',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'nav-down',
              'nav-down-left',
              'nav-down-right',
              'nav-left',
              'nav-next',
              'nav-prev',
              'nav-right',
              'nav-up',
              'nav-up-left',
              'nav-up-right',
              'opacity',
              'overflow',
              'pathlength',
              'pointer-events',
              'points',
              'property',
              'rel',
              'requiredextensions',
              'requiredfeatures',
              'requiredfonts',
              'requiredformats',
              'resource',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'systemlanguage',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'transform',
              'typeof',
              'unicode-bidi',
              'visibility',
              'word-spacing',
              'writing-mode',
            ],
            polyline: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'focusable',
              'focushighlight',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'nav-down',
              'nav-down-left',
              'nav-down-right',
              'nav-left',
              'nav-next',
              'nav-prev',
              'nav-right',
              'nav-up',
              'nav-up-left',
              'nav-up-right',
              'opacity',
              'overflow',
              'pathlength',
              'pointer-events',
              'points',
              'property',
              'rel',
              'requiredextensions',
              'requiredfeatures',
              'requiredfonts',
              'requiredformats',
              'resource',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'systemlanguage',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'transform',
              'typeof',
              'unicode-bidi',
              'visibility',
              'word-spacing',
              'writing-mode',
            ],
            radialgradient: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'cx',
              'cy',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'fr',
              'fx',
              'fy',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'gradienttransform',
              'gradientunits',
              'href',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'r',
              'rel',
              'resource',
              'rev',
              'shape-rendering',
              'spreadmethod',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode-bidi',
              'visibility',
              'word-spacing',
              'writing-mode',
            ],
            rect: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'focusable',
              'focushighlight',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'height',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'nav-down',
              'nav-down-left',
              'nav-down-right',
              'nav-left',
              'nav-next',
              'nav-prev',
              'nav-right',
              'nav-up',
              'nav-up-left',
              'nav-up-right',
              'opacity',
              'overflow',
              'pathlength',
              'pointer-events',
              'property',
              'rel',
              'requiredextensions',
              'requiredfeatures',
              'requiredfonts',
              'requiredformats',
              'resource',
              'rev',
              'rx',
              'ry',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'systemlanguage',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'transform',
              'typeof',
              'unicode-bidi',
              'visibility',
              'width',
              'word-spacing',
              'writing-mode',
              'x',
              'y',
            ],
            stop: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'offset',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'resource',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode-bidi',
              'visibility',
              'word-spacing',
              'writing-mode',
            ],
            style: [
              'about',
              'class',
              'content',
              'datatype',
              'id',
              'lang',
              'media',
              'property',
              'rel',
              'resource',
              'rev',
              'style',
              'tabindex',
              'title',
              'type',
              'typeof',
            ],
            svg: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'baseprofile',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'contentscripttype',
              'contentstyletype',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'focusable',
              'focushighlight',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'height',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'nav-down',
              'nav-down-left',
              'nav-down-right',
              'nav-left',
              'nav-next',
              'nav-prev',
              'nav-right',
              'nav-up',
              'nav-up-left',
              'nav-up-right',
              'opacity',
              'overflow',
              'playbackorder',
              'playbackorder',
              'pointer-events',
              'preserveaspectratio',
              'property',
              'rel',
              'requiredextensions',
              'requiredfeatures',
              'resource',
              'rev',
              'shape-rendering',
              'snapshottime',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'syncbehaviordefault',
              'synctolerancedefault',
              'systemlanguage',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'timelinebegin',
              'timelinebegin',
              'transform',
              'typeof',
              'unicode-bidi',
              'version',
              'viewbox',
              'visibility',
              'width',
              'word-spacing',
              'writing-mode',
              'x',
              'xmlns',
              'xmlns:xlink',
              'y',
              'zoomandpan',
            ],
            switch: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'focusable',
              'focushighlight',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'nav-down',
              'nav-down-left',
              'nav-down-right',
              'nav-left',
              'nav-next',
              'nav-prev',
              'nav-right',
              'nav-up',
              'nav-up-left',
              'nav-up-right',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'requiredextensions',
              'requiredfeatures',
              'requiredfonts',
              'requiredformats',
              'resource',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'systemlanguage',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'transform',
              'typeof',
              'unicode-bidi',
              'visibility',
              'word-spacing',
              'writing-mode',
            ],
            symbol: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'overflow',
              'pointer-events',
              'preserveaspectratio',
              'property',
              'refx',
              'refy',
              'rel',
              'resource',
              'rev',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'typeof',
              'unicode-bidi',
              'viewbox',
              'visibility',
              'word-spacing',
              'writing-mode',
            ],
            text: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'dx',
              'dy',
              'editable',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'focusable',
              'focushighlight',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'lengthadjust',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'nav-down',
              'nav-down-left',
              'nav-down-right',
              'nav-left',
              'nav-next',
              'nav-prev',
              'nav-right',
              'nav-up',
              'nav-up-left',
              'nav-up-right',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'requiredextensions',
              'requiredfeatures',
              'requiredfonts',
              'requiredformats',
              'resource',
              'rev',
              'rotate',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'systemlanguage',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'textlength',
              'transform',
              'typeof',
              'unicode-bidi',
              'visibility',
              'word-spacing',
              'writing-mode',
              'x',
              'y',
            ],
            textpath: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'href',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'lengthadjust',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'method',
              'opacity',
              'overflow',
              'path',
              'pointer-events',
              'property',
              'rel',
              'requiredextensions',
              'requiredfeatures',
              'resource',
              'rev',
              'shape-rendering',
              'side',
              'spacing',
              'startoffset',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'systemlanguage',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'textlength',
              'typeof',
              'unicode-bidi',
              'visibility',
              'word-spacing',
              'writing-mode',
            ],
            title: [
              'about',
              'class',
              'content',
              'datatype',
              'id',
              'lang',
              'property',
              'rel',
              'requiredextensions',
              'requiredfeatures',
              'requiredfonts',
              'requiredformats',
              'resource',
              'rev',
              'style',
              'systemlanguage',
              'tabindex',
              'typeof',
            ],
            tref: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'dx',
              'dy',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'lengthadjust',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'requiredextensions',
              'requiredfeatures',
              'resource',
              'rev',
              'rotate',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'systemlanguage',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'textlength',
              'typeof',
              'unicode-bidi',
              'visibility',
              'word-spacing',
              'writing-mode',
              'x',
              'y',
            ],
            tspan: [
              'about',
              'alignment-baseline',
              'baseline-shift',
              'class',
              'clip',
              'clip-path',
              'clip-rule',
              'color',
              'color-interpolation',
              'color-interpolation-filters',
              'color-profile',
              'color-rendering',
              'content',
              'cursor',
              'datatype',
              'direction',
              'display',
              'dominant-baseline',
              'dx',
              'dy',
              'enable-background',
              'externalresourcesrequired',
              'fill',
              'fill-opacity',
              'fill-rule',
              'filter',
              'flood-color',
              'flood-opacity',
              'focusable',
              'focushighlight',
              'font-family',
              'font-size',
              'font-size-adjust',
              'font-stretch',
              'font-style',
              'font-variant',
              'font-weight',
              'glyph-orientation-horizontal',
              'glyph-orientation-vertical',
              'id',
              'image-rendering',
              'kerning',
              'lang',
              'lengthadjust',
              'letter-spacing',
              'lighting-color',
              'marker-end',
              'marker-mid',
              'marker-start',
              'mask',
              'nav-down',
              'nav-down-left',
              'nav-down-right',
              'nav-left',
              'nav-next',
              'nav-prev',
              'nav-right',
              'nav-up',
              'nav-up-left',
              'nav-up-right',
              'opacity',
              'overflow',
              'pointer-events',
              'property',
              'rel',
              'requiredextensions',
              'requiredfeatures',
              'requiredfonts',
              'requiredformats',
              'resource',
              'rev',
              'rotate',
              'shape-rendering',
              'stop-color',
              'stop-opacity',
              'stroke',
              'stroke-dasharray',
              'stroke-dashoffset',
              'stroke-linecap',
              'stroke-linejoin',
              'stroke-miterlimit',
              'stroke-opacity',
              'stroke-width',
              'style',
              'systemlanguage',
              'tabindex',
              'text-anchor',
              'text-decoration',
              'text-rendering',
              'textlength',
              'typeof',
              'unicode-bidi',
              'visibility',
              'word-spacing',
              'writing-mode',
              'x',
              'y',
            ],
            video: [
              'about',
              'begin',
              'class',
              'content',
              'datatype',
              'dur',
              'end',
              'externalresourcesrequired',
              'fill',
              'focusable',
              'focushighlight',
              'height',
              'id',
              'initialvisibility',
              'lang',
              'max',
              'min',
              'nav-down',
              'nav-down-left',
              'nav-down-right',
              'nav-left',
              'nav-next',
              'nav-prev',
              'nav-right',
              'nav-up',
              'nav-up-left',
              'nav-up-right',
              'overlay',
              'preserveaspectratio',
              'property',
              'rel',
              'repeatcount',
              'repeatdur',
              'requiredextensions',
              'requiredfeatures',
              'requiredfonts',
              'requiredformats',
              'resource',
              'restart',
              'rev',
              'style',
              'syncbehavior',
              'syncmaster',
              'synctolerance',
              'systemlanguage',
              'tabindex',
              'transform',
              'transformbehavior',
              'type',
              'typeof',
              'width',
              'x',
              'y',
            ],
            view: [
              'about',
              'class',
              'content',
              'datatype',
              'externalresourcesrequired',
              'id',
              'lang',
              'preserveaspectratio',
              'property',
              'rel',
              'resource',
              'rev',
              'style',
              'tabindex',
              'typeof',
              'viewbox',
              'viewtarget',
              'zoomandpan',
            ],
            vkern: [
              'about',
              'class',
              'content',
              'datatype',
              'g1',
              'g2',
              'id',
              'k',
              'lang',
              'property',
              'rel',
              'resource',
              'rev',
              'style',
              'tabindex',
              'typeof',
              'u1',
              'u2',
            ],
          },
          // List of supported default categories. For now, each category has a specific
          // color associated with it. Each category also has a thumbnail icon whose
          // filename is '{{CategoryName}}.svg'.
          CATEGORIES_TO_COLORS: {
            Mathematics: '#cc4b00',
            Algebra: '#cc4b00',
            Arithmetic: '#ae511b',
            Calculus: '#ae5f2d',
            Logic: '#ae511b',
            Combinatorics: '#c54f2b',
            'Graph Theory': '#c54f2b',
            Probability: '#c54f2b',
            Statistics: '#cc4b00',
            Geometry: '#be5637',
            Trigonometry: '#be5637',
            Algorithms: '#9d6901',
            Computing: '#927117',
            Programming: '#886628',
            Astronomy: '#58613a',
            Biology: '#657030',
            Chemistry: '#6c7c36',
            Engineering: '#6f7a48',
            Environment: '#747142',
            Medicine: '#657030',
            Physics: '#58613a',
            Architecture: '#6e3466',
            Art: '#895a83',
            Music: '#6a3862',
            Philosophy: '#613968',
            Poetry: '#7f507f',
            English: '#193a69',
            Languages: '#1b4174',
            Latin: '#3d5a89',
            Reading: '#193a69',
            Spanish: '#405185',
            Gaulish: '#1b4174',
            Business: '#387163',
            Economics: '#2f836d',
            Geography: '#3c6d62',
            Government: '#507c6b',
            History: '#3d6b52',
            Law: '#507c6b',
            Education: '#942e20',
            Puzzles: '#a8554a',
            Sport: '#893327',
            Welcome: '#992a2b',
          },
          INVALID_RTE_COMPONENTS_FOR_BLOG_POST_EDITOR: [
            'tabs',
            'math',
            'collapsible',
            'skillreview',
          ],
          // This is linked to VALID_RTE_COMPONENTS in android_validation_constants.
          VALID_RTE_COMPONENTS_FOR_ANDROID: ['image', 'math', 'skillreview'],
          // This is linked to SUPPORTED_LANGUAGES in android_validation_constants.
          SUPPORTED_CONTENT_LANGUAGES_FOR_ANDROID: [
            {
              code: 'en',
              description: 'English',
              decimal_separator: '.',
            },
          ],
          // List of supported content languages in which we can create explorations or
          // other entities. Each description has a parenthetical part that may be
          // stripped out to give a shorter description.
          // The decimal separators were derived from https://en.wikipedia.org/w/index.php?title=Decimal_separator&section=9#Usage_worldwide.
          SUPPORTED_CONTENT_LANGUAGES: [
            {
              code: 'en',
              description: 'English',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'English',
            },
            {
              code: 'ak',
              description: 'Ákán (Akan)',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Akan',
            },
            {
              code: 'sq',
              description: 'shqip (Albanian)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Albanian',
            },
            {
              code: 'am',
              description: 'አማርኛ (Amharic)',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Amharic',
            },
            {
              code: 'ar',
              description: 'العربية (Arabic)',
              direction: 'rtl',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Arabic',
            },
            {
              code: 'az',
              description: 'Azeri (Azerbaijani)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Azerbaijani',
            },
            {
              code: 'bg',
              description: 'български (Bulgarian)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Bulgarian',
            },
            {
              code: 'bn',
              description: 'বাংলা (Bangla)',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Bangla',
            },
            {
              code: 'ms',
              description: 'بهاس ملايو (Bahasa Melayu)',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Bahasa Melayu',
            },
            {
              code: 'ca',
              description: 'català (Catalan)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Catalan',
            },
            {
              code: 'zh',
              description: '中文 (Chinese)',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Chinese',
            },
            {
              code: 'hr',
              description: 'hrvatski (Croatian)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Croatian',
            },
            {
              code: 'cs',
              description: 'čeština (Czech)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Czech',
            },
            {
              code: 'da',
              description: 'dansk (Danish)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Danish',
            },
            {
              code: 'prs',
              description: 'دری (Dari)',
              direction: 'rtl',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Dari',
            },
            {
              code: 'nl',
              description: 'Nederlands (Dutch)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Dutch',
            },
            {
              code: 'ee',
              description: 'Eʋegbe (Ewe)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Ewe',
            },
            {
              code: 'fat',
              description: 'Fanti',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Fanti',
            },
            {
              code: 'tl',
              description: 'Filipino (Filipino)',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Filipino',
            },
            {
              code: 'fi',
              description: 'suomi (Finnish)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Finnish',
            },
            {
              code: 'fr',
              description: 'français (French)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'French',
            },
            {
              code: 'lg',
              description: 'Luganda (Ganda)',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Ganda',
            },
            {
              code: 'de',
              description: 'Deutsch (German)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'German',
            },
            {
              code: 'el',
              description: 'Ελληνικά (Greek)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Greek',
            },
            {
              code: 'gaa',
              description: 'Gã (Ga)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Ga',
            },
            {
              code: 'ha',
              description: 'Harshen Hausa (Hausa)',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Hausa',
            },
            {
              code: 'he',
              description: 'עברית (Hebrew)',
              direction: 'rtl',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Hebrew',
            },
            {
              code: 'hi',
              description: 'हिन्दी (Hindi)',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Hindi',
            },
            {
              code: 'hi-en',
              description: 'Hinglish',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Hinglish',
            },
            {
              code: 'hu',
              description: 'magyar (Hungarian)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Hungarian',
            },
            {
              code: 'id',
              description: 'Bahasa Indonesia (Indonesian)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Indonesian',
            },
            {
              code: 'ig',
              description: 'Ásụ̀sụ́ Ìgbò (Igbo)',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Igbo',
            },
            {
              code: 'it',
              description: 'italiano (Italian)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Italian',
            },
            {
              code: 'ja',
              description: '日本語 (Japanese)',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Japanese',
            },
            {
              code: 'kab',
              description: 'Taqbaylit (Kabyle)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Kabyle',
            },
            {
              code: 'ko',
              description: '한국어 (Korean)',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Korean',
            },
            {
              code: 'lv',
              description: 'latviešu (Latvian)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Latvian',
            },
            {
              code: 'lt',
              description: 'lietuvių (Lithuanian)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Lithuanian',
            },
            {
              code: 'mr',
              description: 'मराठी (Marathi)',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Marathi',
            },
            {
              code: 'no',
              description: 'Norsk (Norwegian)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Norwegian',
            },
            {
              code: 'fa',
              description: 'فارسی (Persian)',
              direction: 'rtl',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Persian',
            },
            {
              code: 'pcm',
              description: 'Naijá (Nigerian Pidgin)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Nigerian Pidgin',
            },
            {
              code: 'pl',
              description: 'polszczyzna (Polish)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Polish',
            },
            {
              code: 'pt',
              description: 'português (Portuguese)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Portuguese',
            },
            {
              code: 'ps',
              description: 'پښتو (Pashto)',
              direction: 'rtl',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Pashto',
            },
            {
              code: 'ro',
              description: 'română (Romanian)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Romanian',
            },
            {
              code: 'ru',
              description: 'pусский (Russian)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Russian',
            },
            {
              code: 'sr',
              description: 'cрпски (Serbian)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Serbian',
            },
            {
              code: 'sk',
              description: 'slovenčina (Slovak)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Slovak',
            },
            {
              code: 'sl',
              description: 'slovenščina (Slovenian)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Slovenian',
            },
            {
              code: 'es',
              description: 'español (Spanish)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Spanish',
            },
            {
              code: 'sw',
              description: 'kiswahili (Swahili)',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Swahili',
            },
            {
              code: 'sv',
              description: 'svenska (Swedish)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Swedish',
            },
            {
              code: 'ta',
              description: 'தமிழ் (Tamil)',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Tamil',
            },
            {
              code: 'te',
              description: 'తెలుగు (Telugu)',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Telugu',
            },
            {
              code: 'th',
              description: 'ภาษาไทย (Thai)',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Thai',
            },
            {
              code: 'tr',
              description: 'Türkçe (Turkish)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Turkish',
            },
            {
              code: 'uk',
              description: 'yкраїнська (Ukrainian)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Ukrainian',
            },
            {
              code: 'ur',
              description: 'اُردُو (Urdu)',
              direction: 'rtl',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Urdu',
            },
            {
              code: 'vi',
              description: 'Tiếng Việt (Vietnamese)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Vietnamese',
            },
            {
              code: 'yo',
              description: 'Èdè Yoùbá (Yoruba)',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Yoruba',
            },
          ],
          // NOTE TO DEVELOPERS: While adding another language, please ensure that the
          // languages are roughly in order of how much support we have for them in
          // terms of lesson content translations.
          // List of supported site languages in which the platform is offered.
          // The decimal separators were derived from https://en.wikipedia.org/w/index.php?title=Decimal_separator&section=9#Usage_worldwide.
          SUPPORTED_SITE_LANGUAGES: [
            {
              id: 'en',
              text: 'English',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'English',
            },
            {
              id: 'pt-br',
              text: 'Português (Brasil)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Portuguese',
            },
            {
              id: 'ar',
              text: 'العربية',
              direction: 'rtl',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Arabic',
            },
            {
              id: 'hi',
              text: 'हिन्दी',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Hindi',
            },
            {
              id: 'es',
              text: 'Español',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Spanish',
            },
            {
              id: 'bn',
              text: 'বাংলা',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Bangla',
            },
            {
              id: 'fr',
              text: 'français',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'French',
            },
            {
              id: 'id',
              text: 'Bahasa Indonesia',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Indonesian',
            },
            {
              id: 'pcm',
              text: 'Naijá (Nigerian Pidgin)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Nigerian',
            },
            {
              id: 'uk',
              text: 'украї́нська мо́ва',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Ukrainian',
            },
            {
              id: 'sk',
              text: 'slovenčina',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Slovak',
            },
            {
              id: 'nl',
              text: 'Nederlands',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Nederlands',
            },
            {
              id: 'kab',
              text: 'Taqbaylit (Kabyle)',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Berber',
            },
            {
              id: 'vi',
              text: 'Tiếng Việt',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Vietnamese',
            },
            {
              id: 'tr',
              text: 'Türkçe',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Turkish',
            },
            {
              id: 'zh-hans',
              text: '中文(简体)',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Simplified Chinese',
            },
            {
              id: 'zh-hant',
              text: '中文(繁體)',
              direction: 'ltr',
              decimal_separator: '.',
              ariaLabelInEnglish: 'Traditional Chinese',
            },
            {
              id: 'el',
              text: 'Ελληνικά',
              direction: 'ltr',
              decimal_separator: ',',
              ariaLabelInEnglish: 'Greek',
            },
          ],
          // List of supported audio languages in which we have audio and translations
          // for explorations or other entities.
          // Related languages are used to prioritize an exploration's language when
          // setting the default audio language.
          SUPPORTED_AUDIO_LANGUAGES: [
            {
              id: 'en',
              description: 'English',
              relatedLanguages: ['en'],
              direction: 'ltr',
            },
            {
              id: 'ak',
              description: 'Ákán (Akan)',
              relatedLanguages: ['ak'],
              direction: 'ltr',
            },
            {
              id: 'sq',
              description: 'shqip (Albanian)',
              relatedLanguages: ['sq'],
              direction: 'ltr',
            },
            {
              id: 'am',
              description: 'አማርኛ (Amharic)',
              relatedLanguages: ['am'],
              direction: 'ltr',
            },
            {
              id: 'ar',
              description: 'العربية (Arabic)',
              relatedLanguages: ['ar'],
              direction: 'rtl',
            },
            {
              id: 'az',
              description: 'Azeri (Azerbaijani)',
              relatedLanguages: ['az'],
              direction: 'ltr',
            },
            {
              id: 'bg',
              description: 'български (Bulgarian)',
              relatedLanguages: ['bg'],
              direction: 'ltr',
            },
            {
              id: 'bn',
              description: 'বাংলা (Bangla)',
              relatedLanguages: ['bn'],
              direction: 'ltr',
            },
            {
              id: 'ms',
              description: 'بهاس ملايو(Bahasa Melayu)',
              relatedLanguages: ['ms'],
              direction: 'ltr',
            },
            {
              id: 'ca',
              description: 'català (Catalan)',
              relatedLanguages: ['ca'],
              direction: 'ltr',
            },
            {
              id: 'zh',
              description: '中文 (Chinese)',
              relatedLanguages: ['zh'],
              direction: 'ltr',
            },
            {
              id: 'hr',
              description: 'hrvatski (Croatian)',
              relatedLanguages: ['hr'],
              direction: 'ltr',
            },
            {
              id: 'cs',
              description: 'čeština (Czech)',
              relatedLanguages: ['cs'],
              direction: 'ltr',
            },
            {
              id: 'da',
              description: 'dansk (Danish)',
              relatedLanguages: ['da'],
              direction: 'ltr',
            },
            {
              id: 'prs',
              description: 'دری (Dari)',
              relatedLanguages: ['prs'],
              direction: 'rtl',
            },
            {
              id: 'nl',
              description: 'Nederlands (Dutch)',
              relatedLanguages: ['nl'],
              direction: 'ltr',
            },
            {
              id: 'ee',
              description: 'Eʋegbe (Ewe)',
              relatedLanguages: ['ee'],
              direction: 'ltr',
            },
            {
              id: 'fat',
              description: 'Fante (Fanti)',
              relatedLanguages: ['ak', 'fat'],
              direction: 'ltr',
            },
            {
              id: 'tl',
              description: 'Filipino (Filipino)',
              relatedLanguages: ['tl'],
              direction: 'ltr',
            },
            {
              id: 'fi',
              description: 'suomi (Finnish)',
              relatedLanguages: ['fi'],
              direction: 'ltr',
            },
            {
              id: 'fr',
              description: 'français (French)',
              relatedLanguages: ['fr'],
              direction: 'ltr',
            },
            {
              id: 'lg',
              description: 'Luganda (Ganda)',
              relatedLanguages: ['lg'],
              direction: 'ltr',
            },
            {
              id: 'de',
              description: 'Deutsch (German)',
              relatedLanguages: ['de'],
              direction: 'ltr',
            },
            {
              id: 'el',
              description: 'ελληνικά (Greek)',
              relatedLanguages: ['el'],
              direction: 'ltr',
            },
            {
              id: 'gaa',
              description: 'Gã (Ga)',
              relatedLanguages: ['gaa'],
              direction: 'ltr',
            },
            {
              id: 'ha',
              description: 'Harshen Hausa (Hausa)',
              relatedLanguages: ['ha'],
              direction: 'ltr',
            },
            {
              id: 'he',
              description: 'עברית (Hebrew)',
              relatedLanguages: ['he'],
              direction: 'rtl',
            },
            {
              id: 'hi',
              description: 'हिन्दी (Hindi)',
              relatedLanguages: ['hi'],
              direction: 'ltr',
            },
            {
              id: 'hi-en',
              description: 'Hinglish',
              relatedLanguages: ['hi', 'en'],
              direction: 'ltr',
            },
            {
              id: 'hu',
              description: 'magyar (Hungarian)',
              relatedLanguages: ['hu'],
              direction: 'ltr',
            },
            {
              id: 'id',
              description: 'Bahasa Indonesia (Indonesian)',
              relatedLanguages: ['id'],
              direction: 'ltr',
            },
            {
              id: 'ig',
              description: 'Ásụ̀sụ́ Ìgbò (Igbo)',
              relatedLanguages: ['igbo'],
              direction: 'ltr',
            },
            {
              id: 'it',
              description: 'italiano (Italian)',
              relatedLanguages: ['it'],
              direction: 'ltr',
            },
            {
              id: 'ja',
              description: '日本語 (Japanese)',
              relatedLanguages: ['ja'],
              direction: 'ltr',
            },
            {
              id: 'kab',
              description: 'Taqbaylit (Kabyle)',
              relatedLanguages: ['kab'],
              direction: 'ltr',
            },
            {
              id: 'ko',
              description: '한국어 (Korean)',
              relatedLanguages: ['ko'],
              direction: 'ltr',
            },
            {
              id: 'lv',
              description: 'latviešu (Latvian)',
              relatedLanguages: ['lv'],
              direction: 'ltr',
            },
            {
              id: 'lt',
              description: 'lietuvių (Lithuanian)',
              relatedLanguages: ['lt'],
              direction: 'ltr',
            },
            {
              id: 'mr',
              description: 'मराठी (Marathi)',
              relatedLanguages: ['mr'],
              direction: 'ltr',
            },
            {
              id: 'no',
              description: 'Norsk (Norwegian)',
              relatedLanguages: ['no'],
              direction: 'ltr',
            },
            {
              id: 'fa',
              description: 'فارسی (Persian)',
              relatedLanguages: ['fa'],
              direction: 'rtl',
            },
            {
              id: 'pcm',
              description: 'Naijá (Nigerian Pidgin)',
              relatedLanguages: ['pcm'],
              direction: 'ltr',
            },
            {
              id: 'pl',
              description: 'polszczyzna (Polish)',
              relatedLanguages: ['pl'],
              direction: 'ltr',
            },
            {
              id: 'pt',
              description: 'português (Portuguese)',
              relatedLanguages: ['pt'],
              direction: 'ltr',
            },
            {
              id: 'ps',
              description: 'پښتو (Pashto)',
              relatedLanguages: ['ps'],
              direction: 'rtl',
            },
            {
              id: 'ro',
              description: 'română (Romanian)',
              relatedLanguages: ['ro'],
              direction: 'ltr',
            },
            {
              id: 'ru',
              description: 'pусский (Russian)',
              relatedLanguages: ['ru'],
              direction: 'ltr',
            },
            {
              id: 'sr',
              description: 'cрпски (Serbian)',
              relatedLanguages: ['sr'],
              direction: 'ltr',
            },
            {
              id: 'sk',
              description: 'slovenčina (Slovak)',
              relatedLanguages: ['sk'],
              direction: 'ltr',
            },
            {
              id: 'sl',
              description: 'slovenščina (Slovenian)',
              relatedLanguages: ['sl'],
              direction: 'ltr',
            },
            {
              id: 'es',
              description: 'español (Spanish)',
              relatedLanguages: ['es'],
              direction: 'ltr',
            },
            {
              id: 'sw',
              description: 'kiswahili (Swahili)',
              relatedLanguages: ['sw'],
              direction: 'ltr',
            },
            {
              id: 'sv',
              description: 'svenska (Swedish)',
              relatedLanguages: ['sv'],
              direction: 'ltr',
            },
            {
              id: 'ta',
              description: 'தமிழ் (Tamil)',
              relatedLanguages: ['ta'],
              direction: 'ltr',
            },
            {
              id: 'te',
              description: 'తెలుగు (Telugu)',
              relatedLanguages: ['te'],
              direction: 'ltr',
            },
            {
              id: 'th',
              description: 'ภาษาไทย (Thai)',
              relatedLanguages: ['th'],
              direction: 'ltr',
            },
            {
              id: 'tr',
              description: 'Türkçe (Turkish)',
              relatedLanguages: ['tr'],
              direction: 'ltr',
            },
            {
              id: 'uk',
              description: 'yкраїнська (Ukrainian)',
              relatedLanguages: ['uk'],
              direction: 'ltr',
            },
            {
              id: 'ur',
              description: 'اُردُو (Urdu)',
              relatedLanguages: ['ur'],
              direction: 'rtl',
            },
            {
              id: 'vi',
              description: 'Tiếng Việt (Vietnamese)',
              relatedLanguages: ['vi'],
              direction: 'ltr',
            },
            {
              id: 'yo',
              description: 'Èdè Yoùbá (Yoruba)',
              relatedLanguages: ['yo'],
              direction: 'ltr',
            },
          ],
          AUTOGENERATED_AUDIO_LANGUAGES: [
            {
              id: 'en-auto',
              description: 'English (auto)',
              explorationLanguage: 'en',
              speechSynthesisCode: 'en-US',
              speechSynthesisCodeMobile: 'en_US',
            },
          ],
          TRANSLATION_TIPS: {
            // Arabic.
            ar: [
              // eslint-disable-next-line max-len
              'In Oppia, we prefer to use simple words that can be easily understood by children. For example, we use “تابع قائلًا” instead of “أردف قائلًا”. Furthermore, the English words that are used in the Arab society regularly can be translated as follows; Arabic word (The regularly used English word). For example, we can translate the word cupcakes this way; كعك القوالب الصغيرة (cupcakes). ',
              // eslint-disable-next-line max-len
              'Use respectful ways and formal prefixes to address people. For example, use “سيدي” and “سيدتي”. ',
              // eslint-disable-next-line max-len
              'If the name has a meaning in Arabic, or in English, such as Baker or Crumb, always use words that indicate that they are names before writing the name itself. For example, you can use one of the following words depending on the context; “السيد، السيدة، العم، الجد، الجدة، الآنسة.”',
              'Use the same voice (active or passive) as in the original English Text',
              // eslint-disable-next-line max-len
              'Preserve punctuation and bolding. If the original content has bold text, make sure it is bold in Arabic as well. If there are bullet points, double quotes, etc., make sure that the translated content also has bullet points and double quotes.',
              // eslint-disable-next-line max-len
              'Use the hyperlinks to different cards as shown in the original English Text.',
            ],
            // Bangla.
            bn: [
              // eslint-disable-next-line max-len
              'Use simple Bangla words that are used in daily communication. Note that common English words (pencil, etc.) can be written as transliterations (e.g পেন্সিল ).',
              'Use proper punctuation.',
              'Full stop = |',
              // eslint-disable-next-line max-len
              'Use the same voice (active or passive) as in the original English text.',
              // eslint-disable-next-line max-len
              'Preserve punctuation and bolding. If the original content has bold text, make sure it is bold in Bangla as well. If there are bullet points, double quotes, etc., make sure that the translated content also has bullet points and double quotes.',
            ],
            // Chinese.
            zh: [
              // eslint-disable-next-line max-len
              'Write fractions or numbers as they are, unless they are written out in words. For instance, one-fifth would be (五分之一)',
              // eslint-disable-next-line max-len
              'When referring to Mr. Baker (or, in general, Mr./Ms. followed by an occupation), leave it as Baker先生, since in certain cases Baker is the last name.',
              'Make sure to use the correct punctuation:',
              'Period = 。',
              'Comma for compound sentences or translation phrases = ，',
              'Comma for list of numbers or objects = 、',
              // eslint-disable-next-line max-len
              'Preserve bolding. If the original content has bold text, make sure it is bold in Chinese as well.',
              // eslint-disable-next-line max-len
              'Make sure that you have selected the correct words (e.g. words such as 再 and 在 ).',
            ],
            // Hindi.
            hi: [
              // eslint-disable-next-line max-len
              'Prefer simple Hindi words that are used in daily communication Note that common English words (pen, paper, cake, etc.) can be written as transliterations (पेन, पेपर, केक). For harder words, include the English word in parentheses, e.g. अंश (Numerator), हर (Denominator), भिन्न (Fraction).',
              // eslint-disable-next-line max-len
              'Use respectful pronouns (like “आप” instead of “तुम/तू ”) and a corresponding respectful tone like “करिये, करेंगे”.',
              // eslint-disable-next-line max-len
              'Feel free to change the voice and order of phrases to make the text readable.',
              // eslint-disable-next-line max-len
              'Preserve punctuation and bolding. If the original content has bold text, make sure it is bold in Hindi as well. If there are bullet points, double quotes, etc., make sure that the translated content also has bullet points and double quotes.',
              // eslint-disable-next-line max-len
              'If the original card has “components” (such as pictures, links, and equations), these need to be added to the translated content. You can use the “Copy tool” for this -- click on the Copy tool and then click on the component you want to carry over. Also, double-click on the image and translate the alt text (and caption, if any).',
              // eslint-disable-next-line max-len
              'Refer to Glossary - https://docs.google.com/spreadsheets/d/13NMEnYqLZuMbeX1Z6XXG-femHkKNAN8KwjhaC67EkxI/edit#gid=0',
            ],
            // Spanish.
            es: [
              'Include proper punctuation, ¡blank!, ¿question? and accent marks.',
              // eslint-disable-next-line max-len
              'In Spanish, the nouns are usually gendered. Make sure to use the correct article gender for the noun gender (el gato, la casa , las mujeres, los hombres etc.) El is usually used for masculine singular and la is usually for feminine singular. Los for masculine plural and las for feminine plural.',
              // eslint-disable-next-line max-len
              'Try to make sure that the accents are placed correctly as it can make a big difference in meaning for the reader (tu = your vs. tú = informal you, si = if vs. sí = yes).',
              // eslint-disable-next-line max-len
              'Preserve punctuation and bolding. If the original content has bold text, make sure it is bold in Spanish as well. If there are bullet points, double quotes, etc., make sure that the translated content also has bullet points and double quotes.',
            ],
            // Portuguese.
            pt: [
              // eslint-disable-next-line max-len
              'When translating names of mathematical terms, look for how these names are used in Brazilian education/literature instead of translating literally. For example, while the names may be similar in some cases (e.g. "The Commutative Property of Multiplication" would be "A Propriedade Comutativa da Multiplicação"), in other cases the literal translation will not match the names used in Brazil (e.g. "The Carrying Method of multiplication" would be "O Método Tradicional de Multiplicação"). Also, terms like "Place Values" may have a different translation depending on the context, which may be "casa"/"ordem" or "valor relativo".',
              // eslint-disable-next-line max-len
              'When writing a number, remember that "," in English corresponds to "." in Portuguese, and vice-versa.',
              // eslint-disable-next-line max-len
              'Prefer to use friendly words and sentences for children. For example, instead of using "Diga-me o nome..." or "vou pedir-lhe ajuda", you can write the sentence with a more informal language like "Me diga o nome..." or "vou pedir a sua ajuda".',
              // eslint-disable-next-line max-len
              'In English some nouns/articles are neutral. In Portuguese the nouns are usually gendered. Be careful not to generate inconsistencies and make sure to use the correct article gender for the noun gender. For example: Nina and Sandra loved the cake. They went out to buy more. In Portuguese: Nina e Sandra adoraram o bolo. Elas saíram para comprar mais.',
              // eslint-disable-next-line max-len
              'Preserve punctuation and bolding. If the original content has bold text, make sure it is bold in Portuguese as well. If there are bullet points, double quotes, etc., make sure that the translated content also has bullet points and double quotes.',
              // eslint-disable-next-line max-len
              'If the original card has “components” (such as pictures, links, and equations), these need to be added to the translated content. You can use the “Copy tool” for this -- click on the Copy tool and then click on the component you want to carry over. Also, double-click on the image and translate the alt text (and caption, if any).',
              // eslint-disable-next-line max-len
              "Images with text in English should be edited and replaced by the same images with the same text in Portuguese. If you don't know how to edit the image, please skip the translation.",
              // eslint-disable-next-line max-len
              'If you think you need more context in order to get the right terms and nouns, please play the lesson once before submitting the translation.',
              // eslint-disable-next-line max-len
              'Keep in mind that some English puns may not work for Portuguese, so you might need to adjust them or construct the same sentence without the pun.',
              'When translating a currency, replace "Dollar" for "Real".',
            ],
          },
          // Types of view in creator dashboard page.
          ALLOWED_CREATOR_DASHBOARD_DISPLAY_PREFS: {
            CARD: 'card',
            LIST: 'list',
          },
          EMAIL_REGEX: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+',
          ALLOWED_QUESTION_INTERACTION_CATEGORIES: [
            {
              name: 'Commonly Used',
              interaction_ids: [
                'ImageClickInput',
                'ItemSelectionInput',
                'MultipleChoiceInput',
                'TextInput',
                'DragAndDropSortInput',
                'NumericInput',
              ],
            },
            {
              name: 'Math',
              interaction_ids: [
                'FractionInput',
                'NumberWithUnits',
                'NumericInput',
              ],
            },
          ],
          // These are linked to the VALID_INTERACTION_IDS constant in
          // android_validation_constants.py.
          ALLOWED_EXPLORATION_IN_STORY_INTERACTION_CATEGORIES: [
            {
              name: 'General',
              interaction_ids: [
                'Continue',
                'EndExploration',
                'ImageClickInput',
                'ItemSelectionInput',
                'MultipleChoiceInput',
                'TextInput',
                'DragAndDropSortInput',
              ],
            },
            {
              name: 'Math',
              interaction_ids: [
                'FractionInput',
                'NumericInput',
                'NumericExpressionInput',
                'AlgebraicExpressionInput',
                'MathEquationInput',
                'NumberWithUnits',
                'RatioExpressionInput',
              ],
            },
          ],
          // These categories and interactions are displayed in the order in which they
          // appear in the interaction selector.
          ALLOWED_INTERACTION_CATEGORIES: [
            {
              name: 'Commonly Used',
              interaction_ids: [
                'Continue',
                'EndExploration',
                'ImageClickInput',
                'ItemSelectionInput',
                'MultipleChoiceInput',
                'NumericInput',
                'TextInput',
                'DragAndDropSortInput',
              ],
            },
            {
              name: 'Math',
              interaction_ids: [
                'FractionInput',
                'GraphInput',
                'NumericInput',
                'SetInput',
                'NumericExpressionInput',
                'AlgebraicExpressionInput',
                'MathEquationInput',
                'NumberWithUnits',
                'RatioExpressionInput',
              ],
            },
            {
              name: 'Programming',
              interaction_ids: ['CodeRepl', 'PencilCodeEditor'],
            },
            {
              name: 'Music',
              interaction_ids: ['MusicNotesInput'],
            },
            {
              name: 'Geography',
              interaction_ids: ['InteractiveMap'],
            },
          ],
          MIN_CHOICES_IN_MULTIPLE_CHOICE_INPUT_CURATED_EXP: 4,
          MIN_CHOICES_IN_MULTIPLE_CHOICE_INPUT_REGULAR_EXP: 2,
          CD_USER_RIGHTS_CATEGORY_REVIEW_TRANSLATION: 'translation',
          CD_USER_RIGHTS_CATEGORY_REVIEW_VOICEOVER: 'voiceover',
          CD_USER_RIGHTS_CATEGORY_REVIEW_QUESTION: 'question',
          CD_USER_RIGHTS_CATEGORY_SUBMIT_QUESTION: 'submit_question',
          CD_USER_RIGHTS_CATEGORIES: [
            'translation',
            'question',
            'voiceover',
            'submit_question',
          ],
          SUGGESTIONS_SORT_KEY_DATE: 'Date',
          ACTION_REMOVE_ALL_REVIEW_RIGHTS: 'all',
          ACTION_REMOVE_SPECIFIC_CONTRIBUTION_RIGHTS: 'specific',
          USER_FILTER_CRITERION_USERNAME: 'username',
          USER_FILTER_CRITERION_ROLE: 'role',
          // Interaction IDs for which answer details cannot be solicited.
          INTERACTION_IDS_WITHOUT_ANSWER_DETAILS: [
            'EndExploration',
            'Continue',
          ],
          ALLOWED_COLLECTION_IDS_FOR_SAVING_GUEST_PROGRESS: [],
          FEEDBACK_SUBJECT_MAX_CHAR_LIMIT: 50,
          MAX_CURRENT_GOALS_COUNT: 5,
          ACTIVITY_STATUS_PRIVATE: 'private',
          ACTIVITY_STATUS_PUBLIC: 'public',
          SITE_FEEDBACK_FORM_URL: '',
          SYSTEM_USER_IDS: ['admin', 'OppiaMigrationBot'],
          // A string containing the disallowed characters in state or exploration
          // names. The underscore is needed because spaces in names must be converted
          // to underscores when displayed as part of a URL or key. The other
          // conventions here are derived from the Wikipedia guidelines for naming
          // articles.
          INVALID_NAME_CHARS: [
            ':',
            '#',
            '/',
            '|',
            '_',
            '%',
            '<',
            '>',
            '[',
            ']',
            '{',
            '}',
            '\\ufffd',
            '\\\\',
            '\\u007f',
            '\\u0000',
            '\\u0001',
            '\\u0002',
            '\\u0003',
            '\\u0004',
            '\\u0005',
            '\\u0006',
            '\\u0007',
            '\\b',
            '\\t',
            '\\n',
            '\\u000b',
            '\\f',
            '\\r',
            '\\u000e',
            '\\u000f',
            '\\u0010',
            '\\u0011',
            '\\u0012',
            '\\u0013',
            '\\u0014',
            '\\u0015',
            '\\u0016',
            '\\u0017',
            '\\u0018',
            '\\u0019',
            '\\u001a',
            '\\u001b',
            '\\u001c',
            '\\u001d',
            '\\u001e',
            '\\u001f',
          ],
          DEFAULT_SKILL_DIFFICULTY: 0.6,
          INLINE_RTE_COMPONENTS: ['link', 'math', 'skillreview'],
          // If new difficulties are added or the names changed, only the constants
          // below need to be edited.
          SKILL_DIFFICULTY_EASY: 'Easy',
          SKILL_DIFFICULTY_MEDIUM: 'Medium',
          SKILL_DIFFICULTY_HARD: 'Hard',
          SKILL_DIFFICULTIES: ['Easy', 'Medium', 'Hard'],
          SKILL_DIFFICULTY_LABEL_TO_FLOAT: {
            Easy: 0.3,
            Medium: 0.6,
            Hard: 0.9,
          },
          ENABLE_PREREQUISITE_SKILLS: false,
          ENABLE_NEW_STRUCTURE_VIEWER_UPDATES: true,
          ENABLE_SOLICIT_ANSWER_DETAILS_FEATURE: true,
          MAX_SKILLS_PER_QUESTION: 3,
          MAX_QUESTIONS_PER_SKILL: 10,
          NUM_EXPLORATIONS_PER_REVIEW_TEST: 3,
          NUM_QUESTIONS_PER_PAGE: 10,
          MIN_QUESTION_COUNT_FOR_A_DIAGNOSTIC_TEST_SKILL: 3,
          BULK_EMAIL_SERVICE_SIGNUP_URL: '',
          // The default number of opportunities to show on the contributor dashboard
          // page.
          OPPORTUNITIES_PAGE_SIZE: 10,
          // The breakpoint for mobile view for contributor dashboard in px.
          // This value must be the same as the one specified in
          // opportunities-list-item.component.html.
          OPPORTUNITIES_LIST_ITEM_MOBILE_BREAKPOINT: 700,
          // Represents the string value indicating "All topics" in the Contributor
          // Dashboard topic selector.
          TOPIC_SENTINEL_NAME_ALL: 'All',
          // Review message to display for an obsolete translation suggestion with no
          // exploration content.
          // eslint-disable-next-line max-len
          OBSOLETE_TRANSLATION_SUGGESTION_REVIEW_MSG:
            'The original content was deleted and no longer needs translation. Sorry about that!',
          // The following character limit constraints follow from
          // android_validation_constants.py. Both have to be kept in sync.
          // This represents the maximum number of characters in the URL fragment for
          // classroom in the classroom page URL. E.g. in /learn/math/...,
          // 'math' is the 'classroom URL fragment'.
          MAX_CHARS_IN_CLASSROOM_URL_FRAGMENT: 20,
          MAX_CHARS_IN_CLASSROOM_NAME: 39,
          MAX_CHARS_IN_CLASSROOM_TEASER_TEXT: 68,
          MAX_CHARS_IN_CLASSROOM_COURSE_DETAILS: 720,
          MAX_CHARS_IN_CLASSROOM_TOPIC_LIST_INTRO: 240,
          MAX_CHARS_IN_TOPIC_NAME: 39,
          MAX_CHARS_IN_ABBREV_TOPIC_NAME: 12,
          // This represents the maximum number of characters in the URL fragment for
          // topic in the topic page URL. E.g. in /learn/math/fractions/...,
          // 'fractions' is the 'topic URL fragment'.
          MAX_CHARS_IN_TOPIC_URL_FRAGMENT: 20,
          MAX_CHARS_IN_TOPIC_DESCRIPTION: 240,
          MAX_CHARS_IN_SUBTOPIC_TITLE: 64,
          MAX_CHARS_IN_SKILL_DESCRIPTION: 100,
          MAX_CHARS_IN_STORY_TITLE: 39,
          MAX_CHARS_IN_STORY_DESCRIPTION: 1000,
          MAX_CHARS_IN_EXPLORATION_TITLE: 36,
          MAX_CHARS_IN_CHAPTER_DESCRIPTION: 152,
          MAX_CHARS_IN_MISCONCEPTION_NAME: 100,
          MAX_CHARS_IN_BLOG_POST_TITLE: 65,
          MIN_CHARS_IN_BLOG_POST_TITLE: 5,
          MAX_CHARS_IN_BLOG_POST_SUMMARY: 300,
          MAX_CHARS_IN_LEARNER_GROUP_TITLE: 36,
          STORY_ID_LENGTH: 12,
          // This represents the maximum number of characters in the URL fragment for
          // story in the story page URL. E.g.
          // in /learn/math/fractions/story/bakery/..., 'bakery' is the
          // 'story URL fragment'.
          MAX_CHARS_IN_STORY_URL_FRAGMENT: 30,
          // This represents the maximum number of characters in the URL fragment for
          // subtopic in the revision page URL. E.g.
          // in /learn/math/fractions/revision/place-values, 'place-values' is the
          // 'subtopic URL fragment'.
          MAX_CHARS_IN_SUBTOPIC_URL_FRAGMENT: 25,
          // This is same as base_models.ID_Length.
          BLOG_POST_ID_LENGTH: 12,
          // The recommended length for meta tag contents. Search engines will truncate
          // results greater than this limit.
          MAX_CHARS_IN_META_TAG_CONTENT: 160,
          MIN_CHARS_IN_PAGE_TITLE_FRAGMENT_FOR_WEB: 5,
          MAX_CHARS_IN_PAGE_TITLE_FRAGMENT_FOR_WEB: 50,
          // The maximum number of questions can exceed this by at most 3
          // (i.e., 18 questions) in some special cases when the user has attempted 14
          // questions and another topic is tested for more accurate results. For all
          // other cases, 15 questions is the upper limit.
          MAX_ALLOWED_QUESTIONS_IN_THE_DIAGNOSTIC_TEST: 15,
          NEW_STATE_TEMPLATE: {
            classifier_model_id: null,
            linked_skill_id: null,
            content: {
              html: '',
              content_id: 'content',
            },
            inapplicable_skill_misconception_ids: null,
            interaction: {
              id: null,
              customization_args: {},
              answer_groups: [],
              default_outcome: {
                dest: 'Introduction',
                dest_if_really_stuck: null,
                feedback: {
                  content_id: 'default_outcome',
                  html: '',
                },
                labelled_as_correct: false,
                param_changes: [],
                refresher_exploration_id: null,
                missing_prerequisite_skill_id: null,
              },
              confirmed_unclassified_answers: [],
              hints: [],
              solution: null,
            },
            param_changes: [],
            recorded_voiceovers: {
              voiceovers_mapping: {},
            },
            solicit_answer_details: false,
            card_is_checkpoint: false,
          },
          // Data required for Firebase authentication.
          //
          // NOTE TO RELEASE COORDINATORS: Please change these to the production values,
          // and change useEmulator to be false, before deploying to production.
          FIREBASE_CONFIG_API_KEY: 'fake-api-key',
          FIREBASE_CONFIG_AUTH_DOMAIN: '',
          FIREBASE_CONFIG_PROJECT_ID: 'dev-project-id',
          FIREBASE_CONFIG_STORAGE_BUCKET: '',
          FIREBASE_CONFIG_MESSAGING_SENDER_ID: '',
          FIREBASE_CONFIG_APP_ID: '',
          FIREBASE_CONFIG_GOOGLE_CLIENT_ID: '',
          // The name of the cookie Oppia will place the session cookie into. The name
          // is arbitrary. If it is changed later on, then the cookie will live on in
          // the users' browsers as garbage (although it'd expire eventually).
          FIREBASE_AUTH_SESSION_COOKIE_NAME: 'session',
          ALLOW_YAML_FILE_UPLOAD: false,
          // A regular expression for tags.
          TAG_REGEX: '^[a-z ]+$',
          // A regular expression for allowed character in tags for blog post.
          BLOG_POST_TAG_REGEX: '^[a-zA-Z0-9 ]+$',
          // A regular expression for allowed characters in URL fragment fields.
          VALID_URL_FRAGMENT_REGEX: '^[a-z]+(-[a-z]+)*$',
          // A regular expression for allowed characters for thumbnail filename.
          VALID_THUMBNAIL_FILENAME_REGEX: '^[^.](?!.*/)(?!.*\\.\\.).*.svg$',
          // A regular expression for allowed entity id's.
          ENTITY_ID_REGEX: '^[a-zA-Z0-9-_]{1,12}$',
          // A regular expression for allowed learner group IDs.
          LEARNER_GROUP_ID_REGEX: '^[a-zA-Z]{1,12}$',
          // A regular expression for allowed characters in Title field for Blog Post.
          // eslint-disable-next-line max-len
          VALID_BLOG_POST_TITLE_REGEX:
            "^[a-zA-Z0-9(&!,'/)][a-zA-Z0-9(&!,'/) ]+([-:][ a-zA-Z0-9(&!,'/)]+)*$",
          // A regular expression for allowed characters in URL fragment for Blog Post.
          VALID_URL_BLOG_FRAGMENT_REGEX: '^[a-z0-9]+(-[a-z0-9]+)*$',
          // A regular expression for allowed characters in URL fragment for Blog Post.
          // eslint-disable-next-line max-len
          VALID_THREAD_ID_REGEX:
            '(exploration|collection|skill).[a-zA-Z0-9]+.[a-zA-Z0-9=]+',
          // A regular expression for valid skill misconception id.
          VALID_SKILL_MISCONCEPTION_ID_REGEX: '[A-Za-z0-9]{12}-[0-9]+',
          // A regular expression for allowed characters in author name field for Author
          // details Model.
          VALID_AUTHOR_NAME_REGEX: '^[a-zA-Z0-9][a-zA-Z0-9 ]+(-[a-zA-Z0-9]+)*$',
          // Invalid names for parameters used in expressions.
          INVALID_PARAMETER_NAMES: [
            'answer',
            'choices',
            'abs',
            'all',
            'and',
            'any',
            'else',
            'floor',
            'if',
            'log',
            'or',
            'pow',
            'round',
            'then',
          ],
          // Greek letters allowed in math interactions.
          GREEK_LETTER_NAMES_TO_SYMBOLS: {
            alpha: 'α',
            beta: 'β',
            gamma: 'γ',
            delta: 'δ',
            epsilon: 'ε',
            zeta: 'ζ',
            eta: 'η',
            theta: 'θ',
            iota: 'ι',
            kappa: 'κ',
            lambda: 'λ',
            mu: 'μ',
            nu: 'ν',
            xi: 'ξ',
            pi: 'π',
            rho: 'ρ',
            sigma: 'σ',
            tau: 'τ',
            upsilon: 'υ',
            phi: 'φ',
            chi: 'χ',
            psi: 'ψ',
            omega: 'ω',
            Gamma: 'Γ',
            Delta: 'Δ',
            Theta: 'Θ',
            Lambda: 'Λ',
            Xi: 'Ξ',
            Pi: 'Π',
            Sigma: 'Σ',
            Phi: 'Φ',
            Psi: 'Ψ',
            Omega: 'Ω',
          },
          // The greek letters in the list should be in sync with the
          // GREEK_LETTER_NAMES_TO_SYMBOLS object's keys.
          VALID_ALGEBRAIC_IDENTIFIERS: [
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
            'g',
            'h',
            'i',
            'j',
            'k',
            'l',
            'm',
            'n',
            'o',
            'p',
            'q',
            'r',
            's',
            't',
            'u',
            'v',
            'w',
            'x',
            'y',
            'z',
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
            'alpha',
            'beta',
            'gamma',
            'delta',
            'epsilon',
            'zeta',
            'eta',
            'theta',
            'iota',
            'kappa',
            'lambda',
            'mu',
            'nu',
            'xi',
            'pi',
            'rho',
            'sigma',
            'tau',
            'upsilon',
            'phi',
            'chi',
            'psi',
            'omega',
            'Gamma',
            'Delta',
            'Theta',
            'Lambda',
            'Xi',
            'Pi',
            'Sigma',
            'Phi',
            'Psi',
            'Omega',
          ],
          // Valid allowed letters for math lessons.
          VALID_ALLOWED_VARIABLES: [
            'a',
            'b',
            'c',
            'd',
            'e',
            'f',
            'g',
            'h',
            'i',
            'j',
            'k',
            'l',
            'm',
            'n',
            'o',
            'p',
            'q',
            'r',
            's',
            't',
            'u',
            'v',
            'w',
            'x',
            'y',
            'z',
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
            'α',
            'β',
            'γ',
            'δ',
            'ε',
            'ζ',
            'η',
            'θ',
            'ι',
            'κ',
            'λ',
            'μ',
            'ν',
            'ξ',
            'π',
            'ρ',
            'σ',
            'τ',
            'υ',
            'φ',
            'χ',
            'ψ',
            'ω',
            'Γ',
            'Δ',
            'Θ',
            'Λ',
            'Ξ',
            'Π',
            'Σ',
            'Φ',
            'Ψ',
            'Ω',
          ],
          // Number of custom letters allowed in the on-screen keyboard for math
          // interactions.
          MAX_CUSTOM_LETTERS_FOR_OSK: 10,
          // Functions allowed in math interactions.
          MATH_FUNCTION_NAMES: [
            'log',
            'ln',
            'sqrt',
            'abs',
            'sin',
            'cos',
            'tan',
            'sec',
            'csc',
            'cot',
            'arcsin',
            'arccos',
            'arctan',
            'sinh',
            'cosh',
            'tanh',
          ],
          // Supported functions for math interactions.
          SUPPORTED_FUNCTION_NAMES: ['sqrt', 'abs'],
          OSK_MAIN_TAB: 'mainTab',
          OSK_FUNCTIONS_TAB: 'functionsTab',
          OSK_LETTERS_TAB: 'lettersTab',
          CUSTOM_LETTERS_LATIN_TAB: 'latinTab',
          CUSTOM_LETTERS_GREEK_TAB: 'greekTab',
          // Name to human readable form mapping of the position of terms object.
          POSITION_OF_TERMS_MAPPING: [
            {
              name: 'lhs',
              humanReadableName: 'on Left Hand Side',
            },
            {
              name: 'rhs',
              humanReadableName: 'on Right Hand Side',
            },
            {
              name: 'both',
              humanReadableName: 'on both sides',
            },
            {
              name: 'irrelevant',
              humanReadableName: 'with reordering allowed around =',
            },
          ],
          // Placeholder texts for the math interactions.
          MATH_INTERACTION_PLACEHOLDERS: {
            AlgebraicExpressionInput:
              'I18N_INTERACTIONS_ALGEBRAIC_EXPR_INSTRUCTION',
            MathEquationInput: 'I18N_INTERACTIONS_MATH_EQ_INSTRUCTION',
            // The following is user editable and hence, is not translated.
            NumericExpressionInput:
              'Type an expression here, using only numbers.',
          },
          // Unfinished features.
          SHOW_TRAINABLE_UNRESOLVED_ANSWERS: false,
          // eslint-disable-next-line max-len
          DEFAULT_TWITTER_SHARE_MESSAGE_EDITOR:
            'Check out this interactive lesson on Oppia - a free platform for teaching and learning!',
          // eslint-disable-next-line max-len
          DEFUALT_BLOG_POST_SHARE_TWITTER_TEXT:
            'Check out this new blog post on Oppia!',
          OPPORTUNITY_TYPE_SKILL: 'skill',
          OPPORTUNITY_TYPE_TRANSLATION: 'translation',
          // The bucket name is set to app_default_bucket which is used to store files
          // in GCS when local development server is running. This should be changed
          // in prod appropriately.
          GCS_RESOURCE_BUCKET_NAME: 'app_default_bucket',
          ENABLE_EXP_FEEDBACK_FOR_LOGGED_OUT_USERS: true,
          // Maximum allowed length of a username.
          MAX_USERNAME_LENGTH: 30,
          // Minimum allowed length of a blog post author's name.
          MIN_AUTHOR_NAME_LENGTH: 2,
          // Maximum allowed length of a blog post author's name.
          MAX_AUTHOR_NAME_LENGTH: 35,
          // Minimum allowed characters in a blog post author's bio.
          MIN_CHARS_IN_AUTHOR_BIO: 5,
          // Maximum allowed characters in a blog post author's bio.
          MAX_CHARS_IN_AUTHOR_BIO: 250,
          // Maximum allowed length of a state name.
          MAX_STATE_NAME_LENGTH: 50,
          // Maximum allowed length of unique progress url ID.
          MAX_PROGRESS_URL_ID_LENGTH: 6,
          PLATFORM_PARAMETER_ALLOWED_PLATFORM_TYPES: [
            'Web',
            'Android',
            'Backend',
          ],
          // The ordering of in ALLOWED_APP_VERSION_FLAVORS implies the ordering
          // of corresponding flavors, which is used in app_version_flavor filter for
          // order comparison, with ordering: 'test' < 'alpha' < 'beta' < 'release'.
          PLATFORM_PARAMETER_ALLOWED_APP_VERSION_FLAVORS: [
            'test',
            'alpha',
            'beta',
            'release',
          ],
          PLATFORM_PARAMETER_APP_VERSION_WITHOUT_HASH_REGEXP:
            '^(\\d+(?:\\.\\d+){2})$',
          PLATFORM_PARAMETER_APP_VERSION_WITH_HASH_REGEXP:
            '^(\\d+(?:\\.\\d+){2})(?:-[a-z0-9]+(?:-(.+))?)?$',
          // Maximum allowed commit message length. 375 characters because indexed
          // fields must be at most 1500 bytes, and UTF-8 encoded characters can be
          // up to 4 bytes long.
          MAX_COMMIT_MESSAGE_LENGTH: 375,
          MAX_REVIEW_MESSAGE_LENGTH: 2000,
          EMAIL_DASHBOARD_PREDICATE_DEFINITION: [
            {
              backend_id: 'user_inactivity',
              backend_attr: 'inactive_in_last_n_days',
              description: 'Inactive in last n days',
              schema: {
                type: 'int',
                validators: [
                  {
                    id: 'is_at_least',
                    min_value: 0,
                  },
                ],
              },
              default_value: null,
            },
            {
              backend_id: 'user_login_activity',
              backend_attr: 'has_not_logged_in_for_n_days',
              description: 'Has not logged in for n days',
              schema: {
                type: 'int',
                validators: [
                  {
                    id: 'is_at_least',
                    min_value: 0,
                  },
                ],
              },
              default_value: null,
            },
            {
              backend_id: 'minimum_exp_created',
              backend_attr: 'created_at_least_n_exps',
              description: 'Has created at least n explorations',
              schema: {
                type: 'int',
                validators: [
                  {
                    id: 'is_at_least',
                    min_value: 0,
                  },
                ],
              },
              default_value: null,
            },
            {
              backend_id: 'maximum_exp_created',
              backend_attr: 'created_fewer_than_n_exps',
              description: 'Has created fewer than n explorations',
              schema: {
                type: 'int',
                validators: [
                  {
                    id: 'is_at_least',
                    min_value: 0,
                  },
                ],
              },
              default_value: null,
            },
            {
              backend_id: 'minimum_exp_edited',
              backend_attr: 'edited_at_least_n_exps',
              description: 'Has edited at least n explorations',
              schema: {
                type: 'int',
                validators: [
                  {
                    id: 'is_at_least',
                    min_value: 0,
                  },
                ],
              },
              default_value: null,
            },
            {
              backend_id: 'maximum_exp_edited',
              backend_attr: 'edited_fewer_than_n_exps',
              description: 'Has edited fewer than n explorations',
              schema: {
                type: 'int',
                validators: [
                  {
                    id: 'is_at_least',
                    min_value: 0,
                  },
                ],
              },
              default_value: null,
            },
            {
              backend_id: 'created_collection',
              backend_attr: 'created_collection',
              description: 'Has created collection',
              schema: {
                type: 'bool',
                validators: [
                  {
                    id: 'is_nonempty',
                  },
                ],
              },
              default_value: false,
            },
          ],
          // When the site cookie policy was last updated in UNIX time milliseconds.
          COOKIE_POLICY_LAST_UPDATED_MSECS: 1624909164000,
          // Pages registered with angular router.
          PAGES_REGISTERED_WITH_FRONTEND: {
            ADMIN: {
              ROUTE: 'admin',
              TITLE: 'Oppia Admin Panel',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
              ],
            },
            REVIEW_TEST: {
              ROUTE:
                'learn/:classroom_url_fragment/:topic_url_fragment/review-test/:story_url_fragment',
              TITLE: 'Oppia',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
              ],
            },
            SUBTOPIC_VIEWER: {
              ROUTE:
                'learn/:classroom_url_fragment/:topic_url_fragment/revision/:subtopic_url_fragment',
              TITLE: 'Oppia',
              MANUALLY_REGISTERED_WITH_BACKEND: true,
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
              ],
            },
            COLLECTION_EDITOR: {
              ROUTE: 'collection_editor/create/:collection_id',
              TITLE: 'Collection Editor Page',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
              ],
            },
            STORY_EDITOR: {
              ROUTE: 'story_editor/:story_id',
              TITLE: 'Story Editor Page',
              MANUALLY_REGISTERED_WITH_BACKEND: true,
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
              ],
            },
            COLLECTION_PLAYER: {
              ROUTE: 'collection/:collection_id',
              TITLE: '',
              // Some routes contain url fragments, as syntax for url fragments are
              // different for angular router and backend. They have to be registered
              // manually in the backend. Please use angular router syntax here.
              MANUALLY_REGISTERED_WITH_BACKEND: true,
              META: [],
            },
            EMAIL_DASHBOARD: {
              ROUTE: 'emaildashboard',
              TITLE: 'Email Dashboard - Oppia',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
              ],
            },
            DIAGNOSTIC_TEST_PLAYER: {
              ROUTE: 'diagnostic-test-player',
              TITLE: 'Diagnostic Test Player - Oppia',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
              ],
            },
            FACILITATOR_DASHBOARD: {
              ROUTE: 'facilitator-dashboard',
              TITLE: 'Facilitator Dashboard - Oppia',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
              ],
            },
            MODERATOR: {
              ROUTE: 'moderator',
              TITLE: 'Moderator Tools - Oppia',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
              ],
            },
            ABOUT: {
              ROUTE: 'about',
              TITLE: 'I18N_ABOUT_PAGE_TITLE',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
              ],
            },
            ERROR: {
              ROUTE: 'error',
              TITLE: 'I18N_ERROR_PAGE_ROOT_BROWSER_TAB_TITLE',
              META: [],
            },
            EXPLORATION_PLAYER: {
              ROUTE: 'explore/:exploration_id',
              TITLE: '',
              // Some routes contain url fragments, as syntax for url fragments are
              // different for angular router and backend. They have to be registered
              // manually in the backend. Please use angular router syntax here.
              MANUALLY_REGISTERED_WITH_BACKEND: true,
              META: [],
            },
            EXPLORATION_PLAYER_EMBED: {
              ROUTE: 'embed/exploration/:exploration_id',
              TITLE: '',
              // Some routes contain url fragments, as syntax for url fragments are
              // different for angular router and backend. They have to be registered
              // manually in the backend. Please use angular router syntax here.
              MANUALLY_REGISTERED_WITH_BACKEND: true,
              META: [],
            },
            NEW_LESSON_PLAYER: {
              ROUTE: 'lesson/:exploration_id',
              TITLE: '',
              // Some routes contain url fragments, as syntax for url fragments are
              // different for angular router and backend. They have to be registered
              // manually in the backend. Please use angular router syntax here.
              MANUALLY_REGISTERED_WITH_BACKEND: true,
              META: [],
            },
            ANDROID: {
              ROUTE: 'android',
              TITLE: 'Android | Oppia',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
              ],
            },
            CONTRIBUTOR_DASHBOARD_ADMIN: {
              ROUTE: 'contributor-admin-dashboard',
              TITLE: 'Contributor Dashboard Admin',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
              ],
            },
            CONTACT: {
              ROUTE: 'contact',
              TITLE: 'I18N_CONTACT_PAGE_TITLE',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'Contact the Oppia team, submit feedback, and learn how to get involved with the Oppia project.',
                },
                {
                  PROPERTY_TYPE: 'property',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'Contact the Oppia team, submit feedback, and learn how to get involved with the Oppia project.',
                },
              ],
            },
            CURRICULUM_ADMIN: {
              ROUTE: 'classroom-admin',
              TITLE: 'Oppia Classroom Admin Panel',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
              ],
            },
            DONATE: {
              ROUTE: 'donate',
              TITLE: 'I18N_DONATE_PAGE_BROWSER_TAB_TITLE',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'Donate to The Oppia Foundation to enable more students to receive the quality education they deserve.',
                },
                {
                  PROPERTY_TYPE: 'property',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'Donate to The Oppia Foundation to enable more students to receive the quality education they deserve.',
                },
              ],
            },
            GET_STARTED: {
              ROUTE: 'get-started',
              TITLE: 'I18N_GET_STARTED_PAGE_TITLE',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  CONTENT: 'Learn how to get started using Oppia.',
                },
                {
                  PROPERTY_TYPE: 'property',
                  PROPERTY_VALUE: 'og:description',
                  CONTENT: 'Learn how to get started using Oppia.',
                },
              ],
            },
            LEARNER_DASHBOARD: {
              ROUTE: 'learner-dashboard',
              TITLE: 'I18N_TOPNAV_LEARNER_DASHBOARD',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
              ],
            },
            LICENSE: {
              ROUTE: 'license',
              TITLE: 'I18N_LICENSE_PAGE_TITLE',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  CONTENT: 'License terms that Oppia is attributed under.',
                },
                {
                  PROPERTY_TYPE: 'property',
                  PROPERTY_VALUE: 'og:description',
                  CONTENT: 'License terms that Oppia is attributed under.',
                },
              ],
            },
            LOGIN: {
              ROUTE: 'login',
              TITLE: 'I18N_LOGIN_PAGE_TITLE',
              META: [],
            },
            LOGOUT: {
              ROUTE: 'logout',
              TITLE: 'I18N_LOGOUT_PAGE_BROWSER_TAB_TITLE',
              META: [],
            },
            PARTNERSHIPS: {
              ROUTE: 'partnerships',
              TITLE: 'Partnerships | Oppia',
              META: [],
            },
            PLAYBOOK: {
              ROUTE: 'creator-guidelines',
              TITLE: 'I18N_PLAYBOOK_PAGE_TITLE',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    "The Oppia library is full of user-created lessons called 'explorations'. Read about how to participate in the community and begin creating explorations.",
                },
                {
                  PROPERTY_TYPE: 'property',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    "The Oppia library is full of user-created lessons called 'explorations'. Read about how to participate in the community and begin creating explorations.",
                },
              ],
            },
            PRIVACY: {
              ROUTE: 'privacy-policy',
              TITLE: 'I18N_PRIVACY_POLICY_PAGE_TITLE',
              META: [],
            },
            SIGNUP: {
              ROUTE: 'signup',
              TITLE: 'I18N_SIGNUP_PAGE_TITLE',
              MANUALLY_REGISTERED_WITH_BACKEND: true,
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  CONTENT:
                    'Sign up for Oppia and begin exploring a new subject.',
                },
                {
                  PROPERTY_TYPE: 'property',
                  PROPERTY_VALUE: 'og:description',
                  CONTENT:
                    'Sign up for Oppia and begin exploring a new subject.',
                },
              ],
            },
            TEACH: {
              ROUTE: 'teach',
              TITLE: 'I18N_TEACH_PAGE_TITLE',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    "The Oppia library is full of user-created lessons called 'explorations'. Read about how to participate in the community and begin creating explorations.",
                },
                {
                  PROPERTY_TYPE: 'property',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    "The Oppia library is full of user-created lessons called 'explorations'. Read about how to participate in the community and begin creating explorations.",
                },
              ],
            },
            TERMS: {
              ROUTE: 'terms',
              TITLE: 'I18N_TERMS_PAGE_TITLE',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'Oppia is a 501(c)(3) registered non-profit open-source e-learning platform. Learn about our terms and conditions for creating and distributing learning material.',
                },
                {
                  PROPERTY_TYPE: 'property',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'Oppia is a 501(c)(3) registered non-profit open-source e-learning platform. Learn about our terms and conditions for creating and distributing learning material.',
                },
              ],
            },
            THANKS: {
              ROUTE: 'thanks',
              TITLE: 'I18N_THANKS_PAGE_TITLE',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  CONTENT: 'Thank you for donating to The Oppia Foundation!',
                },
                {
                  PROPERTY_TYPE: 'property',
                  PROPERTY_VALUE: 'og:description',
                  CONTENT: 'Thank you for donating to The Oppia Foundation!',
                },
              ],
            },
            DELETE_ACCOUNT: {
              ROUTE: 'delete-account',
              TITLE: 'I18N_DELETE_ACCOUNT_PAGE_TITLE',
              META: [],
            },
            LIBRARY_INDEX: {
              ROUTE: 'community-library',
              TITLE: 'Oppia',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'Looking to learn something new? Learn any subject of your choice created by professors, teachers and Oppia users! Free lessons are always available for any topic and level you want.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'Looking to learn something new? Learn any subject of your choice created by professors, teachers and Oppia users! Free lessons are always available for any topic and level you want.',
                },
              ],
            },
            LIBRARY_RECENTLY_PUBLISHED: {
              ROUTE: 'community-library/recently-published',
              TITLE: 'Oppia',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'Looking to learn something new? Learn any subject of your choice created by professors, teachers and Oppia users! Free lessons are always available for any topic and level you want.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'Looking to learn something new? Learn any subject of your choice created by professors, teachers and Oppia users! Free lessons are always available for any topic and level you want.',
                },
              ],
            },
            LIBRARY_SEARCH: {
              ROUTE: 'search/find',
              TITLE: 'Oppia',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'Looking to learn something new? Learn any subject of your choice created by professors, teachers and Oppia users! Free lessons are always available for any topic and level you want.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'Looking to learn something new? Learn any subject of your choice created by professors, teachers and Oppia users! Free lessons are always available for any topic and level you want.',
                },
              ],
            },
            BLOG_DASHBOARD: {
              ROUTE: 'blog-dashboard',
              TITLE: 'Blog Dashboard - Oppia',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
              ],
            },
            LIBRARY_TOP_RATED: {
              ROUTE: 'community-library/top-rated',
              TITLE: 'Oppia',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'Looking to learn something new? Learn any subject of your choice created by professors, teachers and Oppia users! Free lessons are always available for any topic and level you want.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'Looking to learn something new? Learn any subject of your choice created by professors, teachers and Oppia users! Free lessons are always available for any topic and level you want.',
                },
              ],
            },
            PENDING_ACCOUNT_DELETION: {
              ROUTE: 'pending-account-deletion',
              TITLE: 'I18N_PENDING_ACCOUNT_DELETION_PAGE_TITLE',
              META: [],
            },
            PREFERENCES: {
              ROUTE: 'preferences',
              TITLE: 'I18N_PREFERENCES_PAGE_BROWSER_TAB_TITLE',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  CONTENT: 'Change your Oppia profile settings and preferences',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  CONTENT: 'Change your Oppia profile settings and preferences',
                },
              ],
            },
            FEEDBACK_UPDATES: {
              ROUTE: 'feedback-updates',
              TITLE: 'Feedback Updates',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  CONTENT:
                    'With Oppia,learn and give feedback to improve the lessons',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  CONTENT:
                    'With Oppia,learn and give feedback to improve the lessons',
                },
              ],
            },
            PROFILE: {
              ROUTE: 'profile/:username_fragment',
              TITLE: 'I18N_PROFILE_PAGE_TITLE',
              // Some routes contain url fragments, as syntax for url fragments are
              // different for angular router and backend. They have to be registered
              // manually in the backend. Please use angular router syntax here.
              MANUALLY_REGISTERED_WITH_BACKEND: true,
              META: [],
            },
            RELEASE_COORDINATOR_PAGE: {
              ROUTE: 'release-coordinator',
              TITLE: 'I18N_RELEASE_COORDINATOR_PAGE_TITLE',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
              ],
            },
            STORY_VIEWER: {
              // eslint-disable-next-line max-len
              ROUTE:
                'learn/:classroom_url_fragment/:topic_url_fragment/story/:story_url_fragment',
              TITLE: 'Oppia',
              // Some routes contain url fragments, as syntax for url fragments are
              // different for angular router and backend. They have to be registered
              // manually in the backend. Please use angular router syntax here.
              MANUALLY_REGISTERED_WITH_BACKEND: true,
              META: [],
            },
            VOLUNTEER: {
              ROUTE: 'volunteer',
              TITLE: 'Volunteer | Oppia',
              META: [],
            },
            CLASSROOM: {
              ROUTE: 'learn/:classroom_url_fragment',
              TITLE: 'Oppia',
              LIGHTWEIGHT: true,
              // Some routes contain url fragments, as syntax for url fragments are
              // different for angular router and backend. They have to be registered
              // manually in the backend. Please use angular router syntax here.
              MANUALLY_REGISTERED_WITH_BACKEND: true,
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it',
                },
              ],
            },
            CLASSROOMS: {
              ROUTE: 'learn',
              TITLE: 'Oppia Classrooms',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
              ],
            },
            BLOG_HOMEPAGE: {
              ROUTE: 'blog',
              TITLE: 'I18N_BLOG_HOME_PAGE_TITLE',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    "Read the latest on what's new and exciting with Oppia.",
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    "Read the latest on what's new and exciting with Oppia.",
                },
              ],
            },
            BLOG_HOMEPAGE_SEARCH: {
              ROUTE: 'blog/search/find',
              TITLE: 'I18N_BLOG_HOME_PAGE_TITLE',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    "Read the latest on what's new and exciting with Oppia.",
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    "Read the latest on what's new and exciting with Oppia.",
                },
              ],
            },
            BLOG_AUTHOR_PROFILE_PAGE: {
              ROUTE: 'blog/author/:author_username',
              TITLE: 'I18N_BLOG_AUTHOR_PROFILE_PAGE_TITLE',
              MANUALLY_REGISTERED_WITH_BACKEND: true,
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    "Read the latest on what's new and exciting with Oppia.",
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    "Read the latest on what's new and exciting with Oppia.",
                },
              ],
            },
            BLOG_POST_PAGE: {
              ROUTE: 'blog/:blog_post_url_fragment',
              TITLE: 'I18N_BLOG_POST_PAGE_TITLE',
              // Some routes contain url fragments, as syntax for url fragments are
              // different for angular router and backend. They have to be registered
              // manually in the backend. Please use angular router syntax here.
              MANUALLY_REGISTERED_WITH_BACKEND: true,
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    "Read the latest on what's new and exciting with Oppia.",
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    "Read the latest on what's new and exciting with Oppia.",
                },
              ],
            },
            BLOG_ADMIN: {
              ROUTE: 'blog-admin',
              TITLE: 'Oppia Blog Admin Panel',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
              ],
            },
            VOICEOVER_ADMIN: {
              ROUTE: 'voiceover-admin',
              TITLE: 'Voiceover Admin Panel',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
              ],
            },
            LEARNER_GROUP_CREATOR: {
              ROUTE: 'create-learner-group',
              TITLE: 'Create Learner Group | Oppia',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
              ],
            },
            LEARNER_GROUP_EDITOR: {
              ROUTE: 'edit-learner-group/:learner_group_id',
              TITLE: 'Edit Learner Group | Oppia',
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
              ],
            },
            LEARNER_GROUP_VIEWER: {
              ROUTE: 'learner-group/:learner_group_id',
              TITLE: 'I18N_LEARNER_GROUP_PAGE_TITLE',
              // Some routes contain url fragments, as syntax for url fragments are
              // different for angular router and backend. They have to be registered
              // manually in the backend. Please use angular router syntax here.
              MANUALLY_REGISTERED_WITH_BACKEND: true,
              META: [],
            },
            SPLASH: {
              ROUTE: '',
              TITLE: 'Oppia | Free, Online and Interactive Lessons for Anyone',
              LIGHTWEIGHT: true,
              META: [
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
                {
                  PROPERTY_TYPE: 'itemprop',
                  PROPERTY_VALUE: 'og:description',
                  // eslint-disable-next-line max-len
                  CONTENT:
                    'With Oppia, you can access free lessons on math, physics, statistics, chemistry, music, history and more from anywhere in the world. Oppia is a nonprofit with the mission of providing high-quality education to those who lack access to it.',
                },
              ],
            },
          },
          STEWARDS_LANDING_PAGE: {
            ROUTES: [
              'parents',
              'partners',
              'nonprofits',
              'teachers',
              'volunteers',
            ],
            TITLE: 'Getting Started with Oppia',
            META: [],
          },
          // A dict representing available landing pages, having subject as a key
          // and list of topics as the value.
          // Note: This dict needs to be keep in sync with frontend
          // TOPIC_LANDING_PAGE_DATA oppia constant defined in
          // core/templates/pages/landing-pages/topic-landing-page/
          // topic-landing-page.constants.ts file.
          AVAILABLE_LANDING_PAGES: {
            math: ['fractions', 'negative-numbers', 'ratios'],
          },
          SCHEMA_FOR_TOPIC_URL_FRAGMENTS: {
            schema: {
              type: 'basestring',
              validators: [
                {
                  id: 'is_regex_matched',
                  regex_pattern: '^[a-z]+(-[a-z]+)*$',
                },
                {
                  id: 'has_length_at_most',
                  max_value: 20,
                },
              ],
            },
          },
          SCHEMA_FOR_CLASSROOM_URL_FRAGMENTS: {
            schema: {
              type: 'basestring',
              validators: [
                {
                  id: 'is_regex_matched',
                  regex_pattern: '^[a-z]+(-[a-z]+)*$',
                },
                {
                  id: 'has_length_at_most',
                  max_value: 20,
                },
              ],
            },
          },
          SCHEMA_FOR_STORY_URL_FRAGMENTS: {
            schema: {
              type: 'basestring',
              validators: [
                {
                  id: 'is_regex_matched',
                  regex_pattern: '^[a-z]+(-[a-z]+)*$',
                },
                {
                  id: 'has_length_at_most',
                  max_value: 30,
                },
              ],
            },
          },
          DEV_MODE: true,
          EMULATOR_MODE: true,
          ASSET_TYPE_AUDIO: 'audio',
          ASSET_TYPE_IMAGE: 'image',
          ASSET_TYPE_THUMBNAIL: 'thumbnail',
          FAVICON_ALERT_PATH: '/assets/images/favicon_alert/favicon_alert.ico',
          METADATA_PROPERTIES: [
            'title',
            'category',
            'objective',
            'language_code',
            'tags',
            'blurb',
            'author_notes',
            'states_schema_version',
            'init_state_name',
            'param_specs',
            'param_changes',
            'auto_tts_enabled',
            'edits_allowed',
          ],
          NON_METADATA_PROPERTIES: [
            'id',
            'states',
            'next_content_id_index',
            'version',
          ],
          CONTRIBUTOR_CERTIFICATE_WIDTH: 1493,
          CONTRIBUTOR_CERTIFICATE_HEIGHT: 1313,
          BRANCH_NAME: '',
          SHORT_COMMIT_HASH: '',
        };

        /***/
      },

    /***/ hMZf:
      /*!************************************************************************!*\
  !*** ./core/templates/domain/utilities/file-download-request.model.ts ***!
  \************************************************************************/
      /*! exports provided: FileDownloadRequest */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FileDownloadRequest',
          function () {
            return FileDownloadRequest;
          }
        );
        // Copyright 2017 The Oppia Authors. All Rights Reserved.
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
        class FileDownloadRequest {
          constructor(filename, subscription) {
            this.filename = filename;
            this.subscription = subscription;
          }
        }

        /***/
      },

    /***/ j2Py:
      /*!*************************************************************!*\
  !*** ./core/templates/domain/utilities/audio-file.model.ts ***!
  \*************************************************************/
      /*! exports provided: AudioFile */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AudioFile',
          function () {
            return AudioFile;
          }
        );
        // Copyright 2017 The Oppia Authors. All Rights Reserved.
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
         * @fileoverview Model class for creating audio files.
         */
        class AudioFile {
          constructor(filename, data) {
            this.filename = filename;
            this.data = data;
          }
        }

        /***/
      },

    /***/ k4vP:
      /*!****************************************************************************************************!*\
  !*** ./core/templates/pages/lightweight-oppia-root/routing/guards/can-access-splash-page.guard.ts ***!
  \****************************************************************************************************/
      /*! exports provided: CanAccessSplashPageGuard */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'CanAccessSplashPageGuard',
          function () {
            return CanAccessSplashPageGuard;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
        /* harmony import */ var services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! services/contextual/window-ref.service */ 'AFwG'
          );
        /* harmony import */ var services_user_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! services/user.service */ 'upnj');
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
         * @fileoverview Route guard for validating access to splash page.
         */

        let CanAccessSplashPageGuard = class CanAccessSplashPageGuard {
          constructor(userService, windowRef) {
            this.userService = userService;
            this.windowRef = windowRef;
          }
          canLoad(route, segments) {
            return this.userService.getUserInfoAsync().then(
              userInfo => {
                if (userInfo.isLoggedIn()) {
                  this.userService
                    .getUserPreferredDashboardAsync()
                    .then(preferredDashboard => {
                      // Use router.navigate once both learner dashbaord page and
                      // creator dashboard page are migrated to angular router.
                      this.windowRef.nativeWindow.location.href =
                        '/' + preferredDashboard + '-dashboard';
                    });
                  return false;
                } else {
                  return true;
                }
              },
              () => {
                return true;
              }
            );
          }
        };
        CanAccessSplashPageGuard.ctorParameters = () => [
          {
            type: services_user_service__WEBPACK_IMPORTED_MODULE_2__[
              'UserService'
            ],
          },
          {
            type: services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_1__[
              'WindowRef'
            ],
          },
        ];
        CanAccessSplashPageGuard = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])({
              providedIn: 'root',
            }),
            __metadata('design:paramtypes', [
              services_user_service__WEBPACK_IMPORTED_MODULE_2__['UserService'],
              services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_1__[
                'WindowRef'
              ],
            ]),
          ],
          CanAccessSplashPageGuard
        );

        /***/
      },

    /***/ lfBC:
      /*!******************************************************************!*\
  !*** ./core/templates/domain/feature-flag/feature-flag.model.ts ***!
  \******************************************************************/
      /*! exports provided: FeatureStage, FeatureFlag */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FeatureStage',
          function () {
            return FeatureStage;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'FeatureFlag',
          function () {
            return FeatureFlag;
          }
        );
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
         * @fileoverview Frontend Model for Feature Flag.
         */
        var FeatureStage;
        (function (FeatureStage) {
          FeatureStage['DEV'] = 'dev';
          FeatureStage['TEST'] = 'test';
          FeatureStage['PROD'] = 'prod';
        })(FeatureStage || (FeatureStage = {}));
        /**
         * Frontend domain object representation of feature flags.
         *
         * On the frontend side, this class is used to reflect the edit made to
         * feature flags in the release coordinator page.
         */
        class FeatureFlag {
          constructor(
            name,
            description,
            featureStage,
            forceEnableForAllUsers,
            rolloutPercentage,
            userGroupIds,
            lastUpdated
          ) {
            this.name = name;
            this.description = description;
            this.featureStage = featureStage;
            this.forceEnableForAllUsers = forceEnableForAllUsers;
            this.rolloutPercentage = rolloutPercentage;
            this.userGroupIds = userGroupIds;
            this.lastUpdated = lastUpdated;
          }
          static createFromBackendDict(backendDict) {
            return new FeatureFlag(
              backendDict.name,
              backendDict.description,
              backendDict.feature_stage,
              backendDict.force_enable_for_all_users,
              backendDict.rollout_percentage,
              backendDict.user_group_ids,
              backendDict.last_updated
            );
          }
        }

        /***/
      },

    /***/ na8c:
      /*!**********************************************************!*\
  !*** ./core/templates/services/svg-sanitizer.service.ts ***!
  \**********************************************************/
      /*! exports provided: SvgSanitizerService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'SvgSanitizerService',
          function () {
            return SvgSanitizerService;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/platform-browser */ 'jhN1');
        /* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/upgrade/static */ 'BBPO');
        /* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! app.constants */ 'DhAQ');
        // Copyright 2020 The Oppia Authors. All Rights Reserved.
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
         * @fileoverview SVG related checks and sanitization service.
         */

        let SvgSanitizerService = class SvgSanitizerService {
          constructor(sanitizer) {
            this.sanitizer = sanitizer;
          }
          cleanMathExpressionSvgString(svgString) {
            // We need to modify/remove unnecessary attributes added by mathjax
            // from the svg tag.
            let domParser = new DOMParser();
            let doc = domParser.parseFromString(svgString, 'image/svg+xml');
            doc.querySelectorAll('*').forEach(node => {
              if (node.tagName.toLowerCase() === 'svg') {
                node.removeAttribute('xmlns:xlink');
                node.removeAttribute('role');
                // We are removing this attribute, because currently it is not in
                // the allowlist of valid attributes.
                node.removeAttribute('aria-hidden');
                node.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
              }
              // Remove the custom data attributes added by MathJax.
              // These custom attributes don't affect the rendering of the SVGs,
              // and they are not present in the white list for allowed attributes.
              for (let i = 0; i < node.attributes.length; i++) {
                if (node.attributes[i].name.toLowerCase().startsWith('data-')) {
                  node.removeAttribute(node.attributes[i].name.toLowerCase());
                }
              }
            });
            return doc.documentElement.outerHTML;
          }
          extractDimensionsFromMathExpressionSvgString(svgString) {
            // The method below extracts the dimensions from the attributes of a
            // math SVG string generated by mathJax.
            let domParser = new DOMParser();
            let dimensions = {
              height: '',
              width: '',
              verticalPadding: '',
            };
            let doc = domParser.parseFromString(svgString, 'image/svg+xml');
            doc.querySelectorAll('*').forEach(node => {
              // Mathjax SVGs have relative dimensions in the unit of 'ex' rather
              // than 'px'(pixels). Hence the dimensions have decimal points in them,
              // we need to replace these decimals with a letter so that it's easier
              // to process and validate the filenames.
              if (node.tagName.toLowerCase() === 'svg') {
                let attrHeight = node.getAttribute('height');
                if (attrHeight) {
                  let heightRegexpMatchResult = attrHeight.match(/\d+\.*\d*/g);
                  if (heightRegexpMatchResult) {
                    dimensions.height = heightRegexpMatchResult[0].replace(
                      '.',
                      'd'
                    );
                  }
                } else {
                  throw new Error('SVG height attribute is missing.');
                }
                let attrWidth = node.getAttribute('width');
                if (attrWidth) {
                  let widthRegexpMatchResult = attrWidth.match(/\d+\.*\d*/g);
                  if (widthRegexpMatchResult) {
                    dimensions.width = widthRegexpMatchResult[0].replace(
                      '.',
                      'd'
                    );
                  }
                } else {
                  throw new Error('SVG width attribute is missing.');
                }
                // This attribute is useful for the vertical alignment of the
                // Math SVG while displaying inline with other text.
                // Math SVGs don't necessarily have a vertical alignment, in that
                // case we assign it zero.
                let styleValue;
                let attrStyle = node.getAttribute('style');
                if (attrStyle) {
                  styleValue = attrStyle.match(/\d+\.*\d*/g);
                  if (styleValue) {
                    dimensions.verticalPadding = styleValue[0].replace(
                      '.',
                      'd'
                    );
                  } else {
                    dimensions.verticalPadding = '0';
                  }
                }
              }
            });
            return dimensions;
          }
          _getInvalidSvgTagsAndAttrs(svg) {
            let invalidTags = [];
            let invalidAttrs = [];
            let allowedTags = Object.keys(
              app_constants__WEBPACK_IMPORTED_MODULE_3__['AppConstants']
                .SVG_ATTRS_ALLOWLIST
            );
            let nodeTagName;
            svg.querySelectorAll('*').forEach(node => {
              nodeTagName = node.tagName.toLowerCase();
              if (allowedTags.indexOf(nodeTagName) !== -1) {
                for (let i = 0; i < node.attributes.length; i++) {
                  let nodeAttrName = node.attributes[i].name.toLowerCase();
                  if (
                    app_constants__WEBPACK_IMPORTED_MODULE_3__[
                      'AppConstants'
                    ].SVG_ATTRS_ALLOWLIST[nodeTagName].indexOf(nodeAttrName) ===
                    -1
                  ) {
                    invalidAttrs.push(
                      node.tagName + ':' + node.attributes[i].name
                    );
                  }
                }
              } else {
                invalidTags.push(node.tagName);
              }
            });
            return {tags: invalidTags, attrs: invalidAttrs};
          }
          // SVG is considered an XMLDocument and DOMParser's parseFromString method
          // returns either a HTMLDocument or XMLDocument. Visit here for more info:
          // https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString
          // Document is the interface that both HTMLDocument and XMLDocument inherit
          // properties from.
          getSvgFromDataUri(dataURI) {
            // Convert base64/URLEncoded data component to raw binary data
            // held in a string.
            const svgString = this.convertBase64ToUnicodeString(
              dataURI.split(',')[1]
            );
            const domParser = new DOMParser();
            return domParser.parseFromString(svgString, 'image/svg+xml');
          }
          convertBase64ToUnicodeString(base64String) {
            // Coverting base64 to unicode string. This technique converts bytestream
            // to percent-encoding, to original string.
            // See https://stackoverflow.com/a/30106551
            return decodeURIComponent(
              atob(base64String)
                .split('')
                .map(char => {
                  return (
                    '%' + ('00' + char.charCodeAt(0).toString(16)).slice(-2)
                  );
                })
                .join('')
            );
          }
          removeAllInvalidTagsAndAttributes(svgDataURI) {
            // We are removing the attributes which are currently not in
            // the allowlist of valid attributes. The allowlist is based on
            // the list of tags and attributes specified in this project:
            // https://github.com/cure53/DOMPurify
            // Complete list is present at 'assets/constants.ts'.
            let svg = this.getSvgFromDataUri(svgDataURI);
            let invalidTagsAndAttributes = this._getInvalidSvgTagsAndAttrs(svg);
            let tagsToBeRemoved = invalidTagsAndAttributes.tags;
            let attrsToBeRemoved = invalidTagsAndAttributes.attrs;
            svg.querySelectorAll('*').forEach(node => {
              const nodeTagName = node.tagName;
              if (tagsToBeRemoved.indexOf(nodeTagName) !== -1) {
                node.remove();
              } else {
                for (let i = 0; i < node.attributes.length; i++) {
                  const nodeAttrName = node.attributes[i].name;
                  // Check if the tag name and attribute combination matches any value
                  // in attrsToBeRemoved. If so, remove that attribute from the node.
                  // Values in attrsToBeRemoved follow the format <tagName>:<attrName>
                  // where the tagName and attrName is in the original letter casing
                  // as in the node.
                  if (
                    attrsToBeRemoved.indexOf(
                      nodeTagName + ':' + nodeAttrName
                    ) !== -1
                  ) {
                    node.removeAttribute(nodeAttrName);
                  }
                }
              }
            });
            return (
              'data:image/svg+xml;base64,' +
              btoa(unescape(encodeURIComponent(svg.documentElement.outerHTML)))
            );
          }
          getInvalidSvgTagsAndAttrs(svg) {
            return this._getInvalidSvgTagsAndAttrs(svg);
          }
          getInvalidSvgTagsAndAttrsFromDataUri(dataURI) {
            let doc = this.getSvgFromDataUri(dataURI);
            return this._getInvalidSvgTagsAndAttrs(doc);
          }
          /**
           * Checks if the input is base64-encoded.
           *
           * @returns {boolean} True if all the checks pass. False Otherwise.
           */
          isBase64Svg(base64ImageData) {
            const DATA_URL_PATTERN =
              /^data:image\/svg\+xml;base64,[a-z0-9+\/]+=*$/i;
            // Check if data passed is a valid bse64 SVG.
            if (!base64ImageData.match(DATA_URL_PATTERN)) {
              return false;
            }
            return true;
          }
          /**
           * Checks the input for malicious or invalid SVG code.
           * Angular by default treats svg+xml data as unsafe. In order to show the SVG
           * we need to check the SVG data for possible XSS attacks. The spec file for
           * this component showcases some scenarios where XSS attacks are possible if
           * the SVG is not checked for such attacks. The following function checks the
           * SVG data for possible XSS vulnerabilities.
           *
           * @returns {SafeResourceUrl | null} SafeResourceUrl if the SVG is valid and
           * trusted. Otherwise returns null.
           */
          getTrustedSvgResourceUrl(base64ImageData) {
            if (this.isBase64Svg(base64ImageData)) {
              const sanitizedBase64ImageData =
                this.removeAllInvalidTagsAndAttributes(base64ImageData);
              // eslint-disable-next-line oppia/no-bypass-security-phrase
              return this.sanitizer.bypassSecurityTrustResourceUrl(
                sanitizedBase64ImageData
              );
            }
            return null;
          }
          getIssueURL(invalidTagsAndAttributes) {
            const invalidTags = invalidTagsAndAttributes.tags;
            const invalidAttributes = invalidTagsAndAttributes.attrs;
            const spaceBetweenValues = ', ';
            const unencodedIssueTitle =
              'Uploaded SVG image looks distorted in the ' + 'preview';
            let unencodedIssueBody =
              'The image file is attached below:\n\n' +
              '{{ IMAGE_HERE }}\n\nScreenshots of the problem:\n\n' +
              '{{ SCREENSHOTS_HERE }}\n\nThe invalid tags and attributes reported:';
            if (invalidTags.length) {
              unencodedIssueBody += '\nTags: ';
              for (let i = 0; i < Math.min(invalidTags.length, 20); i++) {
                unencodedIssueBody += invalidTags[i] + spaceBetweenValues;
              }
            }
            if (invalidAttributes.length) {
              unencodedIssueBody += '\nAttributes: ';
              for (let i = 0; i < Math.min(invalidAttributes.length, 20); i++) {
                unencodedIssueBody += invalidAttributes[i] + spaceBetweenValues;
              }
            }
            unencodedIssueBody = unencodedIssueBody.substring(
              0,
              unencodedIssueBody.length - spaceBetweenValues.length
            );
            return (
              'https://github.com/oppia/oppia/issues/new?title=' +
              encodeURIComponent(unencodedIssueTitle) +
              '&body=' +
              encodeURIComponent(unencodedIssueBody)
            );
          }
        };
        SvgSanitizerService.ctorParameters = () => [
          {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__[
              'DomSanitizer'
            ],
          },
        ];
        SvgSanitizerService = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])({
              providedIn: 'root',
            }),
            __metadata('design:paramtypes', [
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__[
                'DomSanitizer'
              ],
            ]),
          ],
          SvgSanitizerService
        );

        angular
          .module('oppia')
          .factory(
            'SvgSanitizerService',
            Object(
              _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_2__[
                'downgradeInjectable'
              ]
            )(SvgSanitizerService)
          );

        /***/
      },

    /***/ 'o63+':
      /*!****************************************************************!*\
  !*** ./core/templates/services/image-upload-helper.service.ts ***!
  \****************************************************************/
      /*! exports provided: ImageUploadHelperService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ImageUploadHelperService',
          function () {
            return ImageUploadHelperService;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
        /* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/upgrade/static */ 'BBPO');
        /* harmony import */ var services_assets_backend_api_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! services/assets-backend-api.service */ 'FfoF'
          );
        /* harmony import */ var _svg_sanitizer_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./svg-sanitizer.service */ 'na8c');
        /* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! app.constants */ 'DhAQ');
        // Copyright 2020 The Oppia Authors. All Rights Reserved.
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
         * @fileoverview Image upload helper service.
         */

        let ImageUploadHelperService = class ImageUploadHelperService {
          constructor(assetsBackendApiService, svgSanitizerService) {
            this.assetsBackendApiService = assetsBackendApiService;
            this.svgSanitizerService = svgSanitizerService;
          }
          _generateDateTimeStringForFilename() {
            let date = new Date();
            return (
              date.getFullYear() +
              ('0' + (date.getMonth() + 1)).slice(-2) +
              ('0' + date.getDate()).slice(-2) +
              '_' +
              ('0' + date.getHours()).slice(-2) +
              ('0' + date.getMinutes()).slice(-2) +
              ('0' + date.getSeconds()).slice(-2) +
              '_' +
              Math.random().toString(36).substr(2, 10)
            );
          }
          // Image file returned will be null when blob is not of type
          // 'image', blob size is zero or dataURI is null.
          // 'dataURI' here will be null if imageFilename does not exist in
          // local storage.
          convertImageDataToImageFile(dataURI) {
            // Convert base64/URLEncoded data component to raw binary data
            // held in a string.
            if (dataURI !== null) {
              let byteString = atob(dataURI.split(',')[1]);
              // Separate out the mime component.
              let mime = dataURI.split(',')[0].split(':')[1].split(';')[0];
              // Write the bytes of the string to a typed array.
              let ia = new Uint8Array(byteString.length);
              for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
              }
              let blob = new Blob([ia], {type: mime});
              if (blob.type.match('image') && blob.size > 0) {
                return blob;
              }
            }
            return null;
          }
          getTrustedResourceUrlForThumbnailFilename(
            imageFileName,
            entityType,
            entityId
          ) {
            let encodedFilepath = window.encodeURIComponent(imageFileName);
            return this.assetsBackendApiService.getThumbnailUrlForPreview(
              entityType,
              entityId,
              encodedFilepath
            );
          }
          generateImageFilename(height, width, extension) {
            return (
              'img_' +
              this._generateDateTimeStringForFilename() +
              '_height_' +
              height +
              '_width_' +
              width +
              '.' +
              extension
            );
          }
          generateMathExpressionImageFilename(height, width, verticalPadding) {
            let filename =
              'mathImg_' +
              this._generateDateTimeStringForFilename() +
              '_height_' +
              height +
              '_width_' +
              width +
              '_vertical_' +
              verticalPadding +
              '.' +
              'svg';
            let filenameRegexString =
              app_constants__WEBPACK_IMPORTED_MODULE_4__['AppConstants']
                .MATH_SVG_FILENAME_REGEX;
            let filenameRegex = RegExp(filenameRegexString, 'g');
            if (filenameRegex.exec(filename)) {
              return filename;
            } else {
              throw new Error('The Math SVG filename format is invalid.');
            }
          }
        };
        ImageUploadHelperService.ctorParameters = () => [
          {
            type: services_assets_backend_api_service__WEBPACK_IMPORTED_MODULE_2__[
              'AssetsBackendApiService'
            ],
          },
          {
            type: _svg_sanitizer_service__WEBPACK_IMPORTED_MODULE_3__[
              'SvgSanitizerService'
            ],
          },
        ];
        ImageUploadHelperService = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])({
              providedIn: 'root',
            }),
            __metadata('design:paramtypes', [
              services_assets_backend_api_service__WEBPACK_IMPORTED_MODULE_2__[
                'AssetsBackendApiService'
              ],
              _svg_sanitizer_service__WEBPACK_IMPORTED_MODULE_3__[
                'SvgSanitizerService'
              ],
            ]),
          ],
          ImageUploadHelperService
        );

        angular
          .module('oppia')
          .factory(
            'ImageUploadHelperService',
            Object(
              _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_1__[
                'downgradeInjectable'
              ]
            )(ImageUploadHelperService)
          );

        /***/
      },

    /***/ oqKw:
      /*!*************************************************************!*\
  !*** ./core/templates/domain/utilities/image-file.model.ts ***!
  \*************************************************************/
      /*! exports provided: ImageFile */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ImageFile',
          function () {
            return ImageFile;
          }
        );
        // Copyright 2017 The Oppia Authors. All Rights Reserved.
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
         * @fileoverview Model class for creating image files.
         */
        class ImageFile {
          constructor(filename, data) {
            this.filename = filename;
            this.data = data;
          }
        }

        /***/
      },

    /***/ 'p1/J':
      /*!****************************!*\
  !*** ./assets/hashes.json ***!
  \****************************/
      /*! exports provided: default */
      /***/ function (module) {
        module.exports = JSON.parse('{}');

        /***/
      },

    /***/ r2vI:
      /*!****************************************************************!*\
  !*** ./core/templates/services/image-local-storage.service.ts ***!
  \****************************************************************/
      /*! exports provided: ImageLocalStorageService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'ImageLocalStorageService',
          function () {
            return ImageLocalStorageService;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
        /* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/upgrade/static */ 'BBPO');
        /* harmony import */ var services_alerts_service__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! services/alerts.service */ 'U4ot');
        /* harmony import */ var services_image_upload_helper_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! services/image-upload-helper.service */ 'o63+'
          );
        /* harmony import */ var services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! services/contextual/window-ref.service */ 'AFwG'
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
        var __awaiter =
          (undefined && undefined.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : adopt(result.value).then(fulfilled, rejected);
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
              );
            });
          };
        var __asyncValues =
          (undefined && undefined.__asyncValues) ||
          function (o) {
            if (!Symbol.asyncIterator)
              throw new TypeError('Symbol.asyncIterator is not defined.');
            var m = o[Symbol.asyncIterator],
              i;
            return m
              ? m.call(o)
              : ((o =
                  typeof __values === 'function'
                    ? __values(o)
                    : o[Symbol.iterator]()),
                (i = {}),
                verb('next'),
                verb('throw'),
                verb('return'),
                (i[Symbol.asyncIterator] = function () {
                  return this;
                }),
                i);
            function verb(n) {
              i[n] =
                o[n] &&
                function (v) {
                  return new Promise(function (resolve, reject) {
                    (v = o[n](v)), settle(resolve, reject, v.done, v.value);
                  });
                };
            }
            function settle(resolve, reject, d, v) {
              Promise.resolve(v).then(function (v) {
                resolve({value: v, done: d});
              }, reject);
            }
          };
        /**
         * @fileoverview Service for managing images in localStorage.
         */

        let ImageLocalStorageService = class ImageLocalStorageService {
          constructor(alertsService, imageUploadHelperService, windowRef) {
            this.alertsService = alertsService;
            this.imageUploadHelperService = imageUploadHelperService;
            this.windowRef = windowRef;
            this.storedImageFilenames = [];
            // According to https://en.wikipedia.org/wiki/Web_storage, 5MB is the
            // minimum limit, for all browsers, per hostname, that can be stored in
            // sessionStorage and 100kB is the max size limit for uploaded images, hence
            // the limit below.
            this.MAX_IMAGES_STORABLE = (5 * 1024) / 100;
            // 'null' value here represents that either image is not present in local
            // storage or ImageData has been flushed.
            this.thumbnailBgColor = null;
          }
          // Function returns null if filename doesn't exist in local storage.
          getRawImageData(filename) {
            return this.windowRef.nativeWindow.sessionStorage.getItem(filename);
          }
          /**
           * Saves the image data in localStorage.
           * @param {string} filename - Filename of the image.
           * @param {string} rawImage - Raw base64/URLEncoded data of the image.
           */
          saveImage(filename, rawImage) {
            if (
              this.storedImageFilenames.length + 1 >
              this.MAX_IMAGES_STORABLE
            ) {
              // Since the service is going to be used in the create modal for
              // entities, more images can be added after entity creation, when
              // local storage would no longer be used.
              this.alertsService.addInfoMessage(
                'Image storage limit reached. More images can be added after ' +
                  'creation.'
              );
              return;
            }
            this.windowRef.nativeWindow.sessionStorage.setItem(
              filename,
              rawImage
            );
            this.storedImageFilenames.push(filename);
          }
          deleteImage(filename) {
            this.windowRef.nativeWindow.sessionStorage.removeItem(filename);
            const index = this.storedImageFilenames.indexOf(filename);
            this.storedImageFilenames.splice(index, 1);
          }
          getStoredImagesData() {
            const returnData = [];
            for (const idx in this.storedImageFilenames) {
              returnData.push({
                filename: this.storedImageFilenames[idx],
                imageBlob:
                  this.imageUploadHelperService.convertImageDataToImageFile(
                    this.windowRef.nativeWindow.sessionStorage.getItem(
                      this.storedImageFilenames[idx]
                    )
                  ),
              });
            }
            return returnData;
          }
          isInStorage(filename) {
            return this.storedImageFilenames.indexOf(filename) !== -1;
          }
          setThumbnailBgColor(bgColor) {
            this.thumbnailBgColor = bgColor;
          }
          // Function returns null if no image is present in local storage.
          getThumbnailBgColor() {
            return this.thumbnailBgColor;
          }
          flushStoredImagesData() {
            this.windowRef.nativeWindow.sessionStorage.clear();
            this.storedImageFilenames.length = 0;
            this.thumbnailBgColor = null;
          }
          getFilenameToBase64MappingAsync(imagesData) {
            var imagesData_1, imagesData_1_1;
            var e_1, _a;
            return __awaiter(this, void 0, void 0, function* () {
              let filesToBase64Mapping = {};
              if (imagesData.length > 0) {
                try {
                  for (
                    imagesData_1 = __asyncValues(imagesData);
                    (imagesData_1_1 = yield imagesData_1.next()),
                      !imagesData_1_1.done;

                  ) {
                    const obj = imagesData_1_1.value;
                    if (obj.imageBlob === null) {
                      throw new Error('No image data found');
                    }
                    const image = yield this._blobtoBase64(obj.imageBlob);
                    filesToBase64Mapping[obj.filename] = image;
                  }
                } catch (e_1_1) {
                  e_1 = {error: e_1_1};
                } finally {
                  try {
                    if (
                      imagesData_1_1 &&
                      !imagesData_1_1.done &&
                      (_a = imagesData_1.return)
                    )
                      yield _a.call(imagesData_1);
                  } finally {
                    if (e_1) throw e_1.error;
                  }
                }
              }
              return filesToBase64Mapping;
            });
          }
          _blobtoBase64(blob) {
            return __awaiter(this, void 0, void 0, function* () {
              return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                  // Read the base64 data from result.
                  const dataurl = reader.result;
                  const prefixRegex =
                    /^data:image\/(gif|png|jpeg|svg\+xml|jpg);base64,/;
                  if (!dataurl.match(prefixRegex)) {
                    reject(new Error('No valid prefix found in data url'));
                  }
                  // Remove "data:mime/type;base64," prefix from data url.
                  // And just return base64 string.
                  const base64 = dataurl.replace(prefixRegex, '');
                  resolve(base64);
                };
                // Read image blob and store the result.
                reader.readAsDataURL(blob);
                reader.onerror = error => reject(error);
              });
            });
          }
        };
        ImageLocalStorageService.ctorParameters = () => [
          {
            type: services_alerts_service__WEBPACK_IMPORTED_MODULE_2__[
              'AlertsService'
            ],
          },
          {
            type: services_image_upload_helper_service__WEBPACK_IMPORTED_MODULE_3__[
              'ImageUploadHelperService'
            ],
          },
          {
            type: services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_4__[
              'WindowRef'
            ],
          },
        ];
        ImageLocalStorageService = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])({
              providedIn: 'root',
            }),
            __metadata('design:paramtypes', [
              services_alerts_service__WEBPACK_IMPORTED_MODULE_2__[
                'AlertsService'
              ],
              services_image_upload_helper_service__WEBPACK_IMPORTED_MODULE_3__[
                'ImageUploadHelperService'
              ],
              services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_4__[
                'WindowRef'
              ],
            ]),
          ],
          ImageLocalStorageService
        );

        angular
          .module('oppia')
          .factory(
            'ImageLocalStorageService',
            Object(
              _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_1__[
                'downgradeInjectable'
              ]
            )(ImageLocalStorageService)
          );

        /***/
      },

    /***/ upnj:
      /*!*************************************************!*\
  !*** ./core/templates/services/user.service.ts ***!
  \*************************************************/
      /*! exports provided: UserService */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'UserService',
          function () {
            return UserService;
          }
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
        /* harmony import */ var _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/upgrade/static */ 'BBPO');
        /* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! app.constants */ 'DhAQ');
        /* harmony import */ var services_image_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! services/image-local-storage.service */ 'r2vI'
          );
        /* harmony import */ var domain_user_user_info_model__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! domain/user/user-info.model */ 'v1VX');
        /* harmony import */ var domain_utilities_url_interpolation_service__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! domain/utilities/url-interpolation.service */ 'X9eu'
          );
        /* harmony import */ var services_contextual_url_service__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! services/contextual/url.service */ 'Wxm2');
        /* harmony import */ var services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(
            /*! services/contextual/window-ref.service */ 'AFwG'
          );
        /* harmony import */ var services_user_backend_api_service__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! services/user-backend-api.service */ 'PiPN');
        /* harmony import */ var services_assets_backend_api_service__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(
            /*! services/assets-backend-api.service */ 'FfoF'
          );
        // Copyright 2018 The Oppia Authors. All Rights Reserved.
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
        var __awaiter =
          (undefined && undefined.__awaiter) ||
          function (thisArg, _arguments, P, generator) {
            function adopt(value) {
              return value instanceof P
                ? value
                : new P(function (resolve) {
                    resolve(value);
                  });
            }
            return new (P || (P = Promise))(function (resolve, reject) {
              function fulfilled(value) {
                try {
                  step(generator.next(value));
                } catch (e) {
                  reject(e);
                }
              }
              function rejected(value) {
                try {
                  step(generator['throw'](value));
                } catch (e) {
                  reject(e);
                }
              }
              function step(result) {
                result.done
                  ? resolve(result.value)
                  : adopt(result.value).then(fulfilled, rejected);
              }
              step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
              );
            });
          };
        /**
         * @fileoverview Service for user data.
         */

        let UserService = class UserService {
          constructor(
            assetsBackendApiService,
            imageLocalStorageService,
            urlInterpolationService,
            urlService,
            windowRef,
            userBackendApiService
          ) {
            this.assetsBackendApiService = assetsBackendApiService;
            this.imageLocalStorageService = imageLocalStorageService;
            this.urlInterpolationService = urlInterpolationService;
            this.urlService = urlService;
            this.windowRef = windowRef;
            this.userBackendApiService = userBackendApiService;
            // This property will be null when the user does not have
            // enough rights to review translations, voiceover and questions.
            this.userContributionRightsInfo = null;
            // This property will be null when the user is not logged in.
            this.userInfo = null;
            this.returnUrl = '';
          }
          getUserInfoAsync() {
            return __awaiter(this, void 0, void 0, function* () {
              const pathname = this.urlService.getPathname();
              if (['/logout', '/signup'].includes(pathname)) {
                return domain_user_user_info_model__WEBPACK_IMPORTED_MODULE_4__[
                  'UserInfo'
                ].createDefault();
              }
              if (this.userInfo === null) {
                this.userInfo =
                  yield this.userBackendApiService.getUserInfoAsync();
              }
              return this.userInfo;
            });
          }
          getProfileImageDataUrl(username) {
            // TODO(#17663): Remove use of performance.now with a long term fix
            // in order to avoid cache problems.
            // Here we are using prformanceTime in order to avoid cache problems.
            // For details have a look at - https://stackoverflow.com/a/126831
            let prformanceTime = '?' + performance.now().toString();
            if (
              services_assets_backend_api_service__WEBPACK_IMPORTED_MODULE_9__[
                'AssetsBackendApiService'
              ].EMULATOR_MODE
            ) {
              let localStoredImage =
                this.imageLocalStorageService.getRawImageData(
                  username + '_profile_picture.png'
                );
              let defaultUrlWebp =
                this.urlInterpolationService.getStaticImageUrl(
                  app_constants__WEBPACK_IMPORTED_MODULE_2__['AppConstants']
                    .DEFAULT_PROFILE_IMAGE_WEBP_PATH
                );
              let defaultUrlPng =
                this.urlInterpolationService.getStaticImageUrl(
                  app_constants__WEBPACK_IMPORTED_MODULE_2__['AppConstants']
                    .DEFAULT_PROFILE_IMAGE_PNG_PATH
                );
              if (localStoredImage === null) {
                return [
                  defaultUrlPng + prformanceTime,
                  defaultUrlWebp + prformanceTime,
                ];
              }
              // Normally, we return a tuple of PNG image URL and WebP image URL.
              // In emulator mode we use local storage and we only store the PNG image.
              // To handle this we return a tuple of the same PNG images in
              // emulator mode.
              return [localStoredImage, localStoredImage];
            } else {
              let pngImageUrl = this.urlInterpolationService.interpolateUrl(
                this.assetsBackendApiService.profileImagePngUrlTemplate,
                {username: username}
              );
              let WebpImageUrl = this.urlInterpolationService.interpolateUrl(
                this.assetsBackendApiService.profileImageWebpUrlTemplate,
                {username: username}
              );
              return [
                pngImageUrl + prformanceTime,
                WebpImageUrl + prformanceTime,
              ];
            }
          }
          setProfileImageDataUrlAsync(newProfileImageDataUrl) {
            return __awaiter(this, void 0, void 0, function* () {
              return this.userBackendApiService.setProfileImageDataUrlAsync(
                newProfileImageDataUrl
              );
            });
          }
          getLoginUrlAsync() {
            return __awaiter(this, void 0, void 0, function* () {
              return this.userBackendApiService.getLoginUrlAsync(
                this.returnUrl || this.windowRef.nativeWindow.location.pathname
              );
            });
          }
          setReturnUrl(newReturnUrl) {
            this.returnUrl = newReturnUrl;
          }
          getUserContributionRightsDataAsync() {
            return __awaiter(this, void 0, void 0, function* () {
              if (this.userContributionRightsInfo) {
                return new Promise((resolve, reject) => {
                  resolve(this.userContributionRightsInfo);
                });
              }
              return this.userBackendApiService
                .getUserContributionRightsDataAsync()
                .then(userContributionRightsInfo => {
                  this.userContributionRightsInfo = userContributionRightsInfo;
                  return this.userContributionRightsInfo;
                });
            });
          }
          getUserPreferredDashboardAsync() {
            return __awaiter(this, void 0, void 0, function* () {
              return this.userBackendApiService
                .getPreferencesAsync()
                .then(data => {
                  return data.default_dashboard;
                });
            });
          }
          canUserAccessTopicsAndSkillsDashboard() {
            return __awaiter(this, void 0, void 0, function* () {
              return this.getUserInfoAsync().then(userInfo => {
                return (
                  userInfo.isLoggedIn() &&
                  (userInfo.isCurriculumAdmin() || userInfo.isTopicManager())
                );
              });
            });
          }
          canUserEditBlogPosts() {
            return __awaiter(this, void 0, void 0, function* () {
              return this.getUserInfoAsync().then(info => {
                return info.isBlogAdmin() || info.isBlogPostEditor();
              });
            });
          }
        };
        UserService.ctorParameters = () => [
          {
            type: services_assets_backend_api_service__WEBPACK_IMPORTED_MODULE_9__[
              'AssetsBackendApiService'
            ],
          },
          {
            type: services_image_local_storage_service__WEBPACK_IMPORTED_MODULE_3__[
              'ImageLocalStorageService'
            ],
          },
          {
            type: domain_utilities_url_interpolation_service__WEBPACK_IMPORTED_MODULE_5__[
              'UrlInterpolationService'
            ],
          },
          {
            type: services_contextual_url_service__WEBPACK_IMPORTED_MODULE_6__[
              'UrlService'
            ],
          },
          {
            type: services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_7__[
              'WindowRef'
            ],
          },
          {
            type: services_user_backend_api_service__WEBPACK_IMPORTED_MODULE_8__[
              'UserBackendApiService'
            ],
          },
        ];
        UserService = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['Injectable'])({
              providedIn: 'root',
            }),
            __metadata('design:paramtypes', [
              services_assets_backend_api_service__WEBPACK_IMPORTED_MODULE_9__[
                'AssetsBackendApiService'
              ],
              services_image_local_storage_service__WEBPACK_IMPORTED_MODULE_3__[
                'ImageLocalStorageService'
              ],
              domain_utilities_url_interpolation_service__WEBPACK_IMPORTED_MODULE_5__[
                'UrlInterpolationService'
              ],
              services_contextual_url_service__WEBPACK_IMPORTED_MODULE_6__[
                'UrlService'
              ],
              services_contextual_window_ref_service__WEBPACK_IMPORTED_MODULE_7__[
                'WindowRef'
              ],
              services_user_backend_api_service__WEBPACK_IMPORTED_MODULE_8__[
                'UserBackendApiService'
              ],
            ]),
          ],
          UserService
        );

        angular
          .module('oppia')
          .factory(
            'UserService',
            Object(
              _angular_upgrade_static__WEBPACK_IMPORTED_MODULE_1__[
                'downgradeInjectable'
              ]
            )(UserService)
          );

        /***/
      },

    /***/ v1VX:
      /*!*******************************************************!*\
  !*** ./core/templates/domain/user/user-info.model.ts ***!
  \*******************************************************/
      /*! exports provided: UserRoles, UserInfo */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'UserRoles',
          function () {
            return UserRoles;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'UserInfo',
          function () {
            return UserInfo;
          }
        );
        // Copyright 2018 The Oppia Authors. All Rights Reserved.
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
         * @fileoverview Frontend Model for user info.
         */
        var UserRoles;
        (function (UserRoles) {
          UserRoles['QUESTION_COORDINATOR'] = 'QUESTION_COORDINATOR';
          UserRoles['QUESTION_ADMIN'] = 'QUESTION_ADMIN';
          UserRoles['BLOG_ADMIN'] = 'BLOG_ADMIN';
          UserRoles['BLOG_POST_EDITOR'] = 'BLOG_POST_EDITOR';
          UserRoles['TRANSLATION_ADMIN'] = 'TRANSLATION_ADMIN';
          UserRoles['TRANSLATION_COORDINATOR'] = 'TRANSLATION_COORDINATOR';
          UserRoles['VOICEOVER_ADMIN'] = 'VOICEOVER_ADMIN';
        })(UserRoles || (UserRoles = {}));
        class UserInfo {
          constructor(
            roles,
            isModerator,
            isCurriculumAdmin,
            isSuperAdmin,
            isTopicManager,
            canCreateCollections,
            preferredSiteLanguageCode,
            username,
            email,
            isLoggedIn
          ) {
            this._roles = roles;
            this._isModerator = isModerator;
            this._isCurriculumAdmin = isCurriculumAdmin;
            this._isTopicManager = isTopicManager;
            this._isSuperAdmin = isSuperAdmin;
            this._canCreateCollections = canCreateCollections;
            this._preferredSiteLanguageCode = preferredSiteLanguageCode;
            this._username = username;
            this._email = email;
            this._isLoggedIn = isLoggedIn;
          }
          static createFromBackendDict(data) {
            return new UserInfo(
              data.roles,
              data.is_moderator,
              data.is_curriculum_admin,
              data.is_super_admin,
              data.is_topic_manager,
              data.can_create_collections,
              data.preferred_site_language_code,
              data.username,
              data.email,
              data.user_is_logged_in
            );
          }
          static createDefault() {
            return new UserInfo(
              ['GUEST'],
              false,
              false,
              false,
              false,
              false,
              null,
              null,
              null,
              false
            );
          }
          isModerator() {
            return this._isModerator;
          }
          isBlogAdmin() {
            return this._roles.includes(UserRoles.BLOG_ADMIN);
          }
          isVoiceoverAdmin() {
            return this._roles.includes(UserRoles.VOICEOVER_ADMIN);
          }
          isBlogPostEditor() {
            return this._roles.includes(UserRoles.BLOG_POST_EDITOR);
          }
          isCurriculumAdmin() {
            return this._isCurriculumAdmin;
          }
          isTranslationAdmin() {
            return this._roles.includes(UserRoles.TRANSLATION_ADMIN);
          }
          isQuestionAdmin() {
            return this._roles.includes(UserRoles.QUESTION_ADMIN);
          }
          isTranslationCoordinator() {
            return this._roles.includes(UserRoles.TRANSLATION_COORDINATOR);
          }
          isQuestionCoordinator() {
            return this._roles.includes(UserRoles.QUESTION_COORDINATOR);
          }
          isTopicManager() {
            return this._isTopicManager;
          }
          isSuperAdmin() {
            return this._isSuperAdmin;
          }
          canCreateCollections() {
            return this._canCreateCollections;
          }
          getPreferredSiteLanguageCode() {
            return this._preferredSiteLanguageCode;
          }
          getUsername() {
            return this._username;
          }
          getEmail() {
            return this._email;
          }
          isLoggedIn() {
            return this._isLoggedIn;
          }
        }

        /***/
      },

    /***/ wuJg:
      /*!***********************************************************************************!*\
  !*** ./core/templates/pages/lightweight-oppia-root/routing/app.routing.module.ts ***!
  \***********************************************************************************/
      /*! exports provided: AppRoutingModule */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'AppRoutingModule',
          function () {
            return AppRoutingModule;
          }
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/common */ 'ofXK');
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/router */ 'tyNb');
        /* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! app.constants */ 'DhAQ');
        /* harmony import */ var _guards_can_access_splash_page_guard__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ./guards/can-access-splash-page.guard */ 'k4vP'
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
        /**
         * @fileoverview Root routing module.
         */

        // All paths must be defined in constants.ts file.
        // Otherwise pages will have false 404 status code.
        const routes = [
          {
            path: '',
            children: [
              {
                path: app_constants__WEBPACK_IMPORTED_MODULE_3__['AppConstants']
                  .PAGES_REGISTERED_WITH_FRONTEND.SPLASH.ROUTE,
                pathMatch: 'full',
                canLoad: [
                  _guards_can_access_splash_page_guard__WEBPACK_IMPORTED_MODULE_4__[
                    'CanAccessSplashPageGuard'
                  ],
                ],
                loadChildren: () =>
                  Promise.all(
                    /*! import() | pages-splash-page-splash-page-module */ [
                      __webpack_require__.e(
                        'default~pages-error-pages-error-404-error-404-page-module~pages-splash-page-splash-page-module'
                      ),
                      __webpack_require__.e(
                        'pages-splash-page-splash-page-module'
                      ),
                    ]
                  )
                    .then(
                      __webpack_require__.bind(
                        null,
                        /*! pages/splash-page/splash-page.module */ 'I5L4'
                      )
                    )
                    .then(m => m.SplashPageModule),
              },
            ],
          },
        ];
        // '**' wildcard route must be kept at the end,as it can override all other
        // routes.
        routes.push({
          path: '**',
          loadChildren: () =>
            Promise.all(
              /*! import() | pages-error-pages-error-404-error-404-page-module */ [
                __webpack_require__.e(
                  'default~pages-error-pages-error-404-error-404-page-module~pages-splash-page-splash-page-module'
                ),
                __webpack_require__.e(
                  'pages-error-pages-error-404-error-404-page-module'
                ),
              ]
            )
              .then(
                __webpack_require__.bind(
                  null,
                  /*! pages/error-pages/error-404/error-404-page.module */ 'wRSX'
                )
              )
              .then(m => m.Error404PageModule),
        });
        let AppRoutingModule = class AppRoutingModule {};
        AppRoutingModule = __decorate(
          [
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['NgModule'])({
              imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__[
                  'RouterModule'
                ].forRoot(routes),
              ],
              exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__['RouterModule'],
              ],
              providers: [
                {
                  provide:
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__[
                      'APP_BASE_HREF'
                    ],
                  useValue: '/',
                },
              ],
            }),
          ],
          AppRoutingModule
        );

        /***/
      },

    /***/ zUnb:
      /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var pages_common_imports__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! pages/common-imports */ 'V9QP');
        /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/platform-browser-dynamic */ 'a3Wg');
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/core */ 'fXoL');
        /* harmony import */ var pages_lightweight_oppia_root_app_module__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! pages/lightweight-oppia-root/app.module */ 'X1ow'
          );
        // Copyright 2022 The Oppia Authors. All Rights Reserved.
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
         * @fileoverview Entry point for angular AoT build.
         */

        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__['enableProdMode'])();
        Object(
          _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__[
            'platformBrowserDynamic'
          ]
        )()
          .bootstrapModule(
            pages_lightweight_oppia_root_app_module__WEBPACK_IMPORTED_MODULE_3__[
              'LighweightAppModule'
            ]
          )
          .catch(err => console.error(err));
        // This prevents angular pages causing side effects to hybrid pages.
        // TODO(#13080): Remove window.name statement from import.ts files
        // after migration is complete.
        window.name = '';

        /***/
      },

    /***/ zn8P:
      /*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        function webpackEmptyAsyncContext(req) {
          // Here Promise.resolve().then() is used instead of new Promise() to prevent
          // uncaught exception popping up in devtools
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }
        webpackEmptyAsyncContext.keys = function () {
          return [];
        };
        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
        module.exports = webpackEmptyAsyncContext;
        webpackEmptyAsyncContext.id = 'zn8P';

        /***/
      },
  },
  [[0, 'runtime', 'vendor']],
]);
//# sourceMappingURL=main-es2015.js.map
