var aa = 0.1
let a = 1
let b = 2
let c = a * b
const dd = "fixed"

let obj1 = {
    "name": "am",
    obj2: {
       test: [{}, {}] 
    },
    "%&%&&*aaa": "test",
    ")(56712": ""
}

obj1.name = "muhd"
let obj2 = Object.assign({}, obj1);

obj1["%&%&&*aaa"] = 12345
obj1.name = "fathi"

function testPromise(params) {
    return new Promise((res) => {
        setTimeout(() => {
            console.log("hello 6 seconds")
        }, 6000);
    }, (rej) => {

    });
}

function testPromise2(params) {
    return new Promise((res) => {
        setTimeout(() => {
            console.log("hello 3 second")
        }, 3000);
    }, (rej) => {

    });
}

let globalRes;
testPromise
    .then((res) => {
        return testPromise2(res);
    })
    .then((res) => {
        console.log("result testPromise2")
    })
    .catch((err) => {
        console.error(err);
    })

async function contohFunction(params) {
   try {
       let a = await testPromise();
       let b = await testPromise2(a);
   } catch (error) {
       console.error(error);
   } 
}

class ThisClass {
    nama = ""
    a = 2
    lokasi = ""

    getterSini() {
        this.a;
        let self = this;
        
        testPromise
            .then((result) => {
                self.a;
                this.a;
            })
    }
}

console.log(a)
console.log(b)
console.log(c)

function name(params) {
    
}

let arrow = (a,b,c) => {

}

if (condition) {
    
} else {
    
}

switch (key) {
    case value:
        
        break;

    default:
        break;
}