import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Observer, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';
//import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
	numbersObsSubscription: Subscription;
	customObsSubscription: Subscription;
  constructor() { }

  ngOnInit() {
  	
  	const myNumbers = interval(1000)
  		.pipe(map(
				(data: number) => {
					return data*2;
				}
			));
		this.numbersObsSubscription = myNumbers.subscribe(
  		(number: number) => {
  			console.log(number);
  		}
  	)

  	const myObservable = Observable.create((observer: Observer<string>) => {
  		setTimeout(() => {
  			observer.next('first package');	// next emits a normal data package
  		}, 2000);
  		setTimeout(() => {
  			observer.next('second package');	// next emits a normal data package
  		}, 4000);
  		setTimeout(() => {
  			//observer.error('this does not work');	// next emits a normal data package
  		}, 5000);
  		setTimeout(() => {
  			observer.complete();	// next emits a normal data package
  		}, 6000);
  	});

  	this.customObsSubscription = myObservable.subscribe(
  		(data: string) => { console.log(data); },
  		(error: string) => { console.error(error); },
  		() => { console.log('completed'); }
  	)
  }

  ngOnDestroy() {
  	this.numbersObsSubscription.unsubscribe();
  	this.customObsSubscription.unsubscribe();
  }

}
