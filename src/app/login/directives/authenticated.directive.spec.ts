import { AuthenticatedDirective } from './authenticated.directive';
import {TemplateRef, ViewContainerRef} from '@angular/core';

describe('AuthenticatedDirective', () => {
  it('should create an instance', () => {
    const directive = new AuthenticatedDirective(TemplateRef as any, ViewContainerRef as any);
    expect(directive).toBeTruthy();
  });
});
