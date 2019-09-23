webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/TopScorers/index.js":
/*!****************************************!*\
  !*** ./components/TopScorers/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Scorer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scorer */ "./components/TopScorers/Scorer/index.js");
var _jsxFileName = "F:\\Development\\Apps\\footyscore\\components\\TopScorers\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var TopScorers = function TopScorers(props) {
  var topScorers = props.topScorers.sort(function (a, b) {
    return b.goals - a.goals;
  }).map(function (scorer) {
    return __jsx(_Scorer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: scorer.playerId,
      scorer: scorer,
      updateScorerGoals: updateScorerGoals,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      },
      __self: this
    });
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Top Scorers"), topScorers);
};

/* harmony default export */ __webpack_exports__["default"] = (TopScorers);

/***/ })

})
//# sourceMappingURL=index.js.93470d98bb47e722d11f.hot-update.js.map