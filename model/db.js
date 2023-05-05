
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Abhishek:Abhishek123456@cluster0.lnjb6gv.mongodb.net/hk-task?retryWrites=true&w=majority")
.then(function(){
    console.log("database connected!")
})
.catch(function(error) {
    console.log(error.message)
});


