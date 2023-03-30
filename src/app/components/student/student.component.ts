import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Istudent } from 'src/app/interfaces/istudent';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @Input() student_data!:Istudent;
  @Output() deleteEvent = new EventEmitter();  //Custom Event

  onDelete(){
    if(confirm(`Are you sure you want to selte ${this.student_data.name}?`)){
      this.deleteEvent.emit(this.student_data.id);  //Triggering our Custom Event
    }
  }
}
