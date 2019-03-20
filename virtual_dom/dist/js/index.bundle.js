/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../snabbdom/es/h.js":
/*!***************************!*\
  !*** ../snabbdom/es/h.js ***!
  \***************************/
/*! exports provided: h, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return h; });\n/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ \"../snabbdom/es/vnode.js\");\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is */ \"../snabbdom/es/is.js\");\n\n\nfunction addNS(data, children, sel) {\n    data.ns = 'http://www.w3.org/2000/svg';\n    if (sel !== 'foreignObject' && children !== undefined) {\n        for (var i = 0; i < children.length; ++i) {\n            var childData = children[i].data;\n            if (childData !== undefined) {\n                addNS(childData, children[i].children, children[i].sel);\n            }\n        }\n    }\n}\nfunction h(sel, b, c) {\n    // debugger\n    var data = {}, children, text, i;\n    if (c !== undefined) {\n        data = b;\n        if (_is__WEBPACK_IMPORTED_MODULE_1__[\"array\"](c)) {\n            children = c;\n        }\n        else if (_is__WEBPACK_IMPORTED_MODULE_1__[\"primitive\"](c)) {\n            text = c;\n        }\n        else if (c && c.sel) {\n            children = [c];\n        }\n    }\n    else if (b !== undefined) {\n        if (_is__WEBPACK_IMPORTED_MODULE_1__[\"array\"](b)) {\n            children = b;\n        }\n        else if (_is__WEBPACK_IMPORTED_MODULE_1__[\"primitive\"](b)) {\n            text = b;\n        }\n        else if (b && b.sel) {\n            children = [b];\n        }\n        else {\n            data = b;\n        }\n    }\n    if (children !== undefined) {\n        for (i = 0; i < children.length; ++i) {\n            if (_is__WEBPACK_IMPORTED_MODULE_1__[\"primitive\"](children[i]))\n                children[i] = Object(_vnode__WEBPACK_IMPORTED_MODULE_0__[\"vnode\"])(undefined, undefined, undefined, children[i], undefined);\n        }\n    }\n    if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g' &&\n        (sel.length === 3 || sel[3] === '.' || sel[3] === '#')) {\n        addNS(data, children, sel);\n    }\n    return Object(_vnode__WEBPACK_IMPORTED_MODULE_0__[\"vnode\"])(sel, data, children, text, undefined);\n}\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (h);\n//# sourceMappingURL=h.js.map\n\n//# sourceURL=webpack:///../snabbdom/es/h.js?");

/***/ }),

/***/ "../snabbdom/es/htmldomapi.js":
/*!************************************!*\
  !*** ../snabbdom/es/htmldomapi.js ***!
  \************************************/
/*! exports provided: htmlDomApi, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"htmlDomApi\", function() { return htmlDomApi; });\nfunction createElement(tagName) {\n    return document.createElement(tagName);\n}\nfunction createElementNS(namespaceURI, qualifiedName) {\n    return document.createElementNS(namespaceURI, qualifiedName);\n}\nfunction createTextNode(text) {\n    return document.createTextNode(text);\n}\nfunction createComment(text) {\n    return document.createComment(text);\n}\nfunction insertBefore(parentNode, newNode, referenceNode) {\n    parentNode.insertBefore(newNode, referenceNode);\n}\nfunction removeChild(node, child) {\n    node.removeChild(child);\n}\nfunction appendChild(node, child) {\n    node.appendChild(child);\n}\nfunction parentNode(node) {\n    return node.parentNode;\n}\nfunction nextSibling(node) {\n    return node.nextSibling;\n}\nfunction tagName(elm) {\n    return elm.tagName;\n}\nfunction setTextContent(node, text) {\n    node.textContent = text;\n}\nfunction getTextContent(node) {\n    return node.textContent;\n}\nfunction isElement(node) {\n    return node.nodeType === 1;\n}\nfunction isText(node) {\n    return node.nodeType === 3;\n}\nfunction isComment(node) {\n    return node.nodeType === 8;\n}\nvar htmlDomApi = {\n    createElement: createElement,\n    createElementNS: createElementNS,\n    createTextNode: createTextNode,\n    createComment: createComment,\n    insertBefore: insertBefore,\n    removeChild: removeChild,\n    appendChild: appendChild,\n    parentNode: parentNode,\n    nextSibling: nextSibling,\n    tagName: tagName,\n    setTextContent: setTextContent,\n    getTextContent: getTextContent,\n    isElement: isElement,\n    isText: isText,\n    isComment: isComment,\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (htmlDomApi);\n//# sourceMappingURL=htmldomapi.js.map\n\n//# sourceURL=webpack:///../snabbdom/es/htmldomapi.js?");

/***/ }),

/***/ "../snabbdom/es/is.js":
/*!****************************!*\
  !*** ../snabbdom/es/is.js ***!
  \****************************/
/*! exports provided: array, primitive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"array\", function() { return array; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"primitive\", function() { return primitive; });\nvar array = Array.isArray;\nfunction primitive(s) {\n    return typeof s === 'string' || typeof s === 'number';\n}\n//# sourceMappingURL=is.js.map\n\n//# sourceURL=webpack:///../snabbdom/es/is.js?");

/***/ }),

/***/ "../snabbdom/es/snabbdom.js":
/*!**********************************!*\
  !*** ../snabbdom/es/snabbdom.js ***!
  \**********************************/
/*! exports provided: h, thunk, init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ \"../snabbdom/es/vnode.js\");\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is */ \"../snabbdom/es/is.js\");\n/* harmony import */ var _htmldomapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./htmldomapi */ \"../snabbdom/es/htmldomapi.js\");\n/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./h */ \"../snabbdom/es/h.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return _h__WEBPACK_IMPORTED_MODULE_3__[\"h\"]; });\n\n/* harmony import */ var _thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./thunk */ \"../snabbdom/es/thunk.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"thunk\", function() { return _thunk__WEBPACK_IMPORTED_MODULE_4__[\"thunk\"]; });\n\n\n\n\nfunction isUndef(s) { return s === undefined; }\nfunction isDef(s) { return s !== undefined; }\nvar emptyNode = Object(_vnode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('', {}, [], undefined, undefined);\nfunction sameVnode(vnode1, vnode2) {\n    return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;\n}\nfunction isVnode(vnode) {\n    return vnode.sel !== undefined;\n}\nfunction createKeyToOldIdx(children, beginIdx, endIdx) {\n    var i, map = {}, key, ch;\n    for (i = beginIdx; i <= endIdx; ++i) {\n        ch = children[i];\n        if (ch != null) {\n            key = ch.key;\n            if (key !== undefined)\n                map[key] = i;\n        }\n    }\n    return map;\n}\nvar hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];\n\n\nfunction init(modules, domApi) {\n    var i, j, cbs = {};\n    var api = domApi !== undefined ? domApi : _htmldomapi__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    for (i = 0; i < hooks.length; ++i) {\n        cbs[hooks[i]] = [];\n        for (j = 0; j < modules.length; ++j) {\n            var hook = modules[j][hooks[i]];\n            if (hook !== undefined) {\n                cbs[hooks[i]].push(hook);\n            }\n        }\n    }\n    function emptyNodeAt(elm) {\n        var id = elm.id ? '#' + elm.id : '';\n        var c = elm.className ? '.' + elm.className.split(' ').join('.') : '';\n        return Object(_vnode__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm);\n    }\n    function createRmCb(childElm, listeners) {\n        return function rmCb() {\n            if (--listeners === 0) {\n                var parent_1 = api.parentNode(childElm);\n                api.removeChild(parent_1, childElm);\n            }\n        };\n    }\n    function createElm(vnode, insertedVnodeQueue) {\n        var i, data = vnode.data;\n        if (data !== undefined) {\n            if (isDef(i = data.hook) && isDef(i = i.init)) {\n                i(vnode);\n                data = vnode.data;\n            }\n        }\n        var children = vnode.children, sel = vnode.sel;\n        if (sel === '!') {\n            if (isUndef(vnode.text)) {\n                vnode.text = '';\n            }\n            vnode.elm = api.createComment(vnode.text);\n        }\n        else if (sel !== undefined) {\n            // Parse selector\n            var hashIdx = sel.indexOf('#');\n            var dotIdx = sel.indexOf('.', hashIdx);\n            var hash = hashIdx > 0 ? hashIdx : sel.length;\n            var dot = dotIdx > 0 ? dotIdx : sel.length;\n            var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;\n            var elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag)\n                : api.createElement(tag);\n            if (hash < dot)\n                elm.setAttribute('id', sel.slice(hash + 1, dot));\n            if (dotIdx > 0)\n                elm.setAttribute('class', sel.slice(dot + 1).replace(/\\./g, ' '));\n            for (i = 0; i < cbs.create.length; ++i)\n                cbs.create[i](emptyNode, vnode);\n            if (_is__WEBPACK_IMPORTED_MODULE_1__[\"array\"](children)) {\n                for (i = 0; i < children.length; ++i) {\n                    var ch = children[i];\n                    if (ch != null) {\n                        api.appendChild(elm, createElm(ch, insertedVnodeQueue));\n                    }\n                }\n            }\n            else if (_is__WEBPACK_IMPORTED_MODULE_1__[\"primitive\"](vnode.text)) {\n                api.appendChild(elm, api.createTextNode(vnode.text));\n            }\n            i = vnode.data.hook; // Reuse variable\n            if (isDef(i)) {\n                if (i.create)\n                    i.create(emptyNode, vnode);\n                if (i.insert)\n                    insertedVnodeQueue.push(vnode);\n            }\n        }\n        else {\n            vnode.elm = api.createTextNode(vnode.text);\n        }\n        return vnode.elm;\n    }\n    function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {\n        for (; startIdx <= endIdx; ++startIdx) {\n            var ch = vnodes[startIdx];\n            if (ch != null) {\n                api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);\n            }\n        }\n    }\n    function invokeDestroyHook(vnode) {\n        var i, j, data = vnode.data;\n        if (data !== undefined) {\n            if (isDef(i = data.hook) && isDef(i = i.destroy))\n                i(vnode);\n            for (i = 0; i < cbs.destroy.length; ++i)\n                cbs.destroy[i](vnode);\n            if (vnode.children !== undefined) {\n                for (j = 0; j < vnode.children.length; ++j) {\n                    i = vnode.children[j];\n                    if (i != null && typeof i !== \"string\") {\n                        invokeDestroyHook(i);\n                    }\n                }\n            }\n        }\n    }\n    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {\n        for (; startIdx <= endIdx; ++startIdx) {\n            var i_1 = void 0, listeners = void 0, rm = void 0, ch = vnodes[startIdx];\n            if (ch != null) {\n                if (isDef(ch.sel)) {\n                    invokeDestroyHook(ch);\n                    listeners = cbs.remove.length + 1;\n                    rm = createRmCb(ch.elm, listeners);\n                    for (i_1 = 0; i_1 < cbs.remove.length; ++i_1)\n                        cbs.remove[i_1](ch, rm);\n                    if (isDef(i_1 = ch.data) && isDef(i_1 = i_1.hook) && isDef(i_1 = i_1.remove)) {\n                        i_1(ch, rm);\n                    }\n                    else {\n                        rm();\n                    }\n                }\n                else { // Text node\n                    api.removeChild(parentElm, ch.elm);\n                }\n            }\n        }\n    }\n    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {\n        var oldStartIdx = 0, newStartIdx = 0;\n        var oldEndIdx = oldCh.length - 1;\n        var oldStartVnode = oldCh[0];\n        var oldEndVnode = oldCh[oldEndIdx];\n        var newEndIdx = newCh.length - 1;\n        var newStartVnode = newCh[0];\n        var newEndVnode = newCh[newEndIdx];\n        var oldKeyToIdx;\n        var idxInOld;\n        var elmToMove;\n        var before;\n        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {\n            if (oldStartVnode == null) {\n                oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left\n            }\n            else if (oldEndVnode == null) {\n                oldEndVnode = oldCh[--oldEndIdx];\n            }\n            else if (newStartVnode == null) {\n                newStartVnode = newCh[++newStartIdx];\n            }\n            else if (newEndVnode == null) {\n                newEndVnode = newCh[--newEndIdx];\n            }\n            else if (sameVnode(oldStartVnode, newStartVnode)) {\n                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);\n                oldStartVnode = oldCh[++oldStartIdx];\n                newStartVnode = newCh[++newStartIdx];\n            }\n            else if (sameVnode(oldEndVnode, newEndVnode)) {\n                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);\n                oldEndVnode = oldCh[--oldEndIdx];\n                newEndVnode = newCh[--newEndIdx];\n            }\n            else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right\n                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);\n                api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));\n                oldStartVnode = oldCh[++oldStartIdx];\n                newEndVnode = newCh[--newEndIdx];\n            }\n            else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left\n                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);\n                api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);\n                oldEndVnode = oldCh[--oldEndIdx];\n                newStartVnode = newCh[++newStartIdx];\n            }\n            else {\n                if (oldKeyToIdx === undefined) {\n                    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);\n                }\n                idxInOld = oldKeyToIdx[newStartVnode.key];\n                if (isUndef(idxInOld)) { // New element\n                    api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);\n                    newStartVnode = newCh[++newStartIdx];\n                }\n                else {\n                    elmToMove = oldCh[idxInOld];\n                    if (elmToMove.sel !== newStartVnode.sel) {\n                        api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);\n                    }\n                    else {\n                        patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);\n                        oldCh[idxInOld] = undefined;\n                        api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);\n                    }\n                    newStartVnode = newCh[++newStartIdx];\n                }\n            }\n        }\n        if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {\n            if (oldStartIdx > oldEndIdx) {\n                before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;\n                addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);\n            }\n            else {\n                removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);\n            }\n        }\n    }\n    function patchVnode(oldVnode, vnode, insertedVnodeQueue) {\n        var i, hook;\n        if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {\n            i(oldVnode, vnode);\n        }\n        var elm = vnode.elm = oldVnode.elm;\n        var oldCh = oldVnode.children;\n        var ch = vnode.children;\n        if (oldVnode === vnode)\n            return;\n        if (vnode.data !== undefined) {\n            for (i = 0; i < cbs.update.length; ++i)\n                cbs.update[i](oldVnode, vnode);\n            i = vnode.data.hook;\n            if (isDef(i) && isDef(i = i.update))\n                i(oldVnode, vnode);\n        }\n        if (isUndef(vnode.text)) {\n            if (isDef(oldCh) && isDef(ch)) {\n                if (oldCh !== ch)\n                    updateChildren(elm, oldCh, ch, insertedVnodeQueue);\n            }\n            else if (isDef(ch)) {\n                if (isDef(oldVnode.text))\n                    api.setTextContent(elm, '');\n                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);\n            }\n            else if (isDef(oldCh)) {\n                removeVnodes(elm, oldCh, 0, oldCh.length - 1);\n            }\n            else if (isDef(oldVnode.text)) {\n                api.setTextContent(elm, '');\n            }\n        }\n        else if (oldVnode.text !== vnode.text) {\n            if (isDef(oldCh)) {\n                removeVnodes(elm, oldCh, 0, oldCh.length - 1);\n            }\n            api.setTextContent(elm, vnode.text);\n        }\n        if (isDef(hook) && isDef(i = hook.postpatch)) {\n            i(oldVnode, vnode);\n        }\n    }\n    return function patch(oldVnode, vnode) {\n        console.log('hello');\n        // console.log('hello');\n        debugger;\n        var i, elm, parent;\n        var insertedVnodeQueue = [];\n        for (i = 0; i < cbs.pre.length; ++i)\n            cbs.pre[i]();\n        if (!isVnode(oldVnode)) {\n            oldVnode = emptyNodeAt(oldVnode);\n        }\n        if (sameVnode(oldVnode, vnode)) {\n            patchVnode(oldVnode, vnode, insertedVnodeQueue);\n        }\n        else {\n            elm = oldVnode.elm;\n            parent = api.parentNode(elm);\n            createElm(vnode, insertedVnodeQueue);\n            if (parent !== null) {\n                api.insertBefore(parent, vnode.elm, api.nextSibling(elm));\n                removeVnodes(parent, [oldVnode], 0, 0);\n            }\n        }\n        for (i = 0; i < insertedVnodeQueue.length; ++i) {\n            insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);\n        }\n        for (i = 0; i < cbs.post.length; ++i)\n            cbs.post[i]();\n        return vnode;\n    };\n}\n//# sourceMappingURL=snabbdom.js.map\n\n//# sourceURL=webpack:///../snabbdom/es/snabbdom.js?");

/***/ }),

/***/ "../snabbdom/es/thunk.js":
/*!*******************************!*\
  !*** ../snabbdom/es/thunk.js ***!
  \*******************************/
/*! exports provided: thunk, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"thunk\", function() { return thunk; });\n/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h */ \"../snabbdom/es/h.js\");\n\nfunction copyToThunk(vnode, thunk) {\n    thunk.elm = vnode.elm;\n    vnode.data.fn = thunk.data.fn;\n    vnode.data.args = thunk.data.args;\n    thunk.data = vnode.data;\n    thunk.children = vnode.children;\n    thunk.text = vnode.text;\n    thunk.elm = vnode.elm;\n}\nfunction init(thunk) {\n    var cur = thunk.data;\n    var vnode = cur.fn.apply(undefined, cur.args);\n    copyToThunk(vnode, thunk);\n}\nfunction prepatch(oldVnode, thunk) {\n    var i, old = oldVnode.data, cur = thunk.data;\n    var oldArgs = old.args, args = cur.args;\n    if (old.fn !== cur.fn || oldArgs.length !== args.length) {\n        copyToThunk(cur.fn.apply(undefined, args), thunk);\n        return;\n    }\n    for (i = 0; i < args.length; ++i) {\n        if (oldArgs[i] !== args[i]) {\n            copyToThunk(cur.fn.apply(undefined, args), thunk);\n            return;\n        }\n    }\n    copyToThunk(oldVnode, thunk);\n}\nvar thunk = function thunk(sel, key, fn, args) {\n    if (args === undefined) {\n        args = fn;\n        fn = key;\n        key = undefined;\n    }\n    return Object(_h__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(sel, {\n        key: key,\n        hook: { init: init, prepatch: prepatch },\n        fn: fn,\n        args: args\n    });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (thunk);\n//# sourceMappingURL=thunk.js.map\n\n//# sourceURL=webpack:///../snabbdom/es/thunk.js?");

/***/ }),

/***/ "../snabbdom/es/vnode.js":
/*!*******************************!*\
  !*** ../snabbdom/es/vnode.js ***!
  \*******************************/
/*! exports provided: vnode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"vnode\", function() { return vnode; });\nfunction vnode(sel, data, children, text, elm) {\n    var key = data === undefined ? undefined : data.key;\n    return { sel: sel, data: data, children: children,\n        text: text, elm: elm, key: key };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (vnode);\n//# sourceMappingURL=vnode.js.map\n\n//# sourceURL=webpack:///../snabbdom/es/vnode.js?");

/***/ }),

/***/ "../snabbdom/h.js":
/*!************************!*\
  !*** ../snabbdom/h.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar vnode_1 = __webpack_require__(/*! ./vnode */ \"../snabbdom/vnode.js\");\nvar is = __webpack_require__(/*! ./is */ \"../snabbdom/is.js\");\nfunction addNS(data, children, sel) {\n    data.ns = 'http://www.w3.org/2000/svg';\n    if (sel !== 'foreignObject' && children !== undefined) {\n        for (var i = 0; i < children.length; ++i) {\n            var childData = children[i].data;\n            if (childData !== undefined) {\n                addNS(childData, children[i].children, children[i].sel);\n            }\n        }\n    }\n}\nfunction h(sel, b, c) {\n    // debugger\n    var data = {}, children, text, i;\n    if (c !== undefined) {\n        data = b;\n        if (is.array(c)) {\n            children = c;\n        }\n        else if (is.primitive(c)) {\n            text = c;\n        }\n        else if (c && c.sel) {\n            children = [c];\n        }\n    }\n    else if (b !== undefined) {\n        if (is.array(b)) {\n            children = b;\n        }\n        else if (is.primitive(b)) {\n            text = b;\n        }\n        else if (b && b.sel) {\n            children = [b];\n        }\n        else {\n            data = b;\n        }\n    }\n    if (children !== undefined) {\n        for (i = 0; i < children.length; ++i) {\n            if (is.primitive(children[i]))\n                children[i] = vnode_1.vnode(undefined, undefined, undefined, children[i], undefined);\n        }\n    }\n    if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g' &&\n        (sel.length === 3 || sel[3] === '.' || sel[3] === '#')) {\n        addNS(data, children, sel);\n    }\n    return vnode_1.vnode(sel, data, children, text, undefined);\n}\nexports.h = h;\n;\nexports.default = h;\n//# sourceMappingURL=h.js.map\n\n//# sourceURL=webpack:///../snabbdom/h.js?");

/***/ }),

/***/ "../snabbdom/is.js":
/*!*************************!*\
  !*** ../snabbdom/is.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.array = Array.isArray;\nfunction primitive(s) {\n    return typeof s === 'string' || typeof s === 'number';\n}\nexports.primitive = primitive;\n//# sourceMappingURL=is.js.map\n\n//# sourceURL=webpack:///../snabbdom/is.js?");

/***/ }),

/***/ "../snabbdom/modules/class.js":
/*!************************************!*\
  !*** ../snabbdom/modules/class.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction updateClass(oldVnode, vnode) {\n    var cur, name, elm = vnode.elm, oldClass = oldVnode.data.class, klass = vnode.data.class;\n    if (!oldClass && !klass)\n        return;\n    if (oldClass === klass)\n        return;\n    oldClass = oldClass || {};\n    klass = klass || {};\n    for (name in oldClass) {\n        if (!klass[name]) {\n            elm.classList.remove(name);\n        }\n    }\n    for (name in klass) {\n        cur = klass[name];\n        if (cur !== oldClass[name]) {\n            elm.classList[cur ? 'add' : 'remove'](name);\n        }\n    }\n}\nexports.classModule = { create: updateClass, update: updateClass };\nexports.default = exports.classModule;\n//# sourceMappingURL=class.js.map\n\n//# sourceURL=webpack:///../snabbdom/modules/class.js?");

/***/ }),

/***/ "../snabbdom/modules/eventlisteners.js":
/*!*********************************************!*\
  !*** ../snabbdom/modules/eventlisteners.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction invokeHandler(handler, vnode, event) {\n    if (typeof handler === \"function\") {\n        // call function handler\n        handler.call(vnode, event, vnode);\n    }\n    else if (typeof handler === \"object\") {\n        // call handler with arguments\n        if (typeof handler[0] === \"function\") {\n            // special case for single argument for performance\n            if (handler.length === 2) {\n                handler[0].call(vnode, handler[1], event, vnode);\n            }\n            else {\n                var args = handler.slice(1);\n                args.push(event);\n                args.push(vnode);\n                handler[0].apply(vnode, args);\n            }\n        }\n        else {\n            // call multiple handlers\n            for (var i = 0; i < handler.length; i++) {\n                invokeHandler(handler[i], vnode, event);\n            }\n        }\n    }\n}\nfunction handleEvent(event, vnode) {\n    var name = event.type, on = vnode.data.on;\n    // call event handler(s) if exists\n    if (on && on[name]) {\n        invokeHandler(on[name], vnode, event);\n    }\n}\nfunction createListener() {\n    return function handler(event) {\n        handleEvent(event, handler.vnode);\n    };\n}\nfunction updateEventListeners(oldVnode, vnode) {\n    var oldOn = oldVnode.data.on, oldListener = oldVnode.listener, oldElm = oldVnode.elm, on = vnode && vnode.data.on, elm = (vnode && vnode.elm), name;\n    // optimization for reused immutable handlers\n    if (oldOn === on) {\n        return;\n    }\n    // remove existing listeners which no longer used\n    if (oldOn && oldListener) {\n        // if element changed or deleted we remove all existing listeners unconditionally\n        if (!on) {\n            for (name in oldOn) {\n                // remove listener if element was changed or existing listeners removed\n                oldElm.removeEventListener(name, oldListener, false);\n            }\n        }\n        else {\n            for (name in oldOn) {\n                // remove listener if existing listener removed\n                if (!on[name]) {\n                    oldElm.removeEventListener(name, oldListener, false);\n                }\n            }\n        }\n    }\n    // add new listeners which has not already attached\n    if (on) {\n        // reuse existing listener or create new\n        var listener = vnode.listener = oldVnode.listener || createListener();\n        // update vnode for listener\n        listener.vnode = vnode;\n        // if element changed or added we add all needed listeners unconditionally\n        if (!oldOn) {\n            for (name in on) {\n                // add listener if element was changed or new listeners added\n                elm.addEventListener(name, listener, false);\n            }\n        }\n        else {\n            for (name in on) {\n                // add listener if new listener added\n                if (!oldOn[name]) {\n                    elm.addEventListener(name, listener, false);\n                }\n            }\n        }\n    }\n}\nexports.eventListenersModule = {\n    create: updateEventListeners,\n    update: updateEventListeners,\n    destroy: updateEventListeners\n};\nexports.default = exports.eventListenersModule;\n//# sourceMappingURL=eventlisteners.js.map\n\n//# sourceURL=webpack:///../snabbdom/modules/eventlisteners.js?");

/***/ }),

/***/ "../snabbdom/modules/props.js":
/*!************************************!*\
  !*** ../snabbdom/modules/props.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction updateProps(oldVnode, vnode) {\n    var key, cur, old, elm = vnode.elm, oldProps = oldVnode.data.props, props = vnode.data.props;\n    if (!oldProps && !props)\n        return;\n    if (oldProps === props)\n        return;\n    oldProps = oldProps || {};\n    props = props || {};\n    for (key in oldProps) {\n        if (!props[key]) {\n            delete elm[key];\n        }\n    }\n    for (key in props) {\n        cur = props[key];\n        old = oldProps[key];\n        if (old !== cur && (key !== 'value' || elm[key] !== cur)) {\n            elm[key] = cur;\n        }\n    }\n}\nexports.propsModule = { create: updateProps, update: updateProps };\nexports.default = exports.propsModule;\n//# sourceMappingURL=props.js.map\n\n//# sourceURL=webpack:///../snabbdom/modules/props.js?");

/***/ }),

/***/ "../snabbdom/modules/style.js":
/*!************************************!*\
  !*** ../snabbdom/modules/style.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// Bindig `requestAnimationFrame` like this fixes a bug in IE/Edge. See #360 and #409.\nvar raf = (typeof window !== 'undefined' && (window.requestAnimationFrame).bind(window)) || setTimeout;\nvar nextFrame = function (fn) { raf(function () { raf(fn); }); };\nvar reflowForced = false;\nfunction setNextFrame(obj, prop, val) {\n    nextFrame(function () { obj[prop] = val; });\n}\nfunction updateStyle(oldVnode, vnode) {\n    var cur, name, elm = vnode.elm, oldStyle = oldVnode.data.style, style = vnode.data.style;\n    if (!oldStyle && !style)\n        return;\n    if (oldStyle === style)\n        return;\n    oldStyle = oldStyle || {};\n    style = style || {};\n    var oldHasDel = 'delayed' in oldStyle;\n    for (name in oldStyle) {\n        if (!style[name]) {\n            if (name[0] === '-' && name[1] === '-') {\n                elm.style.removeProperty(name);\n            }\n            else {\n                elm.style[name] = '';\n            }\n        }\n    }\n    for (name in style) {\n        cur = style[name];\n        if (name === 'delayed' && style.delayed) {\n            for (var name2 in style.delayed) {\n                cur = style.delayed[name2];\n                if (!oldHasDel || cur !== oldStyle.delayed[name2]) {\n                    setNextFrame(elm.style, name2, cur);\n                }\n            }\n        }\n        else if (name !== 'remove' && cur !== oldStyle[name]) {\n            if (name[0] === '-' && name[1] === '-') {\n                elm.style.setProperty(name, cur);\n            }\n            else {\n                elm.style[name] = cur;\n            }\n        }\n    }\n}\nfunction applyDestroyStyle(vnode) {\n    var style, name, elm = vnode.elm, s = vnode.data.style;\n    if (!s || !(style = s.destroy))\n        return;\n    for (name in style) {\n        elm.style[name] = style[name];\n    }\n}\nfunction applyRemoveStyle(vnode, rm) {\n    var s = vnode.data.style;\n    if (!s || !s.remove) {\n        rm();\n        return;\n    }\n    if (!reflowForced) {\n        getComputedStyle(document.body).transform;\n        reflowForced = true;\n    }\n    var name, elm = vnode.elm, i = 0, compStyle, style = s.remove, amount = 0, applied = [];\n    for (name in style) {\n        applied.push(name);\n        elm.style[name] = style[name];\n    }\n    compStyle = getComputedStyle(elm);\n    var props = compStyle['transition-property'].split(', ');\n    for (; i < props.length; ++i) {\n        if (applied.indexOf(props[i]) !== -1)\n            amount++;\n    }\n    elm.addEventListener('transitionend', function (ev) {\n        if (ev.target === elm)\n            --amount;\n        if (amount === 0)\n            rm();\n    });\n}\nfunction forceReflow() {\n    reflowForced = false;\n}\nexports.styleModule = {\n    pre: forceReflow,\n    create: updateStyle,\n    update: updateStyle,\n    destroy: applyDestroyStyle,\n    remove: applyRemoveStyle\n};\nexports.default = exports.styleModule;\n//# sourceMappingURL=style.js.map\n\n//# sourceURL=webpack:///../snabbdom/modules/style.js?");

/***/ }),

/***/ "../snabbdom/vnode.js":
/*!****************************!*\
  !*** ../snabbdom/vnode.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction vnode(sel, data, children, text, elm) {\n    var key = data === undefined ? undefined : data.key;\n    return { sel: sel, data: data, children: children,\n        text: text, elm: elm, key: key };\n}\nexports.vnode = vnode;\nexports.default = vnode;\n//# sourceMappingURL=vnode.js.map\n\n//# sourceURL=webpack:///../snabbdom/vnode.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var snabbdom = __webpack_require__(/*! ../snabbdom */ \"../snabbdom/es/snabbdom.js\");\nvar patch = snabbdom.init([ // Init patch function with chosen modules\n    __webpack_require__(/*! ../snabbdom/modules/class */ \"../snabbdom/modules/class.js\").default, // makes it easy to toggle classes\n    __webpack_require__(/*! ../snabbdom/modules/props */ \"../snabbdom/modules/props.js\").default, // for setting properties on DOM elements\n    __webpack_require__(/*! ../snabbdom/modules/style */ \"../snabbdom/modules/style.js\").default, // handles styling on elements with support for animations\n    __webpack_require__(/*! ../snabbdom/modules/eventlisteners */ \"../snabbdom/modules/eventlisteners.js\").default, // attaches event listeners\n]);\nvar h = __webpack_require__(/*! ../snabbdom/h */ \"../snabbdom/h.js\").default; // helper function for creating vnodes\n\nvar container = document.getElementById('container');\n\nvar someFn = function(){\n    alert('click');\n};\n\nvar anotherEventHandler = function(){\n    alert('click');\n};\n\nvar vnode = h('div#container.two.classes', {\n    on: {\n        click: someFn\n    }\n}, [\n    h('span', {\n        style: {\n            fontWeight: 'bold'\n        }\n    }, 'This is bold'),\n    ' and this is just normal text',\n    h('a', {\n        props: {\n            href: './index.html'\n        }\n    }, 'I\\'ll take you places!')\n]);\n// Patch into empty DOM element – this modifies the DOM as a side effect\npatch(container, vnode);\n\nvar newVnode = h('div#container.two.classes', {\n    on: {\n        click: anotherEventHandler\n    }\n}, [\n    h('span', {\n        style: {\n            fontWeight: 'normal',\n            fontStyle: 'italic'\n        }\n    }, 'This is now italic type'),\n    ' and this is still just normal text',\n    h('a', {\n        props: {\n            href: './index.html'\n        }\n    }, 'I\\'ll take you places!')\n]);\nsetTimeout(function () {\n    // Second `patch` invocation\n    patch(vnode, newVnode); // Snabbdom efficiently updates the old view to the new state\n}, 5000);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });