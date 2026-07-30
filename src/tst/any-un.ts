//any vs unknown
let data: any = "praveen";
console.log(data);
data = 10;
console.log(data);
data = true;
console.log(data);
//there is no type safty in any type

//console.log(data.toUpperCase()); //this will not give any error even though data is not a string

//unknown type
let data2: unknown = "praveen";
console.log(data2);
data2 = 10;
console.log(data2);
data2 = true;
console.log(data2);

//console.log(data2.toUpperCase()); //this will give error because data2 is of unknown type and we cannot access any property or method on unknown type without type assertion or type checking
