import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  id : number;
  todo : Todo = new Todo();
  constructor(private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router) {}


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todoService.getAllTaskById(this.id).subscribe(data =>{
      this.todo = data;
    }, error => console.log(error));
  }
  
  onSubmit(){
    this.todoService.updateTask(this.id, this.todo).subscribe(data =>{
    this.goToAllTask();
    }, error => console.log(error));
  }

  goToAllTask(){
    this.router.navigate(['/get-all-task']);
  }
}
