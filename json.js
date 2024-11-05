let emp = {

emps1:"hemanth",
emps2 : "samra",
emps3 : "esha",
emps4 : "trisha",
emps5 : "iman"
 
}

// console.log(emp)

let str = JSON.stringify(emp)
console.log(str)
let ustr = JSON.parse(str)
console.log(ustr)


let emparr = [{"firstname":"hemanth","lastname":"kumar"},
{"firstname":"esha","lastname":"namrang"},
{"firstname":"trisha","lastname":"jawahar"},
{"firstname":"falguni","lastname":"phatakh"}
]


let details = [ {"name":"hemanth","age":25,"birthplace":"Hyderabad"},
{"name":"eshanrang","age":22,"birthplace":"australia"},
{"name":"samarasaigal","age":23,"birthplace":"Delhi,India"}

]

let string = JSON.stringify(details)
// console.log(string)
let unstring = JSON.parse(string)
// console.log(unstring)

console.log("make it 12 contributions")
console.log("i dont want to disappoint my dad")
