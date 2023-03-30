import { Component } from '@angular/core';
import { Istudent } from 'src/app/interfaces/istudent';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  students:Istudent[];

  constructor(private studentService:StudentsService) {
    this.students = studentService.getStudents();
  }
  
}
