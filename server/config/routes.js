  
const tasks = require("../controllers/tasks.js");

module.exports = function(app){

    app.get("/tasks", (req, res)=> {
        tasks.index (req, res);
        })
    
    app.get("/tasks/:id", (req, res)=> {
        tasks.details (req, res);
    })

    app.post("/tasks", (req, res)=> {
        tasks.addTask (req, res);
    })

    app.put("/tasks/:id", (req, res)=> {
        tasks.editTask (req, res);
    })

    app.delete("/tasks/:id", (req, res)=> {
       tasks.deleteTask (req, res);
    })
};