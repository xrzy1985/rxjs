import { Component } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: [],
})
export class AppComponent {
  constructor() {
    this.title = 'rxjs-tutorial';
  }

  title: string;
}
