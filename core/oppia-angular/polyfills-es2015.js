(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['polyfills'],
  {
    /***/ '/AsP':
      /*!*************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/shared-key.js ***!
  \*************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var shared = __webpack_require__(/*! ../internals/shared */ 'yIiL');
        var uid = __webpack_require__(/*! ../internals/uid */ 'SDMg');

        var keys = shared('keys');

        module.exports = function (key) {
          return keys[key] || (keys[key] = uid(key));
        };

        /***/
      },

    /***/ '/Ybd':
      /*!*************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-define-property.js ***!
  \*************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */ 'T69T'
        );
        var IE8_DOM_DEFINE = __webpack_require__(
          /*! ../internals/ie8-dom-define */ 'XdSI'
        );
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ 'F26l'
        );
        var toPrimitive = __webpack_require__(
          /*! ../internals/to-primitive */ 'LdO1'
        );

        var nativeDefineProperty = Object.defineProperty;

        // `Object.defineProperty` method
        // https://tc39.es/ecma262/#sec-object.defineproperty
        exports.f = DESCRIPTORS
          ? nativeDefineProperty
          : function defineProperty(O, P, Attributes) {
              anObject(O);
              P = toPrimitive(P, true);
              anObject(Attributes);
              if (IE8_DOM_DEFINE)
                try {
                  return nativeDefineProperty(O, P, Attributes);
                } catch (error) {
                  /* empty */
                }
              if ('get' in Attributes || 'set' in Attributes)
                throw TypeError('Accessors not supported');
              if ('value' in Attributes) O[P] = Attributes.value;
              return O;
            };

        /***/
      },

    /***/ '/sWL':
      /*!****************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/esnext.reflect.has-metadata.js ***!
  \****************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ 'wA6s');
        var ReflectMetadataModule = __webpack_require__(
          /*! ../internals/reflect-metadata */ 'yprU'
        );
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ 'F26l'
        );
        var getPrototypeOf = __webpack_require__(
          /*! ../internals/object-get-prototype-of */ 'wIVT'
        );

        var ordinaryHasOwnMetadata = ReflectMetadataModule.has;
        var toMetadataKey = ReflectMetadataModule.toKey;

        var ordinaryHasMetadata = function (MetadataKey, O, P) {
          var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
          if (hasOwn) return true;
          var parent = getPrototypeOf(O);
          return parent !== null
            ? ordinaryHasMetadata(MetadataKey, parent, P)
            : false;
        };

        // `Reflect.hasMetadata` method
        // https://github.com/rbuckton/reflect-metadata
        $(
          {target: 'Reflect', stat: true},
          {
            hasMetadata: function hasMetadata(
              metadataKey,
              target /* , targetKey */
            ) {
              var targetKey =
                arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
              return ordinaryHasMetadata(
                metadataKey,
                anObject(target),
                targetKey
              );
            },
          }
        );

        /***/
      },

    /***/ 1:
      /*!*********************************************************************************************************************!*\
  !*** multi ./core/templates/Polyfills.ts ./node_modules/@angular-devkit/build-angular/src/webpack/jit-polyfills.js ***!
  \*********************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        __webpack_require__(
          /*! /app/oppia/core/templates/Polyfills.ts */ 'LNMK'
        );
        module.exports = __webpack_require__(
          /*! /app/oppia/node_modules/@angular-devkit/build-angular/src/webpack/jit-polyfills.js */ 'rZy+'
        );

        /***/
      },

    /***/ '149L':
      /*!*******************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/html.js ***!
  \*******************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */ 'Ew/G'
        );

        module.exports = getBuiltIn('document', 'documentElement');

        /***/
      },

    /***/ '1KsK':
      /*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        var toStr = Object.prototype.toString;

        module.exports = function isArguments(value) {
          var str = toStr.call(value);
          var isArgs = str === '[object Arguments]';
          if (!isArgs) {
            isArgs =
              str !== '[object Array]' &&
              value !== null &&
              typeof value === 'object' &&
              typeof value.length === 'number' &&
              value.length >= 0 &&
              toStr.call(value.callee) === '[object Function]';
          }
          return isArgs;
        };

        /***/
      },

    /***/ '1seS':
      /*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        var slice = Array.prototype.slice;
        var isArgs = __webpack_require__(/*! ./isArguments */ '1KsK');

        var origKeys = Object.keys;
        var keysShim = origKeys
          ? function keys(o) {
              return origKeys(o);
            }
          : __webpack_require__(/*! ./implementation */ 'sYn3');

        var originalKeys = Object.keys;

        keysShim.shim = function shimObjectKeys() {
          if (Object.keys) {
            var keysWorksWithArguments = (function () {
              // Safari 5.0 bug
              var args = Object.keys(arguments);
              return args && args.length === arguments.length;
            })(1, 2);
            if (!keysWorksWithArguments) {
              Object.keys = function keys(object) {
                // eslint-disable-line func-name-matching
                if (isArgs(object)) {
                  return originalKeys(slice.call(object));
                }
                return originalKeys(object);
              };
            }
          } else {
            Object.keys = keysShim;
          }
          return Object.keys || keysShim;
        };

        module.exports = keysShim;

        /***/
      },

    /***/ '2MGJ':
      /*!***********************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/redefine.js ***!
  \***********************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(/*! ../internals/global */ 'ocAm');
        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */ 'aJMj'
        );
        var has = __webpack_require__(/*! ../internals/has */ 'OG5q');
        var setGlobal = __webpack_require__(
          /*! ../internals/set-global */ 'Fqhe'
        );
        var inspectSource = __webpack_require__(
          /*! ../internals/inspect-source */ '6urC'
        );
        var InternalStateModule = __webpack_require__(
          /*! ../internals/internal-state */ 'XH/I'
        );

        var getInternalState = InternalStateModule.get;
        var enforceInternalState = InternalStateModule.enforce;
        var TEMPLATE = String(String).split('String');

        (module.exports = function (O, key, value, options) {
          var unsafe = options ? !!options.unsafe : false;
          var simple = options ? !!options.enumerable : false;
          var noTargetGet = options ? !!options.noTargetGet : false;
          var state;
          if (typeof value == 'function') {
            if (typeof key == 'string' && !has(value, 'name')) {
              createNonEnumerableProperty(value, 'name', key);
            }
            state = enforceInternalState(value);
            if (!state.source) {
              state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
            }
          }
          if (O === global) {
            if (simple) O[key] = value;
            else setGlobal(key, value);
            return;
          } else if (!unsafe) {
            delete O[key];
          } else if (!noTargetGet && O[key]) {
            simple = true;
          }
          if (simple) O[key] = value;
          else createNonEnumerableProperty(O, key, value);
          // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        })(Function.prototype, 'toString', function toString() {
          return (
            (typeof this == 'function' && getInternalState(this).source) ||
            inspectSource(this)
          );
        });

        /***/
      },

    /***/ '2RDa':
      /*!****************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-create.js ***!
  \****************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ 'F26l'
        );
        var defineProperties = __webpack_require__(
          /*! ../internals/object-define-properties */ '5y2d'
        );
        var enumBugKeys = __webpack_require__(
          /*! ../internals/enum-bug-keys */ 'aAjO'
        );
        var hiddenKeys = __webpack_require__(
          /*! ../internals/hidden-keys */ 'yQMY'
        );
        var html = __webpack_require__(/*! ../internals/html */ '149L');
        var documentCreateElement = __webpack_require__(
          /*! ../internals/document-create-element */ 'qx7X'
        );
        var sharedKey = __webpack_require__(
          /*! ../internals/shared-key */ '/AsP'
        );

        var GT = '>';
        var LT = '<';
        var PROTOTYPE = 'prototype';
        var SCRIPT = 'script';
        var IE_PROTO = sharedKey('IE_PROTO');

        var EmptyConstructor = function () {
          /* empty */
        };

        var scriptTag = function (content) {
          return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
        };

        // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
        var NullProtoObjectViaActiveX = function (activeXDocument) {
          activeXDocument.write(scriptTag(''));
          activeXDocument.close();
          var temp = activeXDocument.parentWindow.Object;
          activeXDocument = null; // avoid memory leak
          return temp;
        };

        // Create object with fake `null` prototype: use iframe Object with cleared prototype
        var NullProtoObjectViaIFrame = function () {
          // Thrash, waste and sodomy: IE GC bug
          var iframe = documentCreateElement('iframe');
          var JS = 'java' + SCRIPT + ':';
          var iframeDocument;
          iframe.style.display = 'none';
          html.appendChild(iframe);
          // https://github.com/zloirock/core-js/issues/475
          iframe.src = String(JS);
          iframeDocument = iframe.contentWindow.document;
          iframeDocument.open();
          iframeDocument.write(scriptTag('document.F=Object'));
          iframeDocument.close();
          return iframeDocument.F;
        };

        // Check for document.domain and active x support
        // No need to use active x approach when document.domain is not set
        // see https://github.com/es-shims/es5-shim/issues/150
        // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
        // avoid IE GC bug
        var activeXDocument;
        var NullProtoObject = function () {
          try {
            /* global ActiveXObject */
            activeXDocument = document.domain && new ActiveXObject('htmlfile');
          } catch (error) {
            /* ignore */
          }
          NullProtoObject = activeXDocument
            ? NullProtoObjectViaActiveX(activeXDocument)
            : NullProtoObjectViaIFrame();
          var length = enumBugKeys.length;
          while (length--)
            delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
          return NullProtoObject();
        };

        hiddenKeys[IE_PROTO] = true;

        // `Object.create` method
        // https://tc39.es/ecma262/#sec-object.create
        module.exports =
          Object.create ||
          function create(O, Properties) {
            var result;
            if (O !== null) {
              EmptyConstructor[PROTOTYPE] = anObject(O);
              result = new EmptyConstructor();
              EmptyConstructor[PROTOTYPE] = null;
              // add "__proto__" for Object.getPrototypeOf polyfill
              result[IE_PROTO] = O;
            } else result = NullProtoObject();
            return Properties === undefined
              ? result
              : defineProperties(result, Properties);
          };

        /***/
      },

    /***/ '4PyY':
      /*!************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/to-string-tag-support.js ***!
  \************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ 'm41k'
        );

        var TO_STRING_TAG = wellKnownSymbol('toStringTag');
        var test = {};

        test[TO_STRING_TAG] = 'z';

        module.exports = String(test) === '[object z]';

        /***/
      },

    /***/ '5MmU':
      /*!***************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/is-array-iterator-method.js ***!
  \***************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ 'm41k'
        );
        var Iterators = __webpack_require__(
          /*! ../internals/iterators */ 'pz+c'
        );

        var ITERATOR = wellKnownSymbol('iterator');
        var ArrayPrototype = Array.prototype;

        // check on default Array iterator
        module.exports = function (it) {
          return (
            it !== undefined &&
            (Iterators.Array === it || ArrayPrototype[ITERATOR] === it)
          );
        };

        /***/
      },

    /***/ '5y2d':
      /*!***************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-define-properties.js ***!
  \***************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */ 'T69T'
        );
        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */ '/Ybd'
        );
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ 'F26l'
        );
        var objectKeys = __webpack_require__(
          /*! ../internals/object-keys */ 'ZRqE'
        );

        // `Object.defineProperties` method
        // https://tc39.es/ecma262/#sec-object.defineproperties
        module.exports = DESCRIPTORS
          ? Object.defineProperties
          : function defineProperties(O, Properties) {
              anObject(O);
              var keys = objectKeys(Properties);
              var length = keys.length;
              var index = 0;
              var key;
              while (length > index)
                definePropertyModule.f(
                  O,
                  (key = keys[index++]),
                  Properties[key]
                );
              return O;
            };

        /***/
      },

    /***/ '5zQ0':
      /*!*****************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/iterator-close.js ***!
  \*****************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ 'F26l'
        );

        module.exports = function (iterator) {
          var returnMethod = iterator['return'];
          if (returnMethod !== undefined) {
            return anObject(returnMethod.call(iterator)).value;
          }
        };

        /***/
      },

    /***/ '6XUM':
      /*!************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/is-object.js ***!
  \************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = function (it) {
          return typeof it === 'object'
            ? it !== null
            : typeof it === 'function';
        };

        /***/
      },

    /***/ '6urC':
      /*!*****************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/inspect-source.js ***!
  \*****************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var store = __webpack_require__(
          /*! ../internals/shared-store */ 'KBkW'
        );

        var functionToString = Function.toString;

        // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
        if (typeof store.inspectSource != 'function') {
          store.inspectSource = function (it) {
            return functionToString.call(it);
          };
        }

        module.exports = store.inspectSource;

        /***/
      },

    /***/ '7/lX':
      /*!**************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-set-prototype-of.js ***!
  \**************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ 'F26l'
        );
        var aPossiblePrototype = __webpack_require__(
          /*! ../internals/a-possible-prototype */ 'JI1L'
        );

        // `Object.setPrototypeOf` method
        // https://tc39.es/ecma262/#sec-object.setprototypeof
        // Works with __proto__ only. Old v8 can't work with null proto objects.
        /* eslint-disable no-proto */
        module.exports =
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function () {
                var CORRECT_SETTER = false;
                var test = {};
                var setter;
                try {
                  setter = Object.getOwnPropertyDescriptor(
                    Object.prototype,
                    '__proto__'
                  ).set;
                  setter.call(test, []);
                  CORRECT_SETTER = test instanceof Array;
                } catch (error) {
                  /* empty */
                }
                return function setPrototypeOf(O, proto) {
                  anObject(O);
                  aPossiblePrototype(proto);
                  if (CORRECT_SETTER) setter.call(O, proto);
                  else O.__proto__ = proto;
                  return O;
                };
              })()
            : undefined);

        /***/
      },

    /***/ '76gj':
      /*!***********************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/own-keys.js ***!
  \***********************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */ 'Ew/G'
        );
        var getOwnPropertyNamesModule = __webpack_require__(
          /*! ../internals/object-get-own-property-names */ 'KkqW'
        );
        var getOwnPropertySymbolsModule = __webpack_require__(
          /*! ../internals/object-get-own-property-symbols */ 'busr'
        );
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ 'F26l'
        );

        // all object keys, includes non-enumerable and symbols
        module.exports =
          getBuiltIn('Reflect', 'ownKeys') ||
          function ownKeys(it) {
            var keys = getOwnPropertyNamesModule.f(anObject(it));
            var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
            return getOwnPropertySymbols
              ? keys.concat(getOwnPropertySymbols(it))
              : keys;
          };

        /***/
      },

    /***/ '7Oj1':
      /*!********************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/to-absolute-index.js ***!
  \********************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(
          /*! ../internals/to-integer */ 'vDBE'
        );

        var max = Math.max;
        var min = Math.min;

        // Helper for a popular repeating case of the spec:
        // Let integer be ? ToInteger(index).
        // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
        module.exports = function (index, length) {
          var integer = toInteger(index);
          return integer < 0 ? max(integer + length, 0) : min(integer, length);
        };

        /***/
      },

    /***/ '7gGY':
      /*!*************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \*************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */ 'T69T'
        );
        var propertyIsEnumerableModule = __webpack_require__(
          /*! ../internals/object-property-is-enumerable */ 'gn9T'
        );
        var createPropertyDescriptor = __webpack_require__(
          /*! ../internals/create-property-descriptor */ 'uSMZ'
        );
        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */ 'EMtK'
        );
        var toPrimitive = __webpack_require__(
          /*! ../internals/to-primitive */ 'LdO1'
        );
        var has = __webpack_require__(/*! ../internals/has */ 'OG5q');
        var IE8_DOM_DEFINE = __webpack_require__(
          /*! ../internals/ie8-dom-define */ 'XdSI'
        );

        var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

        // `Object.getOwnPropertyDescriptor` method
        // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
        exports.f = DESCRIPTORS
          ? nativeGetOwnPropertyDescriptor
          : function getOwnPropertyDescriptor(O, P) {
              O = toIndexedObject(O);
              P = toPrimitive(P, true);
              if (IE8_DOM_DEFINE)
                try {
                  return nativeGetOwnPropertyDescriptor(O, P);
                } catch (error) {
                  /* empty */
                }
              if (has(O, P))
                return createPropertyDescriptor(
                  !propertyIsEnumerableModule.f.call(O, P),
                  O[P]
                );
            };

        /***/
      },

    /***/ '82c2':
      /*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        var keys = __webpack_require__(/*! object-keys */ '1seS');
        var hasSymbols =
          typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

        var toStr = Object.prototype.toString;
        var concat = Array.prototype.concat;
        var origDefineProperty = Object.defineProperty;

        var isFunction = function (fn) {
          return (
            typeof fn === 'function' && toStr.call(fn) === '[object Function]'
          );
        };

        var hasPropertyDescriptors = __webpack_require__(
          /*! has-property-descriptors */ 'ZLCw'
        )();

        var supportsDescriptors = origDefineProperty && hasPropertyDescriptors;

        var defineProperty = function (object, name, value, predicate) {
          if (name in object && (!isFunction(predicate) || !predicate())) {
            return;
          }
          if (supportsDescriptors) {
            origDefineProperty(object, name, {
              configurable: true,
              enumerable: false,
              value: value,
              writable: true,
            });
          } else {
            object[name] = value; // eslint-disable-line no-param-reassign
          }
        };

        var defineProperties = function (object, map) {
          var predicates = arguments.length > 2 ? arguments[2] : {};
          var props = keys(map);
          if (hasSymbols) {
            props = concat.call(props, Object.getOwnPropertySymbols(map));
          }
          for (var i = 0; i < props.length; i += 1) {
            defineProperty(
              object,
              props[i],
              map[props[i]],
              predicates[props[i]]
            );
          }
        };

        defineProperties.supportsDescriptors = !!supportsDescriptors;

        module.exports = defineProperties;

        /***/
      },

    /***/ '8aNu':
      /*!***************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/redefine-all.js ***!
  \***************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var redefine = __webpack_require__(/*! ../internals/redefine */ '2MGJ');

        module.exports = function (target, src, options) {
          for (var key in src) redefine(target, key, src[key], options);
          return target;
        };

        /***/
      },

    /***/ AM7I:
      /*!*********************************************!*\
  !*** ./node_modules/get-intrinsic/index.js ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        var undefined;

        var $SyntaxError = SyntaxError;
        var $Function = Function;
        var $TypeError = TypeError;

        // eslint-disable-next-line consistent-return
        var getEvalledConstructor = function (expressionSyntax) {
          try {
            return $Function(
              '"use strict"; return (' + expressionSyntax + ').constructor;'
            )();
          } catch (e) {}
        };

        var $gOPD = Object.getOwnPropertyDescriptor;
        if ($gOPD) {
          try {
            $gOPD({}, '');
          } catch (e) {
            $gOPD = null; // this is IE 8, which has a broken gOPD
          }
        }

        var throwTypeError = function () {
          throw new $TypeError();
        };
        var ThrowTypeError = $gOPD
          ? (function () {
              try {
                // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
                arguments.callee; // IE 8 does not throw here
                return throwTypeError;
              } catch (calleeThrows) {
                try {
                  // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
                  return $gOPD(arguments, 'callee').get;
                } catch (gOPDthrows) {
                  return throwTypeError;
                }
              }
            })()
          : throwTypeError;

        var hasSymbols = __webpack_require__(/*! has-symbols */ 'UVaH')();

        var getProto =
          Object.getPrototypeOf ||
          function (x) {
            return x.__proto__;
          }; // eslint-disable-line no-proto

        var needsEval = {};

        var TypedArray =
          typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

        var INTRINSICS = {
          '%AggregateError%':
            typeof AggregateError === 'undefined' ? undefined : AggregateError,
          '%Array%': Array,
          '%ArrayBuffer%':
            typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
          '%ArrayIteratorPrototype%': hasSymbols
            ? getProto([][Symbol.iterator]())
            : undefined,
          '%AsyncFromSyncIteratorPrototype%': undefined,
          '%AsyncFunction%': needsEval,
          '%AsyncGenerator%': needsEval,
          '%AsyncGeneratorFunction%': needsEval,
          '%AsyncIteratorPrototype%': needsEval,
          '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
          '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
          '%Boolean%': Boolean,
          '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
          '%Date%': Date,
          '%decodeURI%': decodeURI,
          '%decodeURIComponent%': decodeURIComponent,
          '%encodeURI%': encodeURI,
          '%encodeURIComponent%': encodeURIComponent,
          '%Error%': Error,
          '%eval%': eval, // eslint-disable-line no-eval
          '%EvalError%': EvalError,
          '%Float32Array%':
            typeof Float32Array === 'undefined' ? undefined : Float32Array,
          '%Float64Array%':
            typeof Float64Array === 'undefined' ? undefined : Float64Array,
          '%FinalizationRegistry%':
            typeof FinalizationRegistry === 'undefined'
              ? undefined
              : FinalizationRegistry,
          '%Function%': $Function,
          '%GeneratorFunction%': needsEval,
          '%Int8Array%':
            typeof Int8Array === 'undefined' ? undefined : Int8Array,
          '%Int16Array%':
            typeof Int16Array === 'undefined' ? undefined : Int16Array,
          '%Int32Array%':
            typeof Int32Array === 'undefined' ? undefined : Int32Array,
          '%isFinite%': isFinite,
          '%isNaN%': isNaN,
          '%IteratorPrototype%': hasSymbols
            ? getProto(getProto([][Symbol.iterator]()))
            : undefined,
          '%JSON%': typeof JSON === 'object' ? JSON : undefined,
          '%Map%': typeof Map === 'undefined' ? undefined : Map,
          '%MapIteratorPrototype%':
            typeof Map === 'undefined' || !hasSymbols
              ? undefined
              : getProto(new Map()[Symbol.iterator]()),
          '%Math%': Math,
          '%Number%': Number,
          '%Object%': Object,
          '%parseFloat%': parseFloat,
          '%parseInt%': parseInt,
          '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
          '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
          '%RangeError%': RangeError,
          '%ReferenceError%': ReferenceError,
          '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
          '%RegExp%': RegExp,
          '%Set%': typeof Set === 'undefined' ? undefined : Set,
          '%SetIteratorPrototype%':
            typeof Set === 'undefined' || !hasSymbols
              ? undefined
              : getProto(new Set()[Symbol.iterator]()),
          '%SharedArrayBuffer%':
            typeof SharedArrayBuffer === 'undefined'
              ? undefined
              : SharedArrayBuffer,
          '%String%': String,
          '%StringIteratorPrototype%': hasSymbols
            ? getProto(''[Symbol.iterator]())
            : undefined,
          '%Symbol%': hasSymbols ? Symbol : undefined,
          '%SyntaxError%': $SyntaxError,
          '%ThrowTypeError%': ThrowTypeError,
          '%TypedArray%': TypedArray,
          '%TypeError%': $TypeError,
          '%Uint8Array%':
            typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
          '%Uint8ClampedArray%':
            typeof Uint8ClampedArray === 'undefined'
              ? undefined
              : Uint8ClampedArray,
          '%Uint16Array%':
            typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
          '%Uint32Array%':
            typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
          '%URIError%': URIError,
          '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
          '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
          '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
        };

        var doEval = function doEval(name) {
          var value;
          if (name === '%AsyncFunction%') {
            value = getEvalledConstructor('async function () {}');
          } else if (name === '%GeneratorFunction%') {
            value = getEvalledConstructor('function* () {}');
          } else if (name === '%AsyncGeneratorFunction%') {
            value = getEvalledConstructor('async function* () {}');
          } else if (name === '%AsyncGenerator%') {
            var fn = doEval('%AsyncGeneratorFunction%');
            if (fn) {
              value = fn.prototype;
            }
          } else if (name === '%AsyncIteratorPrototype%') {
            var gen = doEval('%AsyncGenerator%');
            if (gen) {
              value = getProto(gen.prototype);
            }
          }

          INTRINSICS[name] = value;

          return value;
        };

        var LEGACY_ALIASES = {
          '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
          '%ArrayPrototype%': ['Array', 'prototype'],
          '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
          '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
          '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
          '%ArrayProto_values%': ['Array', 'prototype', 'values'],
          '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
          '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
          '%AsyncGeneratorPrototype%': [
            'AsyncGeneratorFunction',
            'prototype',
            'prototype',
          ],
          '%BooleanPrototype%': ['Boolean', 'prototype'],
          '%DataViewPrototype%': ['DataView', 'prototype'],
          '%DatePrototype%': ['Date', 'prototype'],
          '%ErrorPrototype%': ['Error', 'prototype'],
          '%EvalErrorPrototype%': ['EvalError', 'prototype'],
          '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
          '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
          '%FunctionPrototype%': ['Function', 'prototype'],
          '%Generator%': ['GeneratorFunction', 'prototype'],
          '%GeneratorPrototype%': [
            'GeneratorFunction',
            'prototype',
            'prototype',
          ],
          '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
          '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
          '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
          '%JSONParse%': ['JSON', 'parse'],
          '%JSONStringify%': ['JSON', 'stringify'],
          '%MapPrototype%': ['Map', 'prototype'],
          '%NumberPrototype%': ['Number', 'prototype'],
          '%ObjectPrototype%': ['Object', 'prototype'],
          '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
          '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
          '%PromisePrototype%': ['Promise', 'prototype'],
          '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
          '%Promise_all%': ['Promise', 'all'],
          '%Promise_reject%': ['Promise', 'reject'],
          '%Promise_resolve%': ['Promise', 'resolve'],
          '%RangeErrorPrototype%': ['RangeError', 'prototype'],
          '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
          '%RegExpPrototype%': ['RegExp', 'prototype'],
          '%SetPrototype%': ['Set', 'prototype'],
          '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
          '%StringPrototype%': ['String', 'prototype'],
          '%SymbolPrototype%': ['Symbol', 'prototype'],
          '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
          '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
          '%TypeErrorPrototype%': ['TypeError', 'prototype'],
          '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
          '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
          '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
          '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
          '%URIErrorPrototype%': ['URIError', 'prototype'],
          '%WeakMapPrototype%': ['WeakMap', 'prototype'],
          '%WeakSetPrototype%': ['WeakSet', 'prototype'],
        };

        var bind = __webpack_require__(/*! function-bind */ 'D3zA');
        var hasOwn = __webpack_require__(/*! has */ 'oNNP');
        var $concat = bind.call(Function.call, Array.prototype.concat);
        var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
        var $replace = bind.call(Function.call, String.prototype.replace);
        var $strSlice = bind.call(Function.call, String.prototype.slice);
        var $exec = bind.call(Function.call, RegExp.prototype.exec);

        /* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
        var rePropName =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
        var reEscapeChar =
          /\\(\\)?/g; /** Used to match backslashes in property paths. */
        var stringToPath = function stringToPath(string) {
          var first = $strSlice(string, 0, 1);
          var last = $strSlice(string, -1);
          if (first === '%' && last !== '%') {
            throw new $SyntaxError(
              'invalid intrinsic syntax, expected closing `%`'
            );
          } else if (last === '%' && first !== '%') {
            throw new $SyntaxError(
              'invalid intrinsic syntax, expected opening `%`'
            );
          }
          var result = [];
          $replace(
            string,
            rePropName,
            function (match, number, quote, subString) {
              result[result.length] = quote
                ? $replace(subString, reEscapeChar, '$1')
                : number || match;
            }
          );
          return result;
        };
        /* end adaptation */

        var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
          var intrinsicName = name;
          var alias;
          if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
            alias = LEGACY_ALIASES[intrinsicName];
            intrinsicName = '%' + alias[0] + '%';
          }

          if (hasOwn(INTRINSICS, intrinsicName)) {
            var value = INTRINSICS[intrinsicName];
            if (value === needsEval) {
              value = doEval(intrinsicName);
            }
            if (typeof value === 'undefined' && !allowMissing) {
              throw new $TypeError(
                'intrinsic ' +
                  name +
                  ' exists, but is not available. Please file an issue!'
              );
            }

            return {
              alias: alias,
              name: intrinsicName,
              value: value,
            };
          }

          throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
        };

        module.exports = function GetIntrinsic(name, allowMissing) {
          if (typeof name !== 'string' || name.length === 0) {
            throw new $TypeError('intrinsic name must be a non-empty string');
          }
          if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
            throw new $TypeError('"allowMissing" argument must be a boolean');
          }

          if ($exec(/^%?[^%]*%?$/, name) === null) {
            throw new $SyntaxError(
              '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
            );
          }
          var parts = stringToPath(name);
          var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

          var intrinsic = getBaseIntrinsic(
            '%' + intrinsicBaseName + '%',
            allowMissing
          );
          var intrinsicRealName = intrinsic.name;
          var value = intrinsic.value;
          var skipFurtherCaching = false;

          var alias = intrinsic.alias;
          if (alias) {
            intrinsicBaseName = alias[0];
            $spliceApply(parts, $concat([0, 1], alias));
          }

          for (var i = 1, isOwn = true; i < parts.length; i += 1) {
            var part = parts[i];
            var first = $strSlice(part, 0, 1);
            var last = $strSlice(part, -1);
            if (
              (first === '"' ||
                first === "'" ||
                first === '`' ||
                last === '"' ||
                last === "'" ||
                last === '`') &&
              first !== last
            ) {
              throw new $SyntaxError(
                'property names with quotes must have matching quotes'
              );
            }
            if (part === 'constructor' || !isOwn) {
              skipFurtherCaching = true;
            }

            intrinsicBaseName += '.' + part;
            intrinsicRealName = '%' + intrinsicBaseName + '%';

            if (hasOwn(INTRINSICS, intrinsicRealName)) {
              value = INTRINSICS[intrinsicRealName];
            } else if (value != null) {
              if (!(part in value)) {
                if (!allowMissing) {
                  throw new $TypeError(
                    'base intrinsic for ' +
                      name +
                      ' exists, but the property is not available.'
                  );
                }
                return void undefined;
              }
              if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;

                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
                  value = desc.get;
                } else {
                  value = value[part];
                }
              } else {
                isOwn = hasOwn(value, part);
                value = value[part];
              }

              if (isOwn && !skipFurtherCaching) {
                INTRINSICS[intrinsicRealName] = value;
              }
            }
          }
          return value;
        };

        /***/
      },

    /***/ B4ea:
      /*!************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/esnext.reflect.metadata.js ***!
  \************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ 'wA6s');
        var ReflectMetadataModule = __webpack_require__(
          /*! ../internals/reflect-metadata */ 'yprU'
        );
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ 'F26l'
        );

        var toMetadataKey = ReflectMetadataModule.toKey;
        var ordinaryDefineOwnMetadata = ReflectMetadataModule.set;

        // `Reflect.metadata` method
        // https://github.com/rbuckton/reflect-metadata
        $(
          {target: 'Reflect', stat: true},
          {
            metadata: function metadata(metadataKey, metadataValue) {
              return function decorator(target, key) {
                ordinaryDefineOwnMetadata(
                  metadataKey,
                  metadataValue,
                  anObject(target),
                  toMetadataKey(key)
                );
              };
            },
          }
        );

        /***/
      },

    /***/ 'Bb/w':
      /*!****************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/esnext.reflect.get-metadata.js ***!
  \****************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ 'wA6s');
        var ReflectMetadataModule = __webpack_require__(
          /*! ../internals/reflect-metadata */ 'yprU'
        );
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ 'F26l'
        );
        var getPrototypeOf = __webpack_require__(
          /*! ../internals/object-get-prototype-of */ 'wIVT'
        );

        var ordinaryHasOwnMetadata = ReflectMetadataModule.has;
        var ordinaryGetOwnMetadata = ReflectMetadataModule.get;
        var toMetadataKey = ReflectMetadataModule.toKey;

        var ordinaryGetMetadata = function (MetadataKey, O, P) {
          var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
          if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
          var parent = getPrototypeOf(O);
          return parent !== null
            ? ordinaryGetMetadata(MetadataKey, parent, P)
            : undefined;
        };

        // `Reflect.getMetadata` method
        // https://github.com/rbuckton/reflect-metadata
        $(
          {target: 'Reflect', stat: true},
          {
            getMetadata: function getMetadata(
              metadataKey,
              target /* , targetKey */
            ) {
              var targetKey =
                arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
              return ordinaryGetMetadata(
                metadataKey,
                anObject(target),
                targetKey
              );
            },
          }
        );

        /***/
      },

    /***/ D3zA:
      /*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        var implementation = __webpack_require__(
          /*! ./implementation */ 'aI7X'
        );

        module.exports = Function.prototype.bind || implementation;

        /***/
      },

    /***/ DAme:
      /*!******************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/collection-weak.js ***!
  \******************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        var redefineAll = __webpack_require__(
          /*! ../internals/redefine-all */ '8aNu'
        );
        var getWeakData = __webpack_require__(
          /*! ../internals/internal-metadata */ 'M7Xk'
        ).getWeakData;
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ 'F26l'
        );
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ '6XUM'
        );
        var anInstance = __webpack_require__(
          /*! ../internals/an-instance */ 'SM6+'
        );
        var iterate = __webpack_require__(/*! ../internals/iterate */ 'Rn6E');
        var ArrayIterationModule = __webpack_require__(
          /*! ../internals/array-iteration */ 'kk6e'
        );
        var $has = __webpack_require__(/*! ../internals/has */ 'OG5q');
        var InternalStateModule = __webpack_require__(
          /*! ../internals/internal-state */ 'XH/I'
        );

        var setInternalState = InternalStateModule.set;
        var internalStateGetterFor = InternalStateModule.getterFor;
        var find = ArrayIterationModule.find;
        var findIndex = ArrayIterationModule.findIndex;
        var id = 0;

        // fallback for uncaught frozen keys
        var uncaughtFrozenStore = function (store) {
          return store.frozen || (store.frozen = new UncaughtFrozenStore());
        };

        var UncaughtFrozenStore = function () {
          this.entries = [];
        };

        var findUncaughtFrozen = function (store, key) {
          return find(store.entries, function (it) {
            return it[0] === key;
          });
        };

        UncaughtFrozenStore.prototype = {
          get: function (key) {
            var entry = findUncaughtFrozen(this, key);
            if (entry) return entry[1];
          },
          has: function (key) {
            return !!findUncaughtFrozen(this, key);
          },
          set: function (key, value) {
            var entry = findUncaughtFrozen(this, key);
            if (entry) entry[1] = value;
            else this.entries.push([key, value]);
          },
          delete: function (key) {
            var index = findIndex(this.entries, function (it) {
              return it[0] === key;
            });
            if (~index) this.entries.splice(index, 1);
            return !!~index;
          },
        };

        module.exports = {
          getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
            var C = wrapper(function (that, iterable) {
              anInstance(that, C, CONSTRUCTOR_NAME);
              setInternalState(that, {
                type: CONSTRUCTOR_NAME,
                id: id++,
                frozen: undefined,
              });
              if (iterable != undefined)
                iterate(iterable, that[ADDER], {
                  that: that,
                  AS_ENTRIES: IS_MAP,
                });
            });

            var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

            var define = function (that, key, value) {
              var state = getInternalState(that);
              var data = getWeakData(anObject(key), true);
              if (data === true) uncaughtFrozenStore(state).set(key, value);
              else data[state.id] = value;
              return that;
            };

            redefineAll(C.prototype, {
              // 23.3.3.2 WeakMap.prototype.delete(key)
              // 23.4.3.3 WeakSet.prototype.delete(value)
              delete: function (key) {
                var state = getInternalState(this);
                if (!isObject(key)) return false;
                var data = getWeakData(key);
                if (data === true)
                  return uncaughtFrozenStore(state)['delete'](key);
                return data && $has(data, state.id) && delete data[state.id];
              },
              // 23.3.3.4 WeakMap.prototype.has(key)
              // 23.4.3.4 WeakSet.prototype.has(value)
              has: function has(key) {
                var state = getInternalState(this);
                if (!isObject(key)) return false;
                var data = getWeakData(key);
                if (data === true) return uncaughtFrozenStore(state).has(key);
                return data && $has(data, state.id);
              },
            });

            redefineAll(
              C.prototype,
              IS_MAP
                ? {
                    // 23.3.3.3 WeakMap.prototype.get(key)
                    get: function get(key) {
                      var state = getInternalState(this);
                      if (isObject(key)) {
                        var data = getWeakData(key);
                        if (data === true)
                          return uncaughtFrozenStore(state).get(key);
                        return data ? data[state.id] : undefined;
                      }
                    },
                    // 23.3.3.5 WeakMap.prototype.set(key, value)
                    set: function set(key, value) {
                      return define(this, key, value);
                    },
                  }
                : {
                    // 23.4.3.1 WeakSet.prototype.add(value)
                    add: function add(value) {
                      return define(this, value, true);
                    },
                  }
            );

            return C;
          },
        };

        /***/
      },

    /***/ E7aN:
      /*!*******************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/path.js ***!
  \*******************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(/*! ../internals/global */ 'ocAm');

        module.exports = global;

        /***/
      },

    /***/ EIBq:
      /*!*********************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/check-correctness-of-iteration.js ***!
  \*********************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ 'm41k'
        );

        var ITERATOR = wellKnownSymbol('iterator');
        var SAFE_CLOSING = false;

        try {
          var called = 0;
          var iteratorWithReturn = {
            next: function () {
              return {done: !!called++};
            },
            return: function () {
              SAFE_CLOSING = true;
            },
          };
          iteratorWithReturn[ITERATOR] = function () {
            return this;
          };
          // eslint-disable-next-line no-throw-literal
          Array.from(iteratorWithReturn, function () {
            throw 2;
          });
        } catch (error) {
          /* empty */
        }

        module.exports = function (exec, SKIP_CLOSING) {
          if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
          var ITERATION_SUPPORT = false;
          try {
            var object = {};
            object[ITERATOR] = function () {
              return {
                next: function () {
                  return {done: (ITERATION_SUPPORT = true)};
                },
              };
            };
            exec(object);
          } catch (error) {
            /* empty */
          }
          return ITERATION_SUPPORT;
        };

        /***/
      },

    /***/ EMtK:
      /*!********************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/to-indexed-object.js ***!
  \********************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        // toObject with fallback for non-array-like ES3 strings
        var IndexedObject = __webpack_require__(
          /*! ../internals/indexed-object */ 'tUdv'
        );
        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */ 'hmpk'
        );

        module.exports = function (it) {
          return IndexedObject(requireObjectCoercible(it));
        };

        /***/
      },

    /***/ 'Ew/G':
      /*!***************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/get-built-in.js ***!
  \***************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var path = __webpack_require__(/*! ../internals/path */ 'E7aN');
        var global = __webpack_require__(/*! ../internals/global */ 'ocAm');

        var aFunction = function (variable) {
          return typeof variable == 'function' ? variable : undefined;
        };

        module.exports = function (namespace, method) {
          return arguments.length < 2
            ? aFunction(path[namespace]) || aFunction(global[namespace])
            : (path[namespace] && path[namespace][method]) ||
                (global[namespace] && global[namespace][method]);
        };

        /***/
      },

    /***/ 'F/TS':
      /*!**********************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/get-iterator-method.js ***!
  \**********************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var classof = __webpack_require__(/*! ../internals/classof */ 'mN5b');
        var Iterators = __webpack_require__(
          /*! ../internals/iterators */ 'pz+c'
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ 'm41k'
        );

        var ITERATOR = wellKnownSymbol('iterator');

        module.exports = function (it) {
          if (it != undefined)
            return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
        };

        /***/
      },

    /***/ F26l:
      /*!************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/an-object.js ***!
  \************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ '6XUM'
        );

        module.exports = function (it) {
          if (!isObject(it)) {
            throw TypeError(String(it) + ' is not an object');
          }
          return it;
        };

        /***/
      },

    /***/ FpZJ:
      /*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        /* eslint complexity: [2, 18], max-statements: [2, 33] */
        module.exports = function hasSymbols() {
          if (
            typeof Symbol !== 'function' ||
            typeof Object.getOwnPropertySymbols !== 'function'
          ) {
            return false;
          }
          if (typeof Symbol.iterator === 'symbol') {
            return true;
          }

          var obj = {};
          var sym = Symbol('test');
          var symObj = Object(sym);
          if (typeof sym === 'string') {
            return false;
          }

          if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
            return false;
          }
          if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
            return false;
          }

          // temp disabled per https://github.com/ljharb/object.assign/issues/17
          // if (sym instanceof Symbol) { return false; }
          // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
          // if (!(symObj instanceof Symbol)) { return false; }

          // if (typeof Symbol.prototype.toString !== 'function') { return false; }
          // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

          var symVal = 42;
          obj[sym] = symVal;
          for (sym in obj) {
            return false;
          } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
          if (
            typeof Object.keys === 'function' &&
            Object.keys(obj).length !== 0
          ) {
            return false;
          }

          if (
            typeof Object.getOwnPropertyNames === 'function' &&
            Object.getOwnPropertyNames(obj).length !== 0
          ) {
            return false;
          }

          var syms = Object.getOwnPropertySymbols(obj);
          if (syms.length !== 1 || syms[0] !== sym) {
            return false;
          }

          if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
            return false;
          }

          if (typeof Object.getOwnPropertyDescriptor === 'function') {
            var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
            if (descriptor.value !== symVal || descriptor.enumerable !== true) {
              return false;
            }
          }

          return true;
        };

        /***/
      },

    /***/ Fqhe:
      /*!*************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/set-global.js ***!
  \*************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(/*! ../internals/global */ 'ocAm');
        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */ 'aJMj'
        );

        module.exports = function (key, value) {
          try {
            createNonEnumerableProperty(global, key, value);
          } catch (error) {
            global[key] = value;
          }
          return value;
        };

        /***/
      },

    /***/ G1Vw:
      /*!*****************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/iterators-core.js ***!
  \*****************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        var fails = __webpack_require__(/*! ../internals/fails */ 'rG8t');
        var getPrototypeOf = __webpack_require__(
          /*! ../internals/object-get-prototype-of */ 'wIVT'
        );
        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */ 'aJMj'
        );
        var has = __webpack_require__(/*! ../internals/has */ 'OG5q');
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ 'm41k'
        );
        var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 'g9hI');

        var ITERATOR = wellKnownSymbol('iterator');
        var BUGGY_SAFARI_ITERATORS = false;

        var returnThis = function () {
          return this;
        };

        // `%IteratorPrototype%` object
        // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
        var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

        if ([].keys) {
          arrayIterator = [].keys();
          // Safari 8 has buggy iterators w/o `next`
          if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
          else {
            PrototypeOfArrayIteratorPrototype = getPrototypeOf(
              getPrototypeOf(arrayIterator)
            );
            if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
              IteratorPrototype = PrototypeOfArrayIteratorPrototype;
          }
        }

        var NEW_ITERATOR_PROTOTYPE =
          IteratorPrototype == undefined ||
          fails(function () {
            var test = {};
            // FF44- legacy iterators case
            return IteratorPrototype[ITERATOR].call(test) !== test;
          });

        if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

        // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
        if (
          (!IS_PURE || NEW_ITERATOR_PROTOTYPE) &&
          !has(IteratorPrototype, ITERATOR)
        ) {
          createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
        }

        module.exports = {
          IteratorPrototype: IteratorPrototype,
          BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS,
        };

        /***/
      },

    /***/ Icrz:
      /*!*************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/esnext.reflect.get-own-metadata-keys.js ***!
  \*************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ 'wA6s');
        var ReflectMetadataModule = __webpack_require__(
          /*! ../internals/reflect-metadata */ 'yprU'
        );
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ 'F26l'
        );

        var ordinaryOwnMetadataKeys = ReflectMetadataModule.keys;
        var toMetadataKey = ReflectMetadataModule.toKey;

        // `Reflect.getOwnMetadataKeys` method
        // https://github.com/rbuckton/reflect-metadata
        $(
          {target: 'Reflect', stat: true},
          {
            getOwnMetadataKeys: function getOwnMetadataKeys(
              target /* , targetKey */
            ) {
              var targetKey =
                arguments.length < 2 ? undefined : toMetadataKey(arguments[1]);
              return ordinaryOwnMetadataKeys(anObject(target), targetKey);
            },
          }
        );

        /***/
      },

    /***/ JHhb:
      /*!**************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/set-species.js ***!
  \**************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        var getBuiltIn = __webpack_require__(
          /*! ../internals/get-built-in */ 'Ew/G'
        );
        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */ '/Ybd'
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ 'm41k'
        );
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */ 'T69T'
        );

        var SPECIES = wellKnownSymbol('species');

        module.exports = function (CONSTRUCTOR_NAME) {
          var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
          var defineProperty = definePropertyModule.f;

          if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
            defineProperty(Constructor, SPECIES, {
              configurable: true,
              get: function () {
                return this;
              },
            });
          }
        };

        /***/
      },

    /***/ JI1L:
      /*!***********************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/a-possible-prototype.js ***!
  \***********************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ '6XUM'
        );

        module.exports = function (it) {
          if (!isObject(it) && it !== null) {
            throw TypeError("Can't set " + String(it) + ' as a prototype');
          }
          return it;
        };

        /***/
      },

    /***/ JafA:
      /*!***********************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/array-species-create.js ***!
  \***********************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ '6XUM'
        );
        var isArray = __webpack_require__(/*! ../internals/is-array */ 'erNl');
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ 'm41k'
        );

        var SPECIES = wellKnownSymbol('species');

        // `ArraySpeciesCreate` abstract operation
        // https://tc39.es/ecma262/#sec-arrayspeciescreate
        module.exports = function (originalArray, length) {
          var C;
          if (isArray(originalArray)) {
            C = originalArray.constructor;
            // cross-realm fallback
            if (typeof C == 'function' && (C === Array || isArray(C.prototype)))
              C = undefined;
            else if (isObject(C)) {
              C = C[SPECIES];
              if (C === null) C = undefined;
            }
          }
          return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
        };

        /***/
      },

    /***/ K6ZX:
      /*!**********************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/inherit-if-required.js ***!
  \**********************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ '6XUM'
        );
        var setPrototypeOf = __webpack_require__(
          /*! ../internals/object-set-prototype-of */ '7/lX'
        );

        // makes subclassing work correct for wrapped built-ins
        module.exports = function ($this, dummy, Wrapper) {
          var NewTarget, NewTargetPrototype;
          if (
            // it can work only with native `setPrototypeOf`
            setPrototypeOf &&
            // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
            typeof (NewTarget = dummy.constructor) == 'function' &&
            NewTarget !== Wrapper &&
            isObject((NewTargetPrototype = NewTarget.prototype)) &&
            NewTargetPrototype !== Wrapper.prototype
          )
            setPrototypeOf($this, NewTargetPrototype);
          return $this;
        };

        /***/
      },

    /***/ KBkW:
      /*!***************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/shared-store.js ***!
  \***************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(/*! ../internals/global */ 'ocAm');
        var setGlobal = __webpack_require__(
          /*! ../internals/set-global */ 'Fqhe'
        );

        var SHARED = '__core-js_shared__';
        var store = global[SHARED] || setGlobal(SHARED, {});

        module.exports = store;

        /***/
      },

    /***/ KEVk:
      /*!**************************************************!*\
  !*** ./node_modules/proxy-polyfill/src/index.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';
        /*
         * Copyright 2018 Google Inc. All rights reserved.
         *
         * Licensed under the Apache License, Version 2.0 (the "License"); you may not
         * use this file except in compliance with the License. You may obtain a copy of
         * the License at
         *
         *     http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
         * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
         * License for the specific language governing permissions and limitations under
         * the License.
         */

        (function (scope) {
          if (scope['Proxy']) {
            return;
          }
          scope.Proxy = __webpack_require__(/*! ./proxy.js */ 'eW7K')();
          scope.Proxy['revocable'] = scope.Proxy.revocable;
        })(
          ('undefined' !== typeof process &&
            '[object process]' === {}.toString.call(process)) ||
            ('undefined' !== typeof navigator &&
              navigator.product === 'ReactNative')
            ? global
            : self
        );

        /***/
      },

    /***/ KYLi:
      /*!*********************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/esnext.reflect.get-metadata-keys.js ***!
  \*********************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ 'wA6s');
        // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
        var Set = __webpack_require__(/*! ../modules/es.set */ 'ViWx');
        var ReflectMetadataModule = __webpack_require__(
          /*! ../internals/reflect-metadata */ 'yprU'
        );
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ 'F26l'
        );
        var getPrototypeOf = __webpack_require__(
          /*! ../internals/object-get-prototype-of */ 'wIVT'
        );
        var iterate = __webpack_require__(/*! ../internals/iterate */ 'Rn6E');

        var ordinaryOwnMetadataKeys = ReflectMetadataModule.keys;
        var toMetadataKey = ReflectMetadataModule.toKey;

        var from = function (iter) {
          var result = [];
          iterate(iter, result.push, {that: result});
          return result;
        };

        var ordinaryMetadataKeys = function (O, P) {
          var oKeys = ordinaryOwnMetadataKeys(O, P);
          var parent = getPrototypeOf(O);
          if (parent === null) return oKeys;
          var pKeys = ordinaryMetadataKeys(parent, P);
          return pKeys.length
            ? oKeys.length
              ? from(new Set(oKeys.concat(pKeys)))
              : pKeys
            : oKeys;
        };

        // `Reflect.getMetadataKeys` method
        // https://github.com/rbuckton/reflect-metadata
        $(
          {target: 'Reflect', stat: true},
          {
            getMetadataKeys: function getMetadataKeys(
              target /* , targetKey */
            ) {
              var targetKey =
                arguments.length < 2 ? undefined : toMetadataKey(arguments[1]);
              return ordinaryMetadataKeys(anObject(target), targetKey);
            },
          }
        );

        /***/
      },

    /***/ KkqW:
      /*!********************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-get-own-property-names.js ***!
  \********************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var internalObjectKeys = __webpack_require__(
          /*! ../internals/object-keys-internal */ 'vVmn'
        );
        var enumBugKeys = __webpack_require__(
          /*! ../internals/enum-bug-keys */ 'aAjO'
        );

        var hiddenKeys = enumBugKeys.concat('length', 'prototype');

        // `Object.getOwnPropertyNames` method
        // https://tc39.es/ecma262/#sec-object.getownpropertynames
        exports.f =
          Object.getOwnPropertyNames ||
          function getOwnPropertyNames(O) {
            return internalObjectKeys(O, hiddenKeys);
          };

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

    /***/ LdO1:
      /*!***************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/to-primitive.js ***!
  \***************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ '6XUM'
        );

        // `ToPrimitive` abstract operation
        // https://tc39.es/ecma262/#sec-toprimitive
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        module.exports = function (input, PREFERRED_STRING) {
          if (!isObject(input)) return input;
          var fn, val;
          if (
            PREFERRED_STRING &&
            typeof (fn = input.toString) == 'function' &&
            !isObject((val = fn.call(input)))
          )
            return val;
          if (
            typeof (fn = input.valueOf) == 'function' &&
            !isObject((val = fn.call(input)))
          )
            return val;
          if (
            !PREFERRED_STRING &&
            typeof (fn = input.toString) == 'function' &&
            !isObject((val = fn.call(input)))
          )
            return val;
          throw TypeError("Can't convert object to primitive value");
        };

        /***/
      },

    /***/ M7Xk:
      /*!********************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/internal-metadata.js ***!
  \********************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var hiddenKeys = __webpack_require__(
          /*! ../internals/hidden-keys */ 'yQMY'
        );
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ '6XUM'
        );
        var has = __webpack_require__(/*! ../internals/has */ 'OG5q');
        var defineProperty = __webpack_require__(
          /*! ../internals/object-define-property */ '/Ybd'
        ).f;
        var uid = __webpack_require__(/*! ../internals/uid */ 'SDMg');
        var FREEZING = __webpack_require__(/*! ../internals/freezing */ 'cZY6');

        var METADATA = uid('meta');
        var id = 0;

        var isExtensible =
          Object.isExtensible ||
          function () {
            return true;
          };

        var setMetadata = function (it) {
          defineProperty(it, METADATA, {
            value: {
              objectID: 'O' + ++id, // object ID
              weakData: {}, // weak collections IDs
            },
          });
        };

        var fastKey = function (it, create) {
          // return a primitive with prefix
          if (!isObject(it))
            return typeof it == 'symbol'
              ? it
              : (typeof it == 'string' ? 'S' : 'P') + it;
          if (!has(it, METADATA)) {
            // can't set metadata to uncaught frozen object
            if (!isExtensible(it)) return 'F';
            // not necessary to add metadata
            if (!create) return 'E';
            // add missing metadata
            setMetadata(it);
            // return object ID
          }
          return it[METADATA].objectID;
        };

        var getWeakData = function (it, create) {
          if (!has(it, METADATA)) {
            // can't set metadata to uncaught frozen object
            if (!isExtensible(it)) return true;
            // not necessary to add metadata
            if (!create) return false;
            // add missing metadata
            setMetadata(it);
            // return the store of weak collections IDs
          }
          return it[METADATA].weakData;
        };

        // add metadata on freeze-family methods calling
        var onFreeze = function (it) {
          if (
            FREEZING &&
            meta.REQUIRED &&
            isExtensible(it) &&
            !has(it, METADATA)
          )
            setMetadata(it);
          return it;
        };

        var meta = (module.exports = {
          REQUIRED: false,
          fastKey: fastKey,
          getWeakData: getWeakData,
          onFreeze: onFreeze,
        });

        hiddenKeys[METADATA] = true;

        /***/
      },

    /***/ MkZA:
      /*!************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/is-forced.js ***!
  \************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var fails = __webpack_require__(/*! ../internals/fails */ 'rG8t');

        var replacement = /#|\.prototype\./;

        var isForced = function (feature, detection) {
          var value = data[normalize(feature)];
          return value == POLYFILL
            ? true
            : value == NATIVE
              ? false
              : typeof detection == 'function'
                ? fails(detection)
                : !!detection;
        };

        var normalize = (isForced.normalize = function (string) {
          return String(string).replace(replacement, '.').toLowerCase();
        });

        var data = (isForced.data = {});
        var NATIVE = (isForced.NATIVE = 'N');
        var POLYFILL = (isForced.POLYFILL = 'P');

        module.exports = isForced;

        /***/
      },

    /***/ NIlc:
      /*!******************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/copy-constructor-properties.js ***!
  \******************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var has = __webpack_require__(/*! ../internals/has */ 'OG5q');
        var ownKeys = __webpack_require__(/*! ../internals/own-keys */ '76gj');
        var getOwnPropertyDescriptorModule = __webpack_require__(
          /*! ../internals/object-get-own-property-descriptor */ '7gGY'
        );
        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */ '/Ybd'
        );

        module.exports = function (target, source) {
          var keys = ownKeys(source);
          var defineProperty = definePropertyModule.f;
          var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
          for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            if (!has(target, key))
              defineProperty(
                target,
                key,
                getOwnPropertyDescriptor(source, key)
              );
          }
        };

        /***/
      },

    /***/ NR1a:
      /*!*******************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/esnext.reflect.delete-metadata.js ***!
  \*******************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ 'wA6s');
        var ReflectMetadataModule = __webpack_require__(
          /*! ../internals/reflect-metadata */ 'yprU'
        );
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ 'F26l'
        );

        var toMetadataKey = ReflectMetadataModule.toKey;
        var getOrCreateMetadataMap = ReflectMetadataModule.getMap;
        var store = ReflectMetadataModule.store;

        // `Reflect.deleteMetadata` method
        // https://github.com/rbuckton/reflect-metadata
        $(
          {target: 'Reflect', stat: true},
          {
            deleteMetadata: function deleteMetadata(
              metadataKey,
              target /* , targetKey */
            ) {
              var targetKey =
                arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
              var metadataMap = getOrCreateMetadataMap(
                anObject(target),
                targetKey,
                false
              );
              if (
                metadataMap === undefined ||
                !metadataMap['delete'](metadataKey)
              )
                return false;
              if (metadataMap.size) return true;
              var targetMetadata = store.get(target);
              targetMetadata['delete'](targetKey);
              return !!targetMetadata.size || store['delete'](target);
            },
          }
        );

        /***/
      },

    /***/ Neub:
      /*!*************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/a-function.js ***!
  \*************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = function (it) {
          if (typeof it != 'function') {
            throw TypeError(String(it) + ' is not a function');
          }
          return it;
        };

        /***/
      },

    /***/ OG5q:
      /*!******************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/has.js ***!
  \******************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        var hasOwnProperty = {}.hasOwnProperty;

        module.exports = function (it, key) {
          return hasOwnProperty.call(it, key);
        };

        /***/
      },

    /***/ OXtp:
      /*!*****************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/array-includes.js ***!
  \*****************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */ 'EMtK'
        );
        var toLength = __webpack_require__(
          /*! ../internals/to-length */ 'xpLY'
        );
        var toAbsoluteIndex = __webpack_require__(
          /*! ../internals/to-absolute-index */ '7Oj1'
        );

        // `Array.prototype.{ indexOf, includes }` methods implementation
        var createMethod = function (IS_INCLUDES) {
          return function ($this, el, fromIndex) {
            var O = toIndexedObject($this);
            var length = toLength(O.length);
            var index = toAbsoluteIndex(fromIndex, length);
            var value;
            // Array#includes uses SameValueZero equality algorithm
            // eslint-disable-next-line no-self-compare
            if (IS_INCLUDES && el != el)
              while (length > index) {
                value = O[index++];
                // eslint-disable-next-line no-self-compare
                if (value != value) return true;
                // Array#indexOf ignores holes, Array#includes - not
              }
            else
              for (; length > index; index++) {
                if ((IS_INCLUDES || index in O) && O[index] === el)
                  return IS_INCLUDES || index || 0;
              }
            return !IS_INCLUDES && -1;
          };
        };

        module.exports = {
          // `Array.prototype.includes` method
          // https://tc39.es/ecma262/#sec-array.prototype.includes
          includes: createMethod(true),
          // `Array.prototype.indexOf` method
          // https://tc39.es/ecma262/#sec-array.prototype.indexof
          indexOf: createMethod(false),
        };

        /***/
      },

    /***/ Rn6E:
      /*!**********************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/iterate.js ***!
  \**********************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ 'F26l'
        );
        var isArrayIteratorMethod = __webpack_require__(
          /*! ../internals/is-array-iterator-method */ '5MmU'
        );
        var toLength = __webpack_require__(
          /*! ../internals/to-length */ 'xpLY'
        );
        var bind = __webpack_require__(
          /*! ../internals/function-bind-context */ 'tcQx'
        );
        var getIteratorMethod = __webpack_require__(
          /*! ../internals/get-iterator-method */ 'F/TS'
        );
        var iteratorClose = __webpack_require__(
          /*! ../internals/iterator-close */ '5zQ0'
        );

        var Result = function (stopped, result) {
          this.stopped = stopped;
          this.result = result;
        };

        module.exports = function (iterable, unboundFunction, options) {
          var that = options && options.that;
          var AS_ENTRIES = !!(options && options.AS_ENTRIES);
          var IS_ITERATOR = !!(options && options.IS_ITERATOR);
          var INTERRUPTED = !!(options && options.INTERRUPTED);
          var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
          var iterator, iterFn, index, length, result, next, step;

          var stop = function (condition) {
            if (iterator) iteratorClose(iterator);
            return new Result(true, condition);
          };

          var callFn = function (value) {
            if (AS_ENTRIES) {
              anObject(value);
              return INTERRUPTED
                ? fn(value[0], value[1], stop)
                : fn(value[0], value[1]);
            }
            return INTERRUPTED ? fn(value, stop) : fn(value);
          };

          if (IS_ITERATOR) {
            iterator = iterable;
          } else {
            iterFn = getIteratorMethod(iterable);
            if (typeof iterFn != 'function')
              throw TypeError('Target is not iterable');
            // optimisation for array iterators
            if (isArrayIteratorMethod(iterFn)) {
              for (
                index = 0, length = toLength(iterable.length);
                length > index;
                index++
              ) {
                result = callFn(iterable[index]);
                if (result && result instanceof Result) return result;
              }
              return new Result(false);
            }
            iterator = iterFn.call(iterable);
          }

          next = iterator.next;
          while (!(step = next.call(iterator)).done) {
            try {
              result = callFn(step.value);
            } catch (error) {
              iteratorClose(iterator);
              throw error;
            }
            if (typeof result == 'object' && result && result instanceof Result)
              return result;
          }
          return new Result(false);
        };

        /***/
      },

    /***/ SDMg:
      /*!******************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/uid.js ***!
  \******************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        var id = 0;
        var postfix = Math.random();

        module.exports = function (key) {
          return (
            'Symbol(' +
            String(key === undefined ? '' : key) +
            ')_' +
            (++id + postfix).toString(36)
          );
        };

        /***/
      },

    /***/ 'SM6+':
      /*!**************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/an-instance.js ***!
  \**************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = function (it, Constructor, name) {
          if (!(it instanceof Constructor)) {
            throw TypeError(
              'Incorrect ' + (name ? name + ' ' : '') + 'invocation'
            );
          }
          return it;
        };

        /***/
      },

    /***/ 'T+gH':
      /*!********************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/esnext.reflect.has-own-metadata.js ***!
  \********************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ 'wA6s');
        var ReflectMetadataModule = __webpack_require__(
          /*! ../internals/reflect-metadata */ 'yprU'
        );
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ 'F26l'
        );

        var ordinaryHasOwnMetadata = ReflectMetadataModule.has;
        var toMetadataKey = ReflectMetadataModule.toKey;

        // `Reflect.hasOwnMetadata` method
        // https://github.com/rbuckton/reflect-metadata
        $(
          {target: 'Reflect', stat: true},
          {
            hasOwnMetadata: function hasOwnMetadata(
              metadataKey,
              target /* , targetKey */
            ) {
              var targetKey =
                arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
              return ordinaryHasOwnMetadata(
                metadataKey,
                anObject(target),
                targetKey
              );
            },
          }
        );

        /***/
      },

    /***/ T69T:
      /*!**************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/descriptors.js ***!
  \**************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var fails = __webpack_require__(/*! ../internals/fails */ 'rG8t');

        // Detect IE8's incomplete defineProperty implementation
        module.exports = !fails(function () {
          return (
            Object.defineProperty({}, 1, {
              get: function () {
                return 7;
              },
            })[1] != 7
          );
        });

        /***/
      },

    /***/ 'U+kB':
      /*!****************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/native-symbol.js ***!
  \****************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var fails = __webpack_require__(/*! ../internals/fails */ 'rG8t');

        module.exports =
          !!Object.getOwnPropertySymbols &&
          !fails(function () {
            // Chrome 38 Symbol has incorrect toString conversion
            // eslint-disable-next-line no-undef
            return !String(Symbol());
          });

        /***/
      },

    /***/ UVaH:
      /*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        var origSymbol = typeof Symbol !== 'undefined' && Symbol;
        var hasSymbolSham = __webpack_require__(/*! ./shams */ 'FpZJ');

        module.exports = function hasNativeSymbols() {
          if (typeof origSymbol !== 'function') {
            return false;
          }
          if (typeof Symbol !== 'function') {
            return false;
          }
          if (typeof origSymbol('foo') !== 'symbol') {
            return false;
          }
          if (typeof Symbol('bar') !== 'symbol') {
            return false;
          }

          return hasSymbolSham();
        };

        /***/
      },

    /***/ UbkO:
      /*!********************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/esnext.reflect.get-own-metadata.js ***!
  \********************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ 'wA6s');
        var ReflectMetadataModule = __webpack_require__(
          /*! ../internals/reflect-metadata */ 'yprU'
        );
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ 'F26l'
        );

        var ordinaryGetOwnMetadata = ReflectMetadataModule.get;
        var toMetadataKey = ReflectMetadataModule.toKey;

        // `Reflect.getOwnMetadata` method
        // https://github.com/rbuckton/reflect-metadata
        $(
          {target: 'Reflect', stat: true},
          {
            getOwnMetadata: function getOwnMetadata(
              metadataKey,
              target /* , targetKey */
            ) {
              var targetKey =
                arguments.length < 3 ? undefined : toMetadataKey(arguments[2]);
              return ordinaryGetOwnMetadata(
                metadataKey,
                anObject(target),
                targetKey
              );
            },
          }
        );

        /***/
      },

    /***/ VCQ8:
      /*!************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/to-object.js ***!
  \************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var requireObjectCoercible = __webpack_require__(
          /*! ../internals/require-object-coercible */ 'hmpk'
        );

        // `ToObject` abstract operation
        // https://tc39.es/ecma262/#sec-toobject
        module.exports = function (argument) {
          return Object(requireObjectCoercible(argument));
        };

        /***/
      },

    /***/ ViWx:
      /*!*******************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.set.js ***!
  \*******************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        var collection = __webpack_require__(
          /*! ../internals/collection */ 'wdMf'
        );
        var collectionStrong = __webpack_require__(
          /*! ../internals/collection-strong */ 'nIH4'
        );

        // `Set` constructor
        // https://tc39.es/ecma262/#sec-set-objects
        module.exports = collection(
          'Set',
          function (init) {
            return function Set() {
              return init(this, arguments.length ? arguments[0] : undefined);
            };
          },
          collectionStrong
        );

        /***/
      },

    /***/ WijE:
      /*!******************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/define-iterator.js ***!
  \******************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(/*! ../internals/export */ 'wA6s');
        var createIteratorConstructor = __webpack_require__(
          /*! ../internals/create-iterator-constructor */ 'ZJLg'
        );
        var getPrototypeOf = __webpack_require__(
          /*! ../internals/object-get-prototype-of */ 'wIVT'
        );
        var setPrototypeOf = __webpack_require__(
          /*! ../internals/object-set-prototype-of */ '7/lX'
        );
        var setToStringTag = __webpack_require__(
          /*! ../internals/set-to-string-tag */ 'shqn'
        );
        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */ 'aJMj'
        );
        var redefine = __webpack_require__(/*! ../internals/redefine */ '2MGJ');
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ 'm41k'
        );
        var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 'g9hI');
        var Iterators = __webpack_require__(
          /*! ../internals/iterators */ 'pz+c'
        );
        var IteratorsCore = __webpack_require__(
          /*! ../internals/iterators-core */ 'G1Vw'
        );

        var IteratorPrototype = IteratorsCore.IteratorPrototype;
        var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
        var ITERATOR = wellKnownSymbol('iterator');
        var KEYS = 'keys';
        var VALUES = 'values';
        var ENTRIES = 'entries';

        var returnThis = function () {
          return this;
        };

        module.exports = function (
          Iterable,
          NAME,
          IteratorConstructor,
          next,
          DEFAULT,
          IS_SET,
          FORCED
        ) {
          createIteratorConstructor(IteratorConstructor, NAME, next);

          var getIterationMethod = function (KIND) {
            if (KIND === DEFAULT && defaultIterator) return defaultIterator;
            if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
              return IterablePrototype[KIND];
            switch (KIND) {
              case KEYS:
                return function keys() {
                  return new IteratorConstructor(this, KIND);
                };
              case VALUES:
                return function values() {
                  return new IteratorConstructor(this, KIND);
                };
              case ENTRIES:
                return function entries() {
                  return new IteratorConstructor(this, KIND);
                };
            }
            return function () {
              return new IteratorConstructor(this);
            };
          };

          var TO_STRING_TAG = NAME + ' Iterator';
          var INCORRECT_VALUES_NAME = false;
          var IterablePrototype = Iterable.prototype;
          var nativeIterator =
            IterablePrototype[ITERATOR] ||
            IterablePrototype['@@iterator'] ||
            (DEFAULT && IterablePrototype[DEFAULT]);
          var defaultIterator =
            (!BUGGY_SAFARI_ITERATORS && nativeIterator) ||
            getIterationMethod(DEFAULT);
          var anyNativeIterator =
            NAME == 'Array'
              ? IterablePrototype.entries || nativeIterator
              : nativeIterator;
          var CurrentIteratorPrototype, methods, KEY;

          // fix native
          if (anyNativeIterator) {
            CurrentIteratorPrototype = getPrototypeOf(
              anyNativeIterator.call(new Iterable())
            );
            if (
              IteratorPrototype !== Object.prototype &&
              CurrentIteratorPrototype.next
            ) {
              if (
                !IS_PURE &&
                getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype
              ) {
                if (setPrototypeOf) {
                  setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
                } else if (
                  typeof CurrentIteratorPrototype[ITERATOR] != 'function'
                ) {
                  createNonEnumerableProperty(
                    CurrentIteratorPrototype,
                    ITERATOR,
                    returnThis
                  );
                }
              }
              // Set @@toStringTag to native iterators
              setToStringTag(
                CurrentIteratorPrototype,
                TO_STRING_TAG,
                true,
                true
              );
              if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
            }
          }

          // fix Array#{values, @@iterator}.name in V8 / FF
          if (
            DEFAULT == VALUES &&
            nativeIterator &&
            nativeIterator.name !== VALUES
          ) {
            INCORRECT_VALUES_NAME = true;
            defaultIterator = function values() {
              return nativeIterator.call(this);
            };
          }

          // define iterator
          if (
            (!IS_PURE || FORCED) &&
            IterablePrototype[ITERATOR] !== defaultIterator
          ) {
            createNonEnumerableProperty(
              IterablePrototype,
              ITERATOR,
              defaultIterator
            );
          }
          Iterators[NAME] = defaultIterator;

          // export additional methods
          if (DEFAULT) {
            methods = {
              values: getIterationMethod(VALUES),
              keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
              entries: getIterationMethod(ENTRIES),
            };
            if (FORCED)
              for (KEY in methods) {
                if (
                  BUGGY_SAFARI_ITERATORS ||
                  INCORRECT_VALUES_NAME ||
                  !(KEY in IterablePrototype)
                ) {
                  redefine(IterablePrototype, KEY, methods[KEY]);
                }
              }
            else
              $(
                {
                  target: NAME,
                  proto: true,
                  forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME,
                },
                methods
              );
          }

          return methods;
        };

        /***/
      },

    /***/ 'XH/I':
      /*!*****************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/internal-state.js ***!
  \*****************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var NATIVE_WEAK_MAP = __webpack_require__(
          /*! ../internals/native-weak-map */ 'yaK9'
        );
        var global = __webpack_require__(/*! ../internals/global */ 'ocAm');
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ '6XUM'
        );
        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */ 'aJMj'
        );
        var objectHas = __webpack_require__(/*! ../internals/has */ 'OG5q');
        var shared = __webpack_require__(
          /*! ../internals/shared-store */ 'KBkW'
        );
        var sharedKey = __webpack_require__(
          /*! ../internals/shared-key */ '/AsP'
        );
        var hiddenKeys = __webpack_require__(
          /*! ../internals/hidden-keys */ 'yQMY'
        );

        var WeakMap = global.WeakMap;
        var set, get, has;

        var enforce = function (it) {
          return has(it) ? get(it) : set(it, {});
        };

        var getterFor = function (TYPE) {
          return function (it) {
            var state;
            if (!isObject(it) || (state = get(it)).type !== TYPE) {
              throw TypeError('Incompatible receiver, ' + TYPE + ' required');
            }
            return state;
          };
        };

        if (NATIVE_WEAK_MAP) {
          var store = shared.state || (shared.state = new WeakMap());
          var wmget = store.get;
          var wmhas = store.has;
          var wmset = store.set;
          set = function (it, metadata) {
            metadata.facade = it;
            wmset.call(store, it, metadata);
            return metadata;
          };
          get = function (it) {
            return wmget.call(store, it) || {};
          };
          has = function (it) {
            return wmhas.call(store, it);
          };
        } else {
          var STATE = sharedKey('state');
          hiddenKeys[STATE] = true;
          set = function (it, metadata) {
            metadata.facade = it;
            createNonEnumerableProperty(it, STATE, metadata);
            return metadata;
          };
          get = function (it) {
            return objectHas(it, STATE) ? it[STATE] : {};
          };
          has = function (it) {
            return objectHas(it, STATE);
          };
        }

        module.exports = {
          set: set,
          get: get,
          has: has,
          enforce: enforce,
          getterFor: getterFor,
        };

        /***/
      },

    /***/ XdSI:
      /*!*****************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/ie8-dom-define.js ***!
  \*****************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */ 'T69T'
        );
        var fails = __webpack_require__(/*! ../internals/fails */ 'rG8t');
        var createElement = __webpack_require__(
          /*! ../internals/document-create-element */ 'qx7X'
        );

        // Thank's IE8 for his funny defineProperty
        module.exports =
          !DESCRIPTORS &&
          !fails(function () {
            return (
              Object.defineProperty(createElement('div'), 'a', {
                get: function () {
                  return 7;
                },
              }).a != 7
            );
          });

        /***/
      },

    /***/ ZJLg:
      /*!******************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/create-iterator-constructor.js ***!
  \******************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        var IteratorPrototype = __webpack_require__(
          /*! ../internals/iterators-core */ 'G1Vw'
        ).IteratorPrototype;
        var create = __webpack_require__(
          /*! ../internals/object-create */ '2RDa'
        );
        var createPropertyDescriptor = __webpack_require__(
          /*! ../internals/create-property-descriptor */ 'uSMZ'
        );
        var setToStringTag = __webpack_require__(
          /*! ../internals/set-to-string-tag */ 'shqn'
        );
        var Iterators = __webpack_require__(
          /*! ../internals/iterators */ 'pz+c'
        );

        var returnThis = function () {
          return this;
        };

        module.exports = function (IteratorConstructor, NAME, next) {
          var TO_STRING_TAG = NAME + ' Iterator';
          IteratorConstructor.prototype = create(IteratorPrototype, {
            next: createPropertyDescriptor(1, next),
          });
          setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
          Iterators[TO_STRING_TAG] = returnThis;
          return IteratorConstructor;
        };

        /***/
      },

    /***/ ZLCw:
      /*!********************************************************!*\
  !*** ./node_modules/has-property-descriptors/index.js ***!
  \********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ 'AM7I');

        var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);

        var hasPropertyDescriptors = function hasPropertyDescriptors() {
          if ($defineProperty) {
            try {
              $defineProperty({}, 'a', {value: 1});
              return true;
            } catch (e) {
              // IE 8 has a broken defineProperty
              return false;
            }
          }
          return false;
        };

        hasPropertyDescriptors.hasArrayLengthDefineBug =
          function hasArrayLengthDefineBug() {
            // node v0.6 has a bug where array lengths can be Set but not Defined
            if (!hasPropertyDescriptors()) {
              return null;
            }
            try {
              return $defineProperty([], 'length', {value: 1}).length !== 1;
            } catch (e) {
              // In Firefox 4-22, defining length on an array throws an exception.
              return true;
            }
          };

        module.exports = hasPropertyDescriptors;

        /***/
      },

    /***/ ZRqE:
      /*!**************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-keys.js ***!
  \**************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var internalObjectKeys = __webpack_require__(
          /*! ../internals/object-keys-internal */ 'vVmn'
        );
        var enumBugKeys = __webpack_require__(
          /*! ../internals/enum-bug-keys */ 'aAjO'
        );

        // `Object.keys` method
        // https://tc39.es/ecma262/#sec-object.keys
        module.exports =
          Object.keys ||
          function keys(O) {
            return internalObjectKeys(O, enumBugKeys);
          };

        /***/
      },

    /***/ aAjO:
      /*!****************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/enum-bug-keys.js ***!
  \****************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        // IE8- don't enum bug keys
        module.exports = [
          'constructor',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'toLocaleString',
          'toString',
          'valueOf',
        ];

        /***/
      },

    /***/ aI7X:
      /*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        /* eslint no-invalid-this: 1 */

        var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
        var slice = Array.prototype.slice;
        var toStr = Object.prototype.toString;
        var funcType = '[object Function]';

        module.exports = function bind(that) {
          var target = this;
          if (typeof target !== 'function' || toStr.call(target) !== funcType) {
            throw new TypeError(ERROR_MESSAGE + target);
          }
          var args = slice.call(arguments, 1);

          var bound;
          var binder = function () {
            if (this instanceof bound) {
              var result = target.apply(
                this,
                args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                return result;
              }
              return this;
            } else {
              return target.apply(that, args.concat(slice.call(arguments)));
            }
          };

          var boundLength = Math.max(0, target.length - args.length);
          var boundArgs = [];
          for (var i = 0; i < boundLength; i++) {
            boundArgs.push('$' + i);
          }

          bound = Function(
            'binder',
            'return function (' +
              boundArgs.join(',') +
              '){ return binder.apply(this,arguments); }'
          )(binder);

          if (target.prototype) {
            var Empty = function Empty() {};
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            Empty.prototype = null;
          }

          return bound;
        };

        /***/
      },

    /***/ aJMj:
      /*!*********************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \*********************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */ 'T69T'
        );
        var definePropertyModule = __webpack_require__(
          /*! ../internals/object-define-property */ '/Ybd'
        );
        var createPropertyDescriptor = __webpack_require__(
          /*! ../internals/create-property-descriptor */ 'uSMZ'
        );

        module.exports = DESCRIPTORS
          ? function (object, key, value) {
              return definePropertyModule.f(
                object,
                key,
                createPropertyDescriptor(1, value)
              );
            }
          : function (object, key, value) {
              object[key] = value;
              return object;
            };

        /***/
      },

    /***/ aVe3:
      /*!****************************************************************************!*\
  !*** ./node_modules/@webcomponents/custom-elements/custom-elements.min.js ***!
  \****************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        (function () {
          /*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 Google as part of the polymer project is also subject to an additional IP
 rights grant found at http://polymer.github.io/PATENTS.txt
*/
          'use strict';
          var n = window.Document.prototype.createElement,
            p = window.Document.prototype.createElementNS,
            aa = window.Document.prototype.importNode,
            ba = window.Document.prototype.prepend,
            ca = window.Document.prototype.append,
            da = window.DocumentFragment.prototype.prepend,
            ea = window.DocumentFragment.prototype.append,
            q = window.Node.prototype.cloneNode,
            r = window.Node.prototype.appendChild,
            t = window.Node.prototype.insertBefore,
            u = window.Node.prototype.removeChild,
            v = window.Node.prototype.replaceChild,
            w = Object.getOwnPropertyDescriptor(
              window.Node.prototype,
              'textContent'
            ),
            y = window.Element.prototype.attachShadow,
            z = Object.getOwnPropertyDescriptor(
              window.Element.prototype,
              'innerHTML'
            ),
            A = window.Element.prototype.getAttribute,
            B = window.Element.prototype.setAttribute,
            C = window.Element.prototype.removeAttribute,
            D = window.Element.prototype.getAttributeNS,
            E = window.Element.prototype.setAttributeNS,
            F = window.Element.prototype.removeAttributeNS,
            G = window.Element.prototype.insertAdjacentElement,
            H = window.Element.prototype.insertAdjacentHTML,
            fa = window.Element.prototype.prepend,
            ha = window.Element.prototype.append,
            ia = window.Element.prototype.before,
            ja = window.Element.prototype.after,
            ka = window.Element.prototype.replaceWith,
            la = window.Element.prototype.remove,
            ma = window.HTMLElement,
            I = Object.getOwnPropertyDescriptor(
              window.HTMLElement.prototype,
              'innerHTML'
            ),
            na = window.HTMLElement.prototype.insertAdjacentElement,
            oa = window.HTMLElement.prototype.insertAdjacentHTML;
          var pa = new Set();
          'annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph'
            .split(' ')
            .forEach(function (a) {
              return pa.add(a);
            });
          function qa(a) {
            var b = pa.has(a);
            a = /^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(a);
            return !b && a;
          }
          var ra = document.contains
            ? document.contains.bind(document)
            : document.documentElement.contains.bind(document.documentElement);
          function J(a) {
            var b = a.isConnected;
            if (void 0 !== b) return b;
            if (ra(a)) return !0;
            for (; a && !(a.__CE_isImportDocument || a instanceof Document); )
              a =
                a.parentNode ||
                (window.ShadowRoot && a instanceof ShadowRoot
                  ? a.host
                  : void 0);
            return !(!a || !(a.__CE_isImportDocument || a instanceof Document));
          }
          function K(a) {
            var b = a.children;
            if (b) return Array.prototype.slice.call(b);
            b = [];
            for (a = a.firstChild; a; a = a.nextSibling)
              a.nodeType === Node.ELEMENT_NODE && b.push(a);
            return b;
          }
          function L(a, b) {
            for (; b && b !== a && !b.nextSibling; ) b = b.parentNode;
            return b && b !== a ? b.nextSibling : null;
          }
          function M(a, b, c) {
            for (var f = a; f; ) {
              if (f.nodeType === Node.ELEMENT_NODE) {
                var d = f;
                b(d);
                var e = d.localName;
                if ('link' === e && 'import' === d.getAttribute('rel')) {
                  f = d.import;
                  void 0 === c && (c = new Set());
                  if (f instanceof Node && !c.has(f))
                    for (c.add(f), f = f.firstChild; f; f = f.nextSibling)
                      M(f, b, c);
                  f = L(a, d);
                  continue;
                } else if ('template' === e) {
                  f = L(a, d);
                  continue;
                }
                if ((d = d.__CE_shadowRoot))
                  for (d = d.firstChild; d; d = d.nextSibling) M(d, b, c);
              }
              f = f.firstChild ? f.firstChild : L(a, f);
            }
          }
          function N() {
            var a = !(
                null === O ||
                void 0 === O ||
                !O.noDocumentConstructionObserver
              ),
              b = !(null === O || void 0 === O || !O.shadyDomFastWalk);
            this.m = [];
            this.g = [];
            this.j = !1;
            this.shadyDomFastWalk = b;
            this.I = !a;
          }
          function P(a, b, c, f) {
            var d = window.ShadyDOM;
            if (a.shadyDomFastWalk && d && d.inUse) {
              if (
                (b.nodeType === Node.ELEMENT_NODE && c(b), b.querySelectorAll)
              )
                for (
                  a = d.nativeMethods.querySelectorAll.call(b, '*'), b = 0;
                  b < a.length;
                  b++
                )
                  c(a[b]);
            } else M(b, c, f);
          }
          function sa(a, b) {
            a.j = !0;
            a.m.push(b);
          }
          function ta(a, b) {
            a.j = !0;
            a.g.push(b);
          }
          function Q(a, b) {
            a.j &&
              P(a, b, function (c) {
                return R(a, c);
              });
          }
          function R(a, b) {
            if (a.j && !b.__CE_patched) {
              b.__CE_patched = !0;
              for (var c = 0; c < a.m.length; c++) a.m[c](b);
              for (c = 0; c < a.g.length; c++) a.g[c](b);
            }
          }
          function S(a, b) {
            var c = [];
            P(a, b, function (d) {
              return c.push(d);
            });
            for (b = 0; b < c.length; b++) {
              var f = c[b];
              1 === f.__CE_state ? a.connectedCallback(f) : T(a, f);
            }
          }
          function U(a, b) {
            var c = [];
            P(a, b, function (d) {
              return c.push(d);
            });
            for (b = 0; b < c.length; b++) {
              var f = c[b];
              1 === f.__CE_state && a.disconnectedCallback(f);
            }
          }
          function V(a, b, c) {
            c = void 0 === c ? {} : c;
            var f = c.J,
              d =
                c.upgrade ||
                function (g) {
                  return T(a, g);
                },
              e = [];
            P(
              a,
              b,
              function (g) {
                a.j && R(a, g);
                if (
                  'link' === g.localName &&
                  'import' === g.getAttribute('rel')
                ) {
                  var h = g.import;
                  h instanceof Node &&
                    ((h.__CE_isImportDocument = !0),
                    (h.__CE_registry = document.__CE_registry));
                  h && 'complete' === h.readyState
                    ? (h.__CE_documentLoadHandled = !0)
                    : g.addEventListener('load', function () {
                        var k = g.import;
                        if (!k.__CE_documentLoadHandled) {
                          k.__CE_documentLoadHandled = !0;
                          var l = new Set();
                          f &&
                            (f.forEach(function (m) {
                              return l.add(m);
                            }),
                            l.delete(k));
                          V(a, k, {J: l, upgrade: d});
                        }
                      });
                } else e.push(g);
              },
              f
            );
            for (b = 0; b < e.length; b++) d(e[b]);
          }
          function T(a, b) {
            try {
              var c = b.ownerDocument,
                f = c.__CE_registry;
              var d =
                f && (c.defaultView || c.__CE_isImportDocument)
                  ? W(f, b.localName)
                  : void 0;
              if (d && void 0 === b.__CE_state) {
                d.constructionStack.push(b);
                try {
                  try {
                    if (new d.constructorFunction() !== b)
                      throw Error(
                        'The custom element constructor did not produce the element being upgraded.'
                      );
                  } finally {
                    d.constructionStack.pop();
                  }
                } catch (k) {
                  throw ((b.__CE_state = 2), k);
                }
                b.__CE_state = 1;
                b.__CE_definition = d;
                if (d.attributeChangedCallback && b.hasAttributes()) {
                  var e = d.observedAttributes;
                  for (d = 0; d < e.length; d++) {
                    var g = e[d],
                      h = b.getAttribute(g);
                    null !== h &&
                      a.attributeChangedCallback(b, g, null, h, null);
                  }
                }
                J(b) && a.connectedCallback(b);
              }
            } catch (k) {
              X(k);
            }
          }
          N.prototype.connectedCallback = function (a) {
            var b = a.__CE_definition;
            if (b.connectedCallback)
              try {
                b.connectedCallback.call(a);
              } catch (c) {
                X(c);
              }
          };
          N.prototype.disconnectedCallback = function (a) {
            var b = a.__CE_definition;
            if (b.disconnectedCallback)
              try {
                b.disconnectedCallback.call(a);
              } catch (c) {
                X(c);
              }
          };
          N.prototype.attributeChangedCallback = function (a, b, c, f, d) {
            var e = a.__CE_definition;
            if (
              e.attributeChangedCallback &&
              -1 < e.observedAttributes.indexOf(b)
            )
              try {
                e.attributeChangedCallback.call(a, b, c, f, d);
              } catch (g) {
                X(g);
              }
          };
          function ua(a, b, c, f) {
            var d = b.__CE_registry;
            if (
              d &&
              (null === f || 'http://www.w3.org/1999/xhtml' === f) &&
              (d = W(d, c))
            )
              try {
                var e = new d.constructorFunction();
                if (void 0 === e.__CE_state || void 0 === e.__CE_definition)
                  throw Error(
                    "Failed to construct '" +
                      c +
                      "': The returned value was not constructed with the HTMLElement constructor."
                  );
                if ('http://www.w3.org/1999/xhtml' !== e.namespaceURI)
                  throw Error(
                    "Failed to construct '" +
                      c +
                      "': The constructed element's namespace must be the HTML namespace."
                  );
                if (e.hasAttributes())
                  throw Error(
                    "Failed to construct '" +
                      c +
                      "': The constructed element must not have any attributes."
                  );
                if (null !== e.firstChild)
                  throw Error(
                    "Failed to construct '" +
                      c +
                      "': The constructed element must not have any children."
                  );
                if (null !== e.parentNode)
                  throw Error(
                    "Failed to construct '" +
                      c +
                      "': The constructed element must not have a parent node."
                  );
                if (e.ownerDocument !== b)
                  throw Error(
                    "Failed to construct '" +
                      c +
                      "': The constructed element's owner document is incorrect."
                  );
                if (e.localName !== c)
                  throw Error(
                    "Failed to construct '" +
                      c +
                      "': The constructed element's local name is incorrect."
                  );
                return e;
              } catch (g) {
                return (
                  X(g),
                  (b = null === f ? n.call(b, c) : p.call(b, f, c)),
                  Object.setPrototypeOf(b, HTMLUnknownElement.prototype),
                  (b.__CE_state = 2),
                  (b.__CE_definition = void 0),
                  R(a, b),
                  b
                );
              }
            b = null === f ? n.call(b, c) : p.call(b, f, c);
            R(a, b);
            return b;
          }
          function X(a) {
            var b = '',
              c = '',
              f = 0,
              d = 0;
            a instanceof Error
              ? ((b = a.message),
                (c = a.sourceURL || a.fileName || ''),
                (f = a.line || a.lineNumber || 0),
                (d = a.column || a.columnNumber || 0))
              : (b = 'Uncaught ' + String(a));
            var e = void 0;
            void 0 === ErrorEvent.prototype.initErrorEvent
              ? (e = new ErrorEvent('error', {
                  cancelable: !0,
                  message: b,
                  filename: c,
                  lineno: f,
                  colno: d,
                  error: a,
                }))
              : ((e = document.createEvent('ErrorEvent')),
                e.initErrorEvent('error', !1, !0, b, c, f),
                (e.preventDefault = function () {
                  Object.defineProperty(this, 'defaultPrevented', {
                    configurable: !0,
                    get: function () {
                      return !0;
                    },
                  });
                }));
            void 0 === e.error &&
              Object.defineProperty(e, 'error', {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return a;
                },
              });
            window.dispatchEvent(e);
            e.defaultPrevented || console.error(a);
          }
          function va() {
            var a = this;
            this.g = void 0;
            this.F = new Promise(function (b) {
              a.l = b;
            });
          }
          va.prototype.resolve = function (a) {
            if (this.g) throw Error('Already resolved.');
            this.g = a;
            this.l(a);
          };
          function wa(a) {
            var b = document;
            this.l = void 0;
            this.h = a;
            this.g = b;
            V(this.h, this.g);
            'loading' === this.g.readyState &&
              ((this.l = new MutationObserver(this.G.bind(this))),
              this.l.observe(this.g, {childList: !0, subtree: !0}));
          }
          function xa(a) {
            a.l && a.l.disconnect();
          }
          wa.prototype.G = function (a) {
            var b = this.g.readyState;
            ('interactive' !== b && 'complete' !== b) || xa(this);
            for (b = 0; b < a.length; b++)
              for (var c = a[b].addedNodes, f = 0; f < c.length; f++)
                V(this.h, c[f]);
          };
          function Y(a) {
            this.s = new Map();
            this.u = new Map();
            this.C = new Map();
            this.A = !1;
            this.B = new Map();
            this.o = function (b) {
              return b();
            };
            this.i = !1;
            this.v = [];
            this.h = a;
            this.D = a.I ? new wa(a) : void 0;
          }
          Y.prototype.H = function (a, b) {
            var c = this;
            if (!(b instanceof Function))
              throw new TypeError(
                'Custom element constructor getters must be functions.'
              );
            ya(this, a);
            this.s.set(a, b);
            this.v.push(a);
            this.i ||
              ((this.i = !0),
              this.o(function () {
                return za(c);
              }));
          };
          Y.prototype.define = function (a, b) {
            var c = this;
            if (!(b instanceof Function))
              throw new TypeError(
                'Custom element constructors must be functions.'
              );
            ya(this, a);
            Aa(this, a, b);
            this.v.push(a);
            this.i ||
              ((this.i = !0),
              this.o(function () {
                return za(c);
              }));
          };
          function ya(a, b) {
            if (!qa(b))
              throw new SyntaxError(
                "The element name '" + b + "' is not valid."
              );
            if (W(a, b))
              throw Error(
                "A custom element with name '" +
                  (b + "' has already been defined.")
              );
            if (a.A) throw Error('A custom element is already being defined.');
          }
          function Aa(a, b, c) {
            a.A = !0;
            var f;
            try {
              var d = c.prototype;
              if (!(d instanceof Object))
                throw new TypeError(
                  "The custom element constructor's prototype is not an object."
                );
              var e = function (m) {
                var x = d[m];
                if (void 0 !== x && !(x instanceof Function))
                  throw Error("The '" + m + "' callback must be a function.");
                return x;
              };
              var g = e('connectedCallback');
              var h = e('disconnectedCallback');
              var k = e('adoptedCallback');
              var l =
                ((f = e('attributeChangedCallback')) && c.observedAttributes) ||
                [];
            } catch (m) {
              throw m;
            } finally {
              a.A = !1;
            }
            c = {
              localName: b,
              constructorFunction: c,
              connectedCallback: g,
              disconnectedCallback: h,
              adoptedCallback: k,
              attributeChangedCallback: f,
              observedAttributes: l,
              constructionStack: [],
            };
            a.u.set(b, c);
            a.C.set(c.constructorFunction, c);
            return c;
          }
          Y.prototype.upgrade = function (a) {
            V(this.h, a);
          };
          function za(a) {
            if (!1 !== a.i) {
              a.i = !1;
              for (var b = [], c = a.v, f = new Map(), d = 0; d < c.length; d++)
                f.set(c[d], []);
              V(a.h, document, {
                upgrade: function (k) {
                  if (void 0 === k.__CE_state) {
                    var l = k.localName,
                      m = f.get(l);
                    m ? m.push(k) : a.u.has(l) && b.push(k);
                  }
                },
              });
              for (d = 0; d < b.length; d++) T(a.h, b[d]);
              for (d = 0; d < c.length; d++) {
                for (var e = c[d], g = f.get(e), h = 0; h < g.length; h++)
                  T(a.h, g[h]);
                (e = a.B.get(e)) && e.resolve(void 0);
              }
              c.length = 0;
            }
          }
          Y.prototype.get = function (a) {
            if ((a = W(this, a))) return a.constructorFunction;
          };
          Y.prototype.whenDefined = function (a) {
            if (!qa(a))
              return Promise.reject(
                new SyntaxError(
                  "'" + a + "' is not a valid custom element name."
                )
              );
            var b = this.B.get(a);
            if (b) return b.F;
            b = new va();
            this.B.set(a, b);
            var c = this.u.has(a) || this.s.has(a);
            a = -1 === this.v.indexOf(a);
            c && a && b.resolve(void 0);
            return b.F;
          };
          Y.prototype.polyfillWrapFlushCallback = function (a) {
            this.D && xa(this.D);
            var b = this.o;
            this.o = function (c) {
              return a(function () {
                return b(c);
              });
            };
          };
          function W(a, b) {
            var c = a.u.get(b);
            if (c) return c;
            if ((c = a.s.get(b))) {
              a.s.delete(b);
              try {
                return Aa(a, b, c());
              } catch (f) {
                X(f);
              }
            }
          }
          Y.prototype.define = Y.prototype.define;
          Y.prototype.upgrade = Y.prototype.upgrade;
          Y.prototype.get = Y.prototype.get;
          Y.prototype.whenDefined = Y.prototype.whenDefined;
          Y.prototype.polyfillDefineLazy = Y.prototype.H;
          Y.prototype.polyfillWrapFlushCallback =
            Y.prototype.polyfillWrapFlushCallback;
          function Z(a, b, c) {
            function f(d) {
              return function (e) {
                for (var g = [], h = 0; h < arguments.length; ++h)
                  g[h] = arguments[h];
                h = [];
                for (var k = [], l = 0; l < g.length; l++) {
                  var m = g[l];
                  m instanceof Element && J(m) && k.push(m);
                  if (m instanceof DocumentFragment)
                    for (m = m.firstChild; m; m = m.nextSibling) h.push(m);
                  else h.push(m);
                }
                d.apply(this, g);
                for (g = 0; g < k.length; g++) U(a, k[g]);
                if (J(this))
                  for (g = 0; g < h.length; g++)
                    (k = h[g]), k instanceof Element && S(a, k);
              };
            }
            void 0 !== c.prepend && (b.prepend = f(c.prepend));
            void 0 !== c.append && (b.append = f(c.append));
          }
          function Ba(a) {
            Document.prototype.createElement = function (b) {
              return ua(a, this, b, null);
            };
            Document.prototype.importNode = function (b, c) {
              b = aa.call(this, b, !!c);
              this.__CE_registry ? V(a, b) : Q(a, b);
              return b;
            };
            Document.prototype.createElementNS = function (b, c) {
              return ua(a, this, c, b);
            };
            Z(a, Document.prototype, {prepend: ba, append: ca});
          }
          function Ca(a) {
            function b(f) {
              return function (d) {
                for (var e = [], g = 0; g < arguments.length; ++g)
                  e[g] = arguments[g];
                g = [];
                for (var h = [], k = 0; k < e.length; k++) {
                  var l = e[k];
                  l instanceof Element && J(l) && h.push(l);
                  if (l instanceof DocumentFragment)
                    for (l = l.firstChild; l; l = l.nextSibling) g.push(l);
                  else g.push(l);
                }
                f.apply(this, e);
                for (e = 0; e < h.length; e++) U(a, h[e]);
                if (J(this))
                  for (e = 0; e < g.length; e++)
                    (h = g[e]), h instanceof Element && S(a, h);
              };
            }
            var c = Element.prototype;
            void 0 !== ia && (c.before = b(ia));
            void 0 !== ja && (c.after = b(ja));
            void 0 !== ka &&
              (c.replaceWith = function (f) {
                for (var d = [], e = 0; e < arguments.length; ++e)
                  d[e] = arguments[e];
                e = [];
                for (var g = [], h = 0; h < d.length; h++) {
                  var k = d[h];
                  k instanceof Element && J(k) && g.push(k);
                  if (k instanceof DocumentFragment)
                    for (k = k.firstChild; k; k = k.nextSibling) e.push(k);
                  else e.push(k);
                }
                h = J(this);
                ka.apply(this, d);
                for (d = 0; d < g.length; d++) U(a, g[d]);
                if (h)
                  for (U(a, this), d = 0; d < e.length; d++)
                    (g = e[d]), g instanceof Element && S(a, g);
              });
            void 0 !== la &&
              (c.remove = function () {
                var f = J(this);
                la.call(this);
                f && U(a, this);
              });
          }
          function Da(a) {
            function b(d, e) {
              Object.defineProperty(d, 'innerHTML', {
                enumerable: e.enumerable,
                configurable: !0,
                get: e.get,
                set: function (g) {
                  var h = this,
                    k = void 0;
                  J(this) &&
                    ((k = []),
                    P(a, this, function (x) {
                      x !== h && k.push(x);
                    }));
                  e.set.call(this, g);
                  if (k)
                    for (var l = 0; l < k.length; l++) {
                      var m = k[l];
                      1 === m.__CE_state && a.disconnectedCallback(m);
                    }
                  this.ownerDocument.__CE_registry ? V(a, this) : Q(a, this);
                  return g;
                },
              });
            }
            function c(d, e) {
              d.insertAdjacentElement = function (g, h) {
                var k = J(h);
                g = e.call(this, g, h);
                k && U(a, h);
                J(g) && S(a, h);
                return g;
              };
            }
            function f(d, e) {
              function g(h, k) {
                for (var l = []; h !== k; h = h.nextSibling) l.push(h);
                for (k = 0; k < l.length; k++) V(a, l[k]);
              }
              d.insertAdjacentHTML = function (h, k) {
                h = h.toLowerCase();
                if ('beforebegin' === h) {
                  var l = this.previousSibling;
                  e.call(this, h, k);
                  g(l || this.parentNode.firstChild, this);
                } else if ('afterbegin' === h)
                  (l = this.firstChild),
                    e.call(this, h, k),
                    g(this.firstChild, l);
                else if ('beforeend' === h)
                  (l = this.lastChild),
                    e.call(this, h, k),
                    g(l || this.firstChild, null);
                else if ('afterend' === h)
                  (l = this.nextSibling),
                    e.call(this, h, k),
                    g(this.nextSibling, l);
                else
                  throw new SyntaxError(
                    'The value provided (' +
                      String(h) +
                      ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'."
                  );
              };
            }
            y &&
              (Element.prototype.attachShadow = function (d) {
                d = y.call(this, d);
                if (a.j && !d.__CE_patched) {
                  d.__CE_patched = !0;
                  for (var e = 0; e < a.m.length; e++) a.m[e](d);
                }
                return (this.__CE_shadowRoot = d);
              });
            z && z.get
              ? b(Element.prototype, z)
              : I && I.get
                ? b(HTMLElement.prototype, I)
                : ta(a, function (d) {
                    b(d, {
                      enumerable: !0,
                      configurable: !0,
                      get: function () {
                        return q.call(this, !0).innerHTML;
                      },
                      set: function (e) {
                        var g = 'template' === this.localName,
                          h = g ? this.content : this,
                          k = p.call(
                            document,
                            this.namespaceURI,
                            this.localName
                          );
                        for (k.innerHTML = e; 0 < h.childNodes.length; )
                          u.call(h, h.childNodes[0]);
                        for (e = g ? k.content : k; 0 < e.childNodes.length; )
                          r.call(h, e.childNodes[0]);
                      },
                    });
                  });
            Element.prototype.setAttribute = function (d, e) {
              if (1 !== this.__CE_state) return B.call(this, d, e);
              var g = A.call(this, d);
              B.call(this, d, e);
              e = A.call(this, d);
              a.attributeChangedCallback(this, d, g, e, null);
            };
            Element.prototype.setAttributeNS = function (d, e, g) {
              if (1 !== this.__CE_state) return E.call(this, d, e, g);
              var h = D.call(this, d, e);
              E.call(this, d, e, g);
              g = D.call(this, d, e);
              a.attributeChangedCallback(this, e, h, g, d);
            };
            Element.prototype.removeAttribute = function (d) {
              if (1 !== this.__CE_state) return C.call(this, d);
              var e = A.call(this, d);
              C.call(this, d);
              null !== e && a.attributeChangedCallback(this, d, e, null, null);
            };
            Element.prototype.removeAttributeNS = function (d, e) {
              if (1 !== this.__CE_state) return F.call(this, d, e);
              var g = D.call(this, d, e);
              F.call(this, d, e);
              var h = D.call(this, d, e);
              g !== h && a.attributeChangedCallback(this, e, g, h, d);
            };
            na ? c(HTMLElement.prototype, na) : G && c(Element.prototype, G);
            oa ? f(HTMLElement.prototype, oa) : H && f(Element.prototype, H);
            Z(a, Element.prototype, {prepend: fa, append: ha});
            Ca(a);
          }
          var Ea = {};
          function Fa(a) {
            function b() {
              var c = this.constructor;
              var f = document.__CE_registry.C.get(c);
              if (!f)
                throw Error(
                  'Failed to construct a custom element: The constructor was not registered with `customElements`.'
                );
              var d = f.constructionStack;
              if (0 === d.length)
                return (
                  (d = n.call(document, f.localName)),
                  Object.setPrototypeOf(d, c.prototype),
                  (d.__CE_state = 1),
                  (d.__CE_definition = f),
                  R(a, d),
                  d
                );
              var e = d.length - 1,
                g = d[e];
              if (g === Ea)
                throw Error(
                  "Failed to construct '" +
                    f.localName +
                    "': This element was already constructed."
                );
              d[e] = Ea;
              Object.setPrototypeOf(g, c.prototype);
              R(a, g);
              return g;
            }
            b.prototype = ma.prototype;
            Object.defineProperty(HTMLElement.prototype, 'constructor', {
              writable: !0,
              configurable: !0,
              enumerable: !1,
              value: b,
            });
            window.HTMLElement = b;
          }
          function Ga(a) {
            function b(c, f) {
              Object.defineProperty(c, 'textContent', {
                enumerable: f.enumerable,
                configurable: !0,
                get: f.get,
                set: function (d) {
                  if (this.nodeType === Node.TEXT_NODE) f.set.call(this, d);
                  else {
                    var e = void 0;
                    if (this.firstChild) {
                      var g = this.childNodes,
                        h = g.length;
                      if (0 < h && J(this)) {
                        e = Array(h);
                        for (var k = 0; k < h; k++) e[k] = g[k];
                      }
                    }
                    f.set.call(this, d);
                    if (e) for (d = 0; d < e.length; d++) U(a, e[d]);
                  }
                },
              });
            }
            Node.prototype.insertBefore = function (c, f) {
              if (c instanceof DocumentFragment) {
                var d = K(c);
                c = t.call(this, c, f);
                if (J(this)) for (f = 0; f < d.length; f++) S(a, d[f]);
                return c;
              }
              d = c instanceof Element && J(c);
              f = t.call(this, c, f);
              d && U(a, c);
              J(this) && S(a, c);
              return f;
            };
            Node.prototype.appendChild = function (c) {
              if (c instanceof DocumentFragment) {
                var f = K(c);
                c = r.call(this, c);
                if (J(this)) for (var d = 0; d < f.length; d++) S(a, f[d]);
                return c;
              }
              f = c instanceof Element && J(c);
              d = r.call(this, c);
              f && U(a, c);
              J(this) && S(a, c);
              return d;
            };
            Node.prototype.cloneNode = function (c) {
              c = q.call(this, !!c);
              this.ownerDocument.__CE_registry ? V(a, c) : Q(a, c);
              return c;
            };
            Node.prototype.removeChild = function (c) {
              var f = c instanceof Element && J(c),
                d = u.call(this, c);
              f && U(a, c);
              return d;
            };
            Node.prototype.replaceChild = function (c, f) {
              if (c instanceof DocumentFragment) {
                var d = K(c);
                c = v.call(this, c, f);
                if (J(this)) for (U(a, f), f = 0; f < d.length; f++) S(a, d[f]);
                return c;
              }
              d = c instanceof Element && J(c);
              var e = v.call(this, c, f),
                g = J(this);
              g && U(a, f);
              d && U(a, c);
              g && S(a, c);
              return e;
            };
            w && w.get
              ? b(Node.prototype, w)
              : sa(a, function (c) {
                  b(c, {
                    enumerable: !0,
                    configurable: !0,
                    get: function () {
                      for (
                        var f = [], d = this.firstChild;
                        d;
                        d = d.nextSibling
                      )
                        d.nodeType !== Node.COMMENT_NODE &&
                          f.push(d.textContent);
                      return f.join('');
                    },
                    set: function (f) {
                      for (; this.firstChild; ) u.call(this, this.firstChild);
                      null != f &&
                        '' !== f &&
                        r.call(this, document.createTextNode(f));
                    },
                  });
                });
          }
          var O = window.customElements;
          function Ha() {
            var a = new N();
            Fa(a);
            Ba(a);
            Z(a, DocumentFragment.prototype, {prepend: da, append: ea});
            Ga(a);
            Da(a);
            window.CustomElementRegistry = Y;
            a = new Y(a);
            document.__CE_registry = a;
            Object.defineProperty(window, 'customElements', {
              configurable: !0,
              enumerable: !0,
              value: a,
            });
          }
          (O &&
            !O.forcePolyfill &&
            'function' == typeof O.define &&
            'function' == typeof O.get) ||
            Ha();
          window.__CE_installPolyfill = Ha;
        }).call(self);

        //# sourceMappingURL=custom-elements.min.js.map

        /***/
      },

    /***/ aqn5:
      /*!*****************************************!*\
  !*** ./node_modules/globalthis/shim.js ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        var define = __webpack_require__(/*! define-properties */ '82c2');
        var getPolyfill = __webpack_require__(/*! ./polyfill */ 'vzKJ');

        module.exports = function shimGlobal() {
          var polyfill = getPolyfill();
          if (define.supportsDescriptors) {
            var descriptor = Object.getOwnPropertyDescriptor(
              polyfill,
              'globalThis'
            );
            if (
              !descriptor ||
              (descriptor.configurable &&
                (descriptor.enumerable ||
                  !descriptor.writable ||
                  globalThis !== polyfill))
            ) {
              // eslint-disable-line max-len
              Object.defineProperty(polyfill, 'globalThis', {
                configurable: true,
                enumerable: false,
                value: polyfill,
                writable: true,
              });
            }
          } else if (
            typeof globalThis !== 'object' ||
            globalThis !== polyfill
          ) {
            polyfill.globalThis = polyfill;
          }
          return polyfill;
        };

        /***/
      },

    /***/ busr:
      /*!**********************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \**********************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        exports.f = Object.getOwnPropertySymbols;

        /***/
      },

    /***/ cZY6:
      /*!***********************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/freezing.js ***!
  \***********************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var fails = __webpack_require__(/*! ../internals/fails */ 'rG8t');

        module.exports = !fails(function () {
          return Object.isExtensible(Object.preventExtensions({}));
        });

        /***/
      },

    /***/ cwa4:
      /*!***************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/correct-prototype-getter.js ***!
  \***************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var fails = __webpack_require__(/*! ../internals/fails */ 'rG8t');

        module.exports = !fails(function () {
          function F() {
            /* empty */
          }
          F.prototype.constructor = null;
          return Object.getPrototypeOf(new F()) !== F.prototype;
        });

        /***/
      },

    /***/ eW7K:
      /*!**************************************************!*\
  !*** ./node_modules/proxy-polyfill/src/proxy.js ***!
  \**************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        /*
         * Copyright 2016 Google Inc. All rights reserved.
         *
         * Licensed under the Apache License, Version 2.0 (the "License"); you may not
         * use this file except in compliance with the License. You may obtain a copy of
         * the License at
         *
         *     http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
         * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
         * License for the specific language governing permissions and limitations under
         * the License.
         */

        module.exports = function proxyPolyfill() {
          let lastRevokeFn = null;
          let ProxyPolyfill;

          /**
           * @param {*} o
           * @return {boolean} whether this is probably a (non-null) Object
           */
          function isObject(o) {
            return o ? typeof o === 'object' || typeof o === 'function' : false;
          }

          function validateProto(proto) {
            if (proto !== null && !isObject(proto)) {
              throw new TypeError(
                'Object prototype may only be an Object or null: ' + proto
              );
            }
          }

          const $Object = Object;

          // Closure assumes that `{__proto__: null} instanceof Object` is always true, hence why we check against a different name.
          const canCreateNullProtoObjects =
            Boolean($Object.create) || !({__proto__: null} instanceof $Object);
          const objectCreate =
            $Object.create ||
            (canCreateNullProtoObjects
              ? function create(proto) {
                  validateProto(proto);
                  return {__proto__: proto};
                }
              : function create(proto) {
                  validateProto(proto);
                  if (proto === null) {
                    throw new SyntaxError(
                      'Native Object.create is required to create objects with null prototype'
                    );
                  }

                  // nb. cast to convince Closure compiler that this is a constructor
                  var T = /** @type {!Function} */ (function T() {});
                  T.prototype = proto;
                  return new T();
                });

          const noop = function () {
            return null;
          };

          const getProto =
            $Object.getPrototypeOf ||
            ([].__proto__ === Array.prototype
              ? function getPrototypeOf(O) {
                  // If O.[[Prototype]] === null, then the __proto__ accessor won't exist,
                  // as it's inherited from `Object.prototype`
                  const proto = O.__proto__;
                  return isObject(proto) ? proto : null;
                }
              : noop);

          /**
           * @constructor
           * @param {!Object} target
           * @param {{apply, construct, get, set}} handler
           */
          ProxyPolyfill = function (target, handler) {
            const newTarget =
              this && this instanceof ProxyPolyfill
                ? this.constructor
                : undefined;
            if (newTarget === undefined) {
              throw new TypeError("Constructor Proxy requires 'new'");
            }

            if (!isObject(target) || !isObject(handler)) {
              throw new TypeError(
                'Cannot create proxy with a non-object as target or handler'
              );
            }

            // Construct revoke function, and set lastRevokeFn so that Proxy.revocable can steal it.
            // The caller might get the wrong revoke function if a user replaces or wraps scope.Proxy
            // to call itself, but that seems unlikely especially when using the polyfill.
            let throwRevoked = function () {};
            lastRevokeFn = function () {
              /** @suppress {checkTypes} */
              target = null; // clear ref
              throwRevoked = function (trap) {
                throw new TypeError(
                  `Cannot perform '${trap}' on a proxy that has been revoked`
                );
              };
            };
            setTimeout(function () {
              lastRevokeFn = null;
            }, 0);

            // Fail on unsupported traps: Chrome doesn't do this, but ensure that users of the polyfill
            // are a bit more careful. Copy the internal parts of handler to prevent user changes.
            const unsafeHandler = handler;
            handler = {get: null, set: null, apply: null, construct: null};
            for (let k in unsafeHandler) {
              if (!(k in handler)) {
                throw new TypeError(
                  `Proxy polyfill does not support trap '${k}'`
                );
              }
              handler[k] = unsafeHandler[k];
            }
            if (typeof unsafeHandler === 'function') {
              // Allow handler to be a function (which has an 'apply' method). This matches what is
              // probably a bug in native versions. It treats the apply call as a trap to be configured.
              handler.apply = unsafeHandler.apply.bind(unsafeHandler);
            }

            // Define proxy as an object that extends target.[[Prototype]],
            // or a Function (if either it's callable, or apply is set).
            const proto = getProto(target); // can return null in old browsers
            let proxy;
            let isMethod = false;
            let isArray = false;
            if (typeof target === 'function') {
              proxy = function ProxyPolyfill() {
                const usingNew = this && this.constructor === proxy;
                const args = Array.prototype.slice.call(arguments);
                throwRevoked(usingNew ? 'construct' : 'apply');

                // TODO(samthor): Closure compiler doesn't know about 'construct', attempts to rename it.
                if (usingNew && handler['construct']) {
                  return handler['construct'].call(this, target, args);
                } else if (!usingNew && handler.apply) {
                  return handler['apply'](target, this, args);
                }

                // since the target was a function, fallback to calling it directly.
                if (usingNew) {
                  // inspired by answers to https://stackoverflow.com/q/1606797
                  args.unshift(target); // pass class as first arg to constructor, although irrelevant
                  // nb. cast to convince Closure compiler that this is a constructor
                  const f = /** @type {!Function} */ (
                    target.bind.apply(target, args)
                  );
                  return new f();
                }
                return target.apply(this, args);
              };
              isMethod = true;
            } else if (target instanceof Array) {
              proxy = [];
              isArray = true;
            } else {
              proxy =
                canCreateNullProtoObjects || proto !== null
                  ? objectCreate(proto)
                  : {};
            }

            // Create default getters/setters. Create different code paths as handler.get/handler.set can't
            // change after creation.
            const getter = handler.get
              ? function (prop) {
                  throwRevoked('get');
                  return handler.get(this, prop, proxy);
                }
              : function (prop) {
                  throwRevoked('get');
                  return this[prop];
                };
            const setter = handler.set
              ? function (prop, value) {
                  throwRevoked('set');
                  const status = handler.set(this, prop, value, proxy);
                  // TODO(samthor): If the calling code is in strict mode, throw TypeError.
                  // if (!status) {
                  // It's (sometimes) possible to work this out, if this code isn't strict- try to load the
                  // callee, and if it's available, that code is non-strict. However, this isn't exhaustive.
                  // }
                }
              : function (prop, value) {
                  throwRevoked('set');
                  this[prop] = value;
                };

            // Clone direct properties (i.e., not part of a prototype).
            const propertyNames = $Object.getOwnPropertyNames(target);
            const propertyMap = {};
            propertyNames.forEach(function (prop) {
              if ((isMethod || isArray) && prop in proxy) {
                return; // ignore properties already here, e.g. 'bind', 'prototype' etc
              }
              const real = $Object.getOwnPropertyDescriptor(target, prop);
              const desc = {
                enumerable: Boolean(real.enumerable),
                get: getter.bind(target, prop),
                set: setter.bind(target, prop),
              };
              $Object.defineProperty(proxy, prop, desc);
              propertyMap[prop] = true;
            });

            // Set the prototype, or clone all prototype methods (always required if a getter is provided).
            // TODO(samthor): We don't allow prototype methods to be set. It's (even more) awkward.
            // An alternative here would be to _just_ clone methods to keep behavior consistent.
            let prototypeOk = true;
            if (isMethod || isArray) {
              // Arrays and methods are special: above, we instantiate boring versions of these then swap
              // our their prototype later. So we only need to use setPrototypeOf in these cases. Some old
              // engines support `Object.getPrototypeOf` but not `Object.setPrototypeOf`.
              const setProto =
                $Object.setPrototypeOf ||
                ([].__proto__ === Array.prototype
                  ? function setPrototypeOf(O, proto) {
                      validateProto(proto);
                      O.__proto__ = proto;
                      return O;
                    }
                  : noop);
              if (!(proto && setProto(proxy, proto))) {
                prototypeOk = false;
              }
            }
            if (handler.get || !prototypeOk) {
              for (let k in target) {
                if (propertyMap[k]) {
                  continue;
                }
                $Object.defineProperty(proxy, k, {get: getter.bind(target, k)});
              }
            }

            // The Proxy polyfill cannot handle adding new properties. Seal the target and proxy.
            $Object.seal(target);
            $Object.seal(proxy);

            return proxy; // nb. if isMethod is true, proxy != this
          };

          ProxyPolyfill.revocable = function (target, handler) {
            const p = new ProxyPolyfill(target, handler);
            return {proxy: p, revoke: lastRevokeFn};
          };

          return ProxyPolyfill;
        };

        /***/
      },

    /***/ erNl:
      /*!***********************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/is-array.js ***!
  \***********************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var classof = __webpack_require__(
          /*! ../internals/classof-raw */ 'ezU2'
        );

        // `IsArray` abstract operation
        // https://tc39.es/ecma262/#sec-isarray
        module.exports =
          Array.isArray ||
          function isArray(arg) {
            return classof(arg) == 'Array';
          };

        /***/
      },

    /***/ ezU2:
      /*!**************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/classof-raw.js ***!
  \**************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        var toString = {}.toString;

        module.exports = function (it) {
          return toString.call(it).slice(8, -1);
        };

        /***/
      },

    /***/ g7ye:
      /*!*******************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/esnext.reflect.define-metadata.js ***!
  \*******************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var $ = __webpack_require__(/*! ../internals/export */ 'wA6s');
        var ReflectMetadataModule = __webpack_require__(
          /*! ../internals/reflect-metadata */ 'yprU'
        );
        var anObject = __webpack_require__(
          /*! ../internals/an-object */ 'F26l'
        );

        var toMetadataKey = ReflectMetadataModule.toKey;
        var ordinaryDefineOwnMetadata = ReflectMetadataModule.set;

        // `Reflect.defineMetadata` method
        // https://github.com/rbuckton/reflect-metadata
        $(
          {target: 'Reflect', stat: true},
          {
            defineMetadata: function defineMetadata(
              metadataKey,
              metadataValue,
              target /* , targetKey */
            ) {
              var targetKey =
                arguments.length < 4 ? undefined : toMetadataKey(arguments[3]);
              ordinaryDefineOwnMetadata(
                metadataKey,
                metadataValue,
                anObject(target),
                targetKey
              );
            },
          }
        );

        /***/
      },

    /***/ g9hI:
      /*!**********************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/is-pure.js ***!
  \**********************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = false;

        /***/
      },

    /***/ gn9T:
      /*!********************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \********************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
        var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

        // Nashorn ~ JDK8 bug
        var NASHORN_BUG =
          getOwnPropertyDescriptor &&
          !nativePropertyIsEnumerable.call({1: 2}, 1);

        // `Object.prototype.propertyIsEnumerable` method implementation
        // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
        exports.f = NASHORN_BUG
          ? function propertyIsEnumerable(V) {
              var descriptor = getOwnPropertyDescriptor(this, V);
              return !!descriptor && descriptor.enumerable;
            }
          : nativePropertyIsEnumerable;

        /***/
      },

    /***/ hBby:
      /*!***********************************************************!*\
  !*** ./node_modules/globalthis/implementation.browser.js ***!
  \***********************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';
        /* eslint no-negated-condition: 0, no-new-func: 0 */

        if (typeof self !== 'undefined') {
          module.exports = self;
        } else if (typeof window !== 'undefined') {
          module.exports = window;
        } else {
          module.exports = Function('return this')();
        }

        /***/
      },

    /***/ hdsk:
      /*!************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.weak-map.js ***!
  \************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        var global = __webpack_require__(/*! ../internals/global */ 'ocAm');
        var redefineAll = __webpack_require__(
          /*! ../internals/redefine-all */ '8aNu'
        );
        var InternalMetadataModule = __webpack_require__(
          /*! ../internals/internal-metadata */ 'M7Xk'
        );
        var collection = __webpack_require__(
          /*! ../internals/collection */ 'wdMf'
        );
        var collectionWeak = __webpack_require__(
          /*! ../internals/collection-weak */ 'DAme'
        );
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ '6XUM'
        );
        var enforceIternalState = __webpack_require__(
          /*! ../internals/internal-state */ 'XH/I'
        ).enforce;
        var NATIVE_WEAK_MAP = __webpack_require__(
          /*! ../internals/native-weak-map */ 'yaK9'
        );

        var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
        var isExtensible = Object.isExtensible;
        var InternalWeakMap;

        var wrapper = function (init) {
          return function WeakMap() {
            return init(this, arguments.length ? arguments[0] : undefined);
          };
        };

        // `WeakMap` constructor
        // https://tc39.es/ecma262/#sec-weakmap-constructor
        var $WeakMap = (module.exports = collection(
          'WeakMap',
          wrapper,
          collectionWeak
        ));

        // IE11 WeakMap frozen keys fix
        // We can't use feature detection because it crash some old IE builds
        // https://github.com/zloirock/core-js/issues/485
        if (NATIVE_WEAK_MAP && IS_IE11) {
          InternalWeakMap = collectionWeak.getConstructor(
            wrapper,
            'WeakMap',
            true
          );
          InternalMetadataModule.REQUIRED = true;
          var WeakMapPrototype = $WeakMap.prototype;
          var nativeDelete = WeakMapPrototype['delete'];
          var nativeHas = WeakMapPrototype.has;
          var nativeGet = WeakMapPrototype.get;
          var nativeSet = WeakMapPrototype.set;
          redefineAll(WeakMapPrototype, {
            delete: function (key) {
              if (isObject(key) && !isExtensible(key)) {
                var state = enforceIternalState(this);
                if (!state.frozen) state.frozen = new InternalWeakMap();
                return (
                  nativeDelete.call(this, key) || state.frozen['delete'](key)
                );
              }
              return nativeDelete.call(this, key);
            },
            has: function has(key) {
              if (isObject(key) && !isExtensible(key)) {
                var state = enforceIternalState(this);
                if (!state.frozen) state.frozen = new InternalWeakMap();
                return nativeHas.call(this, key) || state.frozen.has(key);
              }
              return nativeHas.call(this, key);
            },
            get: function get(key) {
              if (isObject(key) && !isExtensible(key)) {
                var state = enforceIternalState(this);
                if (!state.frozen) state.frozen = new InternalWeakMap();
                return nativeHas.call(this, key)
                  ? nativeGet.call(this, key)
                  : state.frozen.get(key);
              }
              return nativeGet.call(this, key);
            },
            set: function set(key, value) {
              if (isObject(key) && !isExtensible(key)) {
                var state = enforceIternalState(this);
                if (!state.frozen) state.frozen = new InternalWeakMap();
                nativeHas.call(this, key)
                  ? nativeSet.call(this, key, value)
                  : state.frozen.set(key, value);
              } else nativeSet.call(this, key, value);
              return this;
            },
          });
        }

        /***/
      },

    /***/ hmpk:
      /*!***************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/require-object-coercible.js ***!
  \***************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        // `RequireObjectCoercible` abstract operation
        // https://tc39.es/ecma262/#sec-requireobjectcoercible
        module.exports = function (it) {
          if (it == undefined) throw TypeError("Can't call method on " + it);
          return it;
        };

        /***/
      },

    /***/ i85Z:
      /*!********************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \********************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var NATIVE_SYMBOL = __webpack_require__(
          /*! ../internals/native-symbol */ 'U+kB'
        );

        module.exports =
          NATIVE_SYMBOL &&
          // eslint-disable-next-line no-undef
          !Symbol.sham &&
          // eslint-disable-next-line no-undef
          typeof Symbol.iterator == 'symbol';

        /***/
      },

    /***/ kk6e:
      /*!******************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/array-iteration.js ***!
  \******************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var bind = __webpack_require__(
          /*! ../internals/function-bind-context */ 'tcQx'
        );
        var IndexedObject = __webpack_require__(
          /*! ../internals/indexed-object */ 'tUdv'
        );
        var toObject = __webpack_require__(
          /*! ../internals/to-object */ 'VCQ8'
        );
        var toLength = __webpack_require__(
          /*! ../internals/to-length */ 'xpLY'
        );
        var arraySpeciesCreate = __webpack_require__(
          /*! ../internals/array-species-create */ 'JafA'
        );

        var push = [].push;

        // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
        var createMethod = function (TYPE) {
          var IS_MAP = TYPE == 1;
          var IS_FILTER = TYPE == 2;
          var IS_SOME = TYPE == 3;
          var IS_EVERY = TYPE == 4;
          var IS_FIND_INDEX = TYPE == 6;
          var IS_FILTER_OUT = TYPE == 7;
          var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
          return function ($this, callbackfn, that, specificCreate) {
            var O = toObject($this);
            var self = IndexedObject(O);
            var boundFunction = bind(callbackfn, that, 3);
            var length = toLength(self.length);
            var index = 0;
            var create = specificCreate || arraySpeciesCreate;
            var target = IS_MAP
              ? create($this, length)
              : IS_FILTER || IS_FILTER_OUT
                ? create($this, 0)
                : undefined;
            var value, result;
            for (; length > index; index++)
              if (NO_HOLES || index in self) {
                value = self[index];
                result = boundFunction(value, index, O);
                if (TYPE) {
                  if (IS_MAP)
                    target[index] = result; // map
                  else if (result)
                    switch (TYPE) {
                      case 3:
                        return true; // some
                      case 5:
                        return value; // find
                      case 6:
                        return index; // findIndex
                      case 2:
                        push.call(target, value); // filter
                    }
                  else
                    switch (TYPE) {
                      case 4:
                        return false; // every
                      case 7:
                        push.call(target, value); // filterOut
                    }
                }
              }
            return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
          };
        };

        module.exports = {
          // `Array.prototype.forEach` method
          // https://tc39.es/ecma262/#sec-array.prototype.foreach
          forEach: createMethod(0),
          // `Array.prototype.map` method
          // https://tc39.es/ecma262/#sec-array.prototype.map
          map: createMethod(1),
          // `Array.prototype.filter` method
          // https://tc39.es/ecma262/#sec-array.prototype.filter
          filter: createMethod(2),
          // `Array.prototype.some` method
          // https://tc39.es/ecma262/#sec-array.prototype.some
          some: createMethod(3),
          // `Array.prototype.every` method
          // https://tc39.es/ecma262/#sec-array.prototype.every
          every: createMethod(4),
          // `Array.prototype.find` method
          // https://tc39.es/ecma262/#sec-array.prototype.find
          find: createMethod(5),
          // `Array.prototype.findIndex` method
          // https://tc39.es/ecma262/#sec-array.prototype.findIndex
          findIndex: createMethod(6),
          // `Array.prototype.filterOut` method
          // https://github.com/tc39/proposal-array-filtering
          filterOut: createMethod(7),
        };

        /***/
      },

    /***/ kx12:
      /*!*****************************************!*\
  !*** ./node_modules/globalthis/auto.js ***!
  \*****************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        __webpack_require__(/*! ./shim */ 'aqn5')();

        /***/
      },

    /***/ m41k:
      /*!********************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/well-known-symbol.js ***!
  \********************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(/*! ../internals/global */ 'ocAm');
        var shared = __webpack_require__(/*! ../internals/shared */ 'yIiL');
        var has = __webpack_require__(/*! ../internals/has */ 'OG5q');
        var uid = __webpack_require__(/*! ../internals/uid */ 'SDMg');
        var NATIVE_SYMBOL = __webpack_require__(
          /*! ../internals/native-symbol */ 'U+kB'
        );
        var USE_SYMBOL_AS_UID = __webpack_require__(
          /*! ../internals/use-symbol-as-uid */ 'i85Z'
        );

        var WellKnownSymbolsStore = shared('wks');
        var Symbol = global.Symbol;
        var createWellKnownSymbol = USE_SYMBOL_AS_UID
          ? Symbol
          : (Symbol && Symbol.withoutSetter) || uid;

        module.exports = function (name) {
          if (!has(WellKnownSymbolsStore, name)) {
            if (NATIVE_SYMBOL && has(Symbol, name))
              WellKnownSymbolsStore[name] = Symbol[name];
            else
              WellKnownSymbolsStore[name] = createWellKnownSymbol(
                'Symbol.' + name
              );
          }
          return WellKnownSymbolsStore[name];
        };

        /***/
      },

    /***/ mN5b:
      /*!**********************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/classof.js ***!
  \**********************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var TO_STRING_TAG_SUPPORT = __webpack_require__(
          /*! ../internals/to-string-tag-support */ '4PyY'
        );
        var classofRaw = __webpack_require__(
          /*! ../internals/classof-raw */ 'ezU2'
        );
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ 'm41k'
        );

        var TO_STRING_TAG = wellKnownSymbol('toStringTag');
        // ES3 wrong here
        var CORRECT_ARGUMENTS =
          classofRaw(
            (function () {
              return arguments;
            })()
          ) == 'Arguments';

        // fallback for IE11 Script Access Denied error
        var tryGet = function (it, key) {
          try {
            return it[key];
          } catch (error) {
            /* empty */
          }
        };

        // getting tag from ES6+ `Object.prototype.toString`
        module.exports = TO_STRING_TAG_SUPPORT
          ? classofRaw
          : function (it) {
              var O, tag, result;
              return it === undefined
                ? 'Undefined'
                : it === null
                  ? 'Null'
                  : // @@toStringTag case
                    typeof (tag = tryGet((O = Object(it)), TO_STRING_TAG)) ==
                      'string'
                    ? tag
                    : // builtinTag case
                      CORRECT_ARGUMENTS
                      ? classofRaw(O)
                      : // ES3 arguments fallback
                        (result = classofRaw(O)) == 'Object' &&
                          typeof O.callee == 'function'
                        ? 'Arguments'
                        : result;
            };

        /***/
      },

    /***/ nIH4:
      /*!********************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/collection-strong.js ***!
  \********************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        var defineProperty = __webpack_require__(
          /*! ../internals/object-define-property */ '/Ybd'
        ).f;
        var create = __webpack_require__(
          /*! ../internals/object-create */ '2RDa'
        );
        var redefineAll = __webpack_require__(
          /*! ../internals/redefine-all */ '8aNu'
        );
        var bind = __webpack_require__(
          /*! ../internals/function-bind-context */ 'tcQx'
        );
        var anInstance = __webpack_require__(
          /*! ../internals/an-instance */ 'SM6+'
        );
        var iterate = __webpack_require__(/*! ../internals/iterate */ 'Rn6E');
        var defineIterator = __webpack_require__(
          /*! ../internals/define-iterator */ 'WijE'
        );
        var setSpecies = __webpack_require__(
          /*! ../internals/set-species */ 'JHhb'
        );
        var DESCRIPTORS = __webpack_require__(
          /*! ../internals/descriptors */ 'T69T'
        );
        var fastKey = __webpack_require__(
          /*! ../internals/internal-metadata */ 'M7Xk'
        ).fastKey;
        var InternalStateModule = __webpack_require__(
          /*! ../internals/internal-state */ 'XH/I'
        );

        var setInternalState = InternalStateModule.set;
        var internalStateGetterFor = InternalStateModule.getterFor;

        module.exports = {
          getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
            var C = wrapper(function (that, iterable) {
              anInstance(that, C, CONSTRUCTOR_NAME);
              setInternalState(that, {
                type: CONSTRUCTOR_NAME,
                index: create(null),
                first: undefined,
                last: undefined,
                size: 0,
              });
              if (!DESCRIPTORS) that.size = 0;
              if (iterable != undefined)
                iterate(iterable, that[ADDER], {
                  that: that,
                  AS_ENTRIES: IS_MAP,
                });
            });

            var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

            var define = function (that, key, value) {
              var state = getInternalState(that);
              var entry = getEntry(that, key);
              var previous, index;
              // change existing entry
              if (entry) {
                entry.value = value;
                // create new entry
              } else {
                state.last = entry = {
                  index: (index = fastKey(key, true)),
                  key: key,
                  value: value,
                  previous: (previous = state.last),
                  next: undefined,
                  removed: false,
                };
                if (!state.first) state.first = entry;
                if (previous) previous.next = entry;
                if (DESCRIPTORS) state.size++;
                else that.size++;
                // add to index
                if (index !== 'F') state.index[index] = entry;
              }
              return that;
            };

            var getEntry = function (that, key) {
              var state = getInternalState(that);
              // fast case
              var index = fastKey(key);
              var entry;
              if (index !== 'F') return state.index[index];
              // frozen object case
              for (entry = state.first; entry; entry = entry.next) {
                if (entry.key == key) return entry;
              }
            };

            redefineAll(C.prototype, {
              // 23.1.3.1 Map.prototype.clear()
              // 23.2.3.2 Set.prototype.clear()
              clear: function clear() {
                var that = this;
                var state = getInternalState(that);
                var data = state.index;
                var entry = state.first;
                while (entry) {
                  entry.removed = true;
                  if (entry.previous)
                    entry.previous = entry.previous.next = undefined;
                  delete data[entry.index];
                  entry = entry.next;
                }
                state.first = state.last = undefined;
                if (DESCRIPTORS) state.size = 0;
                else that.size = 0;
              },
              // 23.1.3.3 Map.prototype.delete(key)
              // 23.2.3.4 Set.prototype.delete(value)
              delete: function (key) {
                var that = this;
                var state = getInternalState(that);
                var entry = getEntry(that, key);
                if (entry) {
                  var next = entry.next;
                  var prev = entry.previous;
                  delete state.index[entry.index];
                  entry.removed = true;
                  if (prev) prev.next = next;
                  if (next) next.previous = prev;
                  if (state.first == entry) state.first = next;
                  if (state.last == entry) state.last = prev;
                  if (DESCRIPTORS) state.size--;
                  else that.size--;
                }
                return !!entry;
              },
              // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
              // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
              forEach: function forEach(callbackfn /* , that = undefined */) {
                var state = getInternalState(this);
                var boundFunction = bind(
                  callbackfn,
                  arguments.length > 1 ? arguments[1] : undefined,
                  3
                );
                var entry;
                while ((entry = entry ? entry.next : state.first)) {
                  boundFunction(entry.value, entry.key, this);
                  // revert to the last existing entry
                  while (entry && entry.removed) entry = entry.previous;
                }
              },
              // 23.1.3.7 Map.prototype.has(key)
              // 23.2.3.7 Set.prototype.has(value)
              has: function has(key) {
                return !!getEntry(this, key);
              },
            });

            redefineAll(
              C.prototype,
              IS_MAP
                ? {
                    // 23.1.3.6 Map.prototype.get(key)
                    get: function get(key) {
                      var entry = getEntry(this, key);
                      return entry && entry.value;
                    },
                    // 23.1.3.9 Map.prototype.set(key, value)
                    set: function set(key, value) {
                      return define(this, key === 0 ? 0 : key, value);
                    },
                  }
                : {
                    // 23.2.3.1 Set.prototype.add(value)
                    add: function add(value) {
                      return define(
                        this,
                        (value = value === 0 ? 0 : value),
                        value
                      );
                    },
                  }
            );
            if (DESCRIPTORS)
              defineProperty(C.prototype, 'size', {
                get: function () {
                  return getInternalState(this).size;
                },
              });
            return C;
          },
          setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
            var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
            var getInternalCollectionState =
              internalStateGetterFor(CONSTRUCTOR_NAME);
            var getInternalIteratorState =
              internalStateGetterFor(ITERATOR_NAME);
            // add .keys, .values, .entries, [@@iterator]
            // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
            defineIterator(
              C,
              CONSTRUCTOR_NAME,
              function (iterated, kind) {
                setInternalState(this, {
                  type: ITERATOR_NAME,
                  target: iterated,
                  state: getInternalCollectionState(iterated),
                  kind: kind,
                  last: undefined,
                });
              },
              function () {
                var state = getInternalIteratorState(this);
                var kind = state.kind;
                var entry = state.last;
                // revert to the last existing entry
                while (entry && entry.removed) entry = entry.previous;
                // get next entry
                if (
                  !state.target ||
                  !(state.last = entry = entry ? entry.next : state.state.first)
                ) {
                  // or finish the iteration
                  state.target = undefined;
                  return {value: undefined, done: true};
                }
                // return step by kind
                if (kind == 'keys') return {value: entry.key, done: false};
                if (kind == 'values') return {value: entry.value, done: false};
                return {value: [entry.key, entry.value], done: false};
              },
              IS_MAP ? 'entries' : 'values',
              !IS_MAP,
              true
            );

            // add [@@species], 23.1.2.2, 23.2.2.2
            setSpecies(CONSTRUCTOR_NAME);
          },
        };

        /***/
      },

    /***/ nN1m:
      /*!*******************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/proposals/reflect-metadata.js ***!
  \*******************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        __webpack_require__(
          /*! ../modules/esnext.reflect.define-metadata */ 'g7ye'
        );
        __webpack_require__(
          /*! ../modules/esnext.reflect.delete-metadata */ 'NR1a'
        );
        __webpack_require__(
          /*! ../modules/esnext.reflect.get-metadata */ 'Bb/w'
        );
        __webpack_require__(
          /*! ../modules/esnext.reflect.get-metadata-keys */ 'KYLi'
        );
        __webpack_require__(
          /*! ../modules/esnext.reflect.get-own-metadata */ 'UbkO'
        );
        __webpack_require__(
          /*! ../modules/esnext.reflect.get-own-metadata-keys */ 'Icrz'
        );
        __webpack_require__(
          /*! ../modules/esnext.reflect.has-metadata */ '/sWL'
        );
        __webpack_require__(
          /*! ../modules/esnext.reflect.has-own-metadata */ 'T+gH'
        );
        __webpack_require__(/*! ../modules/esnext.reflect.metadata */ 'B4ea');

        /***/
      },

    /***/ oNNP:
      /*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        var bind = __webpack_require__(/*! function-bind */ 'D3zA');

        module.exports = bind.call(
          Function.call,
          Object.prototype.hasOwnProperty
        );

        /***/
      },

    /***/ ocAm:
      /*!*********************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/global.js ***!
  \*********************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        var check = function (it) {
          return it && it.Math == Math && it;
        };

        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        module.exports =
          // eslint-disable-next-line no-undef
          check(typeof globalThis == 'object' && globalThis) ||
          check(typeof window == 'object' && window) ||
          check(typeof self == 'object' && self) ||
          check(typeof global == 'object' && global) ||
          // eslint-disable-next-line no-new-func
          (function () {
            return this;
          })() ||
          Function('return this')();

        /***/
      },

    /***/ 'pz+c':
      /*!************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/iterators.js ***!
  \************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = {};

        /***/
      },

    /***/ qx7X:
      /*!**************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/document-create-element.js ***!
  \**************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(/*! ../internals/global */ 'ocAm');
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ '6XUM'
        );

        var document = global.document;
        // typeof document.createElement is 'object' in old IE
        var EXISTS = isObject(document) && isObject(document.createElement);

        module.exports = function (it) {
          return EXISTS ? document.createElement(it) : {};
        };

        /***/
      },

    /***/ rG8t:
      /*!********************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/fails.js ***!
  \********************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = function (exec) {
          try {
            return !!exec();
          } catch (error) {
            return true;
          }
        };

        /***/
      },

    /***/ 'rZy+':
      /*!*********************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/webpack/jit-polyfills.js ***!
  \*********************************************************************************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var core_js_proposals_reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! core-js/proposals/reflect-metadata */ 'nN1m');
        /* harmony import */ var core_js_proposals_reflect_metadata__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            core_js_proposals_reflect_metadata__WEBPACK_IMPORTED_MODULE_0__
          );
        /**
         * @license
         * Copyright Google LLC All Rights Reserved.
         *
         * Use of this source code is governed by an MIT-style license that can be
         * found in the LICENSE file at https://angular.io/license
         */

        /***/
      },

    /***/ sYn3:
      /*!****************************************************!*\
  !*** ./node_modules/object-keys/implementation.js ***!
  \****************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        var keysShim;
        if (!Object.keys) {
          // modified from https://github.com/es-shims/es5-shim
          var has = Object.prototype.hasOwnProperty;
          var toStr = Object.prototype.toString;
          var isArgs = __webpack_require__(/*! ./isArguments */ '1KsK'); // eslint-disable-line global-require
          var isEnumerable = Object.prototype.propertyIsEnumerable;
          var hasDontEnumBug = !isEnumerable.call({toString: null}, 'toString');
          var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
          var dontEnums = [
            'toString',
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'constructor',
          ];
          var equalsConstructorPrototype = function (o) {
            var ctor = o.constructor;
            return ctor && ctor.prototype === o;
          };
          var excludedKeys = {
            $applicationCache: true,
            $console: true,
            $external: true,
            $frame: true,
            $frameElement: true,
            $frames: true,
            $innerHeight: true,
            $innerWidth: true,
            $onmozfullscreenchange: true,
            $onmozfullscreenerror: true,
            $outerHeight: true,
            $outerWidth: true,
            $pageXOffset: true,
            $pageYOffset: true,
            $parent: true,
            $scrollLeft: true,
            $scrollTop: true,
            $scrollX: true,
            $scrollY: true,
            $self: true,
            $webkitIndexedDB: true,
            $webkitStorageInfo: true,
            $window: true,
          };
          var hasAutomationEqualityBug = (function () {
            /* global window */
            if (typeof window === 'undefined') {
              return false;
            }
            for (var k in window) {
              try {
                if (
                  !excludedKeys['$' + k] &&
                  has.call(window, k) &&
                  window[k] !== null &&
                  typeof window[k] === 'object'
                ) {
                  try {
                    equalsConstructorPrototype(window[k]);
                  } catch (e) {
                    return true;
                  }
                }
              } catch (e) {
                return true;
              }
            }
            return false;
          })();
          var equalsConstructorPrototypeIfNotBuggy = function (o) {
            /* global window */
            if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
              return equalsConstructorPrototype(o);
            }
            try {
              return equalsConstructorPrototype(o);
            } catch (e) {
              return false;
            }
          };

          keysShim = function keys(object) {
            var isObject = object !== null && typeof object === 'object';
            var isFunction = toStr.call(object) === '[object Function]';
            var isArguments = isArgs(object);
            var isString = isObject && toStr.call(object) === '[object String]';
            var theKeys = [];

            if (!isObject && !isFunction && !isArguments) {
              throw new TypeError('Object.keys called on a non-object');
            }

            var skipProto = hasProtoEnumBug && isFunction;
            if (isString && object.length > 0 && !has.call(object, 0)) {
              for (var i = 0; i < object.length; ++i) {
                theKeys.push(String(i));
              }
            }

            if (isArguments && object.length > 0) {
              for (var j = 0; j < object.length; ++j) {
                theKeys.push(String(j));
              }
            } else {
              for (var name in object) {
                if (
                  !(skipProto && name === 'prototype') &&
                  has.call(object, name)
                ) {
                  theKeys.push(String(name));
                }
              }
            }

            if (hasDontEnumBug) {
              var skipConstructor =
                equalsConstructorPrototypeIfNotBuggy(object);

              for (var k = 0; k < dontEnums.length; ++k) {
                if (
                  !(skipConstructor && dontEnums[k] === 'constructor') &&
                  has.call(object, dontEnums[k])
                ) {
                  theKeys.push(dontEnums[k]);
                }
              }
            }
            return theKeys;
          };
        }
        module.exports = keysShim;

        /***/
      },

    /***/ shqn:
      /*!********************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/set-to-string-tag.js ***!
  \********************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var defineProperty = __webpack_require__(
          /*! ../internals/object-define-property */ '/Ybd'
        ).f;
        var has = __webpack_require__(/*! ../internals/has */ 'OG5q');
        var wellKnownSymbol = __webpack_require__(
          /*! ../internals/well-known-symbol */ 'm41k'
        );

        var TO_STRING_TAG = wellKnownSymbol('toStringTag');

        module.exports = function (it, TAG, STATIC) {
          if (it && !has((it = STATIC ? it : it.prototype), TO_STRING_TAG)) {
            defineProperty(it, TO_STRING_TAG, {configurable: true, value: TAG});
          }
        };

        /***/
      },

    /***/ tUdv:
      /*!*****************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/indexed-object.js ***!
  \*****************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var fails = __webpack_require__(/*! ../internals/fails */ 'rG8t');
        var classof = __webpack_require__(
          /*! ../internals/classof-raw */ 'ezU2'
        );

        var split = ''.split;

        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        module.exports = fails(function () {
          // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
          // eslint-disable-next-line no-prototype-builtins
          return !Object('z').propertyIsEnumerable(0);
        })
          ? function (it) {
              return classof(it) == 'String' ? split.call(it, '') : Object(it);
            }
          : Object;

        /***/
      },

    /***/ tcQx:
      /*!************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/function-bind-context.js ***!
  \************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var aFunction = __webpack_require__(
          /*! ../internals/a-function */ 'Neub'
        );

        // optional / simple context binding
        module.exports = function (fn, that, length) {
          aFunction(fn);
          if (that === undefined) return fn;
          switch (length) {
            case 0:
              return function () {
                return fn.call(that);
              };
            case 1:
              return function (a) {
                return fn.call(that, a);
              };
            case 2:
              return function (a, b) {
                return fn.call(that, a, b);
              };
            case 3:
              return function (a, b, c) {
                return fn.call(that, a, b, c);
              };
          }
          return function (/* ...args */) {
            return fn.apply(that, arguments);
          };
        };

        /***/
      },

    /***/ uSMZ:
      /*!*****************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/create-property-descriptor.js ***!
  \*****************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = function (bitmap, value) {
          return {
            enumerable: !(bitmap & 1),
            configurable: !(bitmap & 2),
            writable: !(bitmap & 4),
            value: value,
          };
        };

        /***/
      },

    /***/ vDBE:
      /*!*************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/to-integer.js ***!
  \*************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        var ceil = Math.ceil;
        var floor = Math.floor;

        // `ToInteger` abstract operation
        // https://tc39.es/ecma262/#sec-tointeger
        module.exports = function (argument) {
          return isNaN((argument = +argument))
            ? 0
            : (argument > 0 ? floor : ceil)(argument);
        };

        /***/
      },

    /***/ vRoz:
      /*!*******************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/modules/es.map.js ***!
  \*******************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        var collection = __webpack_require__(
          /*! ../internals/collection */ 'wdMf'
        );
        var collectionStrong = __webpack_require__(
          /*! ../internals/collection-strong */ 'nIH4'
        );

        // `Map` constructor
        // https://tc39.es/ecma262/#sec-map-objects
        module.exports = collection(
          'Map',
          function (init) {
            return function Map() {
              return init(this, arguments.length ? arguments[0] : undefined);
            };
          },
          collectionStrong
        );

        /***/
      },

    /***/ vVmn:
      /*!***********************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-keys-internal.js ***!
  \***********************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var has = __webpack_require__(/*! ../internals/has */ 'OG5q');
        var toIndexedObject = __webpack_require__(
          /*! ../internals/to-indexed-object */ 'EMtK'
        );
        var indexOf = __webpack_require__(
          /*! ../internals/array-includes */ 'OXtp'
        ).indexOf;
        var hiddenKeys = __webpack_require__(
          /*! ../internals/hidden-keys */ 'yQMY'
        );

        module.exports = function (object, names) {
          var O = toIndexedObject(object);
          var i = 0;
          var result = [];
          var key;
          for (key in O)
            !has(hiddenKeys, key) && has(O, key) && result.push(key);
          // Don't enum bug & hidden keys
          while (names.length > i)
            if (has(O, (key = names[i++]))) {
              ~indexOf(result, key) || result.push(key);
            }
          return result;
        };

        /***/
      },

    /***/ vzKJ:
      /*!*********************************************!*\
  !*** ./node_modules/globalthis/polyfill.js ***!
  \*********************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        var implementation = __webpack_require__(
          /*! ./implementation */ 'hBby'
        );

        module.exports = function getPolyfill() {
          if (
            typeof global !== 'object' ||
            !global ||
            global.Math !== Math ||
            global.Array !== Array
          ) {
            return implementation;
          }
          return global;
        };

        /***/
      },

    /***/ wA6s:
      /*!*********************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/export.js ***!
  \*********************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(/*! ../internals/global */ 'ocAm');
        var getOwnPropertyDescriptor = __webpack_require__(
          /*! ../internals/object-get-own-property-descriptor */ '7gGY'
        ).f;
        var createNonEnumerableProperty = __webpack_require__(
          /*! ../internals/create-non-enumerable-property */ 'aJMj'
        );
        var redefine = __webpack_require__(/*! ../internals/redefine */ '2MGJ');
        var setGlobal = __webpack_require__(
          /*! ../internals/set-global */ 'Fqhe'
        );
        var copyConstructorProperties = __webpack_require__(
          /*! ../internals/copy-constructor-properties */ 'NIlc'
        );
        var isForced = __webpack_require__(
          /*! ../internals/is-forced */ 'MkZA'
        );

        /*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
        module.exports = function (options, source) {
          var TARGET = options.target;
          var GLOBAL = options.global;
          var STATIC = options.stat;
          var FORCED, target, key, targetProperty, sourceProperty, descriptor;
          if (GLOBAL) {
            target = global;
          } else if (STATIC) {
            target = global[TARGET] || setGlobal(TARGET, {});
          } else {
            target = (global[TARGET] || {}).prototype;
          }
          if (target)
            for (key in source) {
              sourceProperty = source[key];
              if (options.noTargetGet) {
                descriptor = getOwnPropertyDescriptor(target, key);
                targetProperty = descriptor && descriptor.value;
              } else targetProperty = target[key];
              FORCED = isForced(
                GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key,
                options.forced
              );
              // contained in target
              if (!FORCED && targetProperty !== undefined) {
                if (typeof sourceProperty === typeof targetProperty) continue;
                copyConstructorProperties(sourceProperty, targetProperty);
              }
              // add a flag to not completely full polyfills
              if (options.sham || (targetProperty && targetProperty.sham)) {
                createNonEnumerableProperty(sourceProperty, 'sham', true);
              }
              // extend global
              redefine(target, key, sourceProperty, options);
            }
        };

        /***/
      },

    /***/ wIVT:
      /*!**************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/object-get-prototype-of.js ***!
  \**************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var has = __webpack_require__(/*! ../internals/has */ 'OG5q');
        var toObject = __webpack_require__(
          /*! ../internals/to-object */ 'VCQ8'
        );
        var sharedKey = __webpack_require__(
          /*! ../internals/shared-key */ '/AsP'
        );
        var CORRECT_PROTOTYPE_GETTER = __webpack_require__(
          /*! ../internals/correct-prototype-getter */ 'cwa4'
        );

        var IE_PROTO = sharedKey('IE_PROTO');
        var ObjectPrototype = Object.prototype;

        // `Object.getPrototypeOf` method
        // https://tc39.es/ecma262/#sec-object.getprototypeof
        module.exports = CORRECT_PROTOTYPE_GETTER
          ? Object.getPrototypeOf
          : function (O) {
              O = toObject(O);
              if (has(O, IE_PROTO)) return O[IE_PROTO];
              if (
                typeof O.constructor == 'function' &&
                O instanceof O.constructor
              ) {
                return O.constructor.prototype;
              }
              return O instanceof Object ? ObjectPrototype : null;
            };

        /***/
      },

    /***/ wdMf:
      /*!*************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/collection.js ***!
  \*************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        'use strict';

        var $ = __webpack_require__(/*! ../internals/export */ 'wA6s');
        var global = __webpack_require__(/*! ../internals/global */ 'ocAm');
        var isForced = __webpack_require__(
          /*! ../internals/is-forced */ 'MkZA'
        );
        var redefine = __webpack_require__(/*! ../internals/redefine */ '2MGJ');
        var InternalMetadataModule = __webpack_require__(
          /*! ../internals/internal-metadata */ 'M7Xk'
        );
        var iterate = __webpack_require__(/*! ../internals/iterate */ 'Rn6E');
        var anInstance = __webpack_require__(
          /*! ../internals/an-instance */ 'SM6+'
        );
        var isObject = __webpack_require__(
          /*! ../internals/is-object */ '6XUM'
        );
        var fails = __webpack_require__(/*! ../internals/fails */ 'rG8t');
        var checkCorrectnessOfIteration = __webpack_require__(
          /*! ../internals/check-correctness-of-iteration */ 'EIBq'
        );
        var setToStringTag = __webpack_require__(
          /*! ../internals/set-to-string-tag */ 'shqn'
        );
        var inheritIfRequired = __webpack_require__(
          /*! ../internals/inherit-if-required */ 'K6ZX'
        );

        module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
          var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
          var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
          var ADDER = IS_MAP ? 'set' : 'add';
          var NativeConstructor = global[CONSTRUCTOR_NAME];
          var NativePrototype =
            NativeConstructor && NativeConstructor.prototype;
          var Constructor = NativeConstructor;
          var exported = {};

          var fixMethod = function (KEY) {
            var nativeMethod = NativePrototype[KEY];
            redefine(
              NativePrototype,
              KEY,
              KEY == 'add'
                ? function add(value) {
                    nativeMethod.call(this, value === 0 ? 0 : value);
                    return this;
                  }
                : KEY == 'delete'
                  ? function (key) {
                      return IS_WEAK && !isObject(key)
                        ? false
                        : nativeMethod.call(this, key === 0 ? 0 : key);
                    }
                  : KEY == 'get'
                    ? function get(key) {
                        return IS_WEAK && !isObject(key)
                          ? undefined
                          : nativeMethod.call(this, key === 0 ? 0 : key);
                      }
                    : KEY == 'has'
                      ? function has(key) {
                          return IS_WEAK && !isObject(key)
                            ? false
                            : nativeMethod.call(this, key === 0 ? 0 : key);
                        }
                      : function set(key, value) {
                          nativeMethod.call(this, key === 0 ? 0 : key, value);
                          return this;
                        }
            );
          };

          // eslint-disable-next-line max-len
          if (
            isForced(
              CONSTRUCTOR_NAME,
              typeof NativeConstructor != 'function' ||
                !(
                  IS_WEAK ||
                  (NativePrototype.forEach &&
                    !fails(function () {
                      new NativeConstructor().entries().next();
                    }))
                )
            )
          ) {
            // create collection constructor
            Constructor = common.getConstructor(
              wrapper,
              CONSTRUCTOR_NAME,
              IS_MAP,
              ADDER
            );
            InternalMetadataModule.REQUIRED = true;
          } else if (isForced(CONSTRUCTOR_NAME, true)) {
            var instance = new Constructor();
            // early implementations not supports chaining
            var HASNT_CHAINING =
              instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
            // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
            var THROWS_ON_PRIMITIVES = fails(function () {
              instance.has(1);
            });
            // most early implementations doesn't supports iterables, most modern - not close it correctly
            // eslint-disable-next-line no-new
            var ACCEPT_ITERABLES = checkCorrectnessOfIteration(
              function (iterable) {
                new NativeConstructor(iterable);
              }
            );
            // for early implementations -0 and +0 not the same
            var BUGGY_ZERO =
              !IS_WEAK &&
              fails(function () {
                // V8 ~ Chromium 42- fails only with 5+ elements
                var $instance = new NativeConstructor();
                var index = 5;
                while (index--) $instance[ADDER](index, index);
                return !$instance.has(-0);
              });

            if (!ACCEPT_ITERABLES) {
              Constructor = wrapper(function (dummy, iterable) {
                anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
                var that = inheritIfRequired(
                  new NativeConstructor(),
                  dummy,
                  Constructor
                );
                if (iterable != undefined)
                  iterate(iterable, that[ADDER], {
                    that: that,
                    AS_ENTRIES: IS_MAP,
                  });
                return that;
              });
              Constructor.prototype = NativePrototype;
              NativePrototype.constructor = Constructor;
            }

            if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
              fixMethod('delete');
              fixMethod('has');
              IS_MAP && fixMethod('get');
            }

            if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

            // weak collections should not contains .clear method
            if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
          }

          exported[CONSTRUCTOR_NAME] = Constructor;
          $({global: true, forced: Constructor != NativeConstructor}, exported);

          setToStringTag(Constructor, CONSTRUCTOR_NAME);

          if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

          return Constructor;
        };

        /***/
      },

    /***/ xpLY:
      /*!************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/to-length.js ***!
  \************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var toInteger = __webpack_require__(
          /*! ../internals/to-integer */ 'vDBE'
        );

        var min = Math.min;

        // `ToLength` abstract operation
        // https://tc39.es/ecma262/#sec-tolength
        module.exports = function (argument) {
          return argument > 0 ? min(toInteger(argument), 0x1fffffffffffff) : 0; // 2 ** 53 - 1 == 9007199254740991
        };

        /***/
      },

    /***/ yIiL:
      /*!*********************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/shared.js ***!
  \*********************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ 'g9hI');
        var store = __webpack_require__(
          /*! ../internals/shared-store */ 'KBkW'
        );

        (module.exports = function (key, value) {
          return store[key] || (store[key] = value !== undefined ? value : {});
        })('versions', []).push({
          version: '3.8.3',
          mode: IS_PURE ? 'pure' : 'global',
          copyright: '© 2021 Denis Pushkarev (zloirock.ru)',
        });

        /***/
      },

    /***/ yQMY:
      /*!**************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/hidden-keys.js ***!
  \**************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports) {
        module.exports = {};

        /***/
      },

    /***/ yaK9:
      /*!******************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/native-weak-map.js ***!
  \******************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var global = __webpack_require__(/*! ../internals/global */ 'ocAm');
        var inspectSource = __webpack_require__(
          /*! ../internals/inspect-source */ '6urC'
        );

        var WeakMap = global.WeakMap;

        module.exports =
          typeof WeakMap === 'function' &&
          /native code/.test(inspectSource(WeakMap));

        /***/
      },

    /***/ yprU:
      /*!*******************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/core-js/internals/reflect-metadata.js ***!
  \*******************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        // TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`
        var Map = __webpack_require__(/*! ../modules/es.map */ 'vRoz');
        var WeakMap = __webpack_require__(/*! ../modules/es.weak-map */ 'hdsk');
        var shared = __webpack_require__(/*! ../internals/shared */ 'yIiL');

        var metadata = shared('metadata');
        var store = metadata.store || (metadata.store = new WeakMap());

        var getOrCreateMetadataMap = function (target, targetKey, create) {
          var targetMetadata = store.get(target);
          if (!targetMetadata) {
            if (!create) return;
            store.set(target, (targetMetadata = new Map()));
          }
          var keyMetadata = targetMetadata.get(targetKey);
          if (!keyMetadata) {
            if (!create) return;
            targetMetadata.set(targetKey, (keyMetadata = new Map()));
          }
          return keyMetadata;
        };

        var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
          var metadataMap = getOrCreateMetadataMap(O, P, false);
          return metadataMap === undefined
            ? false
            : metadataMap.has(MetadataKey);
        };

        var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
          var metadataMap = getOrCreateMetadataMap(O, P, false);
          return metadataMap === undefined
            ? undefined
            : metadataMap.get(MetadataKey);
        };

        var ordinaryDefineOwnMetadata = function (
          MetadataKey,
          MetadataValue,
          O,
          P
        ) {
          getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
        };

        var ordinaryOwnMetadataKeys = function (target, targetKey) {
          var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
          var keys = [];
          if (metadataMap)
            metadataMap.forEach(function (_, key) {
              keys.push(key);
            });
          return keys;
        };

        var toMetadataKey = function (it) {
          return it === undefined || typeof it == 'symbol' ? it : String(it);
        };

        module.exports = {
          store: store,
          getMap: getOrCreateMetadataMap,
          has: ordinaryHasOwnMetadata,
          get: ordinaryGetOwnMetadata,
          set: ordinaryDefineOwnMetadata,
          keys: ordinaryOwnMetadataKeys,
          toKey: toMetadataKey,
        };

        /***/
      },
  },
  [[1, 'runtime']],
]);
//# sourceMappingURL=polyfills-es2015.js.map
