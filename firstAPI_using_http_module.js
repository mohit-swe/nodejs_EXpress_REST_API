var http=require('http');
var data=[
    {name:"mohit",age:"23",email:"mojha@google.com"},
    {title:"ojha",age:"23",job:"softwareengineer"}          //more than one data hence array is used.
];
// for one data write like this  var data='{"name":"mohit"}';

http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'application\json'});
res.write(JSON.stringify(data));
res.end();
}).listen(8000);