import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudent } from 'IStudent';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {

   private _url : string ="/assets/data/student.json";
  constructor(private _httpService : HttpClient) { }
  students:  any[];
   GetStudents()  
   {
      return this._httpService.get<IStudent[]>(this._url);
   }
}
