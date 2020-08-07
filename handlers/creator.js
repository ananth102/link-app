
const Creator = require("../models/creator.model");

/* Fetches ALL information about the creator
   Diffrent from the creator function because it fetches analytics along with links
*/
function creator_get(req,res,next){
    Creator.find({name:req.params.creator},(err,user)=> {
        console.log(req.params.creator);
        if(err)req.status(400).send(err)
        else{
            res.status("200").send(user[0]);
        }
    });
}
/*
    Used if the creator wants to edit all links at once
*/
function creator_put(req,res,next){
    Creator.findOneAndUpdate({name:req.params.creator},{$set:{"public":req.body.public}},{new:true},(err,update)=>{
        console.log(req.params.creator);
        if(err)req.status(400).send(err)
        else{
            res.status("200").send(update);
        }
    });
}
/*
    Used for editing just a single link
*/
function creator_post(req,res,next){
    Creator.findOneAndUpdate({name:req.params.creator},{$push:{"public.links.links":req.body.link}},{new:true},(err,updaye) => {
        if(err)req.status(400).send(err)
        else{
            res.status("200").send(update);
        }
    });
    res.status("200").send(req.params);
}

/*
    Used for deleting a link
*/
function creator_delete(req,res,next){
    let er = false
    Creator.findOneAndUpdate({name:req.params.creator},{$pull:{"public.links.$.link":req.body.link}},{new:true},(err,update)=>{
        if(err){
            req.status(400).send(err);
            er = true;
        }else{
            //res.status("200").send(update);
        }
    });
    if(er)return;
    Creator.findOneAndUpdate({name:req.params.creator},{$pull:{"private.linkStatistics.$.name":req.body.link}},(err,update)=>{
        if(err){
            req.status(400).send(err);
        }else{
            res.status("200").send(update);
        }
    });
    
}



module.exports = {
    get:creator_get,
    put:creator_put,
    post:creator_post,
    delete:creator_delete
}