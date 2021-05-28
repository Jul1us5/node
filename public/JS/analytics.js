/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./JS/analytics.js ***!
  \*************************/
function createAnalytics() {
  var counter = 0;
  var isDestroyed = false;

  var listener = function listener() {
    return counter++;
  };

  document.addEventListener('click', listener);
  return {
    destroy: function destroy() {
      document.removeEventListener('click', listener);
      isDestroyed = true;
    },
    getClick: function getClick() {
      if (isDestroyed) {
        return 'Analytics is Destroyed!!!';
      }

      return counter;
    }
  };
}

window.analytics = createAnalytics();
/******/ })()
;
//# sourceMappingURL=analytics.js.map