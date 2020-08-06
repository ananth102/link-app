
const Creator = require("../models/creator.model");

/*Gets a list of all the links at the creators id */
function consumer_get(req,res,next){
    Creator.find({name:req.params.creator},(err,user)=> {
        console.log(req.params.creator);
        if(err)req.status(400).send(err)
        else{
            res.status("200").send(user[0].public);
        }
    });
    
}
/* Used for sending data about the consumer to the server/possibily integrate with cookies in the future*/
function consumer_post(req,res,next){
    Creator.findOneAndUpdate({name:req.params.creator,"private.linkStatistics.name":req.body.val},{$inc: { "linkStatistics.$.count": 1 }},
    {new :true},(err,update)=>{
        if(err)req.status(400).send(err)
        else{
            res.status("200").send(update);
        }
    });
    res.status("200").send(req.params);

}

module.exports = {
    get:consumer_get,
    post:consumer_post
}