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
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

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
    className: "ml-2 mr-2",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "text-primary",
          children: "Sora"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/Wen",
          children: "My Media List"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
            onSubmit: e => {
              e.preventDefault();
              setIsOpen(false);
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
                children: "Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 41
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
                placeholder: "Title"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 41
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 37
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
                children: "Author"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 41
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
                placeholder: "Author"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 41
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 37
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              block: true,
              type: "submit",
              children: "Submit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 37
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
              block: true,
              variant: "light",
              onClick: () => setIsOpen(false),
              children: "Clear"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 37
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "btn-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            onClick: () => findRandomAnime(),
            children: "Get Random Anime"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            onClick: () => clearAnimeList(),
            children: "Clear Random Anime"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, undefined), topAnimes.map(anime => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Title, {
              children: anime.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Img, {
              src: anime.image,
              className: "col-md-4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Text, {
              children: ["Average MAL Score: ", anime.score]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 33
            }, undefined), "Type: Anime"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 29
          }, undefined)
        }, anime.id, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 25
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "btn-group",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            block: true,
            onClick: () => findRandomManga(),
            children: "Get Random Manga"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            block: true,
            onClick: () => clearMangaList(),
            children: "Clear Random Manga"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }, undefined), topMangas.map(manga => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Title, {
              children: manga.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 37
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Img, {
              src: manga.image,
              className: "col-md-4"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 37
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Text, {
              children: ["Average MAL Score: ", manga.score]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 37
            }, undefined), "Type: Manga"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 33
          }, undefined)
        }, manga.id, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 29
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 9
  }, undefined);
};

_s(Home, "1TcSbR/xEpCitxKMAL9sECBqbas=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInRvcEFuaW1lcyIsInNldFJhbmRvbUFuaW1lcyIsInVzZVN0YXRlIiwidG9wTWFuZ2FzIiwic2V0UmFuZG9tTWFuZ2FzIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiZ2V0UmFuZG9tSW50IiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZmluZFJhbmRvbUFuaW1lIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInRpdGxlIiwidG9wIiwic2NvcmUiLCJpZCIsImxlbmd0aCIsImltYWdlIiwiaW1hZ2VfdXJsIiwiY29uc29sZSIsImxvZyIsImZpbmRSYW5kb21NYW5nYSIsImNsZWFyQW5pbWVMaXN0IiwiY2xlYXJNYW5nYUxpc3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJtYXAiLCJhbmltZSIsIm1hbmdhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFBQTs7QUFDZixRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBK0JDLHNEQUFRLENBQUMsRUFBRCxDQUE3QztBQUNBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUErQkYsc0RBQVEsQ0FBQyxFQUFELENBQTdDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCSixzREFBUSxDQUFDLEtBQUQsQ0FBcEM7O0FBRUEsUUFBTUssWUFBWSxHQUFJQyxHQUFELElBQVM7QUFDMUIsV0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkYsSUFBSSxDQUFDQyxLQUFMLENBQVdGLEdBQVgsQ0FBM0IsQ0FBUDtBQUNILEdBRkQ7O0FBSUEsUUFBTUksZUFBZSxHQUFHLFlBQVk7QUFDaEMs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QUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosV0FBV2MsS0FBSyxDQUFDYixFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURQLENBTEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTdDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFpRUYsQ0F4R0Y7O0dBQU1yQixJOztLQUFBQSxJO0FBMEdTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zYTdhZTQyYzRlYjg2NmE5YjhmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgRm9ybSwgTW9kYWwsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt0b3BBbmltZXMsIHNldFJhbmRvbUFuaW1lc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFt0b3BNYW5nYXMsIHNldFJhbmRvbU1hbmdhc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBnZXRSYW5kb21JbnQgPSAobWF4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IobWF4KSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaW5kUmFuZG9tQW5pbWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJhbmRvbSA9IGF3YWl0IGdldFJhbmRvbUludCg1MClcclxuICAgICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmppa2FuLm1vZS92My90b3AvYW5pbWUvJHtyYW5kb219L3R2YClcclxuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICByYW5kb20gPSBhd2FpdCBnZXRSYW5kb21JbnQoNTApXHJcblxyXG4gICAgICAgIHNldFJhbmRvbUFuaW1lcyhbLi4udG9wQW5pbWVzLCB7IHRpdGxlOiBkYXRhLnRvcFtyYW5kb21dLnRpdGxlLCBzY29yZTogZGF0YS50b3BbcmFuZG9tXS5zY29yZSwgaWQ6IHRvcEFuaW1lcy5sZW5ndGgsIGltYWdlOiBkYXRhLnRvcFtyYW5kb21dLmltYWdlX3VybH1dKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmluZFJhbmRvbU1hbmdhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCByYW5kb20gPSBhd2FpdCBnZXRSYW5kb21JbnQoNTApXHJcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL21hbmdhLzEvbWFuZ2EnKVxyXG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICAgIHJhbmRvbSA9IGF3YWl0IGdldFJhbmRvbUludCg1MClcclxuXHJcbiAgICAgICAgc2V0UmFuZG9tTWFuZ2FzKFsuLi50b3BNYW5nYXMsIHsgdGl0bGU6IGRhdGEudG9wW3JhbmRvbV0udGl0bGUsIHNjb3JlOiBkYXRhLnRvcFtyYW5kb21dLnNjb3JlLCBpZDogdG9wTWFuZ2FzLmxlbmd0aCwgaW1hZ2U6IGRhdGEudG9wW3JhbmRvbV0uaW1hZ2VfdXJsfV0pXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbGVhckFuaW1lTGlzdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRSYW5kb21BbmltZXMoW10pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xlYXJNYW5nYUxpc3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0UmFuZG9tTWFuZ2FzKFtdKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWwtMiBtci0yJz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1wcmltYXJ5Jz5Tb3JhPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvV2VuJz5NeSBNZWRpYSBMaXN0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SXNPcGVuKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPlRpdGxlPC9Gb3JtLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdUaXRsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5BdXRob3I8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0F1dGhvcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBibG9jayB0eXBlPSdzdWJtaXQnPlN1Ym1pdDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJsb2NrIHZhcmlhbnQ9J2xpZ2h0JyBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfT5DbGVhcjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0bi1ncm91cCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gZmluZFJhbmRvbUFuaW1lKCl9PkdldCBSYW5kb20gQW5pbWU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjbGVhckFuaW1lTGlzdCgpfT5DbGVhciBSYW5kb20gQW5pbWU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7dG9wQW5pbWVzLm1hcChhbmltZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17YW5pbWUuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT57YW5pbWUudGl0bGV9PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkltZyBzcmM9e2FuaW1lLmltYWdlfSBjbGFzc05hbWU9J2NvbC1tZC00Jz48L0NhcmQuSW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+QXZlcmFnZSBNQUwgU2NvcmU6IHthbmltZS5zY29yZX08L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUeXBlOiBBbmltZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnRuLWdyb3VwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBibG9jayBvbkNsaWNrPXsoKSA9PiBmaW5kUmFuZG9tTWFuZ2EoKX0+R2V0IFJhbmRvbSBNYW5nYTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJsb2NrIG9uQ2xpY2s9eygpID0+IGNsZWFyTWFuZ2FMaXN0KCl9PkNsZWFyIFJhbmRvbSBNYW5nYTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0b3BNYW5nYXMubWFwKG1hbmdhID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17bWFuZ2EuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPnttYW5nYS50aXRsZX08L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkltZyBzcmM9e21hbmdhLmltYWdlfSBjbGFzc05hbWU9J2NvbC1tZC00Jz48L0NhcmQuSW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PkF2ZXJhZ2UgTUFMIFNjb3JlOiB7bWFuZ2Euc2NvcmV9PC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR5cGU6IE1hbmdhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbil9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==