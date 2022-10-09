import { Component, OnInit, VERSION } from '@angular/core';
import { TodoService } from './todo.service';

export class Todo {
  id: number;
  description: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  name = 'Angular ' + VERSION.major;
  todoCounter: number;
  newTaskDesc: string = '';
  todos: Array<Todo>;

  constructor(private todoService: TodoService) {
    // this.todos = Array.of(
    //   { id: 1, description: 'Bill payments' },
    //   { id: 2, description: 'Phone Recharge' },
    //   { id: 3, description: 'Buy groceries' },
    //   { id: 4, description: 'Home work' },
    //   { id: 5, description: 'Job' },
    //   { id: 6, description: 'Fill the tank' },
    //   { id: 7, description: 'Do the tax calculation' }
    // );
    // this.todoCounter = this.todos.length;
  }

  ngOnInit(){
    this.getAllTodos();
  }

  getAllTodos(){
    this.todoService.getTodos().subscribe(
      (data)=>{
        this.todos = data._embedded.todos; 
        console.log(data);
      }
    )
  }

  addNewTask() {
    
    // this.todos.push({ id: ++this.todoCounter, description: this.newTaskDesc });
    this.todoService.addTodo({id:null,description:this.newTaskDesc}).subscribe(
      (data)=>{ 
        this.getAllTodos();
        this.newTaskDesc = ''; 
      }
    );
    
  }

  deleteTodo(id: number){
    this.todoService.deleteTodo(id).subscribe(
      (data)=>{
        this.getAllTodos();
      }
    );
  }
}
