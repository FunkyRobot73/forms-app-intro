import { Injectable } from '@angular/core';
import { students } from "../data";
import { HttpClient } from '@angular/common/http';
import { Istudent } from '../interfaces/istudent';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  url = "http://localhost:3000/students";
  constructor(private http:HttpClient) { }

  getStudents() {
    //return students;  <==  was previously returning an Array
    return this.http.get<Istudent[]>(this.url)  //in the DB
  }

  getStudentInfo(student_id:any) {
    return this.http.get<Istudent>(this.url + "/" + student_id);
    }
  
  deleteStudent(student_id:number) {
    return this.http.delete<Istudent>(this.url + "/" + student_id);
  }

  createStudent(data:any) {
    return this.http.post<Istudent>(this.url, data);
  }

  updateStudent(data:any, student_id:number) {
    return this.http.put<Istudent>(this.url + "/" + student_id, data);
  }
}
