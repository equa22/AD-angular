import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewEncapsulation, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None	// prevent css encapsulation -- styles are aplied globally
})
export class ServerElementComponent implements 
		OnInit, 
		OnChanges, 
		DoCheck,
		AfterContentInit,
		AfterContentChecked,
		AfterViewInit,
		AfterViewChecked,
		OnDestroy {	// it's good practice to export also all methods u are using

	@Input('srvElement') element: {type:string, name:string, content:string};
	@Input() name:string;
	@ViewChild('heading') header: ElementRef;
	@ContentChild('contentParagraph') paragraph: ElementRef;	// reference in content

  constructor() { 
  	console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
  	console.log('ngOnChanges called', changes);
  }
  ngOnInit() {
  	console.log('ngOnInit called');
  	console.log("Text content: " + this.header.nativeElement.textContent);
  	console.log("Text content of paragraph: " + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
  	console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
  	console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
  	console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
  	console.log('ngAfterViewInit called');
  	console.log("Text content: " + this.header.nativeElement.textContent);
  	console.log("Text content of paragraph: " + this.paragraph.nativeElement.textContent);
  }

  ngAfterViewChecked() {
  	console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
  	console.log('ngOnDestroy called');
  }

}
