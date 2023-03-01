const MongoClient=require('mongodb').MongoClient;
const assert=require("assert");
//链接数据库Connection URL
const url='mongodb://192.168.11.18:27017';
//D
const dbName="komablog";

//Use connect method to     connect to the server
MongoClient.connect(url,function(err,client) {
    assert.equal(null,err);
    console.log("Connected sucessfully to server");
    const db=client.db(dbName)
    client.close();
});