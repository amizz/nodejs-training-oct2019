let a : string;
let b : number;
let c : boolean;
let e : any;

let f = "aaaaaa";

a = "Nama " + "amirul";

console.log(a);

export function funcSatu(aaa:string = "satu") : string {
    return aaa
}

// import { funcSatu as funcOne } from "./one";

export class Hello {
    constructor(parameters) {
        
    }

    
    public get helloGet() : string {
        return 
    }
    
}

interface User {
    name: String,
    age: Number,
}

let employees : Array<User>;

employees = [{
    name: "",
    age: 0,
}]

enum Colour {Red = 255, Green = 20, Blue};

let car1 = Colour.Red;
let car2 : Colour = Colour.Green;
let car3 : Colour = Colour.Blue;

console.log(car1)
console.log(car2)
console.log(car3)

let x: [string, number] = ["", 12];

namespace User {
    class User {
        constructor(parameters) {
            
        }
    }
}