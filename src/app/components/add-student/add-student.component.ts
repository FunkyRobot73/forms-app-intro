import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  studentForm;

  constructor() {
    this.studentForm = new FormGroup({
      name: new FormControl(),
      age: new FormControl(),
      email: new FormControl(),
      username: new FormControl(),
    });
    
    }
    onSubmit() {
      console.log(this.studentForm.value);
      this.studentForm.reset();  //clear form values
  }
}

