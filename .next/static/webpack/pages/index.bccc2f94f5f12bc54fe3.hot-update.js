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
    1: setRandomAnimes
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: topMangas,
    1: setRandomMangas
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const findRandomAnime = async () => {
    let random = await getRandomInt(50);
    let res = await fetch(`https://api.jikan.moe/v3/top/anime/${random}/tv`);
    let data = await res.json();
    random = await getRandomInt(50);
    setRandomAnimes([...topAnimes, {
      title: data.top[random].title,
      score: data.top[random].score,
      id: topAnimes.length,
      image: data.top[random].image_url
    }]);
    console.log(data);
  };

  const findRandomManga = async () => {
    let random = await getRandomInt(50);
    let res = await fetch('https://api.jikan.moe/v3/top/manga/1/manga');
    let data = await res.json();
    random = await getRandomInt(50);
    setRandomMangas([...topMangas, {
      title: data.top[random].title,
      score: data.top[random].score,
      id: topMangas.length,
      image: data.top[random].image_url
    }]);
    console.log(data);
  };

  const clearAnimeList = async () => {
    setRandomAnimes([]);
  };

  const clearMangaList = async () => {
    setRandomMangas([]);
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
          lineNumber: 46,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/Wen",
          children: "My Media List"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "btn-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            onClick: () => findRandomAnime(),
            children: "Get Random Anime"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            onClick: () => clearAnimeList(),
            children: "Clear List"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, undefined), topAnimes.map(anime => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Title, {
              children: anime.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Img, {
              src: anime.image,
              className: "col-md-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Text, {
              children: ["Average MAL Score: ", anime.score]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 33
            }, undefined), "Type: Anime"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 29
          }, undefined)
        }, anime.id, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 25
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "btn-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            onClick: () => findRandomManga(),
            children: "Get Random Manga"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            onClick: () => clearMangaList(),
            children: "Clear List"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, undefined), topMangas.map(manga => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Title, {
              children: manga.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 37
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Img, {
              src: manga.image,
              className: "col-md-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 37
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Text, {
              children: ["Average MAL Score: ", manga.score]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 37
            }, undefined), "Type: Manga"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 33
          }, undefined)
        }, manga.id, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 29
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, undefined);
};

_s(Home, "f9Oe34JJdtS6KNpSGg2cDDslI/w=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInRvcEFuaW1lcyIsInNldFJhbmRvbUFuaW1lcyIsInVzZVN0YXRlIiwidG9wTWFuZ2FzIiwic2V0UmFuZG9tTWFuZ2FzIiwiZ2V0UmFuZG9tSW50IiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZmluZFJhbmRvbUFuaW1lIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInRpdGxlIiwidG9wIiwic2NvcmUiLCJpZCIsImxlbmd0aCIsImltYWdlIiwiaW1hZ2VfdXJsIiwiY29uc29sZSIsImxvZyIsImZpbmRSYW5kb21NYW5nYSIsImNsZWFyQW5pbWVMaXN0IiwiY2xlYXJNYW5nYUxpc3QiLCJtYXAiLCJhbmltZSIsIm1hbmdhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFBQTs7QUFDZixRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBK0JDLHNEQUFRLENBQUMsRUFBRCxDQUE3QztBQUNBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUErQkYsc0RBQVEsQ0FBQyxFQUFELENBQTdDOztBQUVBLFFBQU1HLFlBQVksR0FBSUMsR0FBRCxJQUFTO0FBQzFCLFdBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JGLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixHQUFYLENBQTNCLENBQVA7QUFDSCxHQUZEOztBQUlBLFFBQU1JLGVBQWUsR0FBRyxZQUFZO0FBQ2hDLFFBQUlELE1BQU0sR0FBRyxNQUFNSixZQUFZLENBQUMsRUFBRCxDQUEvQjtBQUNBLFFBQUlNLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsc0NBQXFDSCxNQUFPLEtBQTlDLENBQXJCO0FBQ0EsUUFB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SixXQUFXWSxLQUFLLENBQUNYLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFAsQ0FMTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXlDRixDQTdFRjs7R0FBTW5CLEk7O0tBQUFBLEk7QUErRVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJjY2MyZjk0ZjVmMTJiYzU0ZmUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdG9wQW5pbWVzLCBzZXRSYW5kb21BbmltZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbdG9wTWFuZ2FzLCBzZXRSYW5kb21NYW5nYXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgZ2V0UmFuZG9tSW50ID0gKG1heCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKG1heCkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmluZFJhbmRvbUFuaW1lID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCByYW5kb20gPSBhd2FpdCBnZXRSYW5kb21JbnQoNTApXHJcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL2FuaW1lLyR7cmFuZG9tfS90dmApXHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgcmFuZG9tID0gYXdhaXQgZ2V0UmFuZG9tSW50KDUwKVxyXG5cclxuICAgICAgICBzZXRSYW5kb21BbmltZXMoWy4uLnRvcEFuaW1lcywgeyB0aXRsZTogZGF0YS50b3BbcmFuZG9tXS50aXRsZSwgc2NvcmU6IGRhdGEudG9wW3JhbmRvbV0uc2NvcmUsIGlkOiB0b3BBbmltZXMubGVuZ3RoLCBpbWFnZTogZGF0YS50b3BbcmFuZG9tXS5pbWFnZV91cmx9XSlcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbmRSYW5kb21NYW5nYSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgcmFuZG9tID0gYXdhaXQgZ2V0UmFuZG9tSW50KDUwKVxyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3RvcC9tYW5nYS8xL21hbmdhJylcclxuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICByYW5kb20gPSBhd2FpdCBnZXRSYW5kb21JbnQoNTApXHJcblxyXG4gICAgICAgIHNldFJhbmRvbU1hbmdhcyhbLi4udG9wTWFuZ2FzLCB7IHRpdGxlOiBkYXRhLnRvcFtyYW5kb21dLnRpdGxlLCBzY29yZTogZGF0YS50b3BbcmFuZG9tXS5zY29yZSwgaWQ6IHRvcE1hbmdhcy5sZW5ndGgsIGltYWdlOiBkYXRhLnRvcFtyYW5kb21dLmltYWdlX3VybH1dKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xlYXJBbmltZUxpc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0UmFuZG9tQW5pbWVzKFtdKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsZWFyTWFuZ2FMaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldFJhbmRvbU1hbmdhcyhbXSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtbC0yJz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1wcmltYXJ5Jz5Tb3JhPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvV2VuJz5NeSBNZWRpYSBMaXN0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG4tZ3JvdXAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGZpbmRSYW5kb21BbmltZSgpfT5HZXQgUmFuZG9tIEFuaW1lPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gY2xlYXJBbmltZUxpc3QoKX0+Q2xlYXIgTGlzdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0b3BBbmltZXMubWFwKGFuaW1lID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQga2V5PXthbmltZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPnthbmltZS50aXRsZX08L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuSW1nIHNyYz17YW5pbWUuaW1hZ2V9IGNsYXNzTmFtZT0nY29sLW1kLTInPjwvQ2FyZC5JbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dD5BdmVyYWdlIE1BTCBTY29yZToge2FuaW1lLnNjb3JlfTwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR5cGU6IEFuaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG4tZ3JvdXAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGZpbmRSYW5kb21NYW5nYSgpfT5HZXQgUmFuZG9tIE1hbmdhPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gY2xlYXJNYW5nYUxpc3QoKX0+Q2xlYXIgTGlzdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0b3BNYW5nYXMubWFwKG1hbmdhID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17bWFuZ2EuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPnttYW5nYS50aXRsZX08L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkltZyBzcmM9e21hbmdhLmltYWdlfSBjbGFzc05hbWU9J2NvbC1tZC0yJz48L0NhcmQuSW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PkF2ZXJhZ2UgTUFMIFNjb3JlOiB7bWFuZ2Euc2NvcmV9PC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR5cGU6IE1hbmdhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4pfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=