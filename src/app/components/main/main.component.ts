import { Component, Input } from '@angular/core';
// interfaces
import { Albums } from '../../interfaces/albums';
import { Comments } from '../../interfaces/comments';
// services
import { HttpService } from '../../services/http/http-service.service';

@Component({
  selector: 'app-main',
  template: `
    <div class="main">
      <div *ngFor="let album of albums$">
        {{ album.title }}
      </div>
    </div>
  `,
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private http: HttpService) {
    this.http.returnAlbums().subscribe((albums) => {
      if (albums?.length) {
        this.albums$ = albums;
      }
    });
    this.http.returnComments().subscribe((comments) => {
      if (comments?.length) {
        this.comments$ = comments;
      }
    });
  }

  protected albums$: Albums[] = [];
  protected comments$: Comments[] = [];
}
