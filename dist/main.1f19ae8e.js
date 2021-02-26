// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"style.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var str = "\n.triangle {\n    border: 10px solid transparent;\n    border-top-color: black;\n    width: 20px;\n    height: 20px;\n    position: absolute;\n    left: 50%;\n    top: 200px;\n    margin-left: -10px;\n}\n\n.arc {\n    background-color: black;\n    width: 20px;\n    height: 5px;\n    position: absolute;\n    left: -10px;\n    top: -15px;\n    border-top-left-radius: 10px 5px;\n    border-top-right-radius: 10px 5px;\n}\n\n@keyframes sniff {\n    0% {\n        transform: rotate(0deg);\n    }\n    33% {\n        transform: rotate(5deg);\n    }\n    66% {\n        transform: rotate(-5deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n\n.triangle:hover {\n    /* transform-origin: 50% 100%; */\n    animation: sniff 300ms infinite linear;\n}\n\n.eyes {\n    border: 2px solid black;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    top: 160px;\n    margin-left: -32px;\n    background-color: #2e2e2e;\n    border-radius: 50%;\n}\n\n.eyes::before {\n    content: '';\n    display: block;\n    border: 2px solid black;\n    width: 28px;\n    height: 28px;\n    background-color: white;\n    border-radius: 50%;\n    position: relative;\n    left: 8px;\n}\n\n.eyes.left {\n    transform: translateX(-100px);\n}\n\n.eyes.right {\n    transform: translateX(100px);\n}\n\n.lips {\n    position: absolute;\n}\n\n.lips.up {\n    width: 200px;\n    left: 50%;\n    top: 300px;\n    margin: -100px;\n    height: 50px;\n}\n\n.lips.up .left, .lips.up .right {\n    position: absolute;\n    border: 2px solid black;\n    border-top: none;\n    width: 80px;\n    height: 20px;\n    left: 50%;\n    margin-left: -40px;\n    z-index: 1;\n    background-color: #ffe600;\n}\n\n.lips.up .left {\n    border-right: none;\n    border-bottom-left-radius: 50px 20px;\n    transform: rotate(-25deg) translateX(-48px) translateY(10px);\n}\n\n.lips.up .left::before {\n    content: '';\n    display: block;\n    width: 50px;\n    height: 10px;\n    position: relative;\n    top: -8px;\n    background-color: #ffe600;\n}\n\n.lips.up .right {\n    border-left: none;\n    border-bottom-right-radius: 50px 20px;\n    transform: rotate(25deg) translateX(48px) translateY(10px);\n}\n\n.lips.up .right::before {\n    content: '';\n    display: block;\n    width: 60px;\n    height: 10px;\n    position: relative;\n    top: -8px;\n    background-color: #ffe600;\n}\n\n.lips.down {\n    width: 200px;\n    left: 50%;\n    top: 332px;\n    margin: -100px;\n    height: 218px;\n    overflow: hidden;\n}\n\n.lips.down .shadow {\n    border: 2px solid black;\n    position: absolute;\n    width: 140px;\n    height: 1000px;\n    left: 50%;\n    bottom: 50px;\n    margin-left: -70px;\n    border-bottom-left-radius: 70px 400px;\n    border-bottom-right-radius: 70px 400px;\n    background-color: #9b000a;\n    overflow: hidden;\n}\n\n.lips.down .tongue {\n    position: absolute;\n    width: 200px;\n    height: 300px;\n    left: 50%;\n    bottom: -160px;\n    margin-left: -100px;\n    border-top-left-radius: 200px 400px;\n    border-top-right-radius: 200px 400px;\n    background-color: #ff485f;\n}\n\n.cheek {\n    border: 2px solid black;\n    position: absolute;\n    width: 80px;\n    height: 80px;\n    left: 50%;\n    top: 266px;\n    margin-left: -40px;\n    border-radius: 50%;\n    background-color: red\n}\n\n.cheek.left {\n    transform: translateX(-140px);\n}\n\n.cheek.right {\n    transform: translateX(140px);\n}\n";
var _default = str;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _style = _interopRequireDefault(require("./style.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var html = document.querySelector('#main');
var css = document.querySelector('#style');
var index;
var paused;
var player = {
  init: function init() {
    paused = 0;
    index = 0;
    html.innerHTML = _style.default[index];
    css.innerHTML = '';
  },
  events: {
    '#play': 'play',
    '#pause': 'pause',
    '#replay': 'replay'
  },
  bindEvents: function bindEvents() {
    for (var selector in player.events) {
      if (player.events.hasOwnProperty(selector)) {
        document.querySelector(selector).onclick = player[player.events[selector]];
      }
    }
  },
  step: function step() {
    if (paused || index === _style.default.length - 1) {
      return;
    }

    setTimeout(function () {
      index++;

      if (_style.default[index] === '\n') {
        html.innerHTML += '<br>';
      } else if (_style.default[index] === ' ') {
        html.innerHTML += '&nbsp;';
      } else {
        html.innerHTML += _style.default[index];
      }

      css.innerHTML += _style.default[index];
      html.scrollTop = html.scrollHeight;
      player.step();
    }, 15);
  },
  play: function play() {
    paused = 0;
    player.step();
  },
  pause: function pause() {
    paused = 1;
  },
  replay: function replay() {
    player.init();
    player.step();
  }
};
player.init();
player.bindEvents();
},{"./style.js":"style.js"}],"../../../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61402" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=main.1f19ae8e.js.map