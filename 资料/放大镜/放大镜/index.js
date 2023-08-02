var eventHandle = {
    getEvent: function(event){
        return event || window.event;
    },
    addEvent: function(element, type, handler){
        if(element.addEventListener){
            element.addEventListener(type, handler, false);
        }
        else if(element.attachEvent){
            element.attachEvent('on'+type, handler);
        }else{
            element['on'+type] = handler;
        }
    },
    getWheelDelta: function(event){
        return event.wheelDelta ? event.wheelDelta : (-event.detail)*40;
    }
}

// function mouseHandle(event){
//     event = eventHandle.getEvent(event);
//     var delta = eventHandle.getWheelDelta(event);
//     console.log( delta )
// }
//
//
// eventHandle.addEvent(document, 'mousewheel', mouseHandle);
// eventHandle.addEvent(document, 'DOMMouseScroll', mouseHandle);
