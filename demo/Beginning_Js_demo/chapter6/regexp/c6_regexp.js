function regexpBasicDemo() {
    const regexp1 = /paul/;
    const regexp2 = /paul/g;
    const regexp3 = /paul/gi;
    const regexp4 = /paul\W/gi;
    const regexp5 = /paul\b/gi;
    const regexp6 = /\bpaul\b/gi;
    const replacement0 = "<font color='red'>HELLO</font>";

    var originalStr = "Paul, Paula, Pauline, paul, Paul, Jeanpaul, JeanPaul";
    var newStr1 = originalStr.replace(regexp1, replacement0);
    var newStr2 = originalStr.replace(regexp2, replacement0);
    var newStr3 = originalStr.replace(regexp3, replacement0);
    var newStr4 = originalStr.replace(regexp4, replacement0);
    var newStr5 = originalStr.replace(regexp5, replacement0);
    var newStr6 = originalStr.replace(regexp6, replacement0);

    docwrite("<table cellpadding='10' cellspacing='0' border='1' align='top left'>");
    createTr("Original String", originalStr);
    createTr("After replacing '" + regexp1 + "' with '" + replacement0 + "'", newStr1); // "Paul, Paula, Pauline, HELLO, Paul, Jeanpaul, JeanPaul"
    createTr("After replacing '" + regexp2 + "' with '" + replacement0 + "'", newStr2); // "Paul, Paula, Pauline, HELLO, Paul, JeanHELLO, JeanPaul"
    createTr("After replacing '" + regexp3 + "' with '" + replacement0 + "'", newStr3); // "HELLO, HELLOa, HELLOine, HELLO, HELLO, JeanHELLO, JeanHELLO"
    createTr("After replacing '" + regexp4 + "' with '" + replacement0 + "'", newStr4); // "HELLO Paula, Pauline, HELLO HELLO JeanHELLO JeanPaul"
    createTr("After replacing '" + regexp5 + "' with '" + replacement0 + "'", newStr5); // "HELLO, Paula, Pauline, HELLO, HELLO, JeanHELLO, JeanHELLO"
    createTr("After replacing '" + regexp6 + "' with '" + replacement0 + "'", newStr6); // "HELLO, Paula, Pauline, HELLO, HELLO, Jeanpaul, JeanPaul"
    docwrite("</table>");

    function createTd(tdContent) {
        document.write("<td>");
        document.write(tdContent);
        document.write("</td>");
    }

    function createTr(trTitle, trContent) {
        docwrite("<tr>");
        createTd(trTitle);
        createTd(trContent);
        docwrite("</tr>");
    }
}

/**
 * Password demo. Input strings containing only letters (ignoring case), digits and space are valid.
 * Otherwise invalid.
 */
function passwdDemo() {
    /**
     * /[^a-z\d ]/i and /[^a-zA-Z\d ]/ has the same effect.
     */
    // const wrongPasswdRegExp = /[^a-z\d ]/i;
    const wrongPasswdRegExp = /[^a-zA-Z\d ]/;

    var input1 = 'aaa789ADGQA';
    var input2 = 'aaa789ADGQA @#';
    showCheckResult(input1);
    showCheckResult(input2);

    function showCheckResult(input) {
        docwrite("wrong passwd RegExp is " + wrongPasswdRegExp.source);
        /**
         * Note that the return value's name must be different with that of the function itself,
         * otherwise an implicit error will occur. This error can be found when in breakpoint-debugging.
         * (Error: variable has been optimized out)
         */
        var isPwdValid = fIsPwdValid(input);
        var result = "valid";
        if (!isPwdValid) {
            result = "invalid";
        }
        docwrite("input passwd '" + input + "' is " + result);
        docwrite("");
    }

    function fIsPwdValid(input) {
        /**
         * The test function means if the tested string contains the RegExp string. Returns true as
         * long as containing at least one. So we use the opposite pattern as the RegExp object and
         * here we use the opposite operator '!'.
         */
        return !wrongPasswdRegExp.test(input);
    }
}

/**
 * 将给定字符串中的单词边界替换为|, 再将非单词边界替换为|
 */
function replaceDemo1() {
    var regexp1 = /\b/g;
    var regexp2 = /\B/g;
    var str = "Hello world!, let's look at boundaries said 007.";
    var newStr1 = str.replace(regexp1, "|");
    var newStr2 = str.replace(regexp2, "|");
    docwrite("str = " + str);
    docwrite("replaced with '" + regexp1 + "', newStr1 = " + newStr1);
    docwrite("replaced with '" + regexp2 + "', newStr2 = " + newStr2);
    docwrite("");
}

/**
 * 将给定字符串中的单词 VBScript 和 JavaScript 替换为 xxx
 */
function replaceDemo2() {
    var str = "VBScript, JavaScript, Script, VBJavaScript";
    var regexp = /\b(VB|Java)Script\b/g;
    const replacement = "<font color='red'>xxx</font>";

    docwrite("original:");
    docwrite("str = ‘" + str + "'");
    str = str.replace(regexp, replacement);
    docwrite("After replacing '" + regexp + "' with '" + replacement + "':");
    docwrite("str = '" + str + "'");
    docwrite("");
}

/**
 * 将连续重复的两个数字替换为单词 ERROR
 */
function replaceDemo3() {
    var str = "001, 001, 002, 007, 001, 003, 003, 007, 008";
    var regexp = /(\d+), \1/g;
    const replacement = "<font color='red'>ERROR</font>";

    docwrite("original:");
    docwrite("str = ‘" + str + "'");
    str = str.replace(regexp, replacement);
    docwrite("After replacing '" + regexp + "' with '" + replacement + "':");
    docwrite("str = '" + str + "'");
    docwrite("");
}

/**
 * 习题1：
 * 删除给定字符串中连续重复的单词, 最终只保留一个.
 */
function replaceDemo4() {
    var str = "This sentence <font color='red'>has has has has</font> a fault <font color='red'>and and and</font> we need to fix it.";
    docwrite("original str = ");
    docwrite(str);
    // 在replace()方法中, 第一个参数既可以是一个regexp字面量, 也可以是一个RegExp对象. 所以使用下面的
    // regexp 或 regexpObj 都是可以的.
    var regexp = /(\b\w+\b)( \1)+/g;
    var regexpObj = new RegExp("(\\b\\w+\\b)( \\1)+", "g");
    str = str.replace(regexpObj, "$1");
    docwrite("new str = ");
    docwrite(str);
    docwrite("");
}