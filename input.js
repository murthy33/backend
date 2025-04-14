const readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
rl.question(`what is ur name:`,(name)=>{
    console.log(`Hi ${name}`);
    rl.close();
} );