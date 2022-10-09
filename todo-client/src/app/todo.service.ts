import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUrl:string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getTodos():Observable<any>{
    return this.http.get(`${this.baseUrl}/todos`);
  }

  addTodo(todo:Todo):Observable<any>{
    return this.http.post(`${this.baseUrl}/todos`,todo);
  }

  deleteTodo(id:number){
    return this.http.delete(`${this.baseUrl}/todos/${id}`);
  }
}
