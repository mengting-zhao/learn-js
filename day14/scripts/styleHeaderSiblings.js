function styleHeaderSiblings() {
    if (!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName("h1");
    var elem;
    for (var i=0; i<headers.length; i++) {
        elem.style.fontWeight = "bold";
        elem.style.fontSize = "1.2em";
    }
}
function getNextElement(node) {
    if(node.nodeType == 1) {
        return node;
    }
    if (node.nextSibling) {
        return getNextElement(node.nodeSibling);
    }
    return null;
}