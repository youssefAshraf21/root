"use strict";
let userName = "youssef";
let userAge = 25;
let userCity = "cairo";
let marrid = true;
// how to creat OBJ in ts 
// {} any type execpt null or undefined
// object ==> any non premative datatype 
// array ==> type of array
let frinds = ["ahmed", "ali", "mohamed"];
let marrid2 = [true, false, true];
let age = [20, "youssef"];
let any = ["youssef", 25, true];
let number = "18";
// union type? ==> OR (|)
let arr = ["youssef", 25, "18"];
let arr1 = "youssef"; //["ggg", "ali"]
// tuple ==> fixed size array + order array 
let arr2 = ["youssef", "ahmad", 25];
// any ==> skip type check
let arr3 = ["youssef", 25, true];
let number1 = "18";
// unknown 
let arr4 = ["youssef", 25, true];
let number2 = "18";
if (typeof number2 === "string") {
    number2.split("");
}
else if (Array.isArray(number2)) {
    number2.push(1);
}
let hambozo1 = "youssef";
let hambozo2 = 25;
let hambozo3 = true;
let userGender = "male";
//functions
// it should the last one is optional? 
function test(x) {
    console.log(x);
}
var result = test(10);
// how to creat obj in typescript
// 1- interface ==> (عقد/اتفاق)
// interface IChild {
//     name: string,
//     age: number
// }
// interface IUser {
//     name: string,
//     age: number
//     salary: number
//     isAlive?: boolean
//     child: IChild
// }
// let user: IUser = {
//     name: "youssef",
//     age: 25,
//     salary: 100,
//     child : {
//         name: "ahmed",
//         age: 5
//     }
// }
// 1-contract or blueprint of object
// 2-iterfaces can be merged (if the name is the same)
// 3- it prefer to start with I
// 4- it donst take any space
// 5- optional + readonly
// 6-interface can multiy inherit
// interface IHuman {
//     isalive : boolean
// }
// interface IPerson {
//     canEat : boolean
// }
// interface IUser extends IHuman, IPerson {
//     readonly name : string,  //readonly we cant change it 
//     age : number,
//     salary : number
//     gender : string
// }
// let user : IUser = {
//     name : "youssef",
//     age : 25,
//     salary : 100,
//     isalive : true,
//     canEat : true,
//     gender : "male"
// }
// ********** this wwebsite transfer any json obj to typescript obj ==> json to typescript  ==> to typescript  ************************* 
//classes
// iterview question ==> whats the diffrence between class and interface ***********vary important*************
// 1-class take space 
// 2- we cant merge 
// 3-cant make multi ihertance 
// we can make optional
class User {
    name;
    age;
    salary;
}
let user = {
    name: "youssef",
    age: 25,
    salary: 100
};
let product = {
    name: "laptop",
    price: 1000,
    category: "electronics",
    img: "img1"
};
let products = [
    { name: "laptop", price: 1000, category: "electronics", img: "img1" },
    { name: "laptop", price: 1000, category: "electronics", img: "img1" },
    { name: "laptop", price: 1000, category: "electronics", img: "img1" }
]; // as (Product & details)[]
let input = document.querySelector("input"); //==>non nullish operator  // or use this  ==> as HTMLInputElement
input.value = "youssef";
//enum enemoration
var Role;
(function (Role) {
    Role[Role["USER"] = 10] = "USER";
    Role[Role["ADMIN"] = 11] = "ADMIN";
    Role[Role["SUPER_ADMIN"] = 12] = "SUPER_ADMIN";
})(Role || (Role = {}));
let ahmed = Role.ADMIN;
console.log(ahmed);
//generics  ==> resuable code and flexabile
// <>
function printNumberList(list) {
    return list;
}
function printList(list) {
    return list;
}
printList(["youssef", "ahmed", "ali"]);
printList([10, 20, 30]);
printList([10, 20, 30, "youssef"]);
