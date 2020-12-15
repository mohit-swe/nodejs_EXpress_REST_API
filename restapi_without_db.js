const express=require("express");
const app=express();
const body_parser=require("body-parser");
let work={people:[{name:"docdco"}]};
app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());
app.get("/rest_api_by_postman_without_db_url",(req,res)=>
{
//mongodb
    res.json(work);
    res.end();
   // res.send("success")
});

app.post("/rest_api_by_postman_without_db_url",(req,res)=>
{
//mongodb
    if(req.body && req.body.name)
    {
        work.people.push({name:req.body.name})
    }
    res.json(work);
    res.end();
   // res.send("success")
});
/*
app.put("/rest_api_by_postman_without_db_url",(req,res)=>
{
//mongodb
    if(req.body && req.body.name)
    {
        work.people.push({name:req.body.name})
    }
    res.json(work);
    res.end();
   // res.send("success")
});
*/

app.get("/rest_api_by_postman_without_db_url/:name",(req,res)=>
{
//mongodb
    res.json({name:req.params.name});
    res.end();
   // res.send("success")
});



app.listen(4000);