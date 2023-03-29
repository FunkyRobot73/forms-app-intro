import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { avoidWord } from "src/app/custom-validation";

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  studentForm;

  constructor(private formBuilder:FormBuilder) {
    this.studentForm = formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3),avoidWord]],
      age: ["", [Validators.required]],
      email: ["", [Validators.email, Validators.required]],
      username: ["", [Validators.required, Validators.minLength(5), avoidWord]],

    });
  }

    onSubmit() {
      console.log(this.studentForm.value);
      this.studentForm.reset();  //clear form values
  }


  // Getter Method
  // All the Methods below return a Form Control
  get nameFormControl() {
    return this.studentForm.get('name')!;
  }

  get ageFormControl() {
    return this.studentForm.get('age')!;
  }

  get emailFormControl() {
    return this.studentForm.get('email')!;
  }

  get usernameFormControl() {
    return this.studentForm.get('username')!;
  }
}
