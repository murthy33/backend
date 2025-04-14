const writeToFiles = require("../util/write-to-files");

module.exports=(req,res)=>{
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
            const index = req.movies.findIndex((movie)=>{
                return movie.id===id
            });
            if (index===-1){
                res.statusCode=404;
                res.write(JSON.stringify({title:"Not Found", message:"Movie not found"}));
                res.end();
            }else{
                req.movies.splice(index,1);
                writeToFiles(req.movies);
                res.writeHead(204,{"Content-Type":"application/json"})
                res.end(JSON.stringify(req.movies))

            }
        }
};
