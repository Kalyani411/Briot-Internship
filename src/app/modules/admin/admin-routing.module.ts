import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [

{path:'', component:AdminDashboardComponent,
children:[

  {path:'home', component:HomeComponent},
  {path:'footer', component:FooterComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'header', component:HeaderComponent},

 /*  {path:'contact', component:ContactComponent},
  {path:'services', component:ServicesComponent}, */
  { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
