var mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0/learningApi").then(()=>{
    console.log("Connected to database!")
}).catch((e)=>{
    console.log(e);
});
