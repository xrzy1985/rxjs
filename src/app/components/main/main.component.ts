import { Component, Input } from '@angular/core';
// interfaces
import { Albums } from '../../interfaces/albums';
import { Comments } from '../../interfaces/comments';
import { Photos } from '../../interfaces/photos';
import { Posts } from '../../interfaces/posts';
import { Todos } from '../../interfaces/todos';
import { Users } from '../../interfaces/users';
// services
import { HttpService } from '../../services/http/http-service.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
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

    this.http.returnPhotos().subscribe((photos) => {
      if (photos?.length) {
        this.photos$ = photos;
      }
    });

    this.http.returnPosts().subscribe((posts) => {
      if (posts?.length) {
        this.posts$ = posts;
      }
    });

    this.http.returnTodos().subscribe((todos) => {
      if (todos?.length) {
        this.todos$ = todos;
      }
    });

    this.http.returnUsers().subscribe((users) => {
      if (users?.length) {
        this.users$ = users;
      }
    })
  }

  // variables to capture values from observables
  protected albums$: Albums[] = [];
  protected comments$: Comments[] = [];
  protected photos$: Photos[] = [];
  protected posts$: Posts[] = [];
  protected todos$: Todos[] = [];
  protected users$: Users[] = [];
  // panel variables
  protected albumsPanel: boolean = false;
  protected commentsPanel: boolean = false;
  protected photosPanel: boolean = false;
  protected postsPanel: boolean = false;
  protected todosPanel: boolean = false;
  protected usersPanel: boolean = false;
}
