let nums:number[] = [];
nums.push(1)
nums.push(1)
nums.push(1)
nums.push(1)
console.log(nums);

let nums2:Array <number> = []
nums2.push(2)
nums2.push(2)
nums2.push(2)
nums2.push(2);

console.log(nums2);

type Student = {
    name: string;
    id: string;
    age: number;
}

let students: Array<Student> = []
// let students: Student[] = []; // This also works
students.push({name: "Devansh", age: 19, id:"22IT423"});
students.push({name: "Manav", age: 20, id:"22IT424"});
console.log(students);
export {}
