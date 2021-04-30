import { FreshPostDirective } from './fresh-post.directive';
import { ElementRef } from '@angular/core';

describe('FreshPostDirective', () => {
  it('should create an instance', () => {
    const directive = new FreshPostDirective(ElementRef as any);
    expect(directive).toBeTruthy();
  });
});
