import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute , Router, ParamMap} from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  describe('Test Suite', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [NotFoundComponent, ToolbarComponent],
        imports: [MatIconModule, MatToolbarModule],
      }).compileComponents();

      fixture = TestBed.createComponent(NotFoundComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    describe('Component', () => {
      it('should create', () => {
        expect(component).toBeTruthy();
      });
    });

    describe('Instantiations', () => {
      it('should have the title present on the component', () => {
        expect(component.title).toBe('RxJs');
      });
    });

    describe('HTML', () => {
      it('should behave...', () => {
        fixture.detectChanges();
        const login = fixture.debugElement.query(By.css('app-toolbar')).nativeElement;
        expect(login).not.toBeNull();
      });

      it('should have the not found div', () => {
        fixture.detectChanges();
        const div = fixture.debugElement.query(By.css('.not-found')).nativeElement;
        expect(div).not.toBeNull();
      });

      it('should have two elements inside of the not found div', () => {
        fixture.detectChanges();
        const children = fixture.debugElement.query(By.css('.not-found')).children[0].nativeElement.children;
        expect(children.length).toBe(2);
      });

      it('should have specific text inside of the first p element', () => {
        fixture.detectChanges();
        const pageTitle = fixture.debugElement.query(By.css('.page-title')).nativeElement;
        expect(pageTitle.innerHTML).toBe('404');
      });

      it('should have specific text inside of the second p element', () => {
        fixture.detectChanges();
        const subtitle = fixture.debugElement.query(By.css('.subtitle')).nativeElement;
        expect(subtitle.innerHTML).toBe('The page was not found.');
      });

      it('should ', () => {
        fixture.detectChanges();
        const subtitle = fixture.debugElement.query(By.css('.subtitle')).nativeElement;
        expect(subtitle.innerHTML).toBe('The page was not found.');
      });
    })
    
  });
});
