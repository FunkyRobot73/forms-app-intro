import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    CreateStudentComponent,
    StudentsComponent,
    TeachersComponent,
    NotfoundComponent,
    ViewStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
