function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
function handelEvent(ele, event) {
    //
}
handelEvent(document.getElementById('hello'), 'scroll');
handelEvent(document.getElementById('world'), 'dblclick');
