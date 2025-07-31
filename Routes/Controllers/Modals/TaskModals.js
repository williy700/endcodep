const mongoose = require("mongoose")

const TaskSchema = mongoose.Schema(
{

//     sample: {
//     type:String, 
//     required:[true, "please this field is required"],
//     unique: true,
//     default: "divine@gmail.com"
// }

title:{
    type:String,
    required:true
},

assignedTo:{
    type: String,
    requried: true
},

desc:{
    type: String,
    requried: true,
    minlength: [5, "minimum length should be more than 20 letter words"],
    maxlength: [500, "maximum length shouldn't exceed 500 words"]
},

startDate:{
    type:Date,
    requried: false
},

end_Date:{
    type: Date,
    requried: false
},

isCompleted:{
    type: Boolean,
    default: false
    
},

status:{
    type:String,
    enum:["Pending", "In progress", "Completed"],
    default: "Pending"
}

},




    {
        timestamps: true
    }
)

module.exports = mongoose.model("Task", TaskSchema)