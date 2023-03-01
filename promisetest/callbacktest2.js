/* 
回调函数
*/
//nodejs异步非阻塞特性    不会因为IO操作或延时操作而影响CPU的执行过程,io操作
//也可以并发执行，当回调函数执行完
//结果后传递出来时cpu接手操作

function   completeFunc(n,callback){
    const result=n/2
    //IO操作  这个函数其实是个外设，不需要消耗CPU计算资源 他是并发执行
    setTimeout(()=>{
       const  dt=new Date()
       const dtresult=`${dt.toLocaleString()}`
       if (!! callback)   callback(dtresult)//如果传入callback 将这个resut计算结果放在callback函数中传递出去
    },n*100)//使用延时代表IO操作所需要的一些时间
     
    
}

function cHander(rst){
   
    console.log(`输出的结果为:${rst}`)
    
}
console.log(`--main----------`)
completeFunc(5,cHander)
console.log(`--main++++++++++`)

/* 
输出结果的顺序为
--main----------
--main++++++++++
输出的结果为:2023/2/22 23:33:41      这是IO并发执行的操作，cpu执行程序时不等待这个外设，只接受最后回调的结果来执行

*/