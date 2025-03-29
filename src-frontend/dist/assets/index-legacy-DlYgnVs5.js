;
(function () {
  function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
  function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
  function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
  function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
  function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
  function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
  function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
  function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
  function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
  function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
  function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
  System.register([], function (exports, module) {
    'use strict';

    return {
      execute: function execute() {
        var __vite_style__ = document.createElement('style');
        __vite_style__.textContent = ":root {\n  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;\n  line-height: 1.5;\n  font-weight: 400;\n\n  /* Remove color-scheme property */\n  /* color-scheme: light dark; */\n  \n  /* Change to light mode colors */\n  color: #213547;\n  background-color: #ffffff;\n\n  font-synthesis: none;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\na {\n  font-weight: 500;\n  color: #646cff;\n  text-decoration: inherit;\n}\na:hover {\n  color: #747bff;\n}\n\nbody {\n  margin: 0;\n  display: flex;\n  place-items: center;\n  min-width: 320px;\n  min-height: 100vh;\n}\n\nh1 {\n  font-size: 3.2em;\n  line-height: 1.1;\n}\n\n#app {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 2rem;\n  text-align: center;\n}\n\n.logo {\n  height: 6em;\n  padding: 1.5em;\n  will-change: filter;\n  transition: filter 300ms;\n}\n.logo:hover {\n  filter: drop-shadow(0 0 2em #646cffaa);\n}\n.logo.vanilla:hover {\n  filter: drop-shadow(0 0 2em #3178c6aa);\n}\n\n.card {\n  padding: 2em;\n}\n\n.read-the-docs {\n  color: #888;\n}\n\nbutton {\n  border-radius: 8px;\n  border: 1px solid transparent;\n  padding: 0.6em 1.2em;\n  font-size: 1em;\n  font-weight: 500;\n  font-family: inherit;\n  /* Change button background to light theme */\n  background-color: #f9f9f9;\n  cursor: pointer;\n  transition: border-color 0.25s;\n}\nbutton:hover {\n  border-color: #646cff;\n}\nbutton:focus,\nbutton:focus-visible {\n  outline: 4px auto -webkit-focus-ring-color;\n}\n\n/* Remove media query for dark/light mode preference */\n/* \n@media (prefers-color-scheme: light) {\n  :root {\n    color: #213547;\n    background-color: #ffffff;\n  }\n  a:hover {\n    color: #747bff;\n  }\n  button {\n    background-color: #f9f9f9;\n  }\n}\n*//*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        false && function polyfill() {
          var relList = document.createElement("link").relList;
          if (relList && relList.supports && relList.supports("modulepreload")) {
            return;
          }
          var _iterator = _createForOfIteratorHelper(document.querySelectorAll('link[rel="modulepreload"]')),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var link = _step.value;
              processPreload(link);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          new MutationObserver(function (mutations) {
            var _iterator2 = _createForOfIteratorHelper(mutations),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var mutation = _step2.value;
                if (mutation.type !== "childList") {
                  continue;
                }
                var _iterator3 = _createForOfIteratorHelper(mutation.addedNodes),
                  _step3;
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var node = _step3.value;
                    if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }).observe(document, {
            childList: true,
            subtree: true
          });
          function getFetchOpts(link) {
            var fetchOpts = {};
            if (link.integrity) fetchOpts.integrity = link.integrity;
            if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
            if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";else fetchOpts.credentials = "same-origin";
            return fetchOpts;
          }
          function processPreload(link) {
            if (link.ep) return;
            link.ep = true;
            var fetchOpts = getFetchOpts(link);
            fetch(link.href, fetchOpts);
          }
        }();
        var SpaNavigator = /*#__PURE__*/function () {
          function SpaNavigator() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            _classCallCheck(this, SpaNavigator);
            _defineProperty(this, "routes", /* @__PURE__ */new Map());
            _defineProperty(this, "popupHandlers", /* @__PURE__ */new Map());
            _defineProperty(this, "popupStack", []);
            _defineProperty(this, "defaultRoute", null);
            _defineProperty(this, "notFoundHandler", null);
            window.addEventListener("popstate", this.handlePopState.bind(this));
            window.addEventListener("load", this.handleInitialRoute.bind(this));
            if (options.defaultRoute) this.defaultRoute = options.defaultRoute;
            if (options.notFoundHandler) this.notFoundHandler = options.notFoundHandler;
            if (document.readyState === "complete") {
              this.handleInitialRoute();
            }
          }
          /**
           * 경로에 대한 핸들러 등록
           */
          return _createClass(SpaNavigator, [{
            key: "route",
            value: function route(path, handler) {
              this.routes.set(path, handler);
              return this;
            }
            /**
             * 기본 경로 핸들러 등록
             */
          }, {
            key: "setDefaultRoute",
            value: function setDefaultRoute(handler) {
              this.defaultRoute = handler;
              return this;
            }
            /**
             * 404 페이지 핸들러 등록
             */
          }, {
            key: "setNotFoundHandler",
            value: function setNotFoundHandler(handler) {
              this.notFoundHandler = handler;
              return this;
            }
            /**
             * 팝업 핸들러 등록
             */
          }, {
            key: "registerPopup",
            value: function registerPopup(popupId, handler) {
              this.popupHandlers.set(popupId, handler);
              return this;
            }
            /**
             * 페이지 이동
             */
          }, {
            key: "navigate",
            value: function navigate(path) {
              var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              this.closeAllPopups(false);
              history.pushState({
                type: "page",
                path: path,
                data: data
              }, "", path);
              this.renderCurrentPath();
            }
            /**
             * 팝업 열기
             */
          }, {
            key: "openPopup",
            value: function openPopup(popupId) {
              var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
              if (!this.popupHandlers.has(popupId)) {
                console.error("Popup handler not found for: ".concat(popupId));
                return;
              }
              var currentPath = window.location.pathname;
              var url = new URL(window.location.href);
              var popupState = {
                id: popupId,
                data: data,
                openedAt: (/* @__PURE__ */new Date()).toISOString()
              };
              this.popupStack.push(popupState);
              url.searchParams.set("popup", popupId);
              if (Object.keys(data).length > 0) {
                url.searchParams.set("data", btoa(JSON.stringify(data)));
              }
              history.pushState({
                type: "popup",
                popup: popupState,
                stack: _toConsumableArray(this.popupStack),
                path: currentPath
              }, "", url.toString());
              this.renderPopup(popupState);
            }
            /**
             * 팝업 닫기
             */
          }, {
            key: "closePopup",
            value: function closePopup() {
              var navigate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
              if (this.popupStack.length === 0) return;
              var popup = this.popupStack.pop();
              if (navigate) {
                history.back();
              } else {
                this.updatePopupUI();
                var handler = this.popupHandlers.get(popup.id);
                if (handler && handler.onClose) {
                  handler.onClose(popup.data);
                }
              }
            }
            /**
             * 모든 팝업 닫기
             */
          }, {
            key: "closeAllPopups",
            value: function closeAllPopups() {
              var navigate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
              if (this.popupStack.length === 0) return;
              if (navigate) {
                var depth = this.popupStack.length;
                history.go(-depth);
              } else {
                while (this.popupStack.length > 0) {
                  var popup = this.popupStack.pop();
                  var handler = this.popupHandlers.get(popup.id);
                  if (handler && handler.onClose) {
                    handler.onClose(popup.data);
                  }
                }
                this.updatePopupUI();
              }
            }
            /**
             * 페이지 새로고침
             */
          }, {
            key: "refresh",
            value: function refresh() {
              var state = history.state || {};
              if (state.type === "popup") {
                this.updatePopupUI();
              } else {
                this.renderCurrentPath();
              }
            }
            /**
             * 뒤로가기 이벤트 처리
             */
          }, {
            key: "handlePopState",
            value: function handlePopState(event) {
              var state = event.state || {};
              if (state.stack) {
                this.popupStack = state.stack;
              } else {
                this.popupStack = [];
              }
              if (state.type === "popup") {
                this.updatePopupUI();
              } else {
                this.renderCurrentPath();
              }
            }
            /**
             * 초기 경로 처리
             */
          }, {
            key: "handleInitialRoute",
            value: function handleInitialRoute() {
              var url = new URL(window.location.href);
              var popupId = url.searchParams.get("popup");
              var path = window.location.pathname;
              if (popupId && this.popupHandlers.has(popupId)) {
                var popupData = {};
                var encodedData = url.searchParams.get("data");
                if (encodedData) {
                  try {
                    popupData = JSON.parse(atob(encodedData));
                  } catch (e) {
                    console.error("Failed to parse popup data from URL", e);
                  }
                }
                var popupState = {
                  id: popupId,
                  data: popupData,
                  openedAt: (/* @__PURE__ */new Date()).toISOString()
                };
                this.popupStack = [popupState];
                history.replaceState({
                  type: "popup",
                  popup: popupState,
                  stack: this.popupStack,
                  path: path
                }, "", url.toString());
                this.renderCurrentPath();
                this.renderPopup(popupState);
              } else {
                history.replaceState({
                  type: "page",
                  path: path,
                  data: {}
                }, "", window.location.href);
                this.renderCurrentPath();
              }
            }
            /**
             * 현재 경로에 맞는 페이지 렌더링
             */
          }, {
            key: "renderCurrentPath",
            value: function renderCurrentPath() {
              var path = window.location.pathname;
              var handler = this.routes.get(path);
              document.querySelectorAll(".spa-popup").forEach(function (popup) {
                popup.style.display = "none";
              });
              if (handler) {
                var _history$state;
                handler(path, ((_history$state = history.state) === null || _history$state === void 0 ? void 0 : _history$state.data) || {});
              } else if (this.notFoundHandler) {
                this.notFoundHandler(path, {});
              } else if (this.defaultRoute) {
                this.defaultRoute(path, {});
              } else {
                console.error("No handler found for path: ".concat(path));
              }
            }
            /**
             * 팝업 렌더링
             */
          }, {
            key: "renderPopup",
            value: function renderPopup(popupState) {
              var handler = this.popupHandlers.get(popupState.id);
              if (!handler) return;
              if (handler.onOpen) {
                handler.onOpen(popupState.data);
              }
              this.updatePopupUI();
            }
            /**
             * 팝업 UI 업데이트
             */
          }, {
            key: "updatePopupUI",
            value: function updatePopupUI() {
              var _this = this;
              document.querySelectorAll(".spa-popup").forEach(function (popup) {
                popup.style.display = "none";
              });
              this.popupStack.forEach(function (popup, index) {
                var handler = _this.popupHandlers.get(popup.id);
                if (!handler || !handler.element) return;
                var element = handler.element;
                element.style.display = "block";
                element.style.zIndex = "".concat(1e3 + index);
                if (handler.onUpdate) {
                  handler.onUpdate(popup.data);
                }
              });
            }
          }]);
        }();
        var typescriptLogo = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='32'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23007ACC'%20d='M0%20128v128h256V0H0z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='m56.612%20128.85l-.081%2010.483h33.32v94.68h23.568v-94.68h33.321v-10.28c0-5.69-.122-10.444-.284-10.566c-.122-.162-20.4-.244-44.983-.203l-44.74.122l-.121%2010.443Zm149.955-10.742c6.501%201.625%2011.459%204.51%2016.01%209.224c2.357%202.52%205.851%207.111%206.136%208.208c.08.325-11.053%207.802-17.798%2011.988c-.244.162-1.22-.894-2.317-2.52c-3.291-4.795-6.745-6.867-12.028-7.233c-7.76-.528-12.759%203.535-12.718%2010.321c0%201.992.284%203.17%201.097%204.795c1.707%203.536%204.876%205.649%2014.832%209.956c18.326%207.883%2026.168%2013.084%2031.045%2020.48c5.445%208.249%206.664%2021.415%202.966%2031.208c-4.063%2010.646-14.14%2017.879-28.323%2020.276c-4.388.772-14.79.65-19.504-.203c-10.28-1.828-20.033-6.908-26.047-13.572c-2.357-2.6-6.949-9.387-6.664-9.874c.122-.163%201.178-.813%202.356-1.504c1.138-.65%205.446-3.129%209.509-5.485l7.355-4.267l1.544%202.276c2.154%203.29%206.867%207.801%209.712%209.305c8.167%204.307%2019.383%203.698%2024.909-1.26c2.357-2.153%203.332-4.388%203.332-7.68c0-2.966-.366-4.266-1.91-6.501c-1.99-2.845-6.054-5.242-17.595-10.24c-13.206-5.69-18.895-9.224-24.096-14.832c-3.007-3.25-5.852-8.452-7.03-12.8c-.975-3.617-1.22-12.678-.447-16.335c2.723-12.76%2012.353-21.659%2026.25-24.3c4.51-.853%2014.994-.528%2019.424.569Z'%3e%3c/path%3e%3c/svg%3e";
        var viteLogo = "/vite.svg";
        var navigator = new SpaNavigator();
        var fruitPrices = /* @__PURE__ */new Map();
        fruitPrices.set("Apple", 1.99);
        fruitPrices.set("Banana", 0.99);
        fruitPrices.set("Orange", 2.49);
        fruitPrices.set("Mango", 3.99);
        var veggiePricesObj = {
          Carrot: 1.49,
          Broccoli: 2.99,
          Spinach: 3.49
        };
        var veggiePrices = new Map(Object.entries(veggiePricesObj));
        var allProducts = new Map([].concat(_toConsumableArray(fruitPrices), _toConsumableArray(veggiePrices)));
        document.body.innerHTML = "\n  <div id=\"app-container\">\n    <div id=\"page-container\"></div>\n    \n    <!-- Popups -->\n    <div id=\"product-details-popup\" class=\"spa-popup\">\n      <div class=\"popup-content\">\n        <div class=\"popup-header\">\n          <h2 id=\"popup-product-name\">Product Details</h2>\n          <button class=\"close-button\">\xD7</button>\n        </div>\n        <div class=\"popup-body\">\n          <p id=\"popup-product-price\"></p>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.</p>\n        </div>\n      </div>\n    </div>\n    \n    <div id=\"settings-popup\" class=\"spa-popup\">\n      <div class=\"popup-content\">\n        <div class=\"popup-header\">\n          <h2>Settings</h2>\n          <button class=\"close-button\">\xD7</button>\n        </div>\n        <div class=\"popup-body\">\n          <h3>Theme</h3>\n          <select>\n            <option>Light</option>\n            <option>Dark</option>\n            <option>System</option>\n          </select>\n          <h3>Language</h3>\n          <select>\n            <option>English</option>\n            <option>Korean</option>\n            <option>Spanish</option>\n          </select>\n        </div>\n      </div>\n    </div>\n    \n    <!-- Bottom Navigation -->\n    <nav id=\"bottom-nav\">\n      <button class=\"nav-btn\" data-path=\"/\">Home</button>\n      <button class=\"nav-btn\" data-path=\"/products\">Products</button>\n      <button class=\"nav-btn\" data-path=\"/about\">About</button>\n      <button id=\"settings-btn\">Settings</button>\n    </nav>\n  </div>\n";
        var styleSheet = document.createElement("style");
        styleSheet.textContent = "\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n  }\n  \n  #app-container {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n    max-width: 100%;\n    overflow-x: hidden;\n  }\n  \n  #page-container {\n    flex: 1;\n    overflow-y: auto;\n    padding: 20px;\n    padding-bottom: 80px; /* Space for bottom nav */\n  }\n  \n  .page-header {\n    display: flex;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n  \n  .page-header img {\n    height: 30px;\n    margin-right: 10px;\n  }\n  \n  .product-item {\n    padding: 15px;\n    margin-bottom: 10px;\n    border-radius: 8px;\n    background-color: #f8f9fa;\n    border-left: 4px solid #0095ff;\n    display: flex;\n    justify-content: space-between;\n  }\n  \n  /* Bottom navigation */\n  #bottom-nav {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    display: flex;\n    background-color: #fff;\n    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);\n    z-index: 100;\n  }\n  \n  .nav-btn {\n    flex: 1;\n    padding: 15px 5px;\n    border: none;\n    background: none;\n    font-size: 14px;\n    color: #666;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  \n  .nav-btn.active {\n    color: #0095ff;\n    font-weight: bold;\n  }\n  \n  /* Popup styles */\n  .spa-popup {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.5);\n    display: none;\n    justify-content: center;\n    align-items: flex-end;\n    z-index: 1000;\n  }\n  \n  .popup-content {\n    background: white;\n    width: 100%;\n    max-height: 80%;\n    border-radius: 12px 12px 0 0;\n    overflow: hidden;\n    animation: slide-up 0.3s ease-out;\n  }\n  \n  .popup-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 16px;\n    border-bottom: 1px solid #eee;\n  }\n  \n  .popup-body {\n    padding: 20px;\n    overflow-y: auto;\n  }\n  \n  .close-button {\n    border: none;\n    background: none;\n    font-size: 24px;\n    cursor: pointer;\n  }\n  \n  @keyframes slide-up {\n    from { transform: translateY(100%); }\n    to { transform: translateY(0); }\n  }\n";
        document.head.appendChild(styleSheet);
        navigator.route("/", function (_path, _data) {
          var _document$querySelect;
          document.querySelector("#page-container").innerHTML = "\n    <div class=\"page-header\">\n      <img src=\"".concat(viteLogo, "\" alt=\"Vite logo\" />\n      <h1>Home</h1>\n    </div>\n    <p>Welcome to our mobile app example using SpaNavigator!</p>\n    \n    <h2>Featured Products</h2>\n    <div class=\"product-item\" data-product=\"Apple\">\n      <span>Apple</span>\n      <span>$1.99</span>\n    </div>\n    <div class=\"product-item\" data-product=\"Carrot\">\n      <span>Carrot</span>\n      <span>$1.49</span>\n    </div>\n    \n    <h2>Today's Special</h2>\n    <div class=\"product-item special\" data-product=\"Banana\">\n      <span>Banana</span>\n      <span>$0.99 <small>20% OFF!</small></span>\n    </div>\n    \n    <!-- New Button Added -->\n    <div style=\"margin-top: 30px; text-align: center;\">\n      <button id=\"show-random-product\" style=\"background-color: #0095ff; color: white;\">\n        Show Random Product Price\n      </button>\n    </div>\n  ");
          (_document$querySelect = document.querySelector("#show-random-product")) === null || _document$querySelect === void 0 || _document$querySelect.addEventListener("click", function () {
            var _allProducts$get;
            var products = Array.from(allProducts.keys());
            var randomIndex = Math.floor(Math.random() * products.length);
            var randomProduct = products[randomIndex];
            var price = (_allProducts$get = allProducts === null || allProducts === void 0 ? void 0 : allProducts.get(randomProduct)) !== null && _allProducts$get !== void 0 ? _allProducts$get : "Price not available";
            alert("Random Product: ".concat(randomProduct !== null && randomProduct !== void 0 ? randomProduct : "Unknown Product", "\nPrice: $").concat(price));
          });
          highlightCurrentNav("/");
          setupProductItemListeners();
        });
        navigator.route("/products", function (path, data) {
          var productsHTML = Array.from(allProducts.entries()).map(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
              product = _ref2[0],
              price = _ref2[1];
            return "\n      <div class=\"product-item\" data-product=\"".concat(product, "\">\n        <span>").concat(product, "</span>\n        <span>$").concat(price, "</span>\n      </div>\n    ");
          }).join("");
          document.querySelector("#page-container").innerHTML = "\n    <div class=\"page-header\">\n      <img src=\"".concat(typescriptLogo, "\" alt=\"TypeScript logo\" />\n      <h1>Products</h1>\n    </div>\n    <p>Browse our catalog of fresh products:</p>\n    \n    <div id=\"products-list\">\n      ").concat(productsHTML, "\n    </div>\n  ");
          highlightCurrentNav("/products");
          setupProductItemListeners();
        });
        navigator.route("/about", function (path, data) {
          document.querySelector("#page-container").innerHTML = "\n    <div class=\"page-header\">\n      <img src=\"".concat(viteLogo, "\" alt=\"Vite logo\" />\n      <h1>About</h1>\n    </div>\n    <p>This is a simple SPA example using custom router with history API integration.</p>\n    <p>Features demonstrated:</p>\n    <ul>\n      <li>Page navigation with history support</li>\n      <li>Mobile-friendly popup system</li>\n      <li>Map and Set usage for data management</li>\n    </ul>\n    <p>Built with Vite and TypeScript, optimized for iOS 12+</p>\n  ");
          highlightCurrentNav("/about");
        });
        navigator.setNotFoundHandler(function (path, data) {
          var _document$querySelect2;
          document.querySelector("#page-container").innerHTML = "\n    <h1>Page Not Found</h1>\n    <p>The path \"".concat(path, "\" doesn't exist.</p>\n    <button id=\"back-home\">Back to Home</button>\n  ");
          (_document$querySelect2 = document.querySelector("#back-home")) === null || _document$querySelect2 === void 0 || _document$querySelect2.addEventListener("click", function () {
            navigator.navigate("/");
          });
        });
        var productDetailsPopup = {
          element: document.querySelector("#product-details-popup"),
          onOpen: function onOpen(data) {
            document.querySelector("#popup-product-name").textContent = data.name;
            document.querySelector("#popup-product-price").textContent = "Price: $".concat(data.price);
          },
          onClose: function onClose() {
            console.log("Product details popup closed");
          }
        };
        var settingsPopup = {
          element: document.querySelector("#settings-popup"),
          onOpen: function onOpen(data) {
            console.log("Settings opened");
          }
        };
        navigator.registerPopup("product-details", productDetailsPopup);
        navigator.registerPopup("settings", settingsPopup);
        function setupNavigation() {
          var _document$querySelect3;
          document.querySelectorAll(".nav-btn").forEach(function (btn) {
            btn.addEventListener("click", function (e) {
              var path = e.currentTarget.dataset.path;
              if (path) navigator.navigate(path);
            });
          });
          (_document$querySelect3 = document.querySelector("#settings-btn")) === null || _document$querySelect3 === void 0 || _document$querySelect3.addEventListener("click", function () {
            navigator.openPopup("settings", {});
          });
          document.querySelectorAll(".close-button").forEach(function (btn) {
            btn.addEventListener("click", function () {
              navigator.closePopup();
            });
          });
        }
        function highlightCurrentNav(path) {
          document.querySelectorAll(".nav-btn").forEach(function (btn) {
            if (btn.dataset.path === path) {
              btn.classList.add("active");
            } else {
              btn.classList.remove("active");
            }
          });
        }
        function setupProductItemListeners() {
          document.querySelectorAll(".product-item").forEach(function (item) {
            item.addEventListener("click", function (e) {
              var productName = e.currentTarget.dataset.product;
              if (productName) {
                var price = allProducts.get(productName) || 0;
                navigator.openPopup("product-details", {
                  name: productName,
                  price: price
                });
              }
            });
          });
        }
        setupNavigation();
        if (document.readyState === "complete") {
          navigator.refresh();
        } else {
          window.addEventListener("load", function () {
            navigator.refresh();
          });
        }
      }
    };
  });
})();
//# sourceMappingURL=index-legacy-DlYgnVs5.js.map
