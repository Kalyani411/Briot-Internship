import { HttpInterceptorFn } from '@angular/common/http';

export const interceptorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
/* import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';



@Injectable()
export class interceptorInterceptor implements HttpInterceptor {
  url = 'http://110.227.197.118:8085/users';
  constructor(private http: HttpClient) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the token from localStorage
    const token = localStorage.getItem('token');

    // If the token exists, add it to the request headers
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `JWT ${token}`
        }
      });
    }

    return next.handle(request);
  }

  // Move the getAllStudent() function outside of the interceptor class
  getAllStudent() {
    // Make sure to implement the logic for getting all students
    // Also, handle the case where you get the token
    const token = localStorage.getItem('token');
    console.log(token);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `JWT ${token}`
    });

    // Assuming this.url is defined somewhere in your code
    return this.http.get(this.url, { headers });

  }
}
 */