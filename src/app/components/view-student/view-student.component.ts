import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Istudent } from 'src/app/interfaces/istudent';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {

  student:Istudent;

  constructor(private routeService:ActivatedRoute, private studentService:StudentsService) {
    let studentId = (routeService.snapshot.paramMap.get('student_id'));
    this.student = studentService.getStudentInfo(studentId);
  }
}
