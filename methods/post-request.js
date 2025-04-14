const requestBodyParser=require("../util/body-parser");
const crypto = require("crypto");
const writeToFile = require("../util/write-to-files");

module.exports=async (req,res)=>{
    if(req.url==='/api/movies'){
        try{
            let body = await requestBodyParser(req);
            body.id=crypto.randomUUID();
            req.movies.push(body);
            writeToFile(req.movies);
            res.writeHead(201,{"content-Type":"application/json"});
            res.end()
        }catch(err){
                console.log(err);
                res.writeHead(400,{"Content-Type":"application/json"});
                res.end(JSON.stringify(
                {title:"Validation Failed", message:"Request body is not valid"}));
        }
    
    }else{
        res.writeHead(404,{"Content-Type":"application/json"});
        res.end(JSON.stringify({title:"Not Foun", message:"Route not found"}));
    }
};
