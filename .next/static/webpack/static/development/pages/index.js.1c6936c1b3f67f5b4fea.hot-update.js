webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Results/Result/index.js":
/*!********************************************!*\
  !*** ./components/Results/Result/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Development\\Apps\\footyscore\\components\\Results\\Result\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Result = function Result(props) {
  var day = props.result.matchDate.getDate();
  var monthIndex = props.result.matchDate.getMonth();
  var year = props.result.matchDate.getFullYear();
  var homeOrAway = props.result.homeMatch ? 'Home' : 'Away';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Date: ", day, "/", monthIndex, "/", year), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Home or Away: ", homeOrAway), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Opponent: ", props.result.opponent), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Score: ", props.result.ourScore, " - ", props.result.opponentScore), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Result);

/***/ })

})
//# sourceMappingURL=index.js.1c6936c1b3f67f5b4fea.hot-update.js.map