const UserModel = require("./UserModel");
const bcrypt = require("bcryptjs")


const Signup = async(req, res)=>{

    const { username, password, email, age, gender } = req.body
try {
    const {username, password, email, age, gender} = req.body

    // to check if task exist in our db under task collection

    const UserExist = await UserModel.findOne({email});

    if(UserExist){
        res.status(405).json({
            message: "User already exists"
        })
    }

    // to create a new task
    const createNewTask = await UserModel.create({
        username, 
        password, 
        email, 
        age, 
        gender
    }); // we are saving the everything thing is the req.body to the db

    const taskResult = await createNewTask.save()

    ///where am returning the data if successful

    
    res.status(200).json({
        _id: taskResult._id,
        username: taskResult.username,
        password: taskResult.password,
        email: taskResult.email,
        age: taskResult.age,
        gender: taskResult.gender

    });
} catch (error) {
    res.status(404).json({
        message: "Internal Server Error :)",
    });
}
};





const Login = async(req, res)=>{

    const { username, password } = req.body
try {
    const { email, password } = req.body

    // to check if task exist in our db under task collection

    const CheckUser = await UserModel.findOne({email});

    if(!CheckUser){
        res.status(405).json({
            message: "Invalid User or User not Found"
        });
    }

    const ValidatePassword = await bcrypt.compare(password, CheckUser.password)
    if(!ValidatePassword){
        return res.status(567).json({
            message: "Invalid password"
        });
    }

    

    ///where am returning the data if successful

    
    res.status(200).json({
        _id: CheckUser._id,
        username: CheckUser.username,
        password: CheckUser.password,
        email: CheckUser.email,
        age: CheckUser.age,
        gender: CheckUser.gender

    });
} catch (error) {
    res.status(404).json({
        message: "Internal Server Error :[]",
    });
}
};


    module.exports={
        Signup,
        Login

    }
