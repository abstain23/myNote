// function greet(person: string) {
//   return "hello "+ person
// }
// console.log(greet([0,1,3]))
// interface Person {
//   firstName: string;
//   lastName: string;
// }
// function greeter(person: Person) {
//   return 'hello, '+person.firstName+ ' '+person.lastName
// }
// let user = {firstName: 'yang',lastName: 'benyang'}
// console.log(greeter(user))

var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleName + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
console.log(user);
