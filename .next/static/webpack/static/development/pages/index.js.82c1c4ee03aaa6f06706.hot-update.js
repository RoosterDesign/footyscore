webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/TopScorers/Scorer/index.js":
/*!***********************************************!*\
  !*** ./components/TopScorers/Scorer/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "F:\\Development\\Apps\\footyscore\\components\\TopScorers\\Scorer\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Scorer = function Scorer(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "Scorer Name: ", props.scorer.name), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Goals Scored: ", props.scorer.goals), __jsx("button", {
    onClick: _this.props.incNumber,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Increase number by 1"), __jsx("input", {
    type: "number",
    defaultValue: props.scorer.goals,
    onChange: props.onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Scorer);

/***/ })

})
//# sourceMappingURL=index.js.82c1c4ee03aaa6f06706.hot-update.js.map