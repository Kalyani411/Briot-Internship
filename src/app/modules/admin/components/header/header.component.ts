import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../../../authservice.service';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private auth: AuthserviceService) {}

  ngOnInit(): void {}


  logout():void{


     this.auth.logout();
  }

 
  
  

  /* logout(): void {
    this.auth.logout();
  } */
}

