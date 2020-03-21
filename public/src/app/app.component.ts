import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  pageTitle = "Restful Tasks CRUD"

  tasks: any;
  // singleData: any = {};
  // details: any;
  addTask: any;
  editTask: any;
  editToggle: boolean = false;

  
  taskData: Object;
  

  constructor(private httpService: HttpService){}
  ngOnInit() {
    this.tasks = [];
    this.addTask = { title: "", description: ""}
    this.getTasks();
  }

  getTasks() {
    console.log("got tasks")
    this.httpService.getTasks().subscribe(data=>{
      this.tasks = data;
      console.log(data)
    })
  }

newTask() {
  console.log("You entered a new task")
  this.httpService.newTask(this.addTask).subscribe(data => {
  console.log("Got data from post back", data)
    // this.tasks = [];
    // this.getTasks();
  });
  this.addTask = {title: "", description: ""};
  this.getTasks();
  }


  getOneTask(task){
    console.log("get task")
    this.editTask = task;
    this.editToggle = true;
      console.log("edit on!")
}

  
  onEditTask() {
    console.log("edit task")
    this.httpService.editTask(this.editTask).subscribe(data => {
    console.log('Edit success:', data)
    });
    this.editToggle = false;
    this.getTasks(); 
  }

  deleteTask(id) {
    console.log("deleted task")
    this.httpService.deleteTask(id).subscribe(data => {

      this.getTasks();
    });
  }

}


