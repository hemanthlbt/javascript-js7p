// now i need to underestand the real concepts that read past 3 days.
//shallowcopy 

let obj1 = {

name : "haribabu",
age : "60",
place : "badevaripalem",
height : "5'4 inches",
surname : "lingabathina",
}
	

let obj2 = {
name : "hemanthkumar",
age : "25",
place :"hyderabad",
height : "5'9 inches",
surname : "lingabathina",
}


let obj3  = JSON.stringify(obj2)
console.log(obj3)

let uns = JSON.parse(obj3)
console.log(uns)


var combine = obj1.concat(obj2)
console.log(combine)



