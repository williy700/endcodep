 const TaskModals = require("./Modals/TaskModals");

const GetAllTask= async(req, res)=>{

    try {

    const result = await TaskModals.find().sort({createdAt:-1});

    res.status(200).json(result);
} catch (error) {
    res.status(404).json({
        message: "Failed to fetch data",
    });
}
};

const GetSingleTask = async(req, res)=>{
    const {id} = req.params

    try {

    const result = await TaskModals.findById(id)

    if(!result){
        return res.status(406).json({
            message: `Task ${id} not found`
        })
    } else {
        res.status(201).json(result)
    }
} catch (error) {
    res.status(404).json({
        message: "Failed to fetch data",
    });
}
};


const UpdateSingleTask = async(req, res)=>{
    const {id} = req.params
    const { title, assignedTo, desc, startDate, end_Date, status, isCompleted  } = req.body

    try {

    const result = await TaskModals.findById(id)

    if(!result){
        return res.status(406).json({
            message: `Task ${id} not found`
        })
    } else {
        result.title=title || result.title
        result.assignedTo = assignedTo || result.assignedTo
        result.desc = desc || result.desc
        result.startDate = startDate || result.startDate
        result.end_Date = end_Date || result.end_Date
        result.status = status || result.status
        result.isCompleted = isCompleted || result.isCompleted

        await result.save();
        res.status(201).json(result)
    }
} catch (error) {
    res.status(404).json({
        message: "Failed to fetch data",
    });
}
};

const DeleteSingleTask = async(req, res)=>{
    const {id} = req.params

    try {

    const result = await TaskModals.findByIdAndDelete(id);

    if(!result){
        return res.status(406).json({
            message: `Task ${id} not found`
        })
    } else {
        res.status(201).json({
            message: "Task ID deleted successfully",
        });
    }
} catch (error) {
    res.status(404).json({
        message: "Failed to fetch data",
    });
}
};

const CreateTask= async(req, res)=>{

    const { title, assignedTo, desc, startDate, end_Date } = req.body
try {
    const {title, assignedTo, desc, startDate, end_Date} = req.body

    // to check if task exist in our db under task collection

    const projectExist = await TaskModals.findOne({title, assignedTo});

    if(projectExist){
        res.status(405).json({
            message: "Task already assigned to this user"
        })
    }

    // to create a new task
    const createNewTask = await TaskModals.create({
        title, 
        assignedTo, 
        desc, 
        startDate, 
        end_Date
    })

    // we are saving the everything thing is the req.body to the db

    const taskResult = await createNewTask.save()

    ///where am returning the data if successful

    
    res.status(200).json({
        _id: taskResult._id,
        title: taskResult.title,
        assignedTo: taskResult.assignedTo,
        desc: taskResult.desc,
        startDate: taskResult.startDate,
        end_Date: taskResult.end_Date
    });
} catch (error) {
    res.status(404).json({
        message: "Failed to send data",
    });
}
};


const Install=(req, res)=>{
try {
    
    res.status(200).json({message: "Install Successful"});
} catch (error) {
    res.status(404).json({
        message: "Failed to fetch data",
    });
}
};

const Removal =(req, res)=>{
try {
    
    res.status(200).json({message: "Removed"});
} catch (error) {
    res.status(404).json({
        message: "Failed to fetch data",
    });
}
};

module.exports={
    GetAllTask,
    CreateTask,
    Install,
    Removal,
    GetSingleTask,
    UpdateSingleTask,
    DeleteSingleTask
}