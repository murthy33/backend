const requestBodyParser=require("../util/body-parser");
const writeToFiles = require("../util/write-to-files");
module.exports=async (req,res)=>{
    let baseurl = req.url.substring(0,req.url.lastIndexOf("/"));
    let id = req.url.split("/")[3];
    const regexV4 = new RegExp(
        /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
        );

        if(!regexV4.test(id)){
            res.writeHead(400,{"Content-Type":"application/json"});
            res.end(JSON.stringify({title:"Validation Failed", message:"UUID invalid"}))
        }
        else if(baseurl==='/api/movies' && regexV4.test(id)){
            try{
                let body = await requestBodyParser(req);
                const index = req.movies.findIndex((movie)=>{
                    return movie.id===id
                });
                if (index===-1){
                    res.statusCode=404;
                    res.write(JSON.stringify({title:"Not Found", message:"Movie not found"}));
                    res.end();
                }else{
                    req.movies[index]={id,...body};
                    writeToFiles(req.movies);
                    res.writeHead(200,{"Content-Type":"application/api"});
                    res.end(JSON.stringify(req.movies[index]));
                }
            }
            catch(err){
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
