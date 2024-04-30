import {Component, inject} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomesService } from '../../../../services/homes.service';


@Component({

  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
  /* standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule], */
})
export class UpdateComponent {

  
 
  
  userForm!: FormGroup;

  constructor(private shservice:HomesService, private snackBar: MatSnackBar, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<UpdateComponent>) {

    
    
    
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: [''],
      Role: [''],

      
      // Add other form controls as needed
    });
    this.shservice.getAllStudent().subscribe(
      (getAllData) => {
        // Do something with the data received from the observable
        console.log('Token received:', getAllData);
      },
      (error:any) => {
        // Handle errors if any
        console.error('Error getting token:', error);
      }
    );

  }



  

  onConfirmClick(): void {
    // Check if the form is valid
    if (this.userForm.valid) {
      
      this.showAlertMessage('User Updated!');
    } 
    else {
      // Show error message if form is not valid
      this.showAlertMessage('Validation failed. Please fill in all required fields.');
    }
    console.log(this.userForm.value)
  }

  /* deleteRow(){
    var delBtn = confirm(" Do you want to delete ?");
    if ( delBtn == true ) {
      this..splice(x, 1 );
    }   
  }  */

  private showAlertMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // 3 seconds
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  onCancelClick(): void {
    // Add your cancellation logic here
    // For example, close the dialog without confirming
    // Close the dialog
    this.showAlertMessage('User deactivation canceled.');
  }
}

  



