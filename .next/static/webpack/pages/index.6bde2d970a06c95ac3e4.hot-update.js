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
    1: setAnimes
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    title: '',
    score: '',
    image: ''
  }); // const [topMangas, setTopMangas] = useState([])

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
      image: data.top[random].image_url
    });
  }; // const findRandomManga = async () => {
  //     let random = await getRandomInt(50)
  //     let res = await fetch(`https://api.jikan.moe/v3/top/manga/${random}/manga`)
  //     let data = await res.json()
  //     setTopMangas([])
  //     for (let i = 0; i < data.top.length; i++) {
  //         setTopMangas([...topMangas, { title: data.top[i].title, score: data.top[i].score, id: topMangas.length, image: data.top[i].image_url}])
  //     }
  //     console.log(data)
  // }


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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
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
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
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

_s(Home, "I4KuTajY1kikfgH27RiM1dJhFpo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImFuaW1lIiwic2V0QW5pbWVzIiwidXNlU3RhdGUiLCJ0aXRsZSIsInNjb3JlIiwiaW1hZ2UiLCJnZXRSYW5kb21JbnQiLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJmaW5kUmFuZG9tQW5pbWUiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwic2V0VG9wQW5pbWVzIiwidG9wIiwiaW1hZ2VfdXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLE1BQU07QUFBQTs7QUFDZixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBcUJDLHNEQUFRLENBQUM7QUFBQ0MsU0FBSyxFQUFFLEVBQVI7QUFBWUMsU0FBSyxFQUFDLEVBQWxCO0FBQXNCQyxTQUFLLEVBQUM7QUFBNUIsR0FBRCxDQUFuQyxDQURlLENBRWY7O0FBRUEsUUFBTUMsWUFBWSxHQUFJQyxHQUFELElBQVM7QUFDMUIsV0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkYsSUFBSSxDQUFDQyxLQUFMLENBQVdGLEdBQVgsQ0FBM0IsQ0FBUDtBQUNILEdBRkQ7O0FBSUEsUUFBTUksZUFBZSxHQUFHLFlBQVk7QUFDaEMsUUFBSUQsTUFBTSxHQUFHLE1BQU1KLFlBQVksQ0FBQyxFQUFELENBQS9CO0FBQ0EsUUFBSU0sR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxzQ0FBcUNILE1BQU8sS0FBOUMsQ0FBckI7QUFDQSxRQUFJSSxJQUFJLEdBQUcsTUFBTUYsR0FBRyxDQUFDRyxJQUFKLEVBQWpCO0FBQ0FDLGdCQUFZLENBQUM7QUFBRWIsV0FBSyxFQUFFVyxJQUFJLENBQUNHLEdBQUwsQ0FBU1AsTUFBVCxFQUFpQlAsS0FBMUI7QUFBaUNDLFdBQUssRUFBRVUsSUFBSSxDQUFDRyxHQUFMLENBQVNQLE1BQVQsRUFBaUJOLEtBQXpEO0FBQWdFQyxXQUFLLEVBQUVTLElBQUksQ0FBQ0csR0FBTCxDQUFTUCxNQUFULEVBQWlCUTtBQUF4RixLQUFELENBQVo7QUFDSCxHQUxELENBUmUsQ0FlZjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBLDJCQUNJLHFFQUFDLG1EQUFEO0FBQUEsOEJBQ0kscUVBQUMsbURBQUQ7QUFBQSxnQ0FDSTtBQUFJLG1CQUFTLEVBQUMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBS0kscUVBQUMsbURBQUQ7QUFBQSwrQkFHSSxxRUFBQyxvREFBRDtBQUFBLGlDQUNRLHFFQUFDLG9EQUFELENBQU0sSUFBTjtBQUFBLG9DQUNJLHFFQUFDLG9EQUFELENBQU0sS0FBTjtBQUFBLHlCQUFhbEIsS0FBYixTQUF1QkEsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBRUkscUVBQUMsb0RBQUQsQ0FBTSxHQUFOO0FBQVUsaUJBQUcsRUFBRUEsS0FBZjtBQUFzQix1QkFBUyxFQUFDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBb0NGLENBaEVGOztHQUFNRCxJOztLQUFBQSxJO0FBa0VTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42YmRlMmQ5NzBhMDZjOTVhYzNlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IEJ1dHRvbiwgQ2FyZCwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2FuaW1lLCBzZXRBbmltZXNdID0gdXNlU3RhdGUoe3RpdGxlOiAnJywgc2NvcmU6JycsIGltYWdlOicnfSlcclxuICAgIC8vIGNvbnN0IFt0b3BNYW5nYXMsIHNldFRvcE1hbmdhc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICBjb25zdCBnZXRSYW5kb21JbnQgPSAobWF4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IobWF4KSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmaW5kUmFuZG9tQW5pbWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJhbmRvbSA9IGF3YWl0IGdldFJhbmRvbUludCg1MClcclxuICAgICAgICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmppa2FuLm1vZS92My90b3AvYW5pbWUvJHtyYW5kb219L3R2YClcclxuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICBzZXRUb3BBbmltZXMoeyB0aXRsZTogZGF0YS50b3BbcmFuZG9tXS50aXRsZSwgc2NvcmU6IGRhdGEudG9wW3JhbmRvbV0uc2NvcmUsIGltYWdlOiBkYXRhLnRvcFtyYW5kb21dLmltYWdlX3VybH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc3QgZmluZFJhbmRvbU1hbmdhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gICAgIGxldCByYW5kb20gPSBhd2FpdCBnZXRSYW5kb21JbnQoNTApXHJcbiAgICAvLyAgICAgbGV0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5qaWthbi5tb2UvdjMvdG9wL21hbmdhLyR7cmFuZG9tfS9tYW5nYWApXHJcbiAgICAvLyAgICAgbGV0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gICAgLy8gICAgIHNldFRvcE1hbmdhcyhbXSlcclxuXHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnRvcC5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICBzZXRUb3BNYW5nYXMoWy4uLnRvcE1hbmdhcywgeyB0aXRsZTogZGF0YS50b3BbaV0udGl0bGUsIHNjb3JlOiBkYXRhLnRvcFtpXS5zY29yZSwgaWQ6IHRvcE1hbmdhcy5sZW5ndGgsIGltYWdlOiBkYXRhLnRvcFtpXS5pbWFnZV91cmx9XSlcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIC8vIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtbC0yJz5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1wcmltYXJ5Jz5Tb3JhPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvV2VuJz5NeSBNZWRpYSBMaXN0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGZpbmRSYW5kb21BbmltZSgpfT5HZXQgUmFuZG9tIEFuaW1lPC9CdXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGZpbmRSYW5kb21NYW5nYSgpfT5HZXQgUmFuZG9tIE1hbmdhPC9CdXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT57YW5pbWV9IHwge2FuaW1lfTwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgc3JjPXthbmltZX0gY2xhc3NOYW1lPSdjb2wtbWQtMic+PC9DYXJkLkltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiB7dG9wQW5pbWVzLm1hcChhbmltZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17YW5pbWUuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT57YW5pbWUudGl0bGV9IHwge2FuaW1lLnNjb3JlfTwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgc3JjPXthbmltZS5pbWFnZX0gY2xhc3NOYW1lPSdjb2wtbWQtMic+PC9DYXJkLkltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiB7dG9wTWFuZ2FzLm1hcChtYW5nYSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGtleT17bWFuZ2EuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT57bWFuZ2EudGl0bGV9IHwge21hbmdhLnNjb3JlfTwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5JbWcgc3JjPXttYW5nYS5pbWFnZX0gY2xhc3NOYW1lPSdjb2wtbWQtMic+PC9DYXJkLkltZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9ICovfVxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvZGl2PlxyXG4pfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=