import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  studentForm;

  constructor(private formBuilder:FormBuilder, private studentService:StudentsService) {
    this.studentForm = formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      age: ["", [Validators.required]],
      country: ["", [Validators.required]],
      dept_id: ["", [Validators.required]],

    });
    
    }
    onSubmit() {
      let student_data =  this.studentForm.value;      

      this.studentService.createStudent(student_data).subscribe((result) => {
        console.log(result);
        this.studentForm.reset();  //clear form values
        alert("Student was created successfully!")
      })
  }
}

