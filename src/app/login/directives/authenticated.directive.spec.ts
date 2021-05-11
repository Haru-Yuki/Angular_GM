import { AuthenticatedDirective } from './authenticated.directive';
import {TemplateRef, ViewContainerRef} from '@angular/core';

describe('AuthenticatedDirective', () => {
  let directive;

  beforeEach(() => {
    directive = new AuthenticatedDirective(TemplateRef as any, ViewContainerRef as any);
    directive.viewContainer = {
      createEmbeddedView: () => {},
      clear: () => {}
    };
    directive.templateRef = {};
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  describe('appAuthenticated', () => {
    beforeEach(() => {
      spyOn(directive.viewContainer, 'createEmbeddedView');
      spyOn(directive.viewContainer, 'clear');
    });

    it('should call viewContainer.createEmbeddedView', () => {
      directive.hasView = false;
      directive.appAuthenticated = false;

      expect(directive.viewContainer.createEmbeddedView).toHaveBeenCalledWith(directive.templateRef);
    });

    it('should call viewContainer.clear', () => {
      directive.hasView = true;
      directive.appAuthenticated = true;

      expect(directive.viewContainer.clear).toHaveBeenCalled();
    });

    it('should not call viewContainer', () => {
      directive.hasView = false;
      directive.appAuthenticated = true;

      expect(directive.viewContainer.clear).not.toHaveBeenCalled();
    });
  });
});
