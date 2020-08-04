
const Creator = require("../models/creator.model");

/* Fetches ALL information about the creator
   Diffrent from the consumer function because it fetches analytics along with links
*/
function consumer_get(req,res,next){
    res.status("200").send(req.params);
}
/*
    Used if the creator wants to edit all links at once
*/
function consumer_put(req,res,next){
    res.status("200").send(req.params);
}
/*
    Used for editing just a single link
*/
function consumer_patch(req,res,next){
    res.status("200").send(req.params);
}

/*
    Used for deleting a link
*/
function consumer_delete(req,res,next){
    res.status("200").send(req.params);
}

module.exports = {
    get:consumer_get,
    put:consumer_put,
    patch:consumer_patch,
    delete:consumer_delete
}