import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getTasks() {
      return this.http.get('/tasks');
  }
  
  newTask(data) {
    return this.http.post('/tasks', data)
  }

  getOneTask(id) { 
      return this.http.get('/task/'+id);
    }

  editTask(editTask) {
    return this.http.put(`/tasks/${editTask._id}`, editTask);
  }
  deleteTask(id) {
    return this.http.delete('/tasks/'+ id);
      
    }
  }

