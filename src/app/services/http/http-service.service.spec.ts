import { TestBed } from '@angular/core/testing';
import { HttpService } from './http-service.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { waitForAsync } from '@angular/core/testing';
import { Albums } from '../../interfaces/albums';
import { Comments } from '../../interfaces/comments';
import { Photos } from '../../interfaces/photos';
import { Posts } from '../../interfaces/posts';
import { Todos } from '../../interfaces/todos';
import { Users } from '../../interfaces/users';

describe('HttpService', () => {
  let service: HttpService;
  let http: HttpClient;
  let spies: any;
  let spyGetAlbums: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(HttpService);
  });

  describe('Service', () => {
    beforeAll(waitForAsync(() => {
      spies = {
        spyAlbums: spyOn<any>(service, 'getAlbums'),
        spyComments: spyOn<any>(service, 'getComments'),
        spyPhotos: spyOn<any>(service, 'getPhotos'),
        spyPosts: spyOn<any>(service, 'getPosts'),
        spyTodos: spyOn<any>(service, 'getTodos'),
        spyUsers: spyOn<any>(service, 'getUsers'),
      };
      service['setup']();
    }));
    it('should create the service', () => {
      expect(service).toBeTruthy();
    });
    it('should call getAlbums', () => {
      expect(spies.spyAlbums).toHaveBeenCalled();
    });
    it('should call getComments', () => {
      expect(spies.spyComments).toHaveBeenCalled();
    });
    it('should call getPhotos', () => {
      expect(spies.spyPhotos).toHaveBeenCalled();
    });
    it('should call getPosts', () => {
      expect(spies.spyPosts).toHaveBeenCalled();
    });
    it('should call getTodos', () => {
      expect(spies.spyTodos).toHaveBeenCalled();
    });
    it('should call getUsers', () => {
      expect(spies.spyUsers).toHaveBeenCalled();
    });
  });

  describe('getAlbums', () => {
    it('should expect variable albums$ to be an instance of behavior subject', waitForAsync(() => {
      expect(service.albums$).toBeInstanceOf(BehaviorSubject);
    }));

    it('should subscribe and find instance of array', async () => {
      let _data;
      service.albums$.subscribe((data) => {
        _data = data;
      });
      expect(_data).toBeInstanceOf(Array);
    });

    it('should return empty array until the data is brought back from the api', waitForAsync(() => {
      service.getAlbums();
      service.albums$.subscribe({
        next: (data: Albums[]) => {
          if (data?.length) {
            expect(data[0].id && data[0].title).toBeDefined();
            expect(data.length).toBeGreaterThan(0);
          } else {
            expect(data.length).toBe(0);
          }
        },
      });
    }));
  });

  describe('returnAlbums', () => {
    it('should return an instance of an observable', async () => {
      expect(await service.returnAlbums()).toBeInstanceOf(Observable);
    });
  });

  describe('getComments', () => {
    it('should expect variable comments$ to be an instance of behavior subject', waitForAsync(() => {
      expect(service.comments$).toBeInstanceOf(BehaviorSubject);
    }));

    it('should subscribe and find instance of array', waitForAsync(() => {
      let _data;
      service.comments$.subscribe((data) => {
        _data = data;
      });
      expect(_data).toBeInstanceOf(Array);
    }));

    it('should return empty array until the data is brought back from the api', waitForAsync(() => {
      service.getComments();
      service.comments$.subscribe({
        next: (data: Comments[]) => {
          if (data?.length) {
            expect(data.length).toBeGreaterThan(0);
          } else {
            expect(data.length).toBe(0);
          }
        },
      });
    }));
  });

  describe('returnComments', () => {
    it('should return an instance of an observable', waitForAsync(() => {
      expect(service.returnComments()).toBeInstanceOf(Observable);
    }));
  });

  describe('getPhotos', () => {
    it('should expect variable photos$ to be an instance of behavior subject', waitForAsync(() => {
      expect(service.photos$).toBeInstanceOf(BehaviorSubject);
    }));

    it('should subscribe and find instance of array', waitForAsync(() => {
      let _data;
      service.photos$.subscribe((data) => {
        _data = data;
      });
      expect(_data).toBeInstanceOf(Array);
    }));

    it('should return empty array until the data is brought back from the api', waitForAsync(() => {
      service.getPhotos();
      service.photos$.subscribe({
        next: (data: Photos[]) => {
          if (data?.length) {
            expect(data.length).toBeGreaterThan(0);
          } else {
            expect(data.length).toBe(0);
          }
        },
      });
    }));
  });

  describe('returnPhotos', () => {
    it('should return an instance of an observable', waitForAsync(() => {
      expect(service.returnPosts()).toBeInstanceOf(Observable);
    }));
  });

  describe('getPosts', () => {
    it('should expect variable posts$ to be an instance of behavior subject', waitForAsync(() => {
      expect(service.posts$).toBeInstanceOf(BehaviorSubject);
    }));

    it('should subscribe and find instance of array', waitForAsync(() => {
      let _data;
      service.posts$.subscribe((data) => {
        _data = data;
      });
      expect(_data).toBeInstanceOf(Array);
    }));

    it('should return empty array until the data is brought back from the api', waitForAsync(() => {
      service.getPosts();
      service.posts$.subscribe({
        next: (data: Posts[]) => {
          if (data?.length) {
            expect(data.length).toBeGreaterThan(0);
          } else {
            expect(data.length).toBe(0);
          }
        },
      });
    }));
  });

  describe('returnPosts', () => {
    it('should return an instance of an observable', waitForAsync(() => {
      expect(service.returnPosts()).toBeInstanceOf(Observable);
    }));
  });

  describe('getTodos', () => {
    it('should expect variable todos$ to be an instance of behavior subject', waitForAsync(() => {
      expect(service.todos$).toBeInstanceOf(BehaviorSubject);
    }));

    it('should subscribe and find instance of array', waitForAsync(() => {
      let _data;
      service.todos$.subscribe((data) => {
        _data = data;
      });
      expect(_data).toBeInstanceOf(Array);
    }));

    it('should return empty array until the data is brought back from the api', waitForAsync(() => {
      service.getTodos();
      service.todos$.subscribe({
        next: (data: Todos[]) => {
          if (data?.length) {
            expect(data.length).toBeGreaterThan(0);
          } else {
            expect(data.length).toBe(0);
          }
        },
      });
    }));
  });

  describe('returnTodos', () => {
    it('should return an instance of an observable', waitForAsync(() => {
      expect(service.returnTodos()).toBeInstanceOf(Observable);
    }));
  });

  describe('getUsers', () => {
    it('should expect variable users$ to be an instance of behavior subject', waitForAsync(() => {
      expect(service.users$).toBeInstanceOf(BehaviorSubject);
    }));

    it('should subscribe and find instance of array', waitForAsync(() => {
      let _data;
      service.users$.subscribe((data) => {
        _data = data;
      });
      expect(_data).toBeInstanceOf(Array);
    }));

    it('should return empty array until the data is brought back from the api', waitForAsync(() => {
      service.getUsers();
      service.users$.subscribe({
        next: (data: Users[]) => {
          if (data?.length) {
            expect(data.length).toBeGreaterThan(0);
          } else {
            expect(data.length).toBe(0);
          }
        },
      });
    }));
  });

  describe('returnUsers', () => {
    it('should return an instance of an observable', waitForAsync(() => {
      expect(service.returnUsers()).toBeInstanceOf(Observable);
    }));
  });
});
