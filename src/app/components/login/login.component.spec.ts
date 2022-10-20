import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { LoginService } from '../../services/login/login.service';
import { environment } from '../../../environments/environment';
import { ErrorHandler } from '../../classes/error-handler';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginService: LoginService;

  describe('Test Suite', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [LoginComponent, SignUpComponent, ToolbarComponent],
        imports: [
          AppRoutingModule,
          BrowserAnimationsModule,
          BrowserModule,
          FormsModule,
          ReactiveFormsModule,
          MatIconModule,
          MatFormFieldModule,
          MatInputModule,
          MatToolbarModule,
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      loginService = TestBed.inject(LoginService);
    });

    describe('Component', () => {
      it('should create the component', () => {
        expect(component).toBeTruthy();
      });

      it('should expect the form controls to be empty', () => {
        expect(component['email'].value).toBe('');
        expect(component['password'].value).toBe('');
      });

      it('should have the following error validators', () => {
        expect(component['email']?.errors?.['required']).toBeTrue();
        expect(component['password']?.errors?.['required']).toBeTrue();
      });
    });

    describe('getFormFieldErrorMessage', () => {
      it('should return email error message', () => {
        let errorMsg = component['getFormFieldErrorMessage']('email');
        expect(errorMsg).toBe(
          'You must enter a valid email address to continue'
        );
      });

      it('should return password error message', () => {
        let errorMsg = component['getFormFieldErrorMessage']('password');
        expect(errorMsg).toBe('You must enter a valid password to continue');
      });

      it('should return default error message', () => {
        let errorMsg = component['getFormFieldErrorMessage']('');
        expect(errorMsg).toBe('You must enter a valid entry');
      });
    });

    describe('login', () => {
      it('should throw an error if email does not match', () => {
        component['email'].setValue('notRight');
        fixture.detectChanges();
        let errorMsg = component['getFormFieldErrorMessage']('email');
        expect(component['email']?.errors?.['email']).toBeTrue();
        expect(component['email']?.['status']).toBe('INVALID');
        expect(errorMsg).toBe(
          'You must enter a valid email address to continue'
        );
      });

      it('should expect the password form to have errors is empty password', () => {
        component['password'].setValue('');
        fixture.detectChanges();
        let errorMsg = component['getFormFieldErrorMessage']('password');
        expect(component['password']?.errors?.['required']).toBeTrue();
        expect(component['password']?.['status']).toBe('INVALID');
        expect(errorMsg).toBe('You must enter a valid password to continue');
      });

      it('should expect the email to be valid if a correct email is entered', () => {
        component['email'].setValue('email@email.com');
        fixture.detectChanges();
        expect(component['email']?.errors).toBeNull();
        expect(component['email']?.['status']).toBe('VALID');
      });

      it('should expect the password to be valid if password is entered', () => {
        component['password'].setValue('password');
        fixture.detectChanges();
        expect(component['password']?.errors).toBeNull();
        expect(component['password']?.['status']).toBe('VALID');
      });

      it('should set the logged in status to true if email and password meet requirements', () => {
        component['email'].setValue('email@email.com');
        component['password'].setValue('password');
        fixture.detectChanges();
        component.login();
        loginService.getLoggedInStatus().subscribe((status: boolean) => {
          expect(status).toBeTrue();
        });
      });

      it('should not set the logged in status if the email and password do not meet requirements', () => {
        component['email'].setValue('email');
        component['password'].setValue('pass');
        fixture.detectChanges();
        component.login();
        loginService.getLoggedInStatus().subscribe((status: boolean) => {
          expect(status).toBeFalse();
        });
      });
    });

    describe('HTML', () => {
      it('should have the mat form field div present', () => {
        fixture.detectChanges();
        const formField = fixture.debugElement.query(
          By.css('.form-field')
        ).nativeElement;
        expect(formField).not.toBeNull();
      });

      it('should have all the elements present in the form field', () => {
        fixture.detectChanges();
        const emailField = fixture.debugElement.query(
          By.css('.email-field')
        ).nativeElement;
        const passwordField = fixture.debugElement.query(
          By.css('.email-field')
        ).nativeElement;
        const loginBtn = fixture.debugElement.query(
          By.css('.login-button')
        ).nativeElement;
        const passwordBtn = fixture.debugElement.query(
          By.css('.sign-up-button')
        ).nativeElement;
        expect(
          emailField && passwordField && loginBtn && passwordBtn
        ).not.toBeNull();
      });

      it('should run login when login button is clicked', fakeAsync(() => {
        let spy = spyOn(component, 'login');
        const loginBtn = fixture.debugElement.query(
          By.css('.login-button')
        ).nativeElement;
        loginBtn.click();
        tick();
        expect(spy).toHaveBeenCalled();
      }));

      it('should redirect to sign in route when sign up button is clicked', fakeAsync(() => {
        const signUpBtn = fixture.debugElement.query(
          By.css('.sign-up-button')
        ).nativeElement;
        signUpBtn.click();
        tick();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(location.pathname).toEqual('/sign-up');
        });
      }));
    });
  });
});
