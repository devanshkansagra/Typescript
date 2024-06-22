let num: number | string;
num = 5;
console.log(num);

num = "5";
console.log(num);

function someFunction(a: number | string) {
    let res: number | string;
    if (typeof a === 'string') {
       return  res = a.toLowerCase();
    }
    else if (typeof a === 'number') {
        return res = a + 2;
    }
}

let variable = someFunction(5);
console.log(variable);

let variable2 = someFunction("ABC");
console.log(variable2);


let nums1: Array<number> | Array<string> = [];  // let nums1: number[] | string[] = []; 
nums1 = [1, 2, 3];
console.log(nums1);
nums1 = ["1", "2", "3"];
console.log(nums1);


let nums2: Array <number | string> = [];    // let nums2: (number | string)[] = [];
nums2 = [1, 2, '3'];
console.log(nums2);

export {};
