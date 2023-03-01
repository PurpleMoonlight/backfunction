//promise  解决回调嵌套
var ssty="";
function completeFunc(sql1,callback){
   if (sql1=="东方"){
        callback(new Error('Invalid String'))
        return
   }
   else{
        setTimeout(()=>{
            ssty=sql1+"<br/>"
            console.log(ssty+"upd ok");
            if (!!callback){
               callback(ssty)  
            }
        },800);
    
   }
}


function promiseUpDbfunc(sql){
    //实例化一个promise对象
    return new Promise((resolve,reject)=>{
        completeFunc(sql,(ssh)=>{
            if (ssh instanceof Error)  reject(ssh);
            else resolve(ssh)
        });
    });
    
}
async function upAll(){
    try{
        ["东方不败","葵花宝典","金蛇郎君","独孤求败"]
        .forEach(async(sql)=>{
            const sshResult=await promiseUpDbfunc(sql) 
            console.log(sshResult); 
    });
    }catch(error){
        console.error(error)
    }
    
}
console.log("--------------")
upAll();
console.log("++++++++++++++")