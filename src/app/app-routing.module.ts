import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';

const routes: Routes = [
  {path: 'students', component: StudentsComponent},
  {path: 'teachers', component: TeachersComponent},
  {path: 'create-student', component: CreateStudentComponent},
  {path: 'view-student/:student_id', component: ViewStudentComponent},
  {path: '**', component: NotfoundComponent} //404 Page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
