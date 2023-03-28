import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  studentForm;

  constructor(private formBuilder:FormBuilder) {
    this.studentForm = formBuilder.group({
      name: ["John Wick"],
      age: [49],
      email: ["arlo252@gmail.com"],
      username: ["Billy73"],

    });
  }

    onSubmit() {
      console.log(this.studentForm.value);
      this.studentForm.reset();  //clear form values
  }
}
