import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodosComponent } from './TodoComponents/todos/todos.component';
import { UpdateTaskComponent } from './update-task/update-task.component';


const routes: Routes = [
  {path: 'get-all-task', component: TodosComponent},
  {path: 'add-task', component: AddTaskComponent},
  {path: '', redirectTo: 'get-all-task', pathMatch: 'full'},
  //defining an empty path means it will redirect to all task
  {path: 'update-task/:id', component: UpdateTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 