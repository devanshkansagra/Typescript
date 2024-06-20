type User = {
    name: string;
    email: string;
    phone: number;
    password: string;
}
type Student = {
    name: string;
    id: string;
    phone: number;
    age: number;
}

type Cookie = {
    name: string;
    value: any;
    path?: string;
    expiry: string;
    httpOnly?: boolean;
}

type AcademicResult = {
    cpi: number;
}

type SportsResult = {
    spi: number;
}

type Result = Student & SportsResult & AcademicResult & {
    overallScore: number;
}

function createUser(user: User): User {
    return user;
}
let newUser = createUser({ name: "Devansh", email: "abc@xyz.com", phone: 1234567890, password: "Dev123" });
console.log(newUser);

function createStudent(name: string, id: string, phone: number, age: number): Student {
    return { name, id, phone, age };
}
let newStudent = createStudent("Devansh", "22IT423", 1234567890, 19);
console.log(newStudent);

let newStudent2: Student = {
    name: "Manav",
    id: "22IT424",
    phone: 9879879871,
    age: 20
}

console.log(newStudent2);

let newStudent3: Student = {
    name: "Darshan",
    id: "22IT424",
    phone: 9879879871,
    age: 20
}

console.log(newStudent3);
console.log(newStudent3.name);
console.log(newStudent3.age);
console.log(newStudent3.id);
console.log(newStudent3.phone);

function setCookie ({name, value, path = "/", expiry, httpOnly = false}): Cookie {
    return {
        name, value, path, expiry, httpOnly
    }
}

let cookie1 = setCookie({name:"Email", value: "abc@xyz.com", path:"/", expiry: "20-10-2024", httpOnly:true});
console.log(cookie1);

let cookie2 = setCookie({name: "Password", value: "12345",expiry: "10-10-2024"});
console.log(cookie2);


function createResult(stud:Student, sports: SportsResult, acad: AcademicResult) : Result {
    return {
        name: stud.name,
        age: stud.age,
        phone: stud.phone,
        id: stud.id,
        cpi: acad.cpi,
        spi: sports.spi,
        overallScore: acad.cpi + sports.spi
    }
}

let sportRes: SportsResult = {
    spi: 10
}
let acadRes: AcademicResult = {
    cpi: 10
}
let newResult = createResult(newStudent, sportRes, acadRes);
console.log(newResult);
export {}