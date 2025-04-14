//console.log(process.argv.slice(2)[0]);
const minimist=require("minimist");
//process.argv.forEach((value,index)=>{
 //   console.log(`${value}:${index}`)
//})
console.log(process.argv)
const argvN=minimist(process.argv.slice(2))
console.log(argvN.name)