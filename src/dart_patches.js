(function() {
// Patch to allow custom element and shadow dom to work together, from:
// https://github.com/Polymer/platform/blob/master/src/patches-shadowdom-polyfill.js
// include .host reference
if (HTMLElement.prototype.createShadowRoot) {
  var originalCreateShadowRoot = HTMLElement.prototype.createShadowRoot;
  HTMLElement.prototype.createShadowRoot = function() {
    var root = originalCreateShadowRoot.call(this);
    root.host = this;
    return root;
  }
}
})();
