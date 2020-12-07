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
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]); // const findRandomAnime = async () => {
  //     let res = await fetch('https://api.jikan.moe/v3/top/anime/1/tv')
  //     let data = await res.json()
  //     for (let i = 0; i < data.top.length; i++) {
  //         setTopAnimes([...topAnimes, { title: data.top[i].title, score: data.top[i].score, id: topAnimes.length, image: data.top[i].image_url}])
  //     }
  //     console.log(data)
  // }

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
          lineNumber: 34,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/Wen",
          children: "My Media List"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          onClick: () => findRandomAnime(),
          children: "Get Random Anime"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          onClick: () => findRandomManga(),
          children: "Get Random Manga"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, undefined), topAnimes.map(anime => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Title, {
              children: [anime.title, " | ", anime.score]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Img, {
              src: anime.image,
              className: "col-md-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 29
          }, undefined)
        }, anime.id, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 25
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInRvcEFuaW1lcyIsInNldFRvcEFuaW1lcyIsInVzZVN0YXRlIiwidG9wTWFuZ2FzIiwic2V0VG9wTWFuZ2FzIiwiZmluZFJhbmRvbU1hbmdhIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImkiLCJ0b3AiLCJsZW5ndGgiLCJ0aXRsZSIsInNjb3JlIiwiaWQiLCJpbWFnZSIsImltYWdlX3VybCIsImNvbnNvbGUiLCJsb2ciLCJmaW5kUmFuZG9tQW5pbWUiLCJtYXAiLCJhbmltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBQUE7O0FBQ2YsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyxzREFBUSxDQUFDLEVBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJGLHNEQUFRLENBQUMsRUFBRCxDQUExQyxDQUZlLENBSWY7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFNRyxlQUFlLEdBQUcsWUFBWTtBQUNoQyxRQUFJQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDRDQUFELENBQXJCO0FBQ0EsUUFBSUMsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUFqQjs7QUFFQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLElBQUksQ0FBQ0csR0FBTCxDQUFTQyxNQUE3QixFQUFxQ0YsQ0FBQyxFQUF0QyxFQUEwQztBQUN0Q04sa0JBQVksQ0FBQyxDQUFDLEdBQUdELFNBQUosRUFBZTtBQUFFVSxhQUFLLEVBQUVMLElBQUksQ0FBQ0csR0FBTCxDQUFTRCxDQUFULEVBQVlHLEtBQXJCO0FBQTRCQyxhQUFLLEVBQUVOLElBQUksQ0FBQ0csR0FBTCxDQUFTRCxDQUFULEVBQVlJLEtBQS9DO0FBQXNEQyxVQUFFLEVBQUVaLFNBQVMsQ0FBQ1MsTUFBcEU7QUFBNEVJLGFBQUssRUFBRVIsSUFBSSxDQUFDRyxHQUFMLENBQVNELENBQVQsRUFBWU87QUFBL0YsT0FBZixDQUFELENBQVo7QUFDSDs7QUFDREMsV0FBTyxDQUFDQyxHQUFSLENBQVlYLElBQVo7QUFDSCxHQVJEOztBQVVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQSwyQkFDSSxxRUFBQyxtREFBRDtBQUFBLDhCQUNJLHFFQUFDLG1EQUFEO0FBQUEsZ0NBQ0k7QUFBSSxtQkFBUyxFQUFDLGNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUtJLHFFQUFDLG1EQUFEO0FBQUEsZ0NBQ0kscUVBQUMsc0RBQUQ7QUFBUSxpQkFBTyxFQUFFLE1BQU1ZLGVBQWUsRUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSSxxRUFBQyxzREFBRDtBQUFRLGlCQUFPLEVBQUUsTUFBTWYsZUFBZSxFQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixFQUdLTCxTQUFTLENBQUNxQixHQUFWLENBQWNDLEtBQUssaUJBQ2hCLHFFQUFDLG9EQUFEO0FBQUEsaUNBQ0kscUVBQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUEsb0NBQ0kscUVBQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQUEseUJBQWFBLEtBQUssQ0FBQ1QsS0FBbkIsU0FBNkJTLEtBQUssQ0FBQ1IsS0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBRUkscUVBQUMsb0RBQUQsQ0FBTSxHQUFOO0FBQVUsaUJBQUcsRUFBRVEsS0FBSyxDQUFDTixLQUFyQjtBQUE0Qix1QkFBUyxFQUFDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosV0FBV00sS0FBSyxDQUFDUCxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURILENBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXFCRixDQTdDRjs7R0FBTWhCLEk7O0tBQUFBLEk7QUErQ1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYzMmZkOWU5ZmM4Zjc0ODVjNGQzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgQnV0dG9uLCBDYXJkLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdG9wQW5pbWVzLCBzZXRUb3BBbmltZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbdG9wTWFuZ2FzLCBzZXRUb3BNYW5nYXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgLy8gY29uc3QgZmluZFJhbmRvbUFuaW1lID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3RvcC9hbmltZS8xL3R2JylcclxuICAgIC8vICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnRvcC5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBzZXRUb3BBbmltZXMoWy4uLnRvcEFuaW1lcywgeyB0aXRsZTogZGF0YS50b3BbaV0udGl0bGUsIHNjb3JlOiBkYXRhLnRvcFtpXS5zY29yZSwgaWQ6IHRvcEFuaW1lcy5sZW5ndGgsIGltYWdlOiBkYXRhLnRvcFtpXS5pbWFnZV91cmx9XSlcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIC8vIH1cclxuXHJcbiAgICBjb25zdCBmaW5kUmFuZG9tTWFuZ2EgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL21hbmdhLzEvbWFuZ2EnKVxyXG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEudG9wLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNldFRvcE1hbmdhcyhbLi4udG9wTWFuZ2FzLCB7IHRpdGxlOiBkYXRhLnRvcFtpXS50aXRsZSwgc2NvcmU6IGRhdGEudG9wW2ldLnNjb3JlLCBpZDogdG9wTWFuZ2FzLmxlbmd0aCwgaW1hZ2U6IGRhdGEudG9wW2ldLmltYWdlX3VybH1dKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21sLTInPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LXByaW1hcnknPlNvcmE8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9XZW4nPk15IE1lZGlhIExpc3Q8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBmaW5kUmFuZG9tQW5pbWUoKX0+R2V0IFJhbmRvbSBBbmltZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gZmluZFJhbmRvbU1hbmdhKCl9PkdldCBSYW5kb20gTWFuZ2E8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7dG9wQW5pbWVzLm1hcChhbmltZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17YW5pbWUuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT57YW5pbWUudGl0bGV9IHwge2FuaW1lLnNjb3JlfTwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgc3JjPXthbmltZS5pbWFnZX0gY2xhc3NOYW1lPSdjb2wtbWQtMic+PC9DYXJkLkltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbil9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==