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
        score: data.top[i].score,
        id: topAnimes.length,
        image: data.top[i].image_url
      }]);
    }

    console.log(data);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "ml-2",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      className: "text-primary",
      children: "Sora"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: () => findTop(),
      children: "Get Random Anime"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/Wen",
        children: "My Media List"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, undefined), topAnimes.map(anime => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Title, {
            children: [anime.title, " | ", anime.score]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Img, {
            src: anime.image,
            className: "col-md-2"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 25
        }, undefined)
      }, anime.id, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }, undefined))]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInRvcFRpdGxlcyIsInNldFRvcFRpdGxlIiwidXNlU3RhdGUiLCJ0b3BTY29yZXMiLCJzZXRUb3BTY29yZXMiLCJ0b3BBbmltZXMiLCJzZXRUb3BBbmltZXMiLCJmaW5kVG9wIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImkiLCJ0b3AiLCJsZW5ndGgiLCJ0aXRsZSIsInNjb3JlIiwiaWQiLCJpbWFnZSIsImltYWdlX3VybCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJhbmltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBQUE7O0FBQ2YsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTJCQyxzREFBUSxDQUFDLEVBQUQsQ0FBekM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJGLHNEQUFRLENBQUMsRUFBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDRyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0Qkosc0RBQVEsQ0FBQyxFQUFELENBQTFDOztBQUVBLFFBQU1LLE9BQU8sR0FBRyxZQUFZO0FBQ3hCLFFBQUlDLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsc0NBQUQsQ0FBckI7QUFDQSxRQUFJQyxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFKLEVBQWpCOztBQUVBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsSUFBSSxDQUFDRyxHQUFMLENBQVNDLE1BQTdCLEVBQXFDRixDQUFDLEVBQXRDLEVBQTBDO0FBQ3RDTixrQkFBWSxDQUFDLENBQUMsR0FBR0QsU0FBSixFQUFlO0FBQUVVLGFBQUssRUFBRUwsSUFBSSxDQUFDRyxHQUFMLENBQVNELENBQVQsRUFBWUcsS0FBckI7QUFBNEJDLGFBQUssRUFBRU4sSUFBSSxDQUFDRyxHQUFMLENBQVNELENBQVQsRUFBWUksS0FBL0M7QUFBc0RDLFVBQUUsRUFBRVosU0FBUyxDQUFDUyxNQUFwRTtBQUE0RUksYUFBSyxFQUFFUixJQUFJLENBQUNHLEdBQUwsQ0FBU0QsQ0FBVCxFQUFZTztBQUEvRixPQUFmLENBQUQsQ0FBWjtBQUNIOztBQUNEQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVgsSUFBWjtBQUNILEdBUkQ7O0FBVUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBLDRCQUNJO0FBQUksZUFBUyxFQUFDLGNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSSxxRUFBQyxzREFBRDtBQUFRLGFBQU8sRUFBRSxNQUFNSCxPQUFPLEVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0k7QUFBQSw4QkFDSSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLEVBRUtGLFNBQVMsQ0FBQ2lCLEdBQVYsQ0FBY0MsS0FBSyxpQkFDaEIscUVBQUMsb0RBQUQ7QUFBQSwrQkFDSSxxRUFBQyxvREFBRCxDQUFNLElBQU47QUFBQSxrQ0FDSSxxRUFBQyxvREFBRCxDQUFNLEtBQU47QUFBQSx1QkFBYUEsS0FBSyxDQUFDUixLQUFuQixTQUE2QlEsS0FBSyxDQUFDUCxLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFFSSxxRUFBQyxvREFBRCxDQUFNLEdBQU47QUFBVSxlQUFHLEVBQUVPLEtBQUssQ0FBQ0wsS0FBckI7QUFBNEIscUJBQVMsRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFNBQVdLLEtBQUssQ0FBQ04sRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESCxDQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWdCRixDQS9CRjs7R0FBTWxCLEk7O0tBQUFBLEk7QUFpQ1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkzYjU3OThkNDE5OWU0MzMwYjYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt0b3BUaXRsZXMsIHNldFRvcFRpdGxlXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3RvcFNjb3Jlcywgc2V0VG9wU2NvcmVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3RvcEFuaW1lcywgc2V0VG9wQW5pbWVzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IGZpbmRUb3AgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL2FuaW1lLzEnKVxyXG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEudG9wLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNldFRvcEFuaW1lcyhbLi4udG9wQW5pbWVzLCB7IHRpdGxlOiBkYXRhLnRvcFtpXS50aXRsZSwgc2NvcmU6IGRhdGEudG9wW2ldLnNjb3JlLCBpZDogdG9wQW5pbWVzLmxlbmd0aCwgaW1hZ2U6IGRhdGEudG9wW2ldLmltYWdlX3VybH1dKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21sLTInPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LXByaW1hcnknPlNvcmE8L2gxPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGZpbmRUb3AoKX0+R2V0IFJhbmRvbSBBbmltZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL1dlbic+TXkgTWVkaWEgTGlzdDwvTGluaz5cclxuICAgICAgICAgICAgICAgIHt0b3BBbmltZXMubWFwKGFuaW1lID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2FuaW1lLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPnthbmltZS50aXRsZX0gfCB7YW5pbWUuc2NvcmV9PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSW1nIHNyYz17YW5pbWUuaW1hZ2V9IGNsYXNzTmFtZT0nY29sLW1kLTInPjwvQ2FyZC5JbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuKX1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwic291cmNlUm9vdCI6IiJ9