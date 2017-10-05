window.onload = function () {
    prototypeDemo();
}

function prototypeDemo() {
    // 先创建实例, 后修改原型指针所指向的对象, 这样在该实例身上调用新原型对象的属性或方法会报错
    prototypeDemo1();
    // 先修改原型指针所指向的对象, 后创建实例, 这样在该实例身上调用新原型对象的属性或方法时, 不会报错
    prototypeDemo2();
}

/**
 * 该函数中, 先创建实例, 后修改原型指针所指向的对象, 这样以来, 实例就和原型之间没有任何关联了.
 */
function prototypeDemo1() {
    docwrite("--------- prototypeDemo1 --------");
    function Person() {

    }
    // 先创建实例
    var person = new Person();

    // 后修改原型指针所指向的对象
    Person.prototype = {
        name : "Nicholas",
        age : 30
    };
    docwrite("<font color='blue'>先创建实例 person, 然后将 prototype 指向新的对象</font>");

    var isPrototype = Object.getPrototypeOf(person) == Person.prototype;
    // false
    docwrite("'Object.getPrototypeOf(person) == Person.prototype' <font color='blue'>" + isPrototype + "</font>");
    // undefined
    docwrite("person.name = " + person.name);
    docwrite("");
}

/**
 * 该函数中, 先修改原型指针所指向的对象, 然后才创建实例, 所以, 虽然修改了原型所指向的对象, 但这发生在创建实例
 * 以前, 所以实例和原型之间依然有关联. 对于该实例来说, 在它出生前所发生的事情与它无关.
 */
function prototypeDemo2() {
    docwrite("--------- prototypeDemo2 --------");
    function Person() {

    }

    // 先修改原型指针所指向的对象
    Person.prototype = {
        name : "Nicholas",
        age : 30
    };

    // 后创建实例
    var person = new Person();
    docwrite("<font color='blue'>先将 prototype 指向新的对象, 然后创建实例 person</font>");

    var isPrototype = Object.getPrototypeOf(person) == Person.prototype;
    // true
    docwrite("'Object.getPrototypeOf(person) == Person.prototype' <font color='blue'>" + isPrototype + "</font>");
    // Nicholas
    docwrite("person.name = " + person.name);
    docwrite("");
}
