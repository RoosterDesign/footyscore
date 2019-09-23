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
var _jsxFileName = "F:\\Development\\Apps\\footyscore\\components\\TopScorers\\Scorer\\index.js";

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
  }, "Goals Scored: ", props.scorer.goals), __jsx("input", {
    type: "number",
    defaultValue: props.scorer.goals,
    onChange: function onChange(event) {
      return props.onChange(event, props.scorer.playerId);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Scorer);

/***/ })

})
//# sourceMappingURL=index.js.345e25c5d403664a38eb.hot-update.js.map