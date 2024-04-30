import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthserviceService, private router: Router) {}

  ngOnInit(): void {
    // Uncomment the following lines if you want to automatically redirect to 'admin' if the user is already logged in
    /*
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['admin']);
    }
    */
    this.initForm();
  }

  initForm(): void {
    // If you need to initialize form controls separately, you can do it here
    // For example:
   this.loginForm.get('username'),
     this.loginForm.get('password')
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.llogin(this.loginForm.value).subscribe(
        (result) => {
          alert("Successful login")
          console.log(result);
          // Successful login
          // Assuming your AuthService returns useful data upon successful login

          if (result) {
            console.log(result);
          const  token=result.token;
           this.setToken(token);
            // Use Angular mechanisms (e.g., toast or message component) instead of alert in production
          }

          // Uncomment the line below if you want to navigate to 'admin' after a successful login
          this.router.navigate(['admin']);
        },
        (error) => {
          // Handle error
          console.error(error);
          // Display an error message using Angular mechanisms
          alert('An error occurred during login. Please try again.'); // Update this based on your actual error handling
        }
      );
    }
  }
  setToken(token: string): void {
    sessionStorage.setItem('token', token);}

   
    
    
}
