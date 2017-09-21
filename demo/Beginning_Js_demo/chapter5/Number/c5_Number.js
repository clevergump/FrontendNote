function numberDemo() {
    docwrite("numberDemo begin");
    var num1 = 1.23456;
    var num2 = 1.28901;
    printToFixed2(num1);
    printToFixed2(num2);
    function printToFixed2(num) {
        var fixedNum = num.toFixed(2);
        var printStr = num + ".toFixed(2) = " + fixedNum;
        docwrite(printStr)
    }
    docwrite("numberDemo end");
}

