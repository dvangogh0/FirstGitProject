const a=5;
const b=6;

function sumFunc() {
    return a+b;
}
console.log(sumFunc())

function minFunc() {
    return a-b;
}
console.log(minFunc())

function umnFunc() {
    return a*b;
}
console.log(umnFunc())

function delFunc() {
    return a/b;
}
console.log(delFunc())

let myarray1 = [1,2,3,4,5,6];
let myarray2 = [10,20,30,40,50,60];


for(let i=0; i< myarray1.length; i=i+1) {
    console.log(myarray1[i])
}

for(let i=0; i< myarray2.length; i=i+1) {
    console.log(myarray2[i])
}