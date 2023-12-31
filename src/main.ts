
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





// interface

interface Janta {
    name: string
    age: number
    doglapan: () => void
}

class Chintu implements Janta {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    doglapan() {
        throw new Error("Method not implemented.");
    }
}




// generics

class KeyvaluePair<K, V>{

    constructor(public key: K, public value: V) { }
}

let pairs = [new KeyvaluePair<string, number>('a', 1), new KeyvaluePair<number, string>(2, 'b')]


function getKeyvaluePair<K, V>(key: K, value: V): KeyvaluePair<K, V> {
    return new KeyvaluePair<K, V>(key, value);
}

getKeyvaluePair<string, number>('a', 1);



// generics constrains : we can add constraints to generics by using extends keyword : <T extends string> <T extends number> <T extends object> <T extends class> etc

function getLength<T extends string | number>(str: T): number {
    return str.toString().length
}

getLength<string>('a');


// keyOf type guard : used to check if a key is present in an object




