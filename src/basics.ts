//primitives
let username:string="praven"
let age:number=26
let isadmin:boolean=true
//null undefined
let nullvalue:null=null
let value:undefined=undefined
//arrays

let numbers:number[]=[1,2,3,3,4,5]
let strings:string[]=["one","two"]
 
//tuples
let tuples :[string,number]=["test",26]
//enum

enum color {
    red,
    blue,
    green
}
let favcolor:color=color.red
//any
let random:any=10
random="name"
random=false

//unknown safer than any
let userInput:unknown

userInput=10
userInput="bosco"

//functions that not return anything
function notReturn(message:string):void{
    console.log()
}
//