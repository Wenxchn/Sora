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
    0: topAnimes,
    1: setTopAnimes
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: topMangas,
    1: setTopMangas
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const findRandomAnime = async () => {
    let random = await getRandomInt(50);
    let res = await fetch(`https://api.jikan.moe/v3/top/anime/${random}/tv`);
    let data = await res.json();
    setTopAnimes([{
      title: data.top[random].title,
      score: data.top[random].score,
      id: topAnimes.length,
      image: data.top[random].image_url
    }]);
    console.log(data);
  };

  const findRandomManga = async () => {
    let res = await fetch('https://api.jikan.moe/v3/top/manga/1/manga');
    let data = await res.json();

    for (let i = 0; i < data.top.length; i++) {
      setTopMangas([...topMangas, {
        title: data.top[i].title,
        score: data.top[i].score,
        id: topMangas.length,
        image: data.top[i].image_url
      }]);
    }

    console.log(data);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "ml-2",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-primary",
          children: "Sora"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/Wen",
          children: "My Media List"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          onClick: () => findRandomAnime(),
          children: "Get Random Anime"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          onClick: () => findRandomManga(),
          children: "Get Random Manga"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, undefined), topAnimes.map(anime => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Title, {
              children: [anime.title, " | ", anime.score]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Img, {
              src: anime.image,
              className: "col-md-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 29
          }, undefined)
        }, anime.id, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 25
        }, undefined)), topMangas.map(manga => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Title, {
              children: [manga.title, " | ", manga.score]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Img, {
              src: manga.image,
              className: "col-md-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 29
          }, undefined)
        }, manga.id, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 25
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, undefined);
};

_s(Home, "6fKAwtaCAAu7LZWgaRqphA4rHJI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInRvcEFuaW1lcyIsInNldFRvcEFuaW1lcyIsInVzZVN0YXRlIiwidG9wTWFuZ2FzIiwic2V0VG9wTWFuZ2FzIiwiZ2V0UmFuZG9tSW50IiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZmluZFJhbmRvbUFuaW1lIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInRpdGxlIiwidG9wIiwic2NvcmUiLCJpZCIsImxlbmd0aCIsImltYWdlIiwiaW1hZ2VfdXJsIiwiY29uc29sZSIsImxvZyIsImZpbmRSYW5kb21NYW5nYSIsImkiLCJtYXAiLCJhbmltZSIsIm1hbmdhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFBQTs7QUFDZixRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsRUFBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkYsc0RBQVEsQ0FBQyxFQUFELENBQTFDOztBQUVBLFFBQU1HLFlBQVksR0FBSUMsR0FBRCxJQUFTO0FBQzFCLFdBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JGLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixHQUFYLENBQTNCLENBQVA7QUFDSCxHQUZEOztBQUlBLFFBQU1JLGVBQWUsR0FBRyxZQUFZO0FBQ2hDLFFBQUlELE1BQU0sR0FBRyxNQUFNSixZQUFZLENBQUMsRUFBRCxDQUEvQjtBQUNBLFFBQUlNLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsc0NBQXFDSCxNQUFPLEtBQTlDLENBQXJCO0FBQ0EsUUFBSUksSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixF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eUJBQWFBLEtBQUssQ0FBQ2IsS0FBbkIsU0FBNkJhLEtBQUssQ0FBQ1gsS0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBRUkscUVBQUMsb0RBQUQsQ0FBTSxHQUFOO0FBQVUsaUJBQUcsRUFBRVcsS0FBSyxDQUFDUixLQUFyQjtBQUE0Qix1QkFBUyxFQUFDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosV0FBV1EsS0FBSyxDQUFDVixFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURILENBWEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQTZCRixDQXhERjs7R0FBTW5CLEk7O0tBQUFBLEk7QUEwRFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjFlZTEwNGJkZTk2ODU4ODBkYjc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdG9wQW5pbWVzLCBzZXRUb3BBbmltZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbdG9wTWFuZ2FzLCBzZXRUb3BNYW5nYXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgZ2V0UmFuZG9tSW50ID0gKG1heCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKG1heCkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmluZFJhbmRvbUFuaW1lID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCByYW5kb20gPSBhd2FpdCBnZXRSYW5kb21JbnQoNTApXHJcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL2FuaW1lLyR7cmFuZG9tfS90dmApXHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gICAgICAgIHNldFRvcEFuaW1lcyhbeyB0aXRsZTogZGF0YS50b3BbcmFuZG9tXS50aXRsZSwgc2NvcmU6IGRhdGEudG9wW3JhbmRvbV0uc2NvcmUsIGlkOiB0b3BBbmltZXMubGVuZ3RoLCBpbWFnZTogZGF0YS50b3BbcmFuZG9tXS5pbWFnZV91cmx9XSlcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbmRSYW5kb21NYW5nYSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmppa2FuLm1vZS92My90b3AvbWFuZ2EvMS9tYW5nYScpXHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS50b3AubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2V0VG9wTWFuZ2FzKFsuLi50b3BNYW5nYXMsIHsgdGl0bGU6IGRhdGEudG9wW2ldLnRpdGxlLCBzY29yZTogZGF0YS50b3BbaV0uc2NvcmUsIGlkOiB0b3BNYW5nYXMubGVuZ3RoLCBpbWFnZTogZGF0YS50b3BbaV0uaW1hZ2VfdXJsfV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWwtMic+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtcHJpbWFyeSc+U29yYTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL1dlbic+TXkgTWVkaWEgTGlzdDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGZpbmRSYW5kb21BbmltZSgpfT5HZXQgUmFuZG9tIEFuaW1lPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBmaW5kUmFuZG9tTWFuZ2EoKX0+R2V0IFJhbmRvbSBNYW5nYTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0b3BBbmltZXMubWFwKGFuaW1lID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQga2V5PXthbmltZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPnthbmltZS50aXRsZX0gfCB7YW5pbWUuc2NvcmV9PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkltZyBzcmM9e2FuaW1lLmltYWdlfSBjbGFzc05hbWU9J2NvbC1tZC0yJz48L0NhcmQuSW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICB7dG9wTWFuZ2FzLm1hcChtYW5nYSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17bWFuZ2EuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT57bWFuZ2EudGl0bGV9IHwge21hbmdhLnNjb3JlfTwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgc3JjPXttYW5nYS5pbWFnZX0gY2xhc3NOYW1lPSdjb2wtbWQtMic+PC9DYXJkLkltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbil9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==