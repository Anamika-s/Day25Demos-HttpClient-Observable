import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student',
  template: `<table> <tr> <th> StudentID </th> <th> Name </th> </tr>
  <tr *ngFor="let x of students">
  <td> {{x.studentID}}</td>
  <td> {{x.studentName }}</td> </tr></table>` ,
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private _studentService :  StudentService) { }
 students : any[];
  ngOnInit(): void {
   this.students =  this._studentService.GetStudents();
    console.log(this.students.length);
  }

}
