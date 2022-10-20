import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EntryComponent } from './entry.component';
import { LoginService } from '../../services/login/login.service';
import { SideNavService } from '../../services/side-nav/side-nav.service';
import { environment } from '../../../environments/environment';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { LoginComponent } from '../login/login.component';
import { MainComponent } from '../main/main.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EntryComponent', () => {
  let component: EntryComponent;
  let fixture: ComponentFixture<EntryComponent>;
  let loginService: LoginService;
  let sideNavService: SideNavService;

  describe('Test Suite', () => {
    beforeEach(async () => {
      TestBed.configureTestingModule({
        declarations: [EntryComponent, ToolbarComponent],
        imports: [
          BrowserAnimationsModule,
          MatIconModule,
          MatSidenavModule,
          MatToolbarModule,
        ],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
      loginService = TestBed.inject(LoginService);
      sideNavService = TestBed.inject(SideNavService);
      fixture = TestBed.createComponent(EntryComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    describe('Component', () => {
      it('should create the component', () => {
        expect(component).toBeTruthy();
      });
    });

    describe('Variable instantiation', () => {
      it('should instantiate to instance of a string', () => {
        expect(component['about']).toBeInstanceOf(String);
        expect(component['home']).toBeInstanceOf(String);
        expect(component['profile']).toBeInstanceOf(String);
        expect(component['title']).toBeInstanceOf(String);
      });

      it('should instantiate to instance of a boolean', () => {
        expect(component['loggedIn']).toBeInstanceOf(Boolean);
      });

      it('should set loggedIn to false initially', () => {
        expect(component['loggedIn']).toBeFalse();
      });

      it('should set from the environment file', () => {
        expect(component['about']).toBe(environment.sideNav.about);
        expect(component['home']).toBe(environment.sideNav.home);
        expect(component['profile']).toBe(environment.sideNav.profile);
        expect(component['title']).toBe(environment.title);
      });

      it('should set loggedIn to true if login service is set to true', () => {
        loginService.setLoggedInStatus(true);
        expect(component['loggedIn']).toBeTrue();
      });
    });

    describe('HTML', () => {
      it('should render the login component when logged in status is false', () => {
        fixture.detectChanges();
        const drawer = fixture.debugElement.query(By.css('app-login')).nativeElement;
        expect(drawer).not.toBeNull();
      });

      it('should render the main component when logged in status is true', () => {
        loginService.setLoggedInStatus(true);
        fixture.detectChanges();
        const main = fixture.debugElement.query(By.css('app-main')).nativeElement;
        expect(main).not.toBeNull();
      });

      it('should find the mat drawer with a class of opened when isOpen is set to true', () => {
        sideNavService.setIsOpen(true);
        fixture.detectChanges();
        const drawer = fixture.debugElement.query(By.css('.mat-drawer-opened')).nativeElement;
        expect(drawer).not.toBeNull();
        expect(drawer).toBeDefined();
      });

      it('should not render mat drawer with a class of opened when isOpen is set to false', () => {
        fixture.detectChanges();
        const drawer = fixture.debugElement.query(By.css('.mat-drawer-opened'))?.nativeElement;
        expect(drawer).toBeUndefined();
      });

      it('should render the buttons inside of the side nav with specific text', () => {
        sideNavService.setIsOpen(true);
        fixture.detectChanges();
        const drawer = fixture.debugElement.query(By.css('.mat-drawer-opened')).children[0].children[0].children;
        let buttons = drawer.filter(b => b.nativeNode.localName !== 'br');
        let btnContainer = [component['home'], component['about'], component['profile']];
        for (let i = 0; i < buttons.length; i++) {
          const btn = buttons[i];
          expect(btn.nativeNode.innerHTML).toBe(btnContainer[i]);
        }
        expect(drawer.length).toBe(6);
      });
    })
    
  });
});
