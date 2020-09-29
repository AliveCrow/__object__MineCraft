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
})({"index.js":[function(require,module,exports) {
var string = "\n\t\n\n.head-top {\n    width: 80px;\n    background-position: -80px 0;\n    transform-origin: top center;\n    transform: rotateX(90deg)\n}\n.head-front {\n    width: 80px;\n    background-position: -80px -80px;\n    transform: translateZ(80px);\n}\n.head-left {\n    width: 80px;\n    background-position: 0 -80px;\n    transform-origin: bottom left;\n    transform: rotateY(-90deg)\n}\n.head-right {\n    width: 80px;\n    background-position: -160px -80px;\n    transform-origin: bottom right;\n    transform: rotateY(90deg)\n}\n.head-back {\n    width: 80px;\n    background-position: -240px -80px;\n}\n.head-bottom {\n    width: 80px;\n    background-position: -160px 0;\n    transform-origin: bottom center;\n    transform: rotateX(-90deg)\n}\n\n.body-top {\n    height: 40px !important;\n    width: 80px;\n    background-position: -200px -160px;\n    transform-origin: top center;\n    transform: rotateX(90deg);\n}\n.body-front {\n    width: 80px;\n    background-position: -200px -200px;\n    transform: translateZ(40px);\n}\n.body-left {\n    width: 40px !important;\n    background-position: -160px -200px;\n    transform-origin: 0 center;\n    transform: rotateY(-90deg) translateZ(-80px);\n}\n.body-right {\n    width: 40px !important;\n    background-position: -280px -200px;\n    transform-origin: 0 center;\n    transform: rotateY(-90deg);\n}\n.body-back {\n    width: 80px;\n    background-position: -320px -200px;\n}\n.body-bottom {\n    height: 40px !important;\n    width: 80px;\n    background-position: -280px -160px;\n    transform-origin: top center;\n    transform: rotateX(90deg) translateZ(-120px);\n}\n\n.leftArm-top {\n    height: 40px !important;\n    width: 40px;\n    background-position: -440px -160px;\n    transform-origin: top center;\n    transform: rotateX(90deg);\n}\n.leftArm-front {\n    width: 40px;\n    background-position: -440px -200px;\n    transform: translateZ(40px);\n}\n.leftArm-left {\n    width: 40px;\n    background-position: -400px -200px;\n    transform-origin: 0 center;\n    transform: rotateY(-90deg) translateZ(0px);\n}\n.leftArm-right {\n    width: 40px;\n    background-position: -480px -200px;\n    transform-origin: 0 center;\n    transform: rotateY(-90deg) translateZ(-40px);\n}\n.leftArm-back {\n    width: 40px;\n    background-position: -520px -200px;\n}\n.leftArm-bottom {\n    width: 40px;\n    height: 40px !important;\n    background-position: -480px -160px;\n    transform-origin: top center;\n    transform: rotateX(90deg) translateZ(-120px);\n}\n\n.rightArm-top {\n    width: 40px;\n    height: 40px !important;\n    background-position: -440px -160px;\n    transform-origin: top center;\n    transform: rotateX(90deg);\n}\n.rightArm-front {\n    width: 40px;\n    background-position: -440px -200px;\n    transform: translateZ(40px);\n}\n.rightArm-right {\n    width: 40px;\n    background-position: -400px -200px;\n    transform-origin: 0 center;\n    transform: rotateY(-90deg) translateZ(0px);\n}\n.rightArm-left {\n    width: 40px;\n    background-position: -480px -200px;\n    transform-origin: 0 center;\n    transform: rotateY(-90deg) translateZ(-40px);\n}\n.rightArm-back {\n    width: 40px;\n    background-position: -520px -200px;\n\n}\n.rightArm-bottom {\n    width: 40px;\n    height: 40px !important;\n    background-position: -480px -160px;\n    transform-origin: top center;\n    transform: rotateX(90deg) translateZ(-120px);\n}\n\n.leftLeg-top {\n    height: 40px !important;\n    width: 40px;\n    background-position: -40px -160px;\n    transform-origin: top center;\n    transform: rotateX(90deg);\n}\n.leftLeg-front {\n    width: 40px;\n    background-position: -40px -200px;\n    transform: translateZ(40px);\n}\n.leftLeg-right {\n    width: 40px;\n    background-position: -80px -200px;\n    transform-origin: 0 center;\n    transform: rotateY(-90deg) translateZ(0px);\n}\n.leftLeg-left {\n    width: 40px;\n    background-position: 0 -200px;\n    transform-origin: 0 center;\n    transform: rotateY(-90deg) translateZ(-40px);\n}\n.leftLeg-back {\n    width: 40px;\n    background-position: -120px -200px;\n\n}\n.leftLeg-bottom {\n    width: 40px;\n    height: 40px !important;\n    background-position: -80px -160px;\n    transform-origin: top center;\n    transform: rotateX(90deg) translateZ(-120px);\n}\n\n.rightLeg-top {\n    height: 40px !important;\n    width: 40px;\n    background-position: -40px -160px;\n    transform-origin: top center;\n    transform: rotateX(90deg);\n}\n.rightLeg-front {\n    width: 40px;\n    background-position: -40px -200px;\n    transform: translateZ(40px);\n}\n.rightLeg-left {\n    width: 40px;\n    background-position: -80px -200px;\n    transform-origin: 0 center;\n    transform: rotateY(-90deg) translateZ(0px);\n}\n.rightLeg-right{\n    width: 40px;\n    background-position: 0 -200px;\n    transform-origin: 0 center;\n    transform: rotateY(-90deg) translateZ(-40px);\n}\n.rightLeg-back {\n    width: 40px;\n    background-position: -120px -200px;\n\n}\n.rightLeg-bottom {\n    width: 40px;\n    height: 40px !important;\n    background-position: -80px -160px;\n    transform-origin: top center;\n    transform: rotateX(90deg) translateZ(-120px);\n}\n\n\n.minecraft-body{\n    top:-80px\n}\n.minecraft-rightArm,\n.minecraft-leftArm{\n    top:-80px;\n}\n.minecraft-leftArm{\n    left: 120px;\n}\n.minecraft-rightArm{\n    right: 120px;\n}\n.minecraft-rightLeg,\n.minecraft-leftLeg{\n    top: -100px;\n}\n.minecraft-leftLeg{\n    left: 120px;\n}\n.minecraft-rightLeg{\n    right: 120px\n}\n\n\t";
var player = {
  n: 1,
  playStatus: true,
  time: 100,
  id: undefined,
  el: {
    "#showCode": $('#showCode'),
    "#codeCss": $('#codeCss'),
    // ".group1": 'group',
    "#speed-slow": 'slow',
    "#speed-up": 'up',
    "#ani-on": 'aniOn',
    "#pause": 'pause',
    "a1": document.querySelector('#showCode')
  },
  init: function init() {
    console.log('init');
    clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
    player.bindEvents();
    player.el['#codeCss'].html(string.substr(0, player.n));
    player.el['a1'].innerText = string.substr(0, player.n);
    player.el['a1'].scrollTop = player.el['a1'].scrollHeight;
  },
  run: function run() {
    player.playStatus = true;
    player.n += 1;

    if (player.n > string.length) {
      clearInterval(player.id);
      player.playStatus = false;
      return;
    }

    player.el['#codeCss'].html(string.substr(0, player.n));
    player.el['a1'].innerText = string.substr(0, player.n);
    player.el['a1'].scrollTop = player.el['a1'].scrollHeight;
  },
  pause: function pause() {
    if (player.playStatus) {
      clearInterval(player.id);
      player.playStatus = false;
    } else {
      player.id = setInterval(player.run, player.time);
      player.playStatus = true;
    }
  },
  slow: function slow() {
    clearInterval(player.id);
    player.time += 40;
    player.id = setInterval(player.run, player.time);
  },
  up: function up() {
    clearInterval(player.id);
    player.time -= 40;
    player.time = player.time < 0 ? 0 : player.time;
    player.id = setInterval(player.run, player.time);
  },
  aniOn: function aniOn() {
    console.log($('#aniBtn').html() === "");

    if ($('#aniBtn').html() === "") {
      $('#aniBtn').html(ani);
      $('#ani-on').text('关闭动画');
    } else {
      $('#aniBtn').html('');
      $('#ani-on').text('开启动画');
    }
  },
  bindEvents: function bindEvents() {
    for (var key in player.el) {
      if (player.el.hasOwnProperty(key)) {
        //hasOwnProperty判断el的自身属性,不判断继承的属性
        if (key !== '#showCode') {
          (function () {
            var ele = player.el[key];
            $("".concat(key)).click(function () {
              player[ele]();
            });
          })();
        }
      }
    }
  }
};
player.init();
},{}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50992" + '/');

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
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map