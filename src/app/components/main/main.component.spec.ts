import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainComponent } from './main.component';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';
// material
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

fdescribe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  describe('Test Suite', () => {

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
          BrowserAnimationsModule,
          BrowserModule,
          MatExpansionModule,
          HttpClientModule,
        ],
        declarations: [MainComponent],
      }).compileComponents();
  
      fixture = TestBed.createComponent(MainComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    describe('Component', () => {

      it('should create the Main component', () => {
        expect(component).toBeTruthy();
      });

      it('should instantiate the arrays to store the observable content', () => {
        expect(component['albums$']).toBeInstanceOf(Array);
        expect(component['comments$']).toBeInstanceOf(Array);
        expect(component['photos$']).toBeInstanceOf(Array);
        expect(component['posts$']).toBeInstanceOf(Array);
        expect(component['todos$']).toBeInstanceOf(Array);
        expect(component['users$']).toBeInstanceOf(Array);
      });

      it('should instantiate the component variables', () => {
        expect(component['albumsPanel']).toBeFalse();
        expect(component['commentsPanel']).toBeFalse();
        expect(component['photosPanel']).toBeFalse();
        expect(component['postsPanel']).toBeFalse();
        expect(component['todosPanel']).toBeFalse();
        expect(component['usersPanel']).toBeFalse();
      });
      
    });

    describe('HTML', () => {
      
      it('should find the accordion div', () => {
        fixture.detectChanges();
        let accordionDiv = fixture.debugElement.query(By.css('.accordion')).nativeElement;
        expect(accordionDiv).not.toBeNull();
      });

      it('should behave...', () => {
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.mat-accordion')).children.length).toBe(6);
      });

    })
    
    
  })
  
});
