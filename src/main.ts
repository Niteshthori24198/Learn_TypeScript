
class Account {
    readonly id: number
    age?: number
    name: string
    private balance: number
    constructor(id: number, name: string, balance: number, age?: number) {
        this.id = id
        this.name = name
        this.balance = balance
        this.age = age
    }

    withdraw(amount: number) {
        this.balance -= amount
    }

    deposit(amount: number) {
        this.balance += amount
    }

    getBalance() {
        return this.balance
    }
}

let acc = new Account(1, "John", 1000);
acc.deposit(500);
acc.withdraw(200);
console.log(acc.getBalance());
console.log(acc instanceof Account);



// index signature

class SeatAllocator {
    [seatNumber: string]: string
}

let seat = new SeatAllocator();
seat["1"] = "John";
seat["2"] = "Jane";




// inheritance

class Person {
    // paramaterized constructor : it will creates properties and initialize them
    constructor(public name: string, public age: number) { }

    walk() {
        console.log('Walking');

    }
}



class Student extends Person {
    constructor(public id: number, name: string, age: number) {
        super(name, age);
    }
}

let student = new Student(1, "John", 20);
student.walk()