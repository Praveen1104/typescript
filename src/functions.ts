//basic function with type
function add(a: number, b: number): number {
  return a + b;
}
//function with optional
function optional(a: number, b?: number): number {
  if (b) {
    return a + b;
  } else {
    return a;
  }
}

console.log(optional(2, 3));

//default parameter

function defaultPara(a: number, b: number = 1): number {
  return a + b;
}

//rest parameters

function restParameters(...num: number[]): number {
  return num.reduce((s, n) => s + n, 3);
}

//function typees
//arrow function
const addition = (a: number, b: number): number => a + b;

//function type
let typefunction: (a: number, c: number) => number;
