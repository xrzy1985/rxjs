import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// interfaces
import { Albums } from '../../interfaces/albums';
// services
import { HttpService } from '../../services/http/http-service.service';

@Component({
  selector: 'app-main',
  template: `
  <app-toolbar title="Toolbar"></app-toolbar>
  <div *ngFor="let album of albums$">
      {{ album.title }}
  </div>
  `,
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private http: HttpService) {}

  public albums$: Albums[] = [];

  ngOnInit(): void {
    this.http.returnAlbums().subscribe(albums => {
      if (albums?.length) {
        this.albums$ = albums;
      }
    });
  }
}
