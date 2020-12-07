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
    setTopAnimes([...topAnimes, {
      title: data.top[random].title,
      score: data.top[random].score,
      id: topAnimes.length,
      image: data.top[random].image_url
    }]);
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
          lineNumber: 35,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: "/Wen",
          children: "My Media List"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          onClick: () => findRandomAnime(),
          children: "Get Random Anime"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          onClick: () => findRandomManga(),
          children: "Get Random Manga"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, undefined), topAnimes.map(anime => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Title, {
              children: [anime.title, " | ", anime.score]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Img, {
              src: anime.image,
              className: "col-md-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 29
          }, undefined)
        }, anime.id, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 25
        }, undefined)), topMangas.map(manga => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Title, {
              children: [manga.title, " | ", manga.score]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 33
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Img, {
              src: manga.image,
              className: "col-md-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 33
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 29
          }, undefined)
        }, manga.id, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }, undefined))]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInRvcEFuaW1lcyIsInNldFRvcEFuaW1lcyIsInVzZVN0YXRlIiwidG9wTWFuZ2FzIiwic2V0VG9wTWFuZ2FzIiwiZ2V0UmFuZG9tSW50IiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZmluZFJhbmRvbUFuaW1lIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInRpdGxlIiwidG9wIiwic2NvcmUiLCJpZCIsImxlbmd0aCIsImltYWdlIiwiaW1hZ2VfdXJsIiwiZmluZFJhbmRvbU1hbmdhIiwiaSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJhbmltZSIsIm1hbmdhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFBQTs7QUFDZixRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsRUFBRCxDQUExQztBQUNBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkYsc0RBQVEsQ0FBQyxFQUFELENBQTFDOztBQUVBLFFBQU1HLFlBQVksR0FBSUMsR0FBRCxJQUFTO0FBQzFCLFdBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JGLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixHQUFYLENBQTNCLENBQVA7QUFDSCxHQUZEOztBQUlBLFFBQU1JLGVBQWUsR0FBRyxZQUFZO0FBQ2hDLFFBQUlELE1BQU0sR0FBRyxNQUFNSixZQUFZLENBQUMsRUFBRCxDQUEvQjtBQUNBLFFBQUlNLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsc0NBQXFDSCxNQUFPLEtBQTlDLENBQXJCO0FBQ0EsUUFBSUksSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixF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LEtBQW5CLFNBQTZCYSxLQUFLLENBQUNYLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUVJLHFFQUFDLG9EQUFELENBQU0sR0FBTjtBQUFVLGlCQUFHLEVBQUVXLEtBQUssQ0FBQ1IsS0FBckI7QUFBNEIsdUJBQVMsRUFBQztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFdBQVdRLEtBQUssQ0FBQ1YsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESCxDQVhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUE2QkYsQ0F0REY7O0dBQU1uQixJOztLQUFBQSxJO0FBd0RTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45YjM3ZTRiM2QxZmE5MTUyNTFmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3RvcEFuaW1lcywgc2V0VG9wQW5pbWVzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW3RvcE1hbmdhcywgc2V0VG9wTWFuZ2FzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IGdldFJhbmRvbUludCA9IChtYXgpID0+IHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihtYXgpKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbmRSYW5kb21BbmltZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgcmFuZG9tID0gYXdhaXQgZ2V0UmFuZG9tSW50KDUwKVxyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuamlrYW4ubW9lL3YzL3RvcC9hbmltZS8ke3JhbmRvbX0vdHZgKVxyXG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICAgIHNldFRvcEFuaW1lcyhbLi4udG9wQW5pbWVzLCB7IHRpdGxlOiBkYXRhLnRvcFtyYW5kb21dLnRpdGxlLCBzY29yZTogZGF0YS50b3BbcmFuZG9tXS5zY29yZSwgaWQ6IHRvcEFuaW1lcy5sZW5ndGgsIGltYWdlOiBkYXRhLnRvcFtyYW5kb21dLmltYWdlX3VybH1dKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZpbmRSYW5kb21NYW5nYSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmppa2FuLm1vZS92My90b3AvbWFuZ2EvMS9tYW5nYScpXHJcbiAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS50b3AubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgc2V0VG9wTWFuZ2FzKFsuLi50b3BNYW5nYXMsIHsgdGl0bGU6IGRhdGEudG9wW2ldLnRpdGxlLCBzY29yZTogZGF0YS50b3BbaV0uc2NvcmUsIGlkOiB0b3BNYW5nYXMubGVuZ3RoLCBpbWFnZTogZGF0YS50b3BbaV0uaW1hZ2VfdXJsfV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWwtMic+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtcHJpbWFyeSc+U29yYTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL1dlbic+TXkgTWVkaWEgTGlzdDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGZpbmRSYW5kb21BbmltZSgpfT5HZXQgUmFuZG9tIEFuaW1lPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBmaW5kUmFuZG9tTWFuZ2EoKX0+R2V0IFJhbmRvbSBNYW5nYTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0b3BBbmltZXMubWFwKGFuaW1lID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQga2V5PXthbmltZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPnthbmltZS50aXRsZX0gfCB7YW5pbWUuc2NvcmV9PC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkltZyBzcmM9e2FuaW1lLmltYWdlfSBjbGFzc05hbWU9J2NvbC1tZC0yJz48L0NhcmQuSW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICB7dG9wTWFuZ2FzLm1hcChtYW5nYSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17bWFuZ2EuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT57bWFuZ2EudGl0bGV9IHwge21hbmdhLnNjb3JlfTwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgc3JjPXttYW5nYS5pbWFnZX0gY2xhc3NOYW1lPSdjb2wtbWQtMic+PC9DYXJkLkltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9kaXY+XHJcbil9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sInNvdXJjZVJvb3QiOiIifQ==