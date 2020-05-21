(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!**************************************!*\
  !*** multi ./website/src/js/main.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mat/Sites/jekyll/budget-app/website/src/js/main.js */"hyXs");


/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "E4hX":
/*!*******************************************!*\
  !*** ./website/src/js/modules/helpers.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(breakpoints, browser) {/* eslint-disable no-undef */

/* eslint-disable no-plusplus */

/* eslint-disable no-multi-assign */
// Avoid `console` errors in browsers that lack a console.
;

(function () {
  var method;

  var noop = function noop() {};

  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = window.console = window.console || {};

  while (length--) {
    method = methods[length]; // Only stub undefined methods.

    if (!console[method]) {
      console[method] = noop;
    }
  }
})(); // Add tabbing indicator to window


var handleFirstTab = function handleFirstTab(e) {
  if (e.keyCode === 9) {
    // the "I am a keyboard user" key
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
};

window.addEventListener('keydown', handleFirstTab); // Detect if mobile or desktop.

var body = document.getElementsByTagName('body');
breakpoints({
  xlarge: ['1281px', '1680px'],
  large: ['981px', '1280px'],
  medium: ['737px', '980px'],
  small: ['481px', '736px'],
  xsmall: [null, '480px']
});

if (browser.mobile) {
  body.classList.add('is-mobile');
} else {
  breakpoints.on('>medium', function () {
    body.classList.remove('is-mobile');
    body.classList.add('is-desktop');
  });
  breakpoints.on('<=medium', function () {
    body.classList.remove('is-desktop');
    body.classList.add('is-mobile');
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! breakpoints */ "a6Qp"), __webpack_require__(/*! browser */ "txRt")))

/***/ }),

/***/ "a6Qp":
/*!******************************!*\
  !*** external "breakpoints" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = breakpoints;

/***/ }),

/***/ "hyXs":
/*!********************************!*\
  !*** ./website/src/js/main.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(browser) {/* harmony import */ var airbnb_browser_shims__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! airbnb-browser-shims */ "OuUZ");
/* harmony import */ var airbnb_browser_shims__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(airbnb_browser_shims__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/helpers */ "E4hX");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_helpers__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable no-undef */
// External
 // Internal


var body = document.getElementsByTagName('body');
var html = document.getElementsByTagName('html'); // Remove loading class from body on window load.

window.onload = function () {
  window.setTimeout(function () {
    body.classList.remove('is-loading');
  }, 100);
};

html.setAttribute('data-browser', browser.name); // LocalStorage.

if (typeof localStorage !== 'undefined') {
  if (localStorage.getItem('theme')) {
    var theme = localStorage.getItem('theme');
    body.removeAttribute('data-theme', 'light');
    body.removeAttribute('data-theme', 'dark');
    body.setAttribute('data-theme', theme);
  }
} // set dark mode if user's system prefers it.


if (window.matchMedia) {
  if (true) {
    console.log('supports matchmedia');
  }

  if (matchMedia('(prefers-color-scheme: dark)').matches && localStorage.getItem('theme') === null) {
    if (true) {
      console.log('prefers dark');
    }

    body.removeAttribute('data-theme', 'light');
    body.setAttribute('data-theme', 'dark');
  }
} // Switch between dark and light mode.


var switchTheme = document.getElementById('switch-theme');
switchTheme.addEventListener('click', function (e) {
  e.preventDefault();
  body.classList.add('color-theme-in-transition');

  if (body.getAttribute('data-theme') === 'light') {
    body.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }

  window.setTimeout(function () {
    body.classList.remove('color-theme-in-transition');
  }, 1500);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! browser */ "txRt")))

/***/ }),

/***/ "txRt":
/*!**************************!*\
  !*** external "browser" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = browser;

/***/ })

},[[0,"runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsLmluc3BlY3QgKGlnbm9yZWQpIiwid2VicGFjazovLy8uL3dlYnNpdGUvc3JjL2pzL21vZHVsZXMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJicmVha3BvaW50c1wiIiwid2VicGFjazovLy8uL3dlYnNpdGUvc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnJvd3NlclwiIl0sIm5hbWVzIjpbIm1ldGhvZCIsIm5vb3AiLCJtZXRob2RzIiwibGVuZ3RoIiwiY29uc29sZSIsIndpbmRvdyIsImhhbmRsZUZpcnN0VGFiIiwiZSIsImtleUNvZGUiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYnJlYWtwb2ludHMiLCJ4bGFyZ2UiLCJsYXJnZSIsIm1lZGl1bSIsInNtYWxsIiwieHNtYWxsIiwiYnJvd3NlciIsIm1vYmlsZSIsIm9uIiwicmVtb3ZlIiwiaHRtbCIsIm9ubG9hZCIsInNldFRpbWVvdXQiLCJzZXRBdHRyaWJ1dGUiLCJuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRoZW1lIiwicmVtb3ZlQXR0cmlidXRlIiwibWF0Y2hNZWRpYSIsInByb2Nlc3MiLCJsb2ciLCJtYXRjaGVzIiwic3dpdGNoVGhlbWUiLCJnZXRFbGVtZW50QnlJZCIsInByZXZlbnREZWZhdWx0IiwiZ2V0QXR0cmlidXRlIiwic2V0SXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZTs7Ozs7Ozs7Ozs7QUNBQTs7QUFDQTs7QUFDQTtBQUVBO0FBQ0E7O0FBQUMsQ0FBQyxZQUFNO0FBQ04sTUFBSUEsTUFBSjs7QUFDQSxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNLENBQUUsQ0FBckI7O0FBQ0EsTUFBTUMsT0FBTyxHQUFH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QUFDekIsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsVUFBQ1AsQ0FBRCxFQUFPO0FBQzNDQSxHQUFDLENBQUNrQyxjQUFGO0FBRUEvQixNQUFJLENBQUNDLFNBQUwsQ0FBZUMsR0FBZixDQUFtQiwyQkFBbkI7O0FBQ0EsTUFBSUYsSUFBSSxDQUFDZ0MsWUFBTCxDQUFrQixZQUFsQixNQUFvQyxPQUF4QyxFQUFpRDtBQUMvQ2hDLFFBQUksQ0FBQ21CLFlBQUwsQ0FBa0IsWUFBbEIsRUFBZ0MsTUFBaEM7QUFDQUUsZ0JBQVksQ0FBQ1ksT0FBYixDQUFxQixPQUFyQixFQUE4QixNQUE5QjtBQUNELEdBSEQsTUFHTztBQUNMakMsUUFBSSxDQUFDbUIsWUFBTCxDQUFrQixZQUFsQixFQUFnQyxPQUFoQztBQUNBRSxnQkFBWSxDQUFDWSxPQUFiLENBQXFCLE9BQXJCLEVBQThCLE9BQTlCO0FBQ0Q7O0FBQ0R0QyxRQUFNLENBQUN1QixVQUFQLENBQWtCLFlBQU07QUFDdEJsQixRQUFJLENBQUNDLFNBQUwsQ0FBZWMsTUFBZixDQUFzQiwyQkFBdEI7QUFDRCxHQUZELEVBRUcsSUFGSDtBQUdELENBZEQsRTs7Ozs7Ozs7Ozs7O0FDbERBLHlCIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKGlnbm9yZWQpICovIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1tdWx0aS1hc3NpZ24gKi9cblxuLy8gQXZvaWQgYGNvbnNvbGVgIGVycm9ycyBpbiBicm93c2VycyB0aGF0IGxhY2sgYSBjb25zb2xlLlxuOygoKSA9PiB7XG4gIGxldCBtZXRob2RcbiAgY29uc3Qgbm9vcCA9ICgpID0+IHt9XG4gIGNvbnN0IG1ldGhvZHMgPSBbXG4gICAgJ2Fzc2VydCcsXG4gICAgJ2NsZWFyJyxcbiAgICAnY291bnQnLFxuICAgICdkZWJ1ZycsXG4gICAgJ2RpcicsXG4gICAgJ2RpcnhtbCcsXG4gICAgJ2Vycm9yJyxcbiAgICAnZXhjZXB0aW9uJyxcbiAgICAnZ3JvdXAnLFxuICAgICdncm91cENvbGxhcHNlZCcsXG4gICAgJ2dyb3VwRW5kJyxcbiAgICAnaW5mbycsXG4gICAgJ2xvZycsXG4gICAgJ21hcmtUaW1lbGluZScsXG4gICAgJ3Byb2ZpbGUnLFxuICAgICdwcm9maWxlRW5kJyxcbiAgICAndGFibGUnLFxuICAgICd0aW1lJyxcbiAgICAndGltZUVuZCcsXG4gICAgJ3RpbWVsaW5lJyxcbiAgICAndGltZWxpbmVFbmQnLFxuICAgICd0aW1lU3RhbXAnLFxuICAgICd0cmFjZScsXG4gICAgJ3dhcm4nLFxuICBdXG4gIGxldCB7IGxlbmd0aCB9ID0gbWV0aG9kc1xuICBjb25zdCBjb25zb2xlID0gKHdpbmRvdy5jb25zb2xlID0gd2luZG93LmNvbnNvbGUgfHwge30pXG5cbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgbWV0aG9kID0gbWV0aG9kc1tsZW5ndGhdXG5cbiAgICAvLyBPbmx5IHN0dWIgdW5kZWZpbmVkIG1ldGhvZHMuXG4gICAgaWYgKCFjb25zb2xlW21ldGhvZF0pIHtcbiAgICAgIGNvbnNvbGVbbWV0aG9kXSA9IG5vb3BcbiAgICB9XG4gIH1cbn0pKClcblxuLy8gQWRkIHRhYmJpbmcgaW5kaWNhdG9yIHRvIHdpbmRvd1xuY29uc3QgaGFuZGxlRmlyc3RUYWIgPSAoZSkgPT4ge1xuICBpZiAoZS5rZXlDb2RlID09PSA5KSB7XG4gICAgLy8gdGhlIFwiSSBhbSBhIGtleWJvYXJkIHVzZXJcIiBrZXlcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3VzZXItaXMtdGFiYmluZycpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVGaXJzdFRhYilcbiAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUZpcnN0VGFiKVxuXG4vLyBEZXRlY3QgaWYgbW9iaWxlIG9yIGRlc2t0b3AuXG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpXG5icmVha3BvaW50cyh7XG4gIHhsYXJnZTogWycxMjgxcHgnLCAnMTY4MHB4J10sXG4gIGxhcmdlOiBbJzk4MXB4JywgJzEyODBweCddLFxuICBtZWRpdW06IFsnNzM3cHgnLCAnOTgwcHgnXSxcbiAgc21hbGw6IFsnNDgxcHgnLCAnNzM2cHgnXSxcbiAgeHNtYWxsOiBbbnVsbCwgJzQ4MHB4J10sXG59KVxuXG5pZiAoYnJvd3Nlci5tb2JpbGUpIHtcbiAgYm9keS5jbGFzc0xpc3QuYWRkKCdpcy1tb2JpbGUnKVxufSBlbHNlIHtcbiAgYnJlYWtwb2ludHMub24oJz5tZWRpdW0nLCAoKSA9PiB7XG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1tb2JpbGUnKVxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnaXMtZGVza3RvcCcpXG4gIH0pXG4gIGJyZWFrcG9pbnRzLm9uKCc8PW1lZGl1bScsICgpID0+IHtcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWRlc2t0b3AnKVxuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnaXMtbW9iaWxlJylcbiAgfSlcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gYnJlYWtwb2ludHM7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cblxuLy8gRXh0ZXJuYWxcbmltcG9ydCAnYWlyYm5iLWJyb3dzZXItc2hpbXMnXG5cbi8vIEludGVybmFsXG5pbXBvcnQgJy4vbW9kdWxlcy9oZWxwZXJzJ1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVxuY29uc3QgaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylcblxuLy8gUmVtb3ZlIGxvYWRpbmcgY2xhc3MgZnJvbSBib2R5IG9uIHdpbmRvdyBsb2FkLlxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtbG9hZGluZycpXG4gIH0sIDEwMClcbn1cblxuaHRtbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtYnJvd3NlcicsIGJyb3dzZXIubmFtZSlcblxuLy8gTG9jYWxTdG9yYWdlLlxuaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSkge1xuICAgIGNvbnN0IHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJylcbiAgICBib2R5LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS10aGVtZScsICdsaWdodCcpXG4gICAgYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCAnZGFyaycpXG4gICAgYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCB0aGVtZSlcbiAgfVxufVxuXG4vLyBzZXQgZGFyayBtb2RlIGlmIHVzZXIncyBzeXN0ZW0gcHJlZmVycyBpdC5cbmlmICh3aW5kb3cubWF0Y2hNZWRpYSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnNvbGUubG9nKCdzdXBwb3J0cyBtYXRjaG1lZGlhJylcbiAgfVxuICBpZiAoXG4gICAgbWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMgJiZcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSA9PT0gbnVsbFxuICApIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5sb2coJ3ByZWZlcnMgZGFyaycpXG4gICAgfVxuICAgIGJvZHkucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2xpZ2h0JylcbiAgICBib2R5LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsICdkYXJrJylcbiAgfVxufVxuXG4vLyBTd2l0Y2ggYmV0d2VlbiBkYXJrIGFuZCBsaWdodCBtb2RlLlxuY29uc3Qgc3dpdGNoVGhlbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoLXRoZW1lJylcblxuc3dpdGNoVGhlbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KClcblxuICBib2R5LmNsYXNzTGlzdC5hZGQoJ2NvbG9yLXRoZW1lLWluLXRyYW5zaXRpb24nKVxuICBpZiAoYm9keS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnKSA9PT0gJ2xpZ2h0Jykge1xuICAgIGJvZHkuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lJywgJ2RhcmsnKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdkYXJrJylcbiAgfSBlbHNlIHtcbiAgICBib2R5LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsICdsaWdodCcpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2xpZ2h0JylcbiAgfVxuICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdjb2xvci10aGVtZS1pbi10cmFuc2l0aW9uJylcbiAgfSwgMTUwMClcbn0pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGJyb3dzZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==