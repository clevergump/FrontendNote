window.onload = function () {
    prototypeDemo();
}

function prototypeDemo() {
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