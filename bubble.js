export function bubble(arr) {
    for (var i = 0; i < arr.length; ++i) {
        for(var j = 0; j < arr.length; ++j) {
            if (arr[i] < arr[j]) {
                const temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr
}

export function betterBubble(bars) {
    for (var i = 0; i < bars.length; ++i) {
        (function(i) {
            setTimeout(function() { meanBubble(bars, i) }, i * 100);
        })(i);
        
    }
}

function meanBubble(bars, i) {
    for(var j = 0; j < bars.length; ++j) {
        if(bars[i].value < bars[j].value) {
            const temp = bars[j]
            bars[j] = bars[i]
            bars[i] = temp
            exchangeElements(bars[j].div, bars[i].div)
        }
    }
}
//thanks https://stackoverflow.com/a/21536690
function exchangeElements(element1, element2)
{
    var clonedElement1 = element1.cloneNode(true);
    var clonedElement2 = element2.cloneNode(true);

    element2.parentNode.replaceChild(clonedElement1, element2);
    element1.parentNode.replaceChild(clonedElement2, element1);

    return clonedElement1;
}