import { Component, OnInit } from '@angular/core';
import { Istudent } from 'src/app/interfaces/istudent';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students!:Istudent[];

  constructor(private studentService:StudentsService) {
    studentService.getStudents().subscribe((results) => {
      this.students = results;
    });
    //console.log("this is my constructor");
  }
  ngOnInit(): void {
    console.log("Component Initialized");
  }
  
  deleteStudent(student_id:number) {
    //Get Student index from array
    let index = this.students.findIndex((item) => {
      return item.id === student_id;
    });

    this.students.splice(index, 1);  //Remove student data from array

this.studentService.deleteStudent(student_id).subscribe((result) => {
  console.log(result);
  
})

    alert('Student was deleted successfully!');
  }
}
