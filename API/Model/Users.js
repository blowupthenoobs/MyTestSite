var mongoose = require("mongoose")

var usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
})

var Users = new mongoose.model("Users", usersSchema)

module.exports = Users;