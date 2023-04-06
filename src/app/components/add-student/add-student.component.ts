import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Idepartment } from 'src/app/interfaces/idepartment';
import { DepartmentsService } from 'src/app/services/departments.service';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  studentForm;
  departments!:Idepartment[];
  isEdit:boolean = false;
  editStudentId:number = 0;

  constructor(
    private formBuilder:FormBuilder, 
    private studentService:StudentsService, 
    private deptService:DepartmentsService,
    private route:ActivatedRoute
    ) {
    this.studentForm = formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      age: [0, [Validators.required]],
      country: ["", [Validators.required]],
      dept_id: [0, [Validators.required]],

    });
    //Retreive Department Data
    deptService.getDepartments().subscribe((results) => {
      this.departments = results;
    });

      //Get student_ID from current URL
      let student_id = route.snapshot.paramMap.get('student_id');     
        
      //check if Id was specified... if yes...  Edit Mode OK
      if (student_id !== null) {
          this.isEdit = true;
          this.editStudentId = parseInt(student_id);

          //Get Student Data from Backend and update Webform
          studentService.getStudentInfo(student_id).subscribe((result) => {
            this.studentForm.patchValue(result);
          });

        }
      
      console.log(student_id);

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

