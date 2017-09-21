/**
 * Created by abc on 2017/8/20.
 */
/*
 * 使用 document.write(), 输出12的乘法表, 输出应如下表所示:
 * 12 * 1 = 12
 * 12 * 2 = 24
 * 12 * 3 = 36
 * ...
 * 12 * 11 = 132
 * 12 * 12 = 144
 */
/**
 * Print the multiply table of 12.
 */
function print12MultiplyTable() {
    var base = 12;

    function printMultiplyLine(left, right) {
        var multiplyResult = left * right;
        docwrite(left + " * " + right + " = " + multiplyResult);
    }

    for (var current = 1; current <= base; current++) {
        printMultiplyLine(base, current);
    }
}