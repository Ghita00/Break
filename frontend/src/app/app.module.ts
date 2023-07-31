import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroHomepageComponent } from './hero-homepage/hero-homepage.component';
import { SliderHomeComponent } from './slider-home/slider-home.component';
import { HomeComponent } from './home/home.component';
import { AllStaffComponent } from './all-staff/all-staff.component';
import { AllResturantComponent } from './all-resturant/all-resturant.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { ResturantDetailComponent } from './resturant-detail/resturant-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HeroHomepageComponent,
    SliderHomeComponent,
    HomeComponent,
    AllStaffComponent,
    AllResturantComponent,
    PersonDetailComponent,
    ResturantDetailComponent
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
