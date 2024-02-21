//create author api app
const exp=require('express');
const authorApp=exp.Router();


authorApp.get('/test-author',(req,res)=>{
    res.send({message:"This from author api"})
})


//export userApp
module.exports=authorApp;