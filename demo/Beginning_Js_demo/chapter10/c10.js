const imgSrcs = [
    "/img/Argentina.png",
    "/img/Brazil.png",
    "/img/Chile.png",
    "/img/Uruguay.png",
];

var imgFlag1Elem = document.getElementById("img_flag1");
var btn = document.getElementById("btn_change_flag");

window.onload = function () {
    btn.addEventListener("click", changeFlag1);
    btn.addEventListener("click", changeDescOfFlag1);

    // the following code is incorrect
    // document.getElementById("img_flag2").onclick = changeFlag2(event);
    document.getElementById("img_flag2").onclick = changeFlag2;
    document.getElementById("link5").addEventListener("click", function (event) {
        alert("link5 is clicked");
        // 禁止该链接的默认跳转行为
        event.preventDefault();
    });
    addUnderlineDemo();
    // handleDragDemo1();
}

function getRandomImgSrc() {
    var newImgIndex = Math.round(Math.random() * 3);
    return imgSrcs[newImgIndex];
}

function changeFlag1() {
    var newImgSrc = getRandomImgSrc();
    while (imgFlag1Elem.src.indexOf(newImgSrc) != -1) {
        newImgSrc = getRandomImgSrc();
    }
    imgFlag1Elem.src = "." + newImgSrc;
}

function changeDescOfFlag1() {
    document.getElementById("desc_flag1").innerHTML = "The src of the image is ------ " + imgFlag1Elem.src;
}

function changeFlag2(event) {
    var imgFlag2Elem = event.target;
    var newImgSrc = getRandomImgSrc();
    while (imgFlag2Elem.src.indexOf(newImgSrc) != -1) {
        newImgSrc = getRandomImgSrc();
    }
    imgFlag2Elem.src = "." + newImgSrc;
}

/**
 * 为段落添加如下动作事件：当鼠标移入段落时, 将该段落的样式设置为.underline； 当鼠标移开段落时, 又将该段落
 * 的样式恢复为先前的默认样式. 当鼠标点击该段落时, 弹框显示鼠标点击位置的x,y坐标.
 */
function addUnderlineDemo() {
    document.addEventListener("mouseover", handleEvent);
    document.addEventListener("mouseout", handleEvent);
    document.addEventListener("click", handleEvent);
}

function handleEvent(event) {
    var targetElem = event.target;
    var eventType = event.type;
    // Attention: tagName must be upper case.
    if (targetElem.tagName != 'P') {
        return;
    }
    if (eventType == "mouseover") {
        targetElem.className = "underline";
    } else if (eventType == "mouseout") {
        targetElem.className = "";
    } else if (eventType == "click") {
        alert("You click the point: " + event.clientX + ", " + event.clientY);
    }
}

function handleDragDemo1() {
    function dragStartHandler(e) {
        e.dataTransfer.setData("text", "Drag and Drop!");
    }

    function dragDropHandler(e) {
        e.preventDefault();
        if (e.type == "dragover") {
            dropStatus.innerHTML = "You're dragging over the drop zone";
        } else {
            dropStatus.innerHTML = e.dataTransfer.getData("text");
        }
    }

    var dragBox = document.querySelector("[draggable]");
    var dropZone = document.getElementById("dropZone");
    var dropStatus = document.getElementById("dropStatus");
    dragBox.addEventListener("dragstart", dragStartHandler);
    dropZone.addEventListener("dragover", dragDropHandler);
    dropZone.addEventListener("drop", dragDropHandler);
}

function handleDragDemo2() {
    function handleDragStart(e) {
        e.dataTransfer.setData("text", this.id);
    }

    function handleDragEnterLeave(e) {
        if (e.type == "dragenter") {
            this.className = "drag-enter";
        } else {
            this.className = "";
        }
    }

    function handleOverDrop(e) {
        e.preventDefault();
        if (e.type != "drop") {
            return;
        }
        var draggedId = e.dataTransfer.getData("text");
        var draggedEl = document.getElementById(draggedId);
        if (draggedEl.parentNode == this) {
            return;
        }
        draggedEl.parentNode.removeChild(draggedEl);
        this.appendChild(draggedEl);
        this.className = "";
    }

    var draggable = document.querySelectorAll("[draggable]");
    var targets = document.querySelectorAll("[data-drop-target]");
    for (var i = 0; i < draggable.length; i++) {
        draggable[i].addEventListener("dragstart", handleDragStart);
    }
    for (var i = 0; i < targets.length; i++) {
        targets[i].addEventListener("dragover", handleOverDrop);
        targets[i].addEventListener("drop", handleOverDrop);
        targets[i].addEventListener("dragenter", handleDragEnterLeave);
        targets[i].addEventListener("dragleave", handleDragEnterLeave);
    }
}