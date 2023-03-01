function   completeFunc(n,callback){
    const result=n/2
    // 处理回调返回的错误
    if   (n<=0) {
        callback(new Error('Invalid Number'))
        return
    }


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

//一股脑输出回调任务
// console.log(`--main----------`)
// completeFunc(5,cHander)
// completeFunc(6,cHander)
// completeFunc(7,cHander)
// completeFunc(8,cHander)
// console.log(`--main++++++++++`)
/* 
这种写法重复且容易出错
console.log(`--main----------`)
//真正的延时间隔  ##即回调地狱模式
completeFunc(5,(cHander1)=>{
    if (cHander1 instanceof Error){
        console.error(cHander1)
        return 
    }
    console.log(`cHander1结果为: ${cHander1}`);
    completeFunc(0,(cHander2)=>{
        if (cHander2 instanceof Error){
            console.error(cHander2)
            return 
        }
        console.log(`cHander2结果为:${cHander2} `)
    
        completeFunc(7,(cHander3)=>{
            if (cHander3 instanceof Error){
                console.error(cHander3)
                return 
            }
            console.log(`cHander3结果为: ${cHander3}`);
            completeFunc(8,(cHander4)=>{
                if (cHander4 instanceof Error){
                    console.error(cHander4)
                    return 
                }
                console.log(`cHander4结果为 : ${cHander4}`)
            });
        });
    });
})
 */
/* 

采用promise解决回调地狱
console.log(`--main++++++++++`)

cdfuntion(6)
    .then((cHander)=>{
        console.log(cHander)
        return cdfuntion(9)
    })
    .then((cHander)=>{
        console.log(cHander)
        return cdfuntion(-1)})
    .then((cHander)=>{
        console.log(cHander)
        return cdfuntion(7)})

    .catch((error)=>{
        console.log(error)
    })
console.log(`--main----------`)

*/

function cdfuntion(n){
    return new Promise((resolve,reject)=>{
        completeFunc(n,(cHander)=>{
            if ( cHander instanceof Error)  reject(cHander);
            else resolve(cHander)
        })
    })
}

/* 

使用async   await语法糖
async function main(){
    
    try{
        const cHander1=await cdfuntion(6)
        console.log(cHander1);
        const cHander2=await cdfuntion(7)
        console.log(cHander2);
        const cHander3=await cdfuntion(8)
        console.log(cHander3);
        const cHander4=await cdfuntion(9)
        console.log(cHander4);
    }
    catch(error){
        console.error(error)
    }
    
}
console.log(">>main+++")
main()
console.log(">>main---")

*/

/* 
在语法糖中里面还可以做for循环

*/
async function main(){
    try{
        //使用for循环来代替繁多的语句
        [6,5,6,7,10,5,5,5,10,7,7,].forEach(async (cHander)=>{
            const cHanderResult=await cdfuntion(cHander)
            console.log(cHanderResult);
        })
    }
    catch(error){
        console.error(error)
    }
}
console.log(">>main+++")
main()
console.log(">>main---")


/* 
--main----------
--main++++++++++
输出的结果为:2023/2/22 23:43:55
输出的结果为:2023/2/22 23:43:55
输出的结果为:2023/2/22 23:43:55
输出的结果为:2023/2/22 23:43:55
这种调用是没有等之前的io操作计算返回出结果就直接另分配给它
一个任务，在这中间没有间隔时间，如此将所有的任务交给IO回调来执行，
那么它只会在输出第一个结果时会有延时，而后面的所有计算都几乎和第一次
IO计算的结果同时输出出来，没有延时。如果想要在第一个IO操作完成后
在让它执行第2个回调任务，那么需要将后面任务的函数嵌套在前一个任务的函数里面，
如此以往。。。。这样它们就会真正的延迟。



*/


