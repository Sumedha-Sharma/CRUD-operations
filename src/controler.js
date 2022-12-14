const {Task}=require("./model");

const getAllTasks= async (request,response)=>{
    var _id=request.query.id;
    var nameq=request.query.name;
    if(_id){
        var allTasks=await Task.findById(_id);
    }
    else if (nameq){
        var allTasks=await Task.find({name:nameq});
    }
    else{
        var allTasks= await Task.find();
    }
    
return response.json(allTasks);
}

const createTask= async(request,response)=>{
     await Task.create(request.body);
    return response.json({status:"Task created"});
}
const updateTask= async (request,response)=>{
    var _id= request.query.id;
    
    var data= request.body;
    await Task.findByIdAndUpdate(_id,data);
    return response.json({status:"Task Updated"});
}
const deleteTask= async (request,response)=>{
    var _id= request.query.id;
    await Task.findByIdAndDelete(_id);
    return response.json({status:"Task Deleted"});
}
const toggleCompleted= async (request,response)=>{
    var _id= request.query.id;
    var data= request.body;
    await Task.findByIdAndUpdate(_id,data);
    return response.json({status:"Task toggled"});
}


module.exports={
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
    toggleCompleted
}