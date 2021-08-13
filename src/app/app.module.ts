import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { StudentService } from './student.service';
import { StudentComponent } from './student/student.component';


import { HttpClientModule } from '@angular/common/http';
import { StudentHttpComponent } from './student-http/student-http.component';
import { StudentHttpService } from './student-http.service';
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    StudentComponent,
    StudentHttpComponent
  ],
  imports: [
    BrowserModule , HttpClientModule
  ],
  providers: [StudentService,StudentHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
