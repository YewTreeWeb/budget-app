(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!**************************************!*\
  !*** multi ./website/src/js/main.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mat/Sites/Jekyll/budget-app/website/src/js/main.js */"hyXs");


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

/* WEBPACK VAR INJECTION */(function(browser, breakpoints) {/* eslint-disable no-undef */

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

window.addEventListener('keydown', handleFirstTab); // Add a brower indicator to the HTML element.

var html = document.querySelector('html');
html.setAttribute('data-browser', browser.name); // Detect if mobile or desktop.

var body = document.querySelector('body');
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! browser */ "txRt"), __webpack_require__(/*! breakpoints */ "a6Qp")))

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
/* harmony import */ var airbnb_browser_shims__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! airbnb-browser-shims */ "OuUZ");
/* harmony import */ var airbnb_browser_shims__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(airbnb_browser_shims__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/helpers */ "E4hX");
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_helpers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_budgetcontroller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/budgetcontroller */ "xVb/");
/* eslint-disable no-undef */
// External
 // Internal


 // Remove loading class from body on window load.

var body = document.querySelector('body');

if (true) {
  console.log(Array.from(document.getElementsByTagName('body')));
  console.log(Array.from(document.getElementsByTagName('body')[0]));
  console.log(document.querySelector('body'));
}

window.onload = function () {
  window.setTimeout(function () {
    body.classList.remove('is-loading');
  }, 100);
}; //

/***/ }),

/***/ "txRt":
/*!**************************!*\
  !*** external "browser" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = browser;

/***/ }),

/***/ "xVb/":
/*!****************************************************!*\
  !*** ./website/src/js/modules/budgetcontroller.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var budgetController = function () {
  var x = 23;

  var add = function add(a) {
    return x + a;
  };

  return {
    publicTest: function publicTest(b) {
      console.log(add(b));
    }
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (budgetController);

/***/ })

},[[0,"runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlsLmluc3BlY3QgKGlnbm9yZWQpIiwid2VicGFjazovLy8uL3dlYnNpdGUvc3JjL2pzL21vZHVsZXMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJicmVha3BvaW50c1wiIiwid2VicGFjazovLy8uL3dlYnNpdGUvc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYnJvd3NlclwiIiwid2VicGFjazovLy8uL3dlYnNpdGUvc3JjL2pzL21vZHVsZXMvYnVkZ2V0Y29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJtZXRob2QiLCJub29wIiwibWV0aG9kcyIsImxlbmd0aCIsImNvbnNvbGUiLCJ3aW5kb3ciLCJoYW5kbGVGaXJzdFRhYiIsImUiLCJrZXlDb2RlIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJodG1sIiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsImJyb3dzZXIiLCJuYW1lIiwiYnJlYWtwb2ludHMiLCJ4bGFyZ2UiLCJsYXJnZSIsIm1lZGl1bSIsInNtYWxsIiwieHNtYWxsIiwibW9iaWxlIiwib24iLCJyZW1vdmUiLCJwcm9jZXNzIiwibG9nIiwiQXJyYXkiLCJmcm9tIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJvbmxvYWQiLCJzZXRUaW1lb3V0IiwiYnVkZ2V0Q29udHJvbGxlciIsIngiLCJhIiwicHVibGljVGVzdCIsImIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGU7Ozs7Ozs7Ozs7O0FDQUE7O0FBQ0E7O0FBQ0E7QUFFQTtBQUNBOztBQUFDLENBQUMsWUFBTTtBQUNOLE1BQUlBLE1BQUo7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQUNBLE1BQU1DLE9BQU8sR0FBRyxDQUNkLFFBRGMsRUFF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YSxJQUFKLEVBQTJDO0FBQ3pDekIsU0FBTyxDQUFDMEIsR0FBUixDQUFZQyxLQUFLLENBQUNDLElBQU4sQ0FBV3ZCLFFBQVEsQ0FBQ3dCLG9CQUFULENBQThCLE1BQTlCLENBQVgsQ0FBWjtBQUNBN0IsU0FBTyxDQUFDMEIsR0FBUixDQUFZQyxLQUFLLENBQUNDLElBQU4sQ0FBV3ZCLFFBQVEsQ0FBQ3dCLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQVgsQ0FBWjtBQUNBN0IsU0FBTyxDQUFDMEIsR0FBUixDQUFZckIsUUFBUSxDQUFDTyxhQUFULENBQXVCLE1BQXZCLENBQVo7QUFDRDs7QUFFRFgsTUFBTSxDQUFDNkIsTUFBUCxHQUFnQixZQUFNO0FBQ3BCN0IsUUFBTSxDQUFDOEIsVUFBUCxDQUFrQixZQUFNO0FBQ3RCekIsUUFBSSxDQUFDQyxTQUFMLENBQWVpQixNQUFmLENBQXNCLFlBQXRCO0FBQ0QsR0FGRCxFQUVHLEdBRkg7QUFHRCxDQUpELEMsQ0FNQSxFOzs7Ozs7Ozs7OztBQ3hCQSx5Qjs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQSxJQUFNUSxnQkFBZ0IsR0FBSSxZQUFNO0FBQzlCLE1BQU1DLENBQUMsR0FBRyxFQUFWOztBQUVBLE1BQU16QixHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDMEIsQ0FBRCxFQUFPO0FBQ2pCLFdBQU9ELENBQUMsR0FBR0MsQ0FBWDtBQUNELEdBRkQ7O0FBSUEsU0FBTztBQUNMQyxjQURLLHNCQUNNQyxDQUROLEVBQ1M7QUFDWnBDLGFBQU8sQ0FBQzBCLEdBQVIsQ0FBWWxCLEdBQUcsQ0FBQzRCLENBQUQsQ0FBZjtBQUNEO0FBSEksR0FBUDtBQUtELENBWndCLEVBQXpCOztBQWNlSiwrRUFBZixFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKGlnbm9yZWQpICovIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXBsdXNwbHVzICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1tdWx0aS1hc3NpZ24gKi9cblxuLy8gQXZvaWQgYGNvbnNvbGVgIGVycm9ycyBpbiBicm93c2VycyB0aGF0IGxhY2sgYSBjb25zb2xlLlxuOygoKSA9PiB7XG4gIGxldCBtZXRob2RcbiAgY29uc3Qgbm9vcCA9ICgpID0+IHt9XG4gIGNvbnN0IG1ldGhvZHMgPSBbXG4gICAgJ2Fzc2VydCcsXG4gICAgJ2NsZWFyJyxcbiAgICAnY291bnQnLFxuICAgICdkZWJ1ZycsXG4gICAgJ2RpcicsXG4gICAgJ2RpcnhtbCcsXG4gICAgJ2Vycm9yJyxcbiAgICAnZXhjZXB0aW9uJyxcbiAgICAnZ3JvdXAnLFxuICAgICdncm91cENvbGxhcHNlZCcsXG4gICAgJ2dyb3VwRW5kJyxcbiAgICAnaW5mbycsXG4gICAgJ2xvZycsXG4gICAgJ21hcmtUaW1lbGluZScsXG4gICAgJ3Byb2ZpbGUnLFxuICAgICdwcm9maWxlRW5kJyxcbiAgICAndGFibGUnLFxuICAgICd0aW1lJyxcbiAgICAndGltZUVuZCcsXG4gICAgJ3RpbWVsaW5lJyxcbiAgICAndGltZWxpbmVFbmQnLFxuICAgICd0aW1lU3RhbXAnLFxuICAgICd0cmFjZScsXG4gICAgJ3dhcm4nLFxuICBdXG4gIGxldCB7IGxlbmd0aCB9ID0gbWV0aG9kc1xuICBjb25zdCBjb25zb2xlID0gKHdpbmRvdy5jb25zb2xlID0gd2luZG93LmNvbnNvbGUgfHwge30pXG5cbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgbWV0aG9kID0gbWV0aG9kc1tsZW5ndGhdXG5cbiAgICAvLyBPbmx5IHN0dWIgdW5kZWZpbmVkIG1ldGhvZHMuXG4gICAgaWYgKCFjb25zb2xlW21ldGhvZF0pIHtcbiAgICAgIGNvbnNvbGVbbWV0aG9kXSA9IG5vb3BcbiAgICB9XG4gIH1cbn0pKClcblxuLy8gQWRkIHRhYmJpbmcgaW5kaWNhdG9yIHRvIHdpbmRvd1xuY29uc3QgaGFuZGxlRmlyc3RUYWIgPSAoZSkgPT4ge1xuICBpZiAoZS5rZXlDb2RlID09PSA5KSB7XG4gICAgLy8gdGhlIFwiSSBhbSBhIGtleWJvYXJkIHVzZXJcIiBrZXlcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ3VzZXItaXMtdGFiYmluZycpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVGaXJzdFRhYilcbiAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUZpcnN0VGFiKVxuXG4vLyBBZGQgYSBicm93ZXIgaW5kaWNhdG9yIHRvIHRoZSBIVE1MIGVsZW1lbnQuXG5jb25zdCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpXG5odG1sLnNldEF0dHJpYnV0ZSgnZGF0YS1icm93c2VyJywgYnJvd3Nlci5uYW1lKVxuXG4vLyBEZXRlY3QgaWYgbW9iaWxlIG9yIGRlc2t0b3AuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5cbmJyZWFrcG9pbnRzKHtcbiAgeGxhcmdlOiBbJzEyODFweCcsICcxNjgwcHgnXSxcbiAgbGFyZ2U6IFsnOTgxcHgnLCAnMTI4MHB4J10sXG4gIG1lZGl1bTogWyc3MzdweCcsICc5ODBweCddLFxuICBzbWFsbDogWyc0ODFweCcsICc3MzZweCddLFxuICB4c21hbGw6IFtudWxsLCAnNDgwcHgnXSxcbn0pXG5cbmlmIChicm93c2VyLm1vYmlsZSkge1xuICBib2R5LmNsYXNzTGlzdC5hZGQoJ2lzLW1vYmlsZScpXG59IGVsc2Uge1xuICBicmVha3BvaW50cy5vbignPm1lZGl1bScsICgpID0+IHtcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLW1vYmlsZScpXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdpcy1kZXNrdG9wJylcbiAgfSlcbiAgYnJlYWtwb2ludHMub24oJzw9bWVkaXVtJywgKCkgPT4ge1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtZGVza3RvcCcpXG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdpcy1tb2JpbGUnKVxuICB9KVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBicmVha3BvaW50czsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuXG4vLyBFeHRlcm5hbFxuaW1wb3J0ICdhaXJibmItYnJvd3Nlci1zaGltcydcblxuLy8gSW50ZXJuYWxcbmltcG9ydCAnLi9tb2R1bGVzL2hlbHBlcnMnXG5pbXBvcnQgYnVkZ2V0Q29udHJvbGxlciBmcm9tICcuL21vZHVsZXMvYnVkZ2V0Y29udHJvbGxlcidcblxuLy8gUmVtb3ZlIGxvYWRpbmcgY2xhc3MgZnJvbSBib2R5IG9uIHdpbmRvdyBsb2FkLlxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBjb25zb2xlLmxvZyhBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JykpKVxuICBjb25zb2xlLmxvZyhBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0pKVxuICBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykpXG59XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvYWRpbmcnKVxuICB9LCAxMDApXG59XG5cbi8vXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGJyb3dzZXI7IiwiY29uc3QgYnVkZ2V0Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGNvbnN0IHggPSAyM1xuXG4gIGNvbnN0IGFkZCA9IChhKSA9PiB7XG4gICAgcmV0dXJuIHggKyBhXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHB1YmxpY1Rlc3QoYikge1xuICAgICAgY29uc29sZS5sb2coYWRkKGIpKVxuICAgIH0sXG4gIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgYnVkZ2V0Q29udHJvbGxlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==