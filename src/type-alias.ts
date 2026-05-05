//type alias

type Point = {
  x: number;
  y: number;
};

let point: Point = {
  x: 20,
  y: false, //error
};

//type alias for primitives

type ID = string | number;

let userId: ID = "6tu89j";
let productId: ID = 689;
let booleanId: ID = true; //error
//types vs alias

//Interfaces can be extended ,  type aliases cannot

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

let myDog: Dog = {
  name: "german",
  breed: "rare",
};
//interfaces can be created multiple times and merged

//use interfaces to shape the object
//type aliases for unions and intersection
