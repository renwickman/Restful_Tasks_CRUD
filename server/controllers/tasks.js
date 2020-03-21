const mongoose = require("mongoose");
const Task = require('../models/task.js');

module.exports = {

    index: function(req, res){
        Task.find()
            .then(task => {
                res.json(task);
            })
            .catch(err => {
                res.json(err)
        })
    },

    details: function(req, res){
        Task.findOne({_id: req.params.id})
        .then(task=>{
            res.json(task);
        })
        .catch(err => {
            res.json(err)
    })
},

    addTask: function(req, res){
        let task = new Task()
            task.title = req.body.title,
            task.description = req.body.description,
            task.save()
            .then(task => {
                res.json(task);
            })
            .catch(err => {
                res.json(err)
        })
    },

    editTask: function(req, res){
        Task.findOne({_id: req.params.id})
        .then (updatetask => {
            updatetask.title = req.body.title;
            updatetask.description = req.body.description;
            updatetask.save()
            .then(task => {
                res.json(task)
            })
        })
        .catch(err => {
            res.json(err)
        })
    },
    
    deleteTask: function(req, res){
        Task.findByIdAndDelete({_id: req.params.id})
            .then(task => {
                res.json(task);
            })
            .catch(err => {
                res.json(err)
            })
    }
}