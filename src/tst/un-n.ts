//undefined vs null

let myname: string;

//console.log(myname);

function greet() {
  console.log("hello");
}

const getGreet = greet();

console.log(getGreet);

//null

let myname2: string | null = null;
console.log(myname2);
