const mongoose = require('mongoose');
const userModel = new mongoose.Schema({
    name: String,
    email: String,
    nummber:String,
    id: String,
});

const user = mongoose.model('user', userModel);
module.exports = user;