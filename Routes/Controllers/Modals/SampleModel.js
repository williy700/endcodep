const mongoose = require("mongoose")
const SampleSchema = mongoose.Schema(
{

////projectTitle is an example of a tiltle field and u can add other data fields

projecttitle:{
    type:String,
    required:true
},



},




    {
        timestamps: true
    }
)

module.exports = mongoose.model("Sample", SampleSchema)