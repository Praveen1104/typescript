//OR
type Status="pending"| "approved"|"rejected"

function setStatus(message:Status):string{
    return message
}

setStatus("pending")

//AND

interface Colorful{
    color:string
}

interface Circle{
    radius:number
}

type ColorfulCircle=Colorful& Circle

let myCircle:ColorfulCircle={
    color:" brown",
    radius:5
}