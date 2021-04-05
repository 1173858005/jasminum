// Init main object
// Only create main object once
if (!Zotero.Jasminum) {
    var loader = Components.classes["@mozilla.org/moz/jssubscript-loader;1"]
        .getService(Components.interfaces.mozIJSSubScriptLoader);
    var scripts = ['jasminum'];
    scripts.forEach(s => loader.loadSubScript('chrome://jasminum/content/' + s + '.js'));
}

window.addEventListener("load", function (e) {
    Zotero.Jasminum.init();
    if (window.ZoteroPane) {
        var doc = window.ZoteroPane.document;
        // add event listener for zotfile menu items
        doc.getElementById("zotero-itemmenu").addEventListener(
            "popupshowing",
            Zotero.Jasminum.displayMenuitem,
            false
        );
    }
}, false);
