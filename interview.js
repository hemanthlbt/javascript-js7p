// var object = {

// name : "hemanthkumar",
// age : 25

// }

// console.log(object)

// //it can be of anytype.



// var newone = {

// names : ["hemanth","kumar","lingabathina"],
// places : ["hyderabad","nellore","kerala","hyderabad"]


// }


// console.log(newone)


// var bunty = Object();

// object constructor way.

// var object = object();

//object's create method.






// arrays.

var newarray = ["apples","oranges","bananas","oats","mulesi","eggs"]

// console.log(newarray[3])

//newarray.push(100)


//combining two or more arrays as one array.


// var grapes = ["apple","samsumg","nikion","staples","tomatoes"]
// var bananas = ["calofornia","newyork","tampabay","southpark","spark"]

// console.log(grapes.concat(bananas))

// Using spread operator.

// console.log(...grapes,...bananas)

//copy clone an array.

//  normal copy ,shallow copy , deep copy.


// const arr = [1,2,3,4,5]

// const copy = arr.slice();
// // console.log(arr)
// console.log(copy)


// var original  = [true,true,false,undefined,null]

// var copy1 = original.slice(0);
// // console.log(copy1)

// // copying using spread operator.
// var copy2 = [...original]
// console.log(copy1,copy2)

// // using deep copy.
// var deeparray = [["freecodecamp"]]

// var items = ["cars","bikes","computers"]

// console.log(items[0].push("this is great");


// const array1 = [1,2,3,4,5]
// const shallowcopy = array1.slice()

// console.log(shallowcopy)
// i think this is normal copy.
// const arr1 = [100,200,300]
// arr1[2] = 500
// const arr2 = arr1

// console.log(arr2)

// // shallow copy.
// const us = ["california","texas","florida","alaska"]
// // console.log(us)

// const ind = ["andhra","telangana","tamilnadu","kerala"]

// const shallowcopy = us.slice();
// console.log(shallowcopy)

// let buntymarks  = [100,100,200]
// let hemanthmarks = buntymarks
// // console.log(hemanthmarks)

// buntymarks[0] = 1000

// console.log(hemanthmarks)


// so this is called shallow copy now let us try this with objects with my brain


// let person  = {

// name : "hemanthkumarlingabathina",
// age  : 25,
// place : "hyderabad",
// height : "5'9 inches",
// }
// // console.log(person)


// let person2 = {

// name : "viratkohli",
// age : 35,
// place : "delhi",
// height : "5'9 inches",

// }


// // let person3 = person2;

// // console.log(person3)

// //shallow copy using objects.

// let person3 = Object.assign({}.person2);
// console.log(person3)

// let obj1 = {
// name : "bunty",
// name2 : "hemanth"
// }


// let obj2 = {
// name3:"kumar",
// name4 : "swamy",
// }


// let obj3 = Object.assign({},obj2)
// obj3.name4 = "chetan krishna kumar reddy"
// console.log(obj3)

// shallow copy using objects again.

// let california = {
// country : "unitedstates",
// continent : "northamerica",
// language :"American english",
// population : "100m people",
// }


// let andhra = {
// 	country : "India",
// 	continent : "asia",
// 	language : "telugu",
// 	population : "80m people",
// }


// let kerala = Object.assign({},california)
// kerala.population = "naku em telusu ra puka"
// console.log(kerala)

// again trying a shallow copy with objects and try with arrays.


// let names = ["hemanth","akhil","jayanth","yeddi","samarth","arshad sheik"]

// let names2 = names

// let names3  = Object.assign({},names)
// names3[3] = "tammana"
// console.log(names3)

//using object destructuring.

// let obj1 = {


// 	name: "hemanth",
// 	age : 53,
// }


// let obj2 = {...obj1}
// obj2.age = 100;
// console.log(obj2)
// this is destructuring of the array with deep copy.
// let array1 = [100,200,300,400,500,600,700]
// array2 = {...array1}
// array2[4] = 89
// console.log(array2)

//using slice() method.

// let obj1 = [100,200,300,400]
// obj2 = obj1.slice()
// obj2[3] = 1990;
// console.log(obj2)


//slice method can also be used to shallow copy ????

// let naresh = [100,200,300,400,500,600]

// naresh2 = naresh.slice()
// naresh2[3] = 8989
// console.log(naresh2)


// normal copy
//shallow copy 
// deep copy.

// let arrays = [1,2,3,4,5,6,7,8,9]

// arr = arrays

//shallow copy ..

// let arr = [100,200,300,400,500,600,700,800,900]
// arr2 = [...arr]
// arr2[3] = 3003
// console.log(arr2)

// deep copy.

// var elements = ["pixar","disney","freamworks","toondisney"]

// elements2 = Object.assign({},elements)
// elements2[0] = "hemanth"
// elements2[3] = "randomass"

// console.log(elements2)

//what is json parse and lodash method.

//json .stringify

// let mobile = {
// name :"samsung",
// model : "s22",
// inches : "6.1 inches"

// }


// console.log(mobile)

// let nmobile = JSON.stringify(mobile)
// console.log(nmobile)

// let me do the stringify again so that i can sum this up.

// let mobile = {name:"samsung",model:"samsung galaxy s22"};

// // console.log(mobile)

// let newmobile = JSON.stringify(mobile)
// console.log(newmobile)
// //ok now i know what jason.parse is .....i really hope it is .

// let random  = JSON.parse(newmobile)
// console.log(random)




