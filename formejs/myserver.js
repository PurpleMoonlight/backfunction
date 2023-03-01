const http=require("http")
const fs=require("fs")
const queryString=require("querystring")//
const ejs=require("ejs")

//从外部文件引入公共变量
const configServer=require("../configmodule.js").configserver
//读取ejs文件从
const template=fs.readFileSync(__dirname + "/formhtml.ejs","utf-8");
var posts=[];
//创建http服务
const server=http.createServer((request,response)=>{
    if(request.method=='POST'){
        //表单提交
        request.data="";
        request.on("readable",function(){
            //表单数据收集
           var readForm=request.read();
           if (readForm){
            request.data+=readForm;
           }
        });
        request.on("end",function(){
            //表单处理
            var  querys=queryString.parse(request.data);
            posts.push(querys.content);
            showForm(posts,response);

        })
    }else{
        //显示表单
        showForm(posts,response);
    }


})

function showForm(p_posts,response){
    var data=ejs.render(template,{
        title:"东方不败欢迎你",
        posts:p_posts
    }) 
    response.setHeader("Content-Type","text/html;charset=utf-8") ;
    response.statusCode=200;
    response.end(data)

}
server.listen(configServer.port ,configServer.hostname,()=>{
    console.log(`Server running at http://${configServer.hostname}:${configServer.port}/`);
})

