

/*Gets a list of all the links at the creators id */
function consumer_get(req,res,next){
    res.status("200").send(req.params);
}
/* Used for sending data about the consumer to the server/possibily integrate with cookies in the future*/
function consumer_post(req,res,next){
    res.status("200").send(req.params);

}

module.exports = {
    get:consumer_get,
    post:consumer_post
}