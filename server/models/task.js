const mongoose = require("mongoose");


const TaskSchema = new mongoose.Schema({
    title: {type: String, required: true, minlength: 3, maxlength: 64},
    description: {type: String, required: true, minlength: 3, maxlength: 64},
    completed: {type: Boolean, default: false},
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;