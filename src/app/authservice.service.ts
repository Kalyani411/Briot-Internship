import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { url } from 'node:inspector';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {


  
  constructor(private http: HttpClient, private router: Router) { }

  llogin(data: any): Observable<any> {
    return this.http.post('http://110.227.197.118:8085/users/sign_in', data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  
  setToken(token: string): void {
    sessionStorage.setItem('token', token);
  }
/* 
  getToken(): string | null {
    return sessionStorage.getItem('token');
  }
  */
 /*  RegisterUser(inputdata:any){
    return this.http.post(this.url,inputdata)
  } */
  
  isLoggedIn() {
    return this.getToken() !== null;
  }
  /* changes */

  logout() {
   sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ username, password }: any): Observable<any> {
    if (username === 'admin' && password === 'briot') {
      
      return of({ name: 'kalyani desale', username: 'kd' });
    }
    return throwError(new Error('Failed to login'));
  }

  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  

}
