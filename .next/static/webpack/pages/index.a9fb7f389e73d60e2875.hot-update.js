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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");


var _jsxFileName = "C:\\Users\\wenxc\\Desktop\\Sora\\pages\\index.js",
    _s = $RefreshSig$();






const Home = () => {
  _s();

  const {
    0: topTitles,
    1: setTopTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: topScores,
    1: setTopScores
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: topAnimes,
    1: setTopAnimes
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  const findTop = async () => {
    let res = await fetch('https://api.jikan.moe/v3/top/anime/1');
    let data = await res.json();

    for (let i = 0; i < data.top.length; i++) {
      setTopAnimes([...topAnimes, {
        title: data.top[i].title,
        score: data.top[i].score
      }]);
    }

    console.log(data);
  }; // findTop()


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "ml-2",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "text-primary",
      children: "Sora"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: () => findTop(),
      children: "Get Top 50 Animes From MAL"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/Wen",
        children: "My Media List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        children: topAnimes.map(anime => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [" ", anime.title, " ", anime.score, " "]
        }, anime.id, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, undefined);
};

_s(Home, "G9BElGgIFHZ/+BgYUak5VPJwbRo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInRvcFRpdGxlcyIsInNldFRvcFRpdGxlIiwidXNlU3RhdGUiLCJ0b3BTY29yZXMiLCJzZXRUb3BTY29yZXMiLCJ0b3BBbmltZXMiLCJzZXRUb3BBbmltZXMiLCJmaW5kVG9wIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImkiLCJ0b3AiLCJsZW5ndGgiLCJ0aXRsZSIsInNjb3JlIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImFuaW1lIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsTUFBTTtBQUFBOztBQUNmLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUEyQkMsc0RBQVEsQ0FBQyxFQUFELENBQXpDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCRixzREFBUSxDQUFDLEVBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0csU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJKLHNEQUFRLENBQUMsRUFBRCxDQUExQzs7QUFFQSxRQUFNSyxPQUFPLEdBQUcsWUFBWTtBQUN4QixRQUFJQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLHNDQUFELENBQXJCO0FBQ0EsUUFBSUMsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUFqQjs7QUFFQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLElBQUksQ0FBQ0csR0FBTCxDQUFTQyxNQUE3QixFQUFxQ0YsQ0FBQyxFQUF0QyxFQUEwQztBQUN0Q04sa0JBQVksQ0FBQyxDQUFDLEdBQUdELFNBQUosRUFBZTtBQUFFVSxhQUFLLEVBQUVMLElBQUksQ0FBQ0csR0FBTCxDQUFTRCxDQUFULEVBQVlHLEtBQXJCO0FBQTRCQyxhQUFLLEVBQUVOLElBQUksQ0FBQ0csR0FBTCxDQUFTRCxDQUFULEVBQVlJO0FBQS9DLE9BQWYsQ0FBRCxDQUFaO0FBQ0g7O0FBQ0RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUixJQUFaO0FBQ0gsR0FSRCxDQUxlLENBZWY7OztBQUNBLHNCQUNJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQSw0QkFDSTtBQUFJLGVBQVMsRUFBQyxjQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUkscUVBQUMsc0RBQUQ7QUFBUSxhQUFPLEVBQUUsTUFBTUgsT0FBTyxFQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUEsOEJBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUEsa0JBQ0tGLFNBQVMsQ0FBQ2MsR0FBVixDQUFjQyxLQUFLLGlCQUNoQjtBQUFBLDBCQUFxQkEsS0FBSyxDQUFDTCxLQUEzQixPQUFtQ0ssS0FBSyxDQUFDSixLQUF6QztBQUFBLFdBQVNJLEtBQUssQ0FBQ0MsRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFhRixDQTdCRjs7R0FBTXRCLEk7O0tBQUFBLEk7QUErQlNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE5ZmI3ZjM4OWU3M2Q2MGUyODc1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt0b3BUaXRsZXMsIHNldFRvcFRpdGxlXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3RvcFNjb3Jlcywgc2V0VG9wU2NvcmVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3RvcEFuaW1lcywgc2V0VG9wQW5pbWVzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IGZpbmRUb3AgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL2FuaW1lLzEnKVxyXG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEudG9wLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNldFRvcEFuaW1lcyhbLi4udG9wQW5pbWVzLCB7IHRpdGxlOiBkYXRhLnRvcFtpXS50aXRsZSwgc2NvcmU6IGRhdGEudG9wW2ldLnNjb3JlIH1dKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGZpbmRUb3AoKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWwtMic+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtcHJpbWFyeSc+U29yYTwvaDE+XHJcbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gZmluZFRvcCgpfT5HZXQgVG9wIDUwIEFuaW1lcyBGcm9tIE1BTDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL1dlbic+TXkgTWVkaWEgTGlzdDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7dG9wQW5pbWVzLm1hcChhbmltZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2FuaW1lLmlkfT4ge2FuaW1lLnRpdGxlfSB7YW5pbWUuc2NvcmV9IDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuKX1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwic291cmNlUm9vdCI6IiJ9