import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

describe('AppComponent', () => {
  let route: Router;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule, RouterModule
      ],
      declarations: [
        AppComponent,
        NotFoundComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it(`should have as title 'rxjs-tutorial'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('rxjs-tutorial');
  });
});
