import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
// constants
import { constants } from '../../constants/constants';
// interfaces
import { Albums } from '../../interfaces/albums';
import { Comments } from '../../interfaces/comments';
import { Posts } from '../../interfaces/posts';
import { Photos } from '../../interfaces/photos';
import { Todos } from '../../interfaces/todos';
import { Users } from '../../interfaces/users';


@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public albums$: BehaviorSubject<any> = new BehaviorSubject([]);
  public comments$: BehaviorSubject<any> = new BehaviorSubject([]);
  public photos$: BehaviorSubject<any> = new BehaviorSubject([]);
  public posts$: BehaviorSubject<any> = new BehaviorSubject([]);
  public todos$: BehaviorSubject<any> = new BehaviorSubject([]);
  public users$: BehaviorSubject<any> = new BehaviorSubject([]);

  public getAlbums() {
    this.http
      .get<Albums[]>(
        `${constants.url}/${constants.albums}`
      )
      .subscribe((resp: Albums[]) => {
        console.log(resp);
        this.albums$.next(resp);
      }
    );
  }

  public returnAlbums(): Observable<Albums[]> {
    return this.comments$.asObservable();
  }

  public getComments() {
    this.http
      .get<Comments[]>(
        `${constants.url}/${constants.comments}`
      )
      .subscribe((resp: Comments[]) => {
        console.log(resp);
        this.comments$.next(resp);
      }
    );
  }

  public returnComments(): Observable<Comments[]> {
    return this.todos$.asObservable();
  }

  public getPhotos() {
    this.http
      .get<Photos[]>(
        `${constants.url}/${constants.photos}`
      )
      .subscribe((resp: Photos[]) => {
        console.log(resp);
        this.photos$.next(resp);
      }
    );
  }

  public returnPhotos(): Observable<Photos[]> {
    return this.photos$.asObservable();
  }

  public getPosts() {
    this.http
      .get<Posts[]>(
        `${constants.url}/${constants.posts}`
      )
      .subscribe((resp: Posts[]) => {
        console.log(resp);
        this.posts$.next(resp);
      }
    );
  }

  public returnPosts(): Observable<Posts[]> {
    return this.todos$.asObservable();
  }

  public getTodos() {
    this.http
      .get<Todos[]>(
        `${constants.url}/${constants.todos}`
      )
      .subscribe((resp: Todos[]) => {
        console.log(resp);
        this.todos$.next(resp);
      }
    );
  }

  public returnTodos(): Observable<Todos[]> {
    return this.todos$.asObservable();
  }

  public getUsers() {
    this.http
      .get<Users[]>(
        `${constants.url}/${constants.users}`
      )
      .subscribe((resp: Users[]) => {
        console.log(resp);
        this.users$.next(resp);
      }
    );
  }

  public returnUsers(): Observable<Users[]> {
    return this.users$.asObservable();
  }

}