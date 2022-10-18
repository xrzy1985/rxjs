import { Injectable } from '@angular/core';
// RxJs
import { from, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TestingService {
  constructor() {}

  // from: creates an observable from an array, array like object, iterable object
  source$: Observable<number> = from([1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5])
    // distinctUntilChanged will return an observable of unique values
    .pipe(distinctUntilChanged())
    .pipe((obs: Observable<number>) => {
        obs.subscribe((values: number) => {
            console.log('Value inside of observable obs: ', values);
        });
        return obs;
    });
}
