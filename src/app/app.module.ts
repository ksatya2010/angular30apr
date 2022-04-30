import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SatyaComponent } from './satya/satya.component';
import { TaskComponent } from './task/task.component';
import { DirectivesComponent } from './directives/directives.component';
import { NaviComponent } from './navi/navi.component';
import { Pipe1Component } from './pipe1/pipe1.component';
import { HttpClientModule }from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './user/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    SatyaComponent,
    TaskComponent,
    DirectivesComponent,
    NaviComponent,
    Pipe1Component,
    HeaderComponent,
    HomeComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
