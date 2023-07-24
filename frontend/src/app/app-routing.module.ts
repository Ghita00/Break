import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AllStaffComponent } from './all-staff/all-staff.component';
import { AllResturantComponent } from './all-resturant/all-resturant.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

const routes: Routes = [{
  component: LoginComponent,
  path:''
},{
  component: HomeComponent,
  path:'home'
},
{
  component: AllStaffComponent,
  path:'staff'
},{
  component: AllResturantComponent,
  path:'resturants'
},{
  component: PersonDetailComponent,
  path:'person'
},{
  component: HomeComponent,
  path:''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
