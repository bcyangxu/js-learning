type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver

function getName(n:NameOrResolver): Name {
    if(typeof n === 'string'){
        return n;
    } else {
        return n();
    }
}

type EventNames = 'click' | 'scroll' | 'mousemove'
function handelEvent(ele: Element | null,event: EventNames) {
    //
}

handelEvent(document.getElementById('hello'),'scroll')
handelEvent(document.getElementById('world'),'dblclick')
