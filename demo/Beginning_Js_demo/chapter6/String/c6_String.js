/**
 * 需求：
 * 原字符串中同时包含有一系列水果的名称和价格, 请将字符串中的价格和相应的逗号都删除, 只保留水果
 * 的名称, 作为新的字符串.
 */
function splitDemo() {
    var namePriceStr = "Apple, 5.00, Pair, 4.50, Banana, 2.00";
    // var regexp = /, \d.\d+, /g;
    var regexp = /[^a-z]+/gi;
    var arr = namePriceStr.split(regexp);
    var fruitNameStr = arr.join("--");
    // for(var index = 0; index < arr.length; index++) {
    //     docwrite(arr[index]);
    // }
    docwrite(fruitNameStr);
    docwrite("");
}

/**
 * 需求：
 * 原有字符串包含了一系列年份的数字（例如： "2012, 2013, 2014"）, 请将该字符串中所有年份的前边
 * 都添加一个字符串"the year" (例如： "the year 2012, the year 2013, the year 2014").
 */
function replaceDemo1() {
    var str = "2012, 2013, 2014";
    docwrite("original str = " + str);
    var regexp = /(\d{4})/g;
    str = str.replace(regexp, "the year $1");
    docwrite("new str = " + str);
    docwrite("");
}

/**
 * 需求：
 * 将原字符串中用于引用某人说话的那对单引号替换成双引号, 注意：用于表示人名或者英语单词缩写分隔符的
 * 单引号不要替换, 而应保持不变. 例如：
 *      替换前： He then said 'My name is O'Connerly, yes that's right, O'Connerly'.
 *      替换后： He then said "My name is O'Connerly, yes that's right, O'Connerly".
 */
function replaceDemo2() {
    var str = "He then said 'My name is O'Connerly, yes that's right, O'Connerly'.";
    docwrite("original str = " + str);
    /**
     * 以下两种 regexp 的写法均可
     */
    // var regexp = /(\B'\b)|(\b'\B)/g;
    var regexp = /\B'\b|\b'\B/g;
    str = str.replace(regexp, "<font color='red'>\"</font>");
    docwrite("new str = " + str);
    docwrite("");
}

/**
 * 习题2：
 * 请编写一个正则表达式， 以查找下述语句中的所有单词 a, 并替换为单词the：
 * "a dog walked in off a street and ordered a finest beer"
 * 替换之后的语句应为：
 * "the dog walked in off the street and ordered the finest beer"
 */
function replaceDemo3() {
    var str = "a dog walked in off a street and ordered a finest beer";
    docwrite("original str = " + str);
    var regexp = /\ba\b/g;
    str = str.replace(regexp, "<font color='red'>the</font>");
    docwrite("new str = " + str);
    docwrite("");
}

/**
 * 需求：查找某个特定单词（注意：是独立的单词, 不是某个字符串内部的某个子字符串）在某个字符串中第一次出现时的位置
 */
function searchDemo() {
    var str = "Hello, JavaScript is not java, Java is not JavaScript";
    // 对于search(), 添加 g 选项无效
    var regexp = /\bJava\b/i;
    var index = str.search(regexp);
    docwrite(index);
    docwrite("");
}

/**
 * 将给定字符串中的4位数字的单词单独抽取出来, 并用双冒号作为他们两两之间的分隔符, 组成新的字符串并显示出来
 */
function matchDemo1() {
    var str = "The years were 2012, 2013, 2014. Year2000.";
    var regexp = /\b\d{4}\b/g;
    var result = str.match(regexp);
    if(result) {
        var length = result.length;
        for(var index in result) {
            var divider = (index == length -1) ? "" : "::";
            document.write(result[index] + divider);
        }
    }
    docwrite("");
}

/**
 * 将给定的html字符串按照如下三类内容进行拆分：
 * 开始标签, 标签内容, 结束标签
 * 将拆分后的各部分内容各自独占一行
 * 例如： "<h2>Hello World!</h2><p>We love JavaScript</p>" 最终要显示的效果为：
 * <h2>
 * Hello World!
 * </h2>
 * <p>
 * We love JavaScript
 * </p>
 */
function matchDemo2() {
    var str = "<h2>Hello World!</h2><p>We love JavaScript</p>";
    var regexp = /<[^<>]+>|[^<>]+/g;
    var arr = str.match(regexp);
    if(arr){
        // var length = arr.length;
        // for(var index in arr) {
        //     document.write(arr[index] + "===");
        // }
        var newstr = arr.join("\r\n");
        // document.write(newstr);
        document.getElementById("matchDemo2").innerText = newstr;
    }
}