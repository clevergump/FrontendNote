window.onload = function () {
    closureDemo1();
}

function closureDemo1() {
    printElement(createDatas());
    printElement(craateFunctions());
    printElement(craateClosures());
}

function createDatas(){
    var result = new Array();
    for(var i=0; i<10; i++){
        // 下面其实是一个私有作用域, 即： 一个立即执行的函数表达式
        result[i] = function(){
            var test = i;
            return test;
        }(i);
        // 等价于如下的代码:
        // result[i] = (function(){
        //     var test = i;
        //     return test;
        // })(i);
    }
    return result;
}

function craateFunctions(){
    var result = new Array();
    for(var i=0; i<10; i++){
        result[i] = function(){
            return i;
        };
    }
    return result;
}

function craateClosures(){
    var result = new Array();
    for(var i=0; i<10; i++){
        result[i] = function(num){
            return function () {
                return num;
            }
        }(i);
    }
    return result;
}

function printElement(arr) {
    if (typeof arr == "object" && arr instanceof Array) {
        var length = arr.length;
        for (var i = 0; i < length; i++) {
            docwrite("arr[" + i + "] = " + arr[i].toString());
        }
    }
}