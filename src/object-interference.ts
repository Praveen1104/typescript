//In TypeScript, an interface is a powerful way to define the "shape" of an object.
// It acts as a contract that ensures an object has specific properties and methods.
interface User {
  name: string;
  age: number;
  email?: string; //optional
  readonly id: number;
}
let use: User = {
  name: "praveen",
  age: 26,
  email: "email",
  id: 1,
};

//interface with method

interface Product {
  name: string;
  price: number;
  getDiscount(perceent: number): number;
}

let laptop: Product = {
  name: "Asus",
  price: 84000,
  getDiscount(perceent: number): number {
    return this.price * (perceent / 20);
  },
};
