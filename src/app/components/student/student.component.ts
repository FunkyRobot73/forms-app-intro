import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Istudent } from 'src/app/interfaces/istudent';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnChanges {
  
  @Input() student_data!:Istudent;
  @Output() deleteEvent = new EventEmitter();  //Custom Event

  onDelete(){
    if(confirm(`Are you sure you want to delete ${this.student_data.name}?`)){
      this.deleteEvent.emit(this.student_data.id);  //Triggering our Custom Event
    }
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('student_data property changed');
    console.log(changes);
    // throw new Error('Method not implemented.');
  }
}
