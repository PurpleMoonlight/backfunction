/* 
回调函数
*/


function   completeFunc(n,callback){
    const result=n/2
    //如果传入callback 将这个resut计算结果放在callback函数中传递出去 
    if (!! callback)   callback(result)
}

function cHander(rst){
    
    console.log(`输出的结果为:${rst}`)
    
}
console.log(`--main++++++++++`)
completeFunc(5,cHander)
console.log(`--main----------`)

/* 
--main++++++++++
输出的结果为:2.5
--main----------

从输出的结果来看它是同步的，说明它所有的操作都是通过CPU完成的

IO   网络请求  网络延迟     它消耗的是网络的外设资源，这个时候cpu其实是空闲的
*/
