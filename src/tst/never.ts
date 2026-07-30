function throwError(message: string): never {
  throw new Error(message);
}

throwError("404 Error");

function infiniteLoop(): never {
  while (true) {
    console.log("Running....");
  }
}

console.log(infiniteLoop());
