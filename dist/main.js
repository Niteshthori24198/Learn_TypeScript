"use strict";
class Account {
    constructor(id, name, balance, age) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        this.age = age;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
    deposit(amount) {
        this.balance += amount;
    }
    getBalance() {
        return this.balance;
    }
}
let acc = new Account(1, "John", 1000);
acc.deposit(500);
acc.withdraw(200);
console.log(acc.getBalance());
console.log(acc instanceof Account);
class SeatAllocator {
}
let seat = new SeatAllocator();
seat["1"] = "John";
seat["2"] = "Jane";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    walk() {
        console.log('Walking');
    }
}
class Student extends Person {
    constructor(id, name, age) {
        super(name, age);
        this.id = id;
    }
}
let student = new Student(1, "John", 20);
student.walk();
