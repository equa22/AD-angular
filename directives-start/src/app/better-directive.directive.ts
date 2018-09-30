import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit {
	color:string = 'red';

  constructor(private elRef: ElementRef, private renderer: Renderer2){ }
  @Input() defaultColor: string = 'purple';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor:string;

  ngOnInit() {
  	//this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  	//this.backgroundColor = 'purple';
  	this.backgroundColor = this.defaultColor;
  }


  @HostListener('mouseenter') mouseover(eventData: Event) {
		//this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
		this.backgroundColor = this.highlightColor;
	}
	@HostListener('mouseleave') mouseleave(eventData: Event) {
		//this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
		this.backgroundColor = this.defaultColor;
	}
	@HostListener('click') click(eventData: Event) {
		console.log(this.color)
		//this.backgroundColor = 'purple';
	}
}
