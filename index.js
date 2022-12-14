const express =require("express");
const parser= require("body-parser");
const {getAllTasks ,createTask,updateTask,deleteTask,toggleCompleted}=require("./src/controler")
const cors= require("cors");
const mongoose =require("mongoose");
const server=express();
server.use(cors());
server.use(parser.json());
mongoose.connect("mongodb://localhost:27017/todos");
mongoose.connection.on("connected",()=>{
    console.log("DB connected")
})

server.get("/get-task",getAllTasks)
server.post("/create-task",createTask)
server.put("/update-task",updateTask)
server.delete("/delete-task",deleteTask)
server.patch("/toggle-task",toggleCompleted)
server .listen(4000,()=>{
    console.log("server started on 4000 PORT");
})