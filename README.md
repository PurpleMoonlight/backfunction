## 包管理器
npm的使用方法
ejs(Effective Javascript templatimg)的安装

ejs的使用

## 回调地狱
Nodes.js 是非阻塞型编程，那么在编码的过程中会遇到很多的回调函数(callback),如果多个回调函数嵌套在一起的话,就会形成回调地狱，虽然对程序的结果没有任何影响，但对于代码的可读性来说的就是个地狱。

//回调地狱  示例代码
function dbupd(sql,done){
    setTimeout(()=>done(sql+" upd ok."),800);
}
dbupd("1.sql1",result=>{
    console.log(result);
    dbupd("2.sql2",result=>{
        console.log(result);
        dbupd("3.sql",result=>{
            console.log(result)

        });
    });
});


## promise  函数嵌套解决方案
function dbupAsync(sql){
    
}
