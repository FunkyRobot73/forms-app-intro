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
  
  deleteStudent(student_id:number) {
    //Get Student index from array
    let index = this.students.findIndex((item) => {
      return item.id === student_id;
    });

    this.students.splice(index, 1);  //Remove student data from array
    alert('Steudent was deleted successfully!');
  }
}
