import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntryComponent } from './entry.component';
import { LoginService } from '../../services/login/login.service';
import { SideNavService } from '../../services/side-nav/side-nav.service';
import { environment } from '../../../environments/environment';

fdescribe('EntryComponent', () => {
  let component: EntryComponent;
  let fixture: ComponentFixture<EntryComponent>;
  let loginService: LoginService;
  let sideNavService: SideNavService;

  describe('Test Suite', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ EntryComponent ]
      })
      .compileComponents();
      loginService = TestBed.inject(LoginService);
      sideNavService = TestBed.inject(SideNavService);
      fixture = TestBed.createComponent(EntryComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    describe('Component', () => {
      it('should create the component', () => {
        expect(component).toBeTruthy();
        console.log('entry -> ', component);
      });
    })

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
    })
    
    
  })
  
});
