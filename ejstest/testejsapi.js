//一个简单的websever

// const hostname="127.0.0.1";
// const port=8888;
const http=require("http")
//引入fs模块
const fs=require("fs");
//引入ejs模块
const ejs=require("ejs");
//使用require引用外部模块
const config=require("../configmodule.js").configserver
const template=fs.readFileSync(__dirname+"/hello.ejs","utf-8");

const serve=http.createServer((request,response)=>{
    var data=ejs.render(template,{
        title:'黑木崖ejs',
        content:"<strong>东方不败欢迎你</strong>"
    })
    response.setHeader("Content-Type","text/html;charset=utf-8");
    response.statusCode=200;
    response.end(data);
})
serve.listen(config.port,config.hostname,()=>{
    console.log(`Server  running at http://${config.hostname}:${config.port}/`);
})
