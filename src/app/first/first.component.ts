import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {


 
  

  constructor() { }

  ngOnInit(): void {
 // Syntax of Promise
    var promise = new Promise(resolve=>
      {
        console.log("promise called");
        setTimeout(()=>
        {resolve("Promise solved");
        resolve("Promise solved");
        resolve("Promise solved");
        resolve("Promise solved");

  
        }, 2000)
      })

    promise.then(res=> console.log(res) );
 // Syntax of Observable
  var observable =  new Observable(sub=>
    {  console.log("Observable called");
      setTimeout(()=>
      { sub.next("Observable1 resolved");
      sub.next("Observable2 resolved");
      sub.next("Observable3 resolved");
      sub.next("Observable3 resolved");
    },1000)
  });
 observable.pipe(
   filter(x=>x=="Observable3 resolved"),)
  .subscribe(res=> {console.log(res) });
}



}