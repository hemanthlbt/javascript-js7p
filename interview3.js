let stranger  = ["nancy","eleven","barbra","dustin","mike","caleb"]
// console.log(stranger)
let convert = JSON.stringify(stranger)
// console.log(convert)
let revert = JSON.parse(convert)
// console.log(revert)

//shallow copy and deep copy


// this is shallow copy
// let things = stranger
// console.log(things)

// let things  = stranger.slice()
// console.log(things)


// using spread operator.
// let things = [...stranger]
// console.log(things)

//using deep copy

// let things  = ({...})

document.cookie = "username=eshanarang";
