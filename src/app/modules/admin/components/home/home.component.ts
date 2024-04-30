import { Component,OnInit } from '@angular/core';
import { HomesService } from '../../../../services/homes.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Inject } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatLabel } from '@angular/material/form-field';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import {MatDialog} from '@angular/material/dialog'
import { FormpageComponent } from '../../../../formpage/formpage/formpage.component';
import { error } from 'console';
import { UpdateComponent } from '../../update/update/update.component';
import { DeleteComponent } from '../../component/delete/delete/delete.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Fix the typo here
})
export class HomeComponent implements OnInit {
  // ... rest of the component code



  title='first';
  getAllStudent:any;
  show=false;

  constructor(private student: HomesService, private _dialog:MatDialog) { 
    this.show=false;
  }

  
  APIData: any = [];


  addData() {
    const randomElementIndex = Math.floor(Math.random() * this.getAllStudent.length);
    this.APIData.data.push(this.getAllStudent[randomElementIndex]);
    this.APIData._updateChangeSubscription(); // Trigger update
  }
  
  removeData() {
    this.APIData.data.pop();
    this.APIData._updateChangeSubscription(); // Trigger update
  }

  /* applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.APIData.filter = filterValue.trim().toLowerCase();

    if (this.APIData.paginator) {
      this.APIData.paginator.firstPage();
    }
  } */

 


  openAddEditForm(){
    this._dialog.open(FormpageComponent)
  }


  ngOnInit(): void {
    this.getAllData()
  }


  getAllData()
  {
    this.student.getAllStudent().subscribe(res=>{
      this.APIData=res
      console.log("API Data:",this.APIData)
    });
  }

  /* getAllData() {
    this.student.getAllStudent().subscribe(res => {
      this.getAllStudent = res; // Assign the response to the property
      console.log("API Data:", this.getAllStudent);
    });
  }
  */

  postAllStudent() {
  this.student.saveAPIData(this.getAllStudent).subscribe(res => {
    console.log("API Data:", res);
  });
} 

  saveAPIData(){
    
  }

  deleteStudent(student_id: any) {
   /*  console.log(student_id); */
  
    this.student.deletestudent(student_id).subscribe(
      (result) => {
         console.log(result);
         this.ngOnInit();
        alert('Employee deleted!');
      },
      (error) => {
        console.error(error);
        // Handle error scenarios if needed
      }
    );
  }

  updateStudent(student_id: any){
    
  }

   opendialog(){
     this._dialog.open(UpdateComponent)
     data:this.APIData
  }

  deleteDialog(){
    this._dialog.open(DeleteComponent)
 }



}
