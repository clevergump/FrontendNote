window.onload = function () {
    prototypeDemo1();
    prototypeDemo2();
}

function prototypeDemo1() {
    docwrite("-------------- prototypeDemo1 -------------");
    // relationship of constructor, prototype and instance
    function Person() {

    }
    Person.prototype.name = "Jack";
    Person.prototype.age = "Jack";
    Person.prototype.sayName = function () {
        alert(this.name);
    }

    var p = new Person();
    p.name = "Mike";

    docwrite("Person.prototype = " + Person.prototype);
    docwrite("Person.prototype.constructor = " + Person.prototype.constructor);
    docwrite("p.constructor = " + p.constructor);
    docwrite("Person.prototype.constructor == Person " + getColoredContent(Person.prototype.constructor == Person, "red"));
    docwrite("p.constructor == Person " + getColoredContent(p.constructor == Person, "red"));
    docwrite("");

    docwrite("Person.prototype.isPrototypeOf(p) = " + Person.prototype.isPrototypeOf(p));
    docwrite("Person.prototype.isPrototypeOf(Person) = " + Person.prototype.isPrototypeOf(Person));
    var result = (Object.getPrototypeOf(p) == Person.prototype);
    docwrite("Object.getPrototypeOf(p) == Person.prototype " + getColoredContent(result, "blue"));
    docwrite("");

    docwrite("Object.keys(Person.prototype) = " + Object.keys(Person.prototype));
    docwrite("Object.keys(p) = " + Object.keys(p));
    docwrite("Object.getOwnPropertyNames(Person.prototype) = " + Object.getOwnPropertyNames(Person.prototype));
    docwrite("Object.getOwnPropertyNames(p) = " + Object.getOwnPropertyNames(p));
    docwrite("");

    docwrite("hasPrototypeProperty(p, 'name') = " + hasPrototypeProperty(p, "name"));
    docwrite('hasPrototypeProperty(p, "age") = ' + hasPrototypeProperty(p, "age"));
    docwrite('hasPrototypeProperty(p, "sayName") = ' + hasPrototypeProperty(p, "sayName"));
    docwrite("<hr/>");
}

/**
 * Color the given content with the given color and return.
 *
 * @param content
 * @param colorStr
 * @returns {string}
 */
function getColoredContent(content, colorStr) {
    return "<font color="+ colorStr +">" + content + "</font>";
}

/**
 * To judge if the given property is defined in prototype and not been override in the instance obj.
 *
 * @param obj             the given instance object
 * @param propertyName    the given name of the property to judge
 * @returns {boolean}
 */
function hasPrototypeProperty(obj, propertyName) {
    return (propertyName in obj) && !Object.hasOwnProperty(propertyName);
}

function prototypeDemo2() {
    docwrite("-------------- prototypeDemo2 -------------");
    function Person() {

    }

    Person.prototype = {
        name : "Jack",
        age : 30,
        sayName : function () {
            docwrite("called from function sayName, name is " + this.name);
        }
    };

    Object.defineProperty(Person.prototype, "constructor", {
        enumerable : false,
        value : Person
    });

    var p = new Person();
    // job is a private enumerable(by default) property of the instance p
    p.job = "Teacher";
    // nationality is a private un-enumerable property of the instance p
    Object.defineProperty(p, "nationality", {
        enumerable : false,
        value : "China"
    });

    docwrite("p.name = " + p.name);
    docwrite("p.age = " + p.age);
    p.sayName();
    docwrite("");
    /********************************************************/

    docwrite("<table cellpadding='10' cellspacing='0' border='1' align='top left'>");
    createThRow(["", "instance p", "Person.prototype"]);
    createTdRow(["keys()", Object.keys(p), Object.keys(Person.prototype)]);
    createTdRow(["for-in loop", getForInArray(p), getForInArray(Person.prototype)]);
    createTdRow(["getOwnPropertyNames()", Object.getOwnPropertyNames(p), Object.getOwnPropertyNames(Person.prototype)]);
    docwrite("</table>");
    docwrite("<hr/>");
}