//promise  解决回调嵌套
function promiseUpDbfunc(sql){
    //实例化一个promise对象
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(sql+"upd ok");
            resolve(sql+".ok")
        },800);

    });
    return  promise
}
//调用
promiseUpDbfunc("sql1")
    .then(()=>{promiseUpDbfunc("sql2")})
    .then(()=>promiseUpDbfunc("sql3"))


