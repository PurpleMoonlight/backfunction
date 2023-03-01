//非阻塞处理
function updb2(done){
    setTimeout( ()=>{done();},3000);
}
updb2(function x(){
    console.log("updb2  success")
})
console.log("i like  Nodejs")