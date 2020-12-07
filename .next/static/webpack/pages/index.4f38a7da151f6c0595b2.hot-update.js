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
    0: anime,
    1: setTopAnimes
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
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
    setTopAnimes({
      title: data.top[random].title,
      score: data.top[random].score,
      id: topAnimes.length,
      image: data.top[random].image_url
    });
  };

  const findRandomManga = async () => {
    let random = await getRandomInt(50);
    let res = await fetch(`https://api.jikan.moe/v3/top/manga/${random}/manga`);
    let data = await res.json();
    setTopMangas([]);

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
          lineNumber: 38,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/Wen",
          children: "My Media List"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          onClick: () => findRandomAnime(),
          children: "Get Random Anime"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          onClick: () => findRandomManga(),
          children: "Get Random Manga"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Title, {
              children: [anime, " | ", anime]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Img, {
              src: anime,
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
          columnNumber: 21
        }, undefined), topMangas.map(manga => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Title, {
              children: [manga.title, " | ", manga.score]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Img, {
              src: manga.image,
              className: "col-md-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 29
          }, undefined)
        }, manga.id, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 25
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, undefined);
};

_s(Home, "UUMPyN6GFxcuSU5/bGn9WHkyIPA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImFuaW1lIiwic2V0VG9wQW5pbWVzIiwidXNlU3RhdGUiLCJ0b3BNYW5nYXMiLCJzZXRUb3BNYW5nYXMiLCJnZXRSYW5kb21JbnQiLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJmaW5kUmFuZG9tQW5pbWUiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwidGl0bGUiLCJ0b3AiLCJzY29yZSIsImlkIiwidG9wQW5pbWVzIiwibGVuZ3RoIiwiaW1hZ2UiLCJpbWFnZV91cmwiLCJmaW5kUmFuZG9tTWFuZ2EiLCJpIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIm1hbmdhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFBQTs7QUFDZixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBd0JDLHNEQUFRLEVBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCRixzREFBUSxDQUFDLEVBQUQsQ0FBMUM7O0FBRUEsUUFBTUcsWUFBWSxHQUFJQyxHQUFELElBQVM7QUFDMUIsV0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkYsSUFBSSxDQUFDQyxLQUFMLENBQVdGLEdBQVgsQ0FBM0IsQ0FBUDtBQUNILEdBRkQ7O0FBSUEsUUFBTUksZUFBZSxHQUFHLFlBQVk7QUFDaEMsUUFBSUQsTUFBTSxHQUFHLE1BQU1KLFlBQVksQ0FBQyxFQUFELENBQS9CO0FBQ0EsUUFBSU0sR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxzQ0FBcUNILE1BQU8sS0FBOUMsQ0FBckI7QUFDQSxRQUFJSSxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFKLEVBQWpCO0FBQ0Fi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WCxLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFFSSxxRUFBQyxvREFBRCxDQUFNLEdBQU47QUFBVSxpQkFBRyxFQUFFVyxLQUFLLENBQUNQLEtBQXJCO0FBQTRCLHVCQUFTLEVBQUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixXQUFXTyxLQUFLLENBQUNWLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREgsQ0FsQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQW9DRixDQWhFRjs7R0FBTW5CLEk7O0tBQUFBLEk7QUFrRVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjRmMzhhN2RhMTUxZjZjMDU5NWIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbYW5pbWUsIHNldFRvcEFuaW1lc10gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbdG9wTWFuZ2FzLCBzZXRUb3BNYW5nYXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgZ2V0UmFuZG9tSW50ID0gKG1heCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKG1heCkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmluZFJhbmRvbUFuaW1lID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCByYW5kb20gPSBhd2FpdCBnZXRSYW5kb21JbnQoNTApXHJcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL2FuaW1lLyR7cmFuZG9tfS90dmApXHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgc2V0VG9wQW5pbWVzKHsgdGl0bGU6IGRhdGEudG9wW3JhbmRvbV0udGl0bGUsIHNjb3JlOiBkYXRhLnRvcFtyYW5kb21dLnNjb3JlLCBpZDogdG9wQW5pbWVzLmxlbmd0aCwgaW1hZ2U6IGRhdGEudG9wW3JhbmRvbV0uaW1hZ2VfdXJsfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaW5kUmFuZG9tTWFuZ2EgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJhbmRvbSA9IGF3YWl0IGdldFJhbmRvbUludCg1MClcclxuICAgICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmppa2FuLm1vZS92My90b3AvbWFuZ2EvJHtyYW5kb219L21hbmdhYClcclxuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgICAgICAgc2V0VG9wTWFuZ2FzKFtdKVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEudG9wLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNldFRvcE1hbmdhcyhbLi4udG9wTWFuZ2FzLCB7IHRpdGxlOiBkYXRhLnRvcFtpXS50aXRsZSwgc2NvcmU6IGRhdGEudG9wW2ldLnNjb3JlLCBpZDogdG9wTWFuZ2FzLmxlbmd0aCwgaW1hZ2U6IGRhdGEudG9wW2ldLmltYWdlX3VybH1dKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21sLTInPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LXByaW1hcnknPlNvcmE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9XZW4nPk15IE1lZGlhIExpc3Q8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBmaW5kUmFuZG9tQW5pbWUoKX0+R2V0IFJhbmRvbSBBbmltZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gZmluZFJhbmRvbU1hbmdhKCl9PkdldCBSYW5kb20gTWFuZ2E8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2FuaW1lLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+e2FuaW1lfSB8IHthbmltZX08L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSW1nIHNyYz17YW5pbWV9IGNsYXNzTmFtZT0nY29sLW1kLTInPjwvQ2FyZC5JbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7Lyoge3RvcEFuaW1lcy5tYXAoYW5pbWUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2FuaW1lLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+e2FuaW1lLnRpdGxlfSB8IHthbmltZS5zY29yZX08L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSW1nIHNyYz17YW5pbWUuaW1hZ2V9IGNsYXNzTmFtZT0nY29sLW1kLTInPjwvQ2FyZC5JbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfSAqL31cclxuICAgICAgICAgICAgICAgICAgICB7dG9wTWFuZ2FzLm1hcChtYW5nYSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17bWFuZ2EuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT57bWFuZ2EudGl0bGV9IHwge21hbmdhLnNjb3JlfTwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgc3JjPXttYW5nYS5pbWFnZX0gY2xhc3NOYW1lPSdjb2wtbWQtMic+PC9DYXJkLkltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbil9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==