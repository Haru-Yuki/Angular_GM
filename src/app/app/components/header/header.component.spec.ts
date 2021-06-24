import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AuthenticationService} from '../../../login/services/authentication/authentication.service';

xdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('handleLogout', () => {
    beforeEach(() => {
      spyOn(component['authenticationService'], 'logout');

      component.handleLogout();
    });

    it('should call logout from auth service', () => {
      expect(component['authenticationService'].logout).toHaveBeenCalled();
    });
  });
});
