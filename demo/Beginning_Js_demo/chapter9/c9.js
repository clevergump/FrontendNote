function fDOMDemo() {
    var htmlElem = document.documentElement;
    var headElem = htmlElem.firstChild;
    var bodyElem;
    // 如果 </head> 和 <body> 标签是紧挨着的（没有空格, 没有换行）, 那么此时弹出的是1； 如果没有紧挨着（例如：
    // </head> 和 <body>之间有空格或者有换行）, 那么此时弹出的就是3（表示空白文本）
    alert("headElem.nextSibling.nodeType = " + headElem.nextSibling.nodeType
        + ", headElem.nextSibling = " + headElem.nextSibling);
    if (isNextSiblingText(headElem)) {
        bodyElem = headElem.nextSibling.nextSibling;
    } else {
        bodyElem = headElem.nextSibling;
    }
    alert(bodyElem.tagName);

    function isNextSiblingText(targetElem) {
        return targetElem.nextSibling.nodeType == 3;
    }
}

/**
 * 使用 DOM 方法创建 html 元素和文本, 要创建的文档结构如下：
 *
 * <body>
 *     <p>123</p>
 *     <a href="https://www.baidu.com/" target="_blank">点击此处打开百度首页</a>
 * </body>
 */
function fCreateNodeDemo() {
    var pElem = document.createElement("p");
    var textNode = document.createTextNode("123");
    pElem.appendChild(textNode);
    document.body.appendChild(pElem);

    var aElem = document.createElement("a");
    // var hrefAttr = document.createAttribute("href");
    aElem.setAttribute("href", "https://www.baidu.com/");
    aElem.setAttribute("target", "_blank");
    var aTextNode = document.createTextNode("点击此处打开百度首页");
    aElem.appendChild(aTextNode);
    document.body.appendChild(aElem);
}

/**
 * animation demo to move the element whose id is "title1"
 */
function fMoveTitle1() {
    var intervalID;
    var totalTimeMillis = 0;
    const intervalMillis = 20;
    const moveDistance = 5;

    movePeriodically(move, intervalMillis);

    function movePeriodically(func, intervalMillis) {
        intervalID = setInterval(func, intervalMillis);
    }

    function move() {
        var elemToMove = document.getElementById("title1");
        if (totalTimeMillis >= 3000) {
            clearInterval(intervalID);
        }
        totalTimeMillis += intervalMillis;
        var currentLeft = elemToMove.offsetLeft;
        elemToMove.style.left = (currentLeft + moveDistance) + "px";
    }
}

