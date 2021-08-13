import { Component, OnInit } from '@angular/core';
import { StudentHttpService } from '../student-http.service';
@Component({
  selector: 'app-student-http',
  template: `<table> <tr> <th> StudentID </th> <th> Name </th> </tr>
  <tr *ngFor="let x of students">
  <td> {{x.studentID}}</td>
  <td> {{x.studentName }}</td> </tr></table>` ,
  styleUrls: ['./student-http.component.css']
})
export class StudentHttpComponent implements OnInit {

   students:any[];
  constructor(private _httpService : StudentHttpService) { }

  ngOnInit(): void {
   this._httpService.GetStudents().subscribe(data => this.students = data);


  }

}
