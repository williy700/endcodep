const mongoose = require("mongoose")

const UserSchema = mongoose.Schema(
{

//     sample: {
//     type:String, 
//     required:[true, "please this field is required"],
//     unique: true,
//     default: "divine@gmail.com"
// }

///////////title is an example of a data field structure






FirstName: {
    type:String,
    required:true
},

LastName: {
    type:String,
    required:true
},

Isadmin: {
    type:Boolean,
    required:true
},

PhoneNo: {
    type:number,
    required:true
},


password:{
    type:String,
    required:true
},


},




    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", UserSchema)