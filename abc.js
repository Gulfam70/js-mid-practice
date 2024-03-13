let arr=[21,44,33,223,65,43,65,132,76,3,654];


let [,,a,b,c,...rest]=arr;
//console.log(a, b,c,rest);
let obj = {...arr};
//console.log(obj);

//spread operator

let arr1=[5,6,7];
let obj1={...arr1};

console.log(obj1);
function mul(v1,v2,v3){

    return v1*v2*v3;
}
console.log("multiple is " + mul(...arr1));


let obj2={
    name: "gulfam",
    age: 21,
    cms: 113
};
console.log({...obj2, age:25})
console.log({...obj2, name:"Gulfam Channa"})
console.log(obj2);
console.log(obj2);