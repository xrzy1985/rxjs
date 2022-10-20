import {
  ComponentFixture,
  fakeAsync,
  tick,
  TestBed,
} from '@angular/core/testing';
import { FormControl, Validators } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';
import { EntryComponent } from '../entry/entry.component';
import { LoginComponent } from '../login/login.component';
import { MainComponent } from '../main/main.component';
import { SignUpComponent } from './sign-up.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { environment } from '../../../environments/environment';
import { LoginService } from '../../services/login/login.service';
import { ErrorHandler } from '../../classes/error-handler';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpService } from '../../services/http/http-service.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

fdescribe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  describe('Test Suite', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [
          EntryComponent,
          MainComponent,
          LoginComponent,
          SignUpComponent,
          ToolbarComponent,
        ],
        imports: [
          AppRoutingModule,
          BrowserAnimationsModule,
          BrowserModule,
          FormsModule,
          HttpClientModule,
          ReactiveFormsModule,
          MatIconModule,
          MatInputModule,
          MatFormFieldModule,
          MatSidenavModule,
          MatToolbarModule,
        ],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();

      fixture = TestBed.createComponent(SignUpComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    describe('Component', () => {
      it('should create Sign Up component', () => {
        expect(component).toBeTruthy();
      });
    });

    describe('Instantiations and Form Controls', () => {
      it('should expect the form controls to be empty', () => {
        expect(component['title']).toBe(environment.title);
        expect(component['email'].value).toBe('');
        expect(component['name'].value).toBe('');
        expect(component['password'].value).toBe('');
      });
    });

    describe('HTML', () => {
      it('should render the login component when logged in status is false', () => {
        fixture.detectChanges();
        const login = fixture.debugElement.query(
          By.css('app-toolbar')
        ).nativeElement;
        expect(login).not.toBeNull();
      });
    });

    describe('Sign Up', () => {
      it('should not have issues when setting forms correctly', () => {
        component['email'].setValue('email@email.com');
        component['password'].setValue('password');
        component['name'].setValue('James Patterson');
        fixture.detectChanges();
        expect(component['email']?.errors).toBeNull();
        expect(component['email']?.['status']).toBe('VALID');
        expect(component['password']?.errors).toBeNull();
        expect(component['password']?.['status']).toBe('VALID');
        expect(component['name']?.errors).toBeNull();
        expect(component['name']?.['status']).toBe('VALID');
      });

      it('should expect errors if form is not filled out correctly', () => {
        component['email'].setValue('email');
        component['password'].setValue('');
        component['name'].setValue('');
        fixture.detectChanges();
        expect(component['email']?.errors?.['email']).toBeTrue();
        expect(component['password']?.errors?.['required']).toBeTrue();
        expect(component['name']?.errors?.['required']).toBeTrue();
      });

      it('should expect specific error messages from invalid form controls', () => {
        component['email'].setValue('email');
        component['password'].setValue('');
        component['name'].setValue('');
        fixture.detectChanges();
        let emailError = component['getFormFieldErrorMessage']('email');
        expect(emailError).toBe(
          'You must enter a valid email address to continue'
        );
        let passwordError = component['getFormFieldErrorMessage']('password');
        expect(passwordError).toBe(
          'You must enter a valid password to continue'
        );
        let nameError = component['getFormFieldErrorMessage']('name');
        expect(nameError).toBe('Your name is required to sign up');
      });

      it('should behave...', fakeAsync(() => {
        const signUpBtn = fixture.debugElement.query(
          By.css('.sign-up-button')
        ).nativeElement;
        component['email'].setValue('email@email.com');
        component['password'].setValue('password');
        component['name'].setValue('James Patterson');
        fixture.detectChanges();
        signUpBtn.click();
        tick();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(location.pathname).toEqual('/');
        });
        expect(component['router'].navigated).toBeTrue();
      }));
    });
  });
});
