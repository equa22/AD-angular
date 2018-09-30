import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cokpit',
  templateUrl: './cokpit.component.html',
  styleUrls: ['./cokpit.component.css']
})
export class CokpitComponent implements OnInit {
	serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
	@Output('svCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
	@Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();;
	@ViewChild('serverContentInput') serverContentInput: ElementRef; // if we want to pass reference
																											 // we can also pass class, or even component
																											 // @ViewChild(CokpitComponent) serverContentInput; - without parensetis
																											 // (ElementRef is reference to element)

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput:HTMLInputElement) {
    this.serverCreated.emit({
    	serverName: nameInput.value, 
    	serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    this.blueprintCreated.emit({
    	serverName: nameInput.value, 
    	serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
