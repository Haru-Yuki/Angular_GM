import { FreshPostDirective } from './fresh-post.directive';
import { ElementRef } from '@angular/core';

describe('FreshPostDirective', () => {
  let directive;
  const weekAsMs = 604800000;

  beforeEach(() => {
    directive = new FreshPostDirective(ElementRef as any);
    directive.element.nativeElement = document.createElement('div');
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should set border to green if dateDifference < 14', () => {
    directive.date = Date.now() - weekAsMs;
    directive.ngOnInit();

    expect(directive.element.nativeElement.style.border).toBe('3px solid green');
  });

  it('should set border to skyblue if dateDifference <= 0', () => {
    directive.date = Date.now();
    directive.ngOnInit();

    expect(directive.element.nativeElement.style.border).toBe('3px solid skyblue');
  });

  it('should not set border if dateDifference >= 14', () => {
    directive.date = Date.now() - (weekAsMs * 2);
    directive.ngOnInit();

    expect(directive.element.nativeElement.style.border).toBe('');
  });
});
