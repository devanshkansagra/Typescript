class Student {
    name: string;
    age: number;
    id: string;
}

let s1 = new Student();
s1.name = "Devansh";
s1.age = 20;
s1.id = "22IT423";

console.log(s1, '\n');

class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(): void {
        console.log('Hello', this.name);
    }
}

let person = new Person("Devansh");
person.greet();
console.log('\n');

class Employee {
    readonly id: number;
    name: string;
    age: number;
    salary: number;

    constructor(id: number, name: string, age: number, salary: number) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    print(): void {
        console.log('Employee name: ', this.name)
        console.log('Employee id: ', this.id)
        console.log('Employee age: ', this.age)
        console.log('Employee salary: ', this.salary)
    }
}

let e1 = new Employee(1, "Devansh", 20, 100000);
e1.print();

// e1.id = 12; -> Not possible as id is readonly

let e2 = new Employee(2, "Manav", 20, 100000);
e2.print();

console.log('\n');


class Vehicle {
    type: string;
    constructor(type: string) {
        this.type = type;
    }
}

class Car extends Vehicle {
    name: string;
    constructor(name, type) {
        super(type);    // Calls the parent class constructor
        this.name = name;
    }

    getDetails() {
        console.log("Name: ", this.name);
        console.log("vehicle type: ", this.type);
    }
}

let c1 = new Car("Dzire", "Four wheeler");
c1.getDetails();

console.log('\n');


class Base {
    name = "base";
    constructor() {
        console.log("Base class constructor")
    }
}

class Derived extends Base {
    name = "derived";
}
const d = new Derived();

console.log('\n');

interface Adhaar {
    name: string;
    dob: string;
    gender: string;
    phone: number;
    adhaarNo: number;
}
class AdhaarCard  {
    
    private _name: string;
    private _dob: string;
    private _gender: string;
    private _phone: number;
    private _adhaarNo: number;

    constructor(details: Adhaar) {
        this._name = details.name;
        this._dob = details.dob;
        this._gender = details.gender;
        this._phone = details.phone;
        this._adhaarNo = details.adhaarNo;
    }

    get getAdhaarName(): Adhaar {
        return {
            name: this._name,
            dob: this._dob,
            gender: this._gender,
            phone: this._phone,
            adhaarNo: this._adhaarNo
        }
    }
}

let newAdhaar = new AdhaarCard({ name: "Devansh", dob: "07/07/2004", gender: "MALE", phone: 1234567890, adhaarNo: 123456789045 });
console.log(newAdhaar);
export { }