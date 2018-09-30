import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
	errorMessage;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	//this.errorMessage = this.route.snapshot.data['message'];

  	// if route can change
  	this.route.data.subscribe( 
  		(data: Data) => {
  			this.errorMessage = data['message'];
  		}
  	)
  }
}
