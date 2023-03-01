const http=require("http")
//引入fs核心库   读取本地文件
const fs=require("fs");


const serve=http.createServer((request,response)=>{
    fs.readFile(__dirname+"/index.html","utf-8",function(err,data){
        if(err){
            response.setHeader("Content-Type","text/plain");
            response.statusCode=404;
            response.end("not found")
        }else{
            response.setHeader("Content-Type","text/html");
            response.statusCode=200;
            response.end(data);
        }

    })
})
const hostname="127.0.0.1"
const port=8080;
serve.listen(port,hostname,()=>{
    console.log(`Server running  at http://${hostname}/${port}/`);
})
