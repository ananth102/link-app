const db = require("../db");

const mongoose = require('mongoose');


const creatorSchema = new mongoose.Schema({
    name:String,
    public:{
        name:String,
        links:[{
            name:String,
            link:String,
            description:String
        }]
    },
    private:{
        linkStatistics:[{
            name:String,
            count:Number
        }]
    }
});

let Creator = mongoose.model("Creator",creatorSchema);


module.exports = Creator;