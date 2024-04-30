import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
;
 import { FormsModule } from '@angular/forms'; 
 import { MatCardModule } from '@angular/material/card';
 import { MatTableModule } from '@angular/material/table' 
 import {MatCheckboxModule} from '@angular/material/checkbox';
 import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MenubarComponent } from '../../menubar/menubar/menubar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { UpdateComponent } from './update/update/update.component';
import { MatSelectModule } from '@angular/material/select';
import { DeleteComponent } from './component/delete/delete/delete.component';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';
@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    MenubarComponent,
    UpdateComponent,
    DeleteComponent
    
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
     FormsModule,
     MatCardModule,
     MatTableModule,
     MatCheckboxModule,
     MatFormFieldModule,
     MatSidenavModule,
     MatMenuModule,
     MatListModule,
  MatInputModule, 
  MatSelectModule,
  ToastrModule 
  
  
   
     
  ]
})
export class AdminModule { }
