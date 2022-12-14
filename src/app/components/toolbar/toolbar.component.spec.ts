import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ToolbarComponent } from './toolbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SideNavService } from '../../services/side-nav/side-nav.service';
import { LoginService } from '../../services/login/login.service';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;
  let login: LoginService;
  let sideNav: SideNavService;

  describe('Test Suite', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ToolbarComponent],
        imports: [MatButtonModule, MatIconModule, MatToolbarModule],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();

      fixture = TestBed.createComponent(ToolbarComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      login = TestBed.inject(LoginService);
      sideNav = TestBed.inject(SideNavService);
    });

    describe('Component', () => {
      it('should create Toolbar Component', () => {
        expect(component).toBeTruthy();
      });
    });

    describe('Instantiations', () => {
      it('should expect the component variables to have specific values', () => {
        expect(component.title).toBe('');
        expect(component['name']).toBe('');
      });

      it('should expect logged in status to be false', () => {
        expect(component['loggedIn']).toBeFalse();
      });

      it('should expect logged in status to be true if value is set through service', () => {
        login.setLoggedInStatus(true);
        expect(component['loggedIn']).toBeTrue();
      });
    })

    it('HTML', () => {
      fixture.detectChanges();
      const toolbar = fixture.debugElement.query(By.css('.toolbar')).nativeElement;
      expect(toolbar).not.toBeNull();
    });

    it('should render the elements within the toolbar', () => {
      fixture.detectChanges();
      const toolbar = fixture.debugElement.query(By.css('.toolbar')).children;
      expect(toolbar.length).toBe(3);
    });

    it('should render a title in the span element designated for the title', () => {
      component.title = 'title';
      fixture.detectChanges();
      const title = fixture.debugElement.query(By.css('.title-span'));
      expect(title.nativeElement.innerHTML).toBe('title');
    });

    it('should render the spacer span element', () => {
      fixture.detectChanges();
      const spacer = fixture.debugElement.query(By.css('.spacer'));
      expect(spacer).toBeDefined();
    });

    it('should render the side nav icon button', () => {
      fixture.detectChanges();
      const sideNavButton = fixture.debugElement.query(By.css('.side-nav-icon')).nativeElement;
      expect(sideNavButton).not.toBeNull();
    });

    it('should not render the log out button is a user is not logged in', () => {
      fixture.detectChanges();
      const logoutButton = fixture.debugElement.query(By.css('.log-out-button'))?.nativeElement;
      expect(logoutButton).toBeUndefined();
    });

    it('should render the log out button if a user is logged in', () => {
      login.setLoggedInStatus(true);
      fixture.detectChanges();
      const logoutButton = fixture.debugElement.query(By.css('.log-out-button'))?.nativeElement;
      expect(logoutButton).not.toBeNull();
    });

    it('should expect the component to log out', fakeAsync(() => {
      login.setLoggedInStatus(true);
      fixture.detectChanges();
      let spy = spyOn(component, 'logout');
      const logoutButton = fixture.debugElement.query(By.css('.log-out-button')).nativeElement;
      logoutButton.click();
      tick();
      expect(spy).toHaveBeenCalled();
    }));

    it('should expect the component to trigger the side nav to open', fakeAsync(() => {
      fixture.detectChanges();
      let spy = spyOn(sideNav, 'setIsOpen');
      const sideNavIconButton = fixture.debugElement.query(By.css('.side-nav-icon')).nativeElement;
      sideNavIconButton.click();
      tick();
      expect(spy).toHaveBeenCalled();
    }));
    
  });
});
