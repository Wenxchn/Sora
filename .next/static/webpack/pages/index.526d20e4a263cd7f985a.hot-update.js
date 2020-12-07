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

  const clearList = async () => {
    setRandomAnimes([]);
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
          lineNumber: 43,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/Wen",
          children: "My Media List"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "btn-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            onClick: () => findRandomAnime(),
            children: "Get Random Anime"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            onClick: () => findRandomManga(),
            children: "Get Random Manga"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            onClick: () => clearList(),
            children: "Clear List"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, undefined), topAnimes.map(anime => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Title, {
              children: anime.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Img, {
              src: anime.image,
              className: "col-md-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Text, {
              children: ["Score: ", anime.score]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Text, {
              children: "Type: Anime"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 29
          }, undefined)
        }, anime.id, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 25
        }, undefined)), topMangas.map(manga => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Title, {
              children: [manga.title, " | ", manga.score, " | Manga "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Img, {
              src: manga.image,
              className: "col-md-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 29
          }, undefined)
        }, manga.id, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 25
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInRvcEFuaW1lcyIsInNldFJhbmRvbUFuaW1lcyIsInVzZVN0YXRlIiwidG9wTWFuZ2FzIiwic2V0UmFuZG9tTWFuZ2FzIiwiZ2V0UmFuZG9tSW50IiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZmluZFJhbmRvbUFuaW1lIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInRpdGxlIiwidG9wIiwic2NvcmUiLCJpZCIsImxlbmd0aCIsImltYWdlIiwiaW1hZ2VfdXJsIiwiY29uc29sZSIsImxvZyIsImZpbmRSYW5kb21NYW5nYSIsImNsZWFyTGlzdCIsIm1hcCIsImFuaW1lIiwibWFuZ2EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsTUFBTTtBQUFBOztBQUNmLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUErQkMsc0RBQVEsQ0FBQyxFQUFELENBQTdDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQStCRixzREFBUSxDQUFDLEVBQUQsQ0FBN0M7O0FBRUEsUUFBTUcsWUFBWSxHQUFJQyxHQUFELElBQVM7QUFDMUIsV0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkYsSUFBSSxDQUFDQyxLQUFMLENBQVdGLEdBQVgsQ0FBM0IsQ0FBUDtBQUNILEdBRkQ7O0FBSUEsUUFBTUksZUFBZSxHQUFHLFlBQVk7QUFDaEMsUUFBSUQsTUFBTSxHQUFHLE1BQU1KLFlBQVksQ0FBQyxFQUFELENBQS9CO0FBQ0EsUUFBSU0sR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxzQ0FBcUNILE1BQU8sS0FBOUMsQ0FBckI7QUFDQSxRQUFJSSxJQUFJLEdBQUcsTUFBTUYsR0FB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LENBQUNQLEtBQXJCO0FBQTRCLHVCQUFTLEVBQUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSixlQUdJLHFFQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBLG9DQUFtQk8sS0FBSyxDQUFDVixLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEosZUFJSSxxRUFBQyxvREFBRCxDQUFNLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosV0FBV1UsS0FBSyxDQUFDVCxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURILENBTkwsRUFnQktmLFNBQVMsQ0FBQ3VCLEdBQVYsQ0FBY0UsS0FBSyxpQkFDaEIscUVBQUMsb0RBQUQ7QUFBQSxpQ0FDSSxxRUFBQyxvREFBRCxDQUFNLElBQU47QUFBQSxvQ0FDSSxxRUFBQyxvREFBRCxDQUFNLEtBQU47QUFBQSx5QkFBYUEsS0FBSyxDQUFDYixLQUFuQixTQUE2QmEsS0FBSyxDQUFDWCxLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFFSSxxRUFBQyxvREFBRCxDQUFNLEdBQU47QUFBVSxpQkFBRyxFQUFFVyxLQUFLLENBQUNSLEtBQXJCO0FBQTRCLHVCQUFTLEVBQUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixXQUFXUSxLQUFLLENBQUNWLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREgsQ0FoQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWtDRixDQW5FRjs7R0FBTW5CLEk7O0tBQUFBLEk7QUFxRVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUyNmQyMGU0YTI2M2NkN2Y5ODVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdG9wQW5pbWVzLCBzZXRSYW5kb21BbmltZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbdG9wTWFuZ2FzLCBzZXRSYW5kb21NYW5nYXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgZ2V0UmFuZG9tSW50ID0gKG1heCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKG1heCkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmluZFJhbmRvbUFuaW1lID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCByYW5kb20gPSBhd2FpdCBnZXRSYW5kb21JbnQoNTApXHJcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL2FuaW1lLyR7cmFuZG9tfS90dmApXHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgICAgcmFuZG9tID0gYXdhaXQgZ2V0UmFuZG9tSW50KDUwKVxyXG5cclxuICAgICAgICBzZXRSYW5kb21BbmltZXMoWy4uLnRvcEFuaW1lcywgeyB0aXRsZTogZGF0YS50b3BbcmFuZG9tXS50aXRsZSwgc2NvcmU6IGRhdGEudG9wW3JhbmRvbV0uc2NvcmUsIGlkOiB0b3BBbmltZXMubGVuZ3RoLCBpbWFnZTogZGF0YS50b3BbcmFuZG9tXS5pbWFnZV91cmx9XSlcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbmRSYW5kb21NYW5nYSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgcmFuZG9tID0gYXdhaXQgZ2V0UmFuZG9tSW50KDUwKVxyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3RvcC9tYW5nYS8xL21hbmdhJylcclxuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICByYW5kb20gPSBhd2FpdCBnZXRSYW5kb21JbnQoNTApXHJcblxyXG4gICAgICAgIHNldFJhbmRvbU1hbmdhcyhbLi4udG9wTWFuZ2FzLCB7IHRpdGxlOiBkYXRhLnRvcFtyYW5kb21dLnRpdGxlLCBzY29yZTogZGF0YS50b3BbcmFuZG9tXS5zY29yZSwgaWQ6IHRvcE1hbmdhcy5sZW5ndGgsIGltYWdlOiBkYXRhLnRvcFtyYW5kb21dLmltYWdlX3VybH1dKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xlYXJMaXN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldFJhbmRvbUFuaW1lcyhbXSlcclxuICAgICAgICBzZXRSYW5kb21NYW5nYXMoW10pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWwtMic+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtcHJpbWFyeSc+U29yYTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL1dlbic+TXkgTWVkaWEgTGlzdDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnRuLWdyb3VwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBmaW5kUmFuZG9tQW5pbWUoKX0+R2V0IFJhbmRvbSBBbmltZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGZpbmRSYW5kb21NYW5nYSgpfT5HZXQgUmFuZG9tIE1hbmdhPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gY2xlYXJMaXN0KCl9PkNsZWFyIExpc3Q8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dG9wQW5pbWVzLm1hcChhbmltZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17YW5pbWUuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT57YW5pbWUudGl0bGV9PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkltZyBzcmM9e2FuaW1lLmltYWdlfSBjbGFzc05hbWU9J2NvbC1tZC0yJz48L0NhcmQuSW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+U2NvcmU6IHthbmltZS5zY29yZX08L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlR5cGU6IEFuaW1lPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIHt0b3BNYW5nYXMubWFwKG1hbmdhID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQga2V5PXttYW5nYS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPnttYW5nYS50aXRsZX0gfCB7bWFuZ2Euc2NvcmV9IHwgTWFuZ2EgPC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkltZyBzcmM9e21hbmdhLmltYWdlfSBjbGFzc05hbWU9J2NvbC1tZC0yJz48L0NhcmQuSW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L2Rpdj5cclxuKX1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwic291cmNlUm9vdCI6IiJ9