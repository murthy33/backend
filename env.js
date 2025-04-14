require("dotenv").config();
const name=process.env.NAME
const p=process.env.PROFESSION
console.log(name);
console.log("i am learning",process.env.COURSE);
console.log(`HII ${name}, ${p} `,process.env.COURSE)
