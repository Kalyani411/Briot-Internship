import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { url } from 'node:inspector';
import { registerLocaleData } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class HomesService {
  /* 'x-rapidapi-key':'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFkbWluIiwiaWF0IjoxNTkzNTA5MTI5fQ.lnhkD-tV9EV3ravCKUK6CN5PLb4OSvEPmcgCFz2HqAs'
}); */

/*  url = 'http://localhost:3000/posts'; */

  token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFkbWluIiwiaWF0IjoxNTkzNTA5MTI5fQ.lnhkD-tV9EV3ravCKUK6CN5PLb4OSvEPmcgCFz2HqAs'  
/* token1 = sessionStorage.getItem('token'); */




 url = 'http://110.227.197.118:8085/users';
 
 
constructor(private http: HttpClient) { }




getAllStudent() {
 var temp = this.getToken()
 console.log(temp)
  const headers = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Authorization': `JWT ${this.getToken()}`
  })
  return this.http.get(this.url,{headers});
}
/* RegisterUser(data:any){
  return this.http.post(this.url,data)

  console.log(registerLocaleData)
}
 */

 /* 
getAllStudent(){
  return this.http.get(this.url);
} 
 */
/* users()
  {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': `JWT ${this.token}`
    })
    return this.http.get(this.url,{headers})
  } */


 /*  getToken()  {
    let current=(sessionStorage.getItem('currentuser'))
    console.log(current)
    
  } */
  
  getToken()  {
    return sessionStorage.getItem('token');
    
  }



saveAPIData(data: any) {
  console.log(data);
  return this.http.post(this.url, data);
}

deletestudent(id: any) {
  return this.http.delete(`${this.url}/${id}`);

}

getStudentById( id: number ) {
  return this.http.get( '${this.url}/${id}' );
}
updateAPIData( id: number, data: any ) {
  return this.http.put( '${this.url}/${id}', data );
}

setToken(token: string): void {
  // Store the token in localStorage
  localStorage.setItem('token', token);
}

destroy(studentId: number) {
  return this.http.delete(`http://110.227.197.118:8085/users/${studentId}/delete`);
}

}








