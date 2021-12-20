import { Component } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'observableApp';
  obsObj : any;

  ngOnInit(): void {
    this.obsObj = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(4);
      subscriber.next(5);
      setTimeout(() => {
        subscriber.next(3);
        subscriber.complete();
      },2000) 
    });
  }

  callObservable() {
    console.log('just before subscribe');
    this.obsObj.subscribe({
      next(x : any) { 
        console.log('got value ' + x);
      },
      error(err : any) {
        console.log('wrong occurred: ' + err)
      },
      complete() {
        console.log('Complete!');
      }
    });
    console.log('Just after subscribe');
  }
  

  

}
