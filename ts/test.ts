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

class Student {
  fullName: string;
  constructor(public firstName, public middleName, public lastName) {
    this.fullName = firstName + ' '+middleName + ' ' +lastName 
  }
}

interface Person {
  firstName: string
  lastName: string
}


function greeter(person : Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

console.log(user)