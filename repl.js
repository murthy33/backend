const repl=require("repl");
const local=repl.start("Hell");
console.log(5==='5');

local.on("exit",()=>{
    console.log("Exiting REPL");
    process.exit();
});