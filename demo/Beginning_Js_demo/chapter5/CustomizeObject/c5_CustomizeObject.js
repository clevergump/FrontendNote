function createPerson(firstName, lastName) {
    var person = {
        firstName : firstName,
        lastName : lastName,
        getFullName : function () {
            return firstName + " " + lastName;
        },
        greeting : function (anotherPerson) {
            var greeting = this.getFullName() + " welcome " + anotherPerson.getFullName();
            docwrite(greeting);
        }
    };
    return person;
}

var person1 = createPerson("Mike", "Zhang");
var person2 = createPerson("Jack", "Wang");

function customizeObjDemo() {
    person1.greeting(person2);
}