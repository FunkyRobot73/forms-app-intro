import { Injectable } from '@angular/core';
import { students } from "../data";

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor() { }

  getStudents() {
    return students;
  }

  getStudentInfo(id:any) : any{
    return students.find((item) => {
      return item.id === parseInt(id);
    })
  }
}
