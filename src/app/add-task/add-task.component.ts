import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  todo : Todo = new Todo();
  constructor(private todoService: TodoService, private router: Router) {}


  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  saveTask(){
    this.todoService.addTask(this.todo).subscribe(data=>{
      console.log(data);
      this.goToAllTask();
    },
    error => console.log(error));
  }

  goToAllTask(){
    this.router.navigate(['/get-all-task']);
  }
  
  onSubmit(){
    console.log(this.todo);
    this.saveTask();
  }


}
