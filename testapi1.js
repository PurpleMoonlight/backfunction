//一个简单的websever

// const hostname="127.0.0.1";
// const port=8888;
const http=require("http")
//使用require引用外部模块
const config=require("./configmodule.js").configserver



const serve=http.createServer((request,response)=>{
    response.statusCode=200;
    response.setHeader("Content-Type","text/plain;charset=utf-8");
    
    // response.end("东方不败\n");
    //请求跳转到不同页面返回不同
    switch(request.url){
        case  "/":
            response.end("东方不败欢迎你");
            break
        case  "/about":
            response.end("这是一个教主的about页面");
            break
        case "/home":
            response.end("这是教主的home页面");
            break
        default:
            response.end("notFound");    
    }
})
serve.listen(config.port,config.hostname,()=>{
    console.log(`Server  running at http://${config.hostname}:${config.port}/`);
})
