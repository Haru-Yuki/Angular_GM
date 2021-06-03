import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFreshPost]'
})
export class FreshPostDirective implements OnInit {

  postDate: Date;
  dateDifference: number;

  constructor(private element: ElementRef) { }

  @Input() date: string;

  ngOnInit(): void {
    this.postDate = new Date(this.date);
    this.dateDifference = Math.round((Date.now() -  this.postDate.getTime()) / (1000 * 60 * 60 * 24));

    if (this.dateDifference < 14) {
      this.element.nativeElement.style.border = '3px solid green';
    }

    if (this.dateDifference <= 0) {
      this.element.nativeElement.style.border = '3px solid skyblue';
    }
  }
}
