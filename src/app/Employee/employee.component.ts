import { Component, OnInit,EventEmitter } from '@angular/core';
//import { Employee } from './Employee';
import {Employee} from './Employee';
import { dataService } from '../shared/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tasks',
  templateUrl: './employee.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

allTasks:Employee[]=[];
  constructor(private _dataEmployee,private _router:Router) { }

  ngOnInit() {

    this._dataEmployee.getAllTasks().subscribe(
        (data: Employee[]) => {
          this.allTasks = data;
          
        }
      );
  }
  updateStatus(item:Employee){

    this._dataEmployee.editEmployee(item).subscribe(

      (data:any)=>{
        if(data.affectedRows==1)
        {
          // if(item.Status=='done'){
          // item.Status='pending';
          // }
          // else{
          //   item.Status='done';
          // }
        }
      }

    );
    
   // this._router.navigate(['/editEmployee',item.Id,item.Title,item.Status]);
  }
  deleteStatus(item:Employee){

    this._dataEmployee.deleteEmployee(item).subscribe(

      (data:any)=>{
        if(data.affectedRows==1)
        {
          //this.allEmployees.splice(this.allEmployees.indexOf(item),1);
        }
        else
        {
          alert("Error Deleting");
        }
      }

    );
   
  }

}