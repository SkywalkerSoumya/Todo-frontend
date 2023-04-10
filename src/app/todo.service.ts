import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private showAllURL = "http://localhost:8100/checktask/get";
  private addTaskURL = "http://localhost:8100/checktask/post";
  private updateTaskURL = "http://localhost:8100/checktask/update";
  private deleteTaskURL = "http://localhost:8100/checktask/delete"

  constructor(private httpClient: HttpClient) { }

  getAllTask(): Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(`${this.showAllURL}`);
  }

  addTask(todo:Todo): Observable<Object>{
    return this.httpClient.post(`${this.addTaskURL}`,todo);
  }

  updateTask(id: number, todo: Todo): Observable<Object>{
    return this.httpClient.put(`${this.updateTaskURL}/${id}`,todo);
  }
  
  getAllTaskById(id:number): Observable<Todo>{
    return this.httpClient.get<Todo>(`${this.showAllURL}/${id}`);
  }

  DeleteTask(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.deleteTaskURL}/${id}`,{responseType:'text'});
  }
  //header,queryparam,arraybuffer
}
