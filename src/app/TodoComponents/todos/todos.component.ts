import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{

  todos : Todo[];
  //dateTime : Date;
  //count = 0;

  constructor(private todoService: TodoService, private router : Router) { }

  ngOnInit() : void{
     this.getAllTask();
    //  this.dateTime = new Date();
  }

  private getAllTask(){
    this.todoService.getAllTask().subscribe(data =>{
      this.todos = data;
    });
  }

  updateTask(id: number){
    this.router.navigate(['update-task',id]);
  }

  deleteTask(id: number){
    this.todoService.DeleteTask(id).subscribe(data=>{
      console.log(data);
      this.getAllTask();
    });
  }
  
}
