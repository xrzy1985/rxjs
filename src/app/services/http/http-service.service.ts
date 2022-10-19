import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, map, filter } from 'rxjs';
// constants
import { constants } from '../../constants/constants';
// interfaces
import { Albums } from '../../interfaces/albums';
import { Comments } from '../../interfaces/comments';
import { Posts } from '../../interfaces/posts';
import { Photos } from '../../interfaces/photos';
import { Todos } from '../../interfaces/todos';
import { Users } from '../../interfaces/users';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private loginService: LoginService) {}

  public albums$: BehaviorSubject<any> = new BehaviorSubject([]);
  public comments$: BehaviorSubject<any> = new BehaviorSubject([]);
  public photos$: BehaviorSubject<any> = new BehaviorSubject([]);
  public posts$: BehaviorSubject<any> = new BehaviorSubject([]);
  public todos$: BehaviorSubject<any> = new BehaviorSubject([]);
  public users$: BehaviorSubject<any> = new BehaviorSubject([]);

  public setup(): void {
    this.getAlbums();
    this.getComments();
    this.getPhotos();
    this.getPosts();
    this.getTodos();
    this.getUsers();
  }

  public getAlbums(): void {
    this.http
      .get<Albums[]>(`${constants.url}/${constants.albums}`)
      .subscribe((resp: Albums[]) => this.albums$.next(resp));
  }

  // rxjs filter
  public returnAlbums(): Observable<Albums[]> {
    return this.albums$.asObservable().pipe(
      filter((data) => {
        for (const item of data) {
          item.title =
            (item.title).charAt(0).toUpperCase() + (item.title).slice(1);
        }
        return data;
      })
    );
  }

  public getComments(): void {
    this.http
      .get<Comments[]>(`${constants.url}/${constants.comments}`)
      .subscribe((resp: Comments[]) => {
        this.comments$.next(resp);
      });
  }

  // rxjs map
  public returnComments(): Observable<Comments[]> {
    return this.comments$.asObservable().pipe(
      map((data: Comments[]) => {
        return data.map((element: Comments) => {
          return {
            id: element.id,
            email: element.email,
            postId: element.postId,
            comment: {
              title: element.name,
              body: element.body,
            },
          };
        });
      })
    );
  }

  public getPhotos(): void {
    this.http
      .get<Photos[]>(`${constants.url}/${constants.photos}`)
      .subscribe((resp: Photos[]) => {
        this.photos$.next(resp);
      });
  }

  public returnPhotos(): Observable<Photos[]> {
    return this.photos$.asObservable();
  }

  public getPosts(): void {
    this.http
      .get<Posts[]>(`${constants.url}/${constants.posts}`)
      .subscribe((resp: Posts[]) => {
        this.posts$.next(resp);
      });
  }

  public returnPosts(): Observable<Posts[]> {
    return this.posts$.asObservable();
  }

  public getTodos(): void {
    this.http
      .get<Todos[]>(`${constants.url}/${constants.todos}`)
      .subscribe((resp: Todos[]) => {
        this.todos$.next(resp);
      });
  }

  public returnTodos(): Observable<Todos[]> {
    return this.todos$.asObservable();
  }

  public getUsers(): void {
    this.http
      .get<Users[]>(`${constants.url}/${constants.users}`)
      .subscribe((resp: Users[]) => {
        this.users$.next(resp);
      });
  }

  public returnUsers(): Observable<Users[]> {
    return this.users$.asObservable()
      .pipe(filter(data => {
        for (const item of data) {
          item.password = this.loginService.encrypted('password');
        }
        return data;
      })
    )
  }
}
