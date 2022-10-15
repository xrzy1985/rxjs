import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// interfaces
import { Albums } from '../../interfaces/albums';
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
export class MainComponent implements OnInit {
  constructor(private http: HttpService) {}

  public albums$: Albums[] = [];
  @Input() title = '';

  ngOnInit(): void {
    this.http.returnAlbums().subscribe((albums) => {
      if (albums?.length) {
        this.albums$ = albums;
      }
    });
  }
}
