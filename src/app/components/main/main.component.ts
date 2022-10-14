import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private http: HttpService) {
    // this.http.getAlbums();
    // this.http.getComments();
    // this.http.getPhotos();
    // this.http.getPosts();
    // this.http.getTodos();
    this.http.getUsers();
  }

  ngOnInit(): void {
  }

}
