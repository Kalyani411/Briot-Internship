import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  userForm: FormGroup;

  constructor(private snackBar: MatSnackBar, private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
     
      
    });
  }

  onConfirmClick(): void {
    // Check if the form is valid
    if (this.userForm.valid) {
      
      this.showAlertMessage('User deactivated successfully!');
    } else {
      // Show error message if form is not valid
      this.showAlertMessage('Validation failed. Please fill in all required fields.');
    }
  }

  onCancelClick(): void {
    // Add your cancellation logic here
    // For example, close the modal
    this.showAlertMessage('User deactivation canceled.');
    // Assuming you have a method to close the modal in your component
   window.close();


  }


  

  private showAlertMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // 3 seconds
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}