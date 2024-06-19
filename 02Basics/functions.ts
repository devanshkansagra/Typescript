function getString(num: number) {
    return num + "";
}

let num = getString(5);
console.log(num);

function add(num1: number, num2: number, sign: string): number {
    let result;
    switch (sign) {
        case "+": {
            result = num1 + num2;
            break;
        }
        case "-": {
            result = num1 - num2;
            break;
        }
        case "/": {
            result = num1 / num2;
            break;
        }
        case "*": {
            result = num1 * num2;
            break;
        }
    }
    return result;
}

let ans = add(4, 5, "-");
console.log(ans);

const greater = (a: number, b: number, c: number) : number => {
    let result; 
    if(a > b) {
        if(a > c) {
            result = a;
        }
        else {
            result = c;
        }
    }
    else {
        if(b > c) {
            result = b;
        }
        else {
            result = c;
        }
    }
    return result;
}

let greaterEle = greater(5, 3, 8);
console.log(greaterEle);

function consoleError (message): void {
    console.log(message);
}

function handleError (message): never {
    throw new Error(message)
}


consoleError("Error");
handleError("Error");
export { }