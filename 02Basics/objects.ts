let student = {
    name: "Devansh Kansagra",
    id: "22IT423",
    Year: "3rd"
}

console.log(student);

let createUser = ({ name: string, age: number }): object => {
    return { name: string, age: number };
}

let newUser = createUser({ name: "Devansh", age: 19 });
console.log(newUser);
let newUser2 = createUser({ name: "Manav", age: 20 });
console.log(newUser2);

function createEmployee(name: string, age: number, email: string):{ name: string; age: number; email: string } {
    return { name, age, email };
}

let newEmployee = createEmployee("Devansh", 19, "abc@xyz.com");
console.log(newEmployee);

function createStudent (name: string, age: number, id: string):object {
    return {name, age, id};
}

let newStudent = createStudent("Devansh", 19, "22IT423");
console.log(newStudent);


export {}   // This is used to be treat this file as a module