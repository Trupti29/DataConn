import { Routes,RouterModule } from '@angular/router';
import { TasksComponent } from './Employee/employee.component';
// { AddtaskComponent } from './tasks/addtask.component';
//import { EdittaskComponent } from './tasks/edittask.component';
const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/allTask', pathMatch: 'full'},
  {path: 'allTask', component: TasksComponent},
  // {path: 'addTask', component: AddtaskComponent},
  // {path: 'editTask/:Id', component: EdittaskComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);