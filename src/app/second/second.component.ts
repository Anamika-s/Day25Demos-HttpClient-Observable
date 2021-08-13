import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }
 private mySubscription : Subscription;
  ngOnInit(): void {
    const observable = new Observable(sub=>
      { console.log("observable called");
      let x= 0;
    setInterval(()=>
    { x=x+1;
      sub.next(x);
      },1000);
    }); 
   this.mySubscription =  observable.subscribe(res=> {console.log(res) });
  }
  CancelSubscription()
  {
     this.mySubscription.unsubscribe();
     console.log("Unsubscribed");
  }
}
