webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\wenxc\\Desktop\\Sora\\pages\\index.js";




const Home = async () => {
  // () => {
  //     fetch('https://api.myanimelist.net/v2/anime/ranking?ranking_type=all&limit=20')
  //     .then(res => res.json())
  //     .then(data=> console.log(data))
  //     .catch(e => console.log(e))
  // }
  // () => {
  //     fetch('https://api.jikan.moe/v3/top/anime/1')
  //     .then(res => res.json())
  //     .then(data=> console.log(data))
  //     .catch(e => console.log(e))
  // }
  // async() => {
  //     data = (await fetch('https://api.jikan.moe/v3/top/anime/1')).json
  //     console.log('wtf')
  //     console.log(JSON.stringify(data))
  // }
  data = (await fetch('https://api.jikan.moe/v3/top/anime/1')).json;
  console.log('wtf');
  console.log(JSON.stringify(data));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "ml-2",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "text-primary",
      children: "Sora"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/Wen",
        children: "My Media List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, undefined);
};

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRhdGEiLCJmZXRjaCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxZQUFZO0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUMsTUFBSSxHQUFHLENBQUMsTUFBTUMsS0FBSyxDQUFDLHNDQUFELENBQVosRUFBc0RDLElBQTdEO0FBQ0lDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTixJQUFmLENBQVo7QUFHSixzQkFDSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUEsNkJBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFPRixDQWxDRjs7S0FBTUQsSTtBQW9DU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjIzYTNhZjY0YzI0MTdmODk3OGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmNvbnN0IEhvbWUgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgLy8gKCkgPT4ge1xyXG4gICAgLy8gICAgIGZldGNoKCdodHRwczovL2FwaS5teWFuaW1lbGlzdC5uZXQvdjIvYW5pbWUvcmFua2luZz9yYW5raW5nX3R5cGU9YWxsJmxpbWl0PTIwJylcclxuICAgIC8vICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC8vICAgICAudGhlbihkYXRhPT4gY29uc29sZS5sb2coZGF0YSkpXHJcbiAgICAvLyAgICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZSkpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gKCkgPT4ge1xyXG4gICAgLy8gICAgIGZldGNoKCdodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL2FuaW1lLzEnKVxyXG4gICAgLy8gICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLy8gICAgIC50aGVuKGRhdGE9PiBjb25zb2xlLmxvZyhkYXRhKSlcclxuICAgIC8vICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSlcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBhc3luYygpID0+IHtcclxuICAgIC8vICAgICBkYXRhID0gKGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL2FuaW1lLzEnKSkuanNvblxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCd3dGYnKVxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKVxyXG4gICAgLy8gfVxyXG5cclxuICAgIGRhdGEgPSAoYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmppa2FuLm1vZS92My90b3AvYW5pbWUvMScpKS5qc29uXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3d0ZicpXHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpXHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtbC0yJz5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1wcmltYXJ5Jz5Tb3JhPC9oMT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9XZW4nPk15IE1lZGlhIExpc3Q8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4pfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=