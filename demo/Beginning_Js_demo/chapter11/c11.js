window.onload = function () {
    buttonClickDemo();
}

function buttonClickDemo() {
    var btn1 = document.form1.btn1;
    var btn1ClickTimes = 0;
    var btn1StatusElem = document.getElementById("btn1_status");

    btn1.addEventListener("click", btnClickListener);
    btn1.addEventListener("mousedown", mouseEventListener);
    btn1.addEventListener("mouseup", mouseEventListener);

    function btnClickListener() {
        btn1ClickTimes ++;
        btn1.value = "The button was clicked " + btn1ClickTimes + " times.";
    }

    function mouseEventListener(e) {
        btn1StatusElem.innerHTML = e.type;
    }
}