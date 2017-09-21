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