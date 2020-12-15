var http=require('http');
var fs=require("fs");
http.createServer(function(req,res){
fs.readFile("createAPI.json","utf-8",(err,data)=>{   
const dataExtract=JSON.parse(data);
console.log(data);
console.log(dataExtract);
res.writeHead(200,{"Content-type":"application/json"});
res.end(dataExtract[0].name);
});
}).listen(1000);




