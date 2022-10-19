import { Component } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpService } from './services/http/http-service.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: [],
})
export class AppComponent {
  constructor(private http: HttpService) {
    this.title = 'rxjs-tutorial';
    this.http.setup();
  }

  title: string;
}
