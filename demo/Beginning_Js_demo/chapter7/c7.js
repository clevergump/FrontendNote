var timerId;

/**
 * 设置一次性的定时器
 */
function setTimer() {
    timerId = setTimeout(alertTimeUp, 3000);
    alert("set timer id " + timerId);
    function alertTimeUp() {
        alert("Time is up!");
    }
}

/**
 * 取消先前设置的一次性的定时器
 */
function cancelTimer() {
    alert("cancel timer id " + timerId);
    clearTimeout(timerId);
}

/**
 * 设置周期性的定时器
 */
function setPeriodicalInterval() {
    timerId = setInterval(updateTime, 1000);
    updateTime();
    function updateTime() {
        var currentDate = new Date();
        var hours = currentDate.getHours();
        var minutes = currentDate.getMinutes();
        var seconds = currentDate.getSeconds();
        var time = hours + ":" + minutes + ":" + seconds;
        document.getElementById("date").innerHTML = time;
    }
}

/**
 * 取消周期性的定时器
 */
function cancelPeriodicalInterval() {
    alert("cancel interval id " + timerId);
    clearInterval(timerId);
}