// let bioData = {
//     myName : "Thapa",
//     myAge : 25,
//     getData : function(){
//         console.log(`My name is  ${bioData.myName} and my name is ${bioData.myAge}`);

//     }
// }
// bioData.getData();


// let bioData = {
//     myName : {
//         realName : "kamal",
//         class : "3rd sem"
//     },
//     myAge : 25,
//     getData (){
//         console.log(`My name is  ${bioData.myName} and my name is ${bioData.myAge}`);

//     }
// }
// console.log(bioData.myName.realName);



// console.log(this);


// let myName = "kamal";
// function myName() {
//     console.log(this.myName);
// }
// myName();


// const obj = {
//     myAge : 20,
//     myName() {
//         console.log(this);
//     }
// } 
// obj.myName();


//array distructing

// let animals = ["Dog", "Cat", "Cow", "Horse", "Mouse"];
// let [animal1, animal2, animal3, animal4, animal5, animal6 ="Owl"] = animals;
// console.log(animal6)

// const myBioData = {
//     myFname : "kamal",
//     myLname : "Khanna",
//     myAge : 20
// }

// // let myAge = myBioData.myAge;
// // let myFname = myBioData.myFname;
// // console.log(myAge);

// let {myFname, myLname, myAge} = myBioData;
// console.log(myLname);

//object properties

// let myName = "vinod";
// const myBioData = {
//     [myName] : "hello",
//     26 : "is my age"
// }

// console.log(myBioData);


// const colors = ['red', 'green', 'blue', 'white'];

// const myColors = [ ...colors, 'yellow', 'pink'];
// console.log(myColors);



// const colors = ['red', 'green', 'blue', 'white'];

// const isPresent = colors.includes('purple');
// console.log(isPresent);



//es 8

// const message = "my name is vinod";
// console.log(message);
// console.log(message.padStart(5));
// console.log(message.padEnd(5));


//es9

// const person = {name:"kamal", age:87};
// const sPerson = {...person};
// console.log(person)
// console.log(sPerson)
"use strict"
let x = 34.45;
console.log(x);