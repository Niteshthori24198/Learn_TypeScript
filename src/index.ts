// array

let arr: number[] = [1, 2];
let brr: (number | string)[] = [1, "1"];


// tuple - used to represent key value pair usually

let t: [number, string] = [1, "a"];


// enum - used to represent constants [ default value will be 0 from first member in enum . w can explicitly give values too]

const enum Size { small, medium, large };

let size: Size = Size.medium;

console.log(size)


// functions

function calculateTax(income: number): number {

    if (income > 30_000) {

        return income * 0.3;
    }

    return 0;
}


// objects


let obj: {
    id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'xx',
    retire: (date: Date): boolean => {
        if (date) return false
        return true
    }
}

// type

type Emp = {
    id: number,
    name: string,
    retire: (date: Date) => void
}

let empobj: Emp = {
    id: 1,
    name: 'xx',
    retire: (date: Date): boolean => {
        if (date) return false
        return true
    }
}


// union type

