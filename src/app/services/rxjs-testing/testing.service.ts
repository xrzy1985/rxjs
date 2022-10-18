import { Injectable } from '@angular/core';
// RxJs
import {
  count,
  filter,
  forkJoin,
  from,
  interval,
  max,
  merge,
  min,
  Observable,
  of,
  race,
  range,
  reduce,
  take,
} from 'rxjs';
import {
  concat,
  distinct,
  distinctUntilChanged,
  elementAt,
  every,
  find,
  findIndex,
  first,
  isEmpty,
  last,
  map,
  toArray,
} from 'rxjs/operators';

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

  // forkJoin: takes the last element in each observable and concats them together into a new observable
  forked$ = forkJoin([
    [1, 2, 3, 4, 5],
    ['one', 'two', 'three', 'four', 'five'],
    [true, false],
  ]).subscribe((joined: any) => {
    console.log(joined);
  });

  // reduce: performs action, in the case below, adds element a with b and returns sum
  case1 = of(
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
  )
    .pipe(
      filter((x: number) => {
        return x % 2 === 0;
      }),
      reduce((current: number, next: number) => current + next)
    )
    .pipe((data: Observable<number>) => {
      data.subscribe((d: any) => {
        console.log('case1 -> ', d);
      });
      return data;
    });

  // interval will emit a new value every X number of milliseconds, in this case 1000, which is one every sec
  // take will emit the first value emitted from the observable
  case2 = interval(1000)
    .pipe(take(10))
    .pipe((data: any) => {
      data.subscribe((data: any) => {
        console.log(data);
      });
      return data;
    });

  // range
  range$ = range(1, 10).pipe((data: Observable<number>) => {
    data.subscribe((d: number) => {
      console.log('range -> ', d);
    });
    return data;
  });

  // count: returns an observable of the count of elements in the observable, in this case 5
  count$ = of(1, 2, 3, 4, 5)
    .pipe(count())
    .pipe((data: Observable<number>) => {
      data.subscribe((d: number) => {
        console.log('count -> ', d);
      });
      return data;
    });

  max$ = of(1, 3, 5, 6, 12, 13, 24, 28)
    .pipe(max())
    .pipe((data: Observable<number>) => {
      data.subscribe((d: number) => {
        console.log('max -> ', d);
      });
      return data;
    });

  min$ = of(-2, 0, 1, 3, 4, 6, 8, 22, 33, 45, 12345)
    .pipe(min())
    .pipe((data: Observable<number>) => {
      data.subscribe((d: number) => {
        console.log('min -> ', d);
      });
      return data;
    });

  // concat: concatenates two observables together; does not sort
  concat$ = of(1, 3, 5, 7, 9)
    .pipe(concat(of(2, 4, 6, 8, 10)))
    .pipe((data: Observable<number>) => {
      data.subscribe((d: number) => {
        console.log('concat -> ', d);
      });
      return data;
    });

  // merge: merges the two observables together; does not sort, similar to concat
  merge$ = merge(of(1, 3, 5, 7, 9), of(2, 4, 6, 8, 10)).pipe(
    (data: Observable<number>) => {
      data.subscribe((d: number) => {
        console.log('merge -> ', d);
      });
      return data;
    }
  );

  // race: used to return an observable of the first observable passed into the race method
  race$ = race(of(1, 3, 5, 7, 9), of(2, 4, 6, 8, 10)).pipe(
    (data: Observable<number>) => {
      data.subscribe((d: number) => {
        console.log('race -> ', d);
      });
      return data;
    }
  );

  // map: works the same way the map method for arrays
  mapped$ = of(1, 2, 3, 4, 5)
    .pipe(map((value: number) => value + 10))
    .subscribe((d: number) => {
      console.log('map -> ', d);
    });

  anotherMapped$ = of({ id: 1, name: 'James' }, { id: 2, name: 'Patterson' })
    .pipe(
      map((value: object) => {
        value = { ...value, position: 'Software Engineer' };
        return value;
      })
    )
    .pipe((data: Observable<object>) => {
      data.subscribe((d: object) => {
        console.log('map too -> ', d);
      });
      return data;
    });

  // distinct: will return an observable of the distinct elements in the observable
  distinct$ = of(1, 1, 2, 3, 3, 4, 5, 5, 6)
    .pipe(distinct())
    .pipe((data: Observable<number>) => {
      data.subscribe((d: number) => {
        console.log('distinct -> ', d);
      });
      return data;
    });

  // elementAt: will return observable of the element at the index given to the method
  elementAt$ = of(1, 2, 3, 4, 5)
    .pipe(elementAt(1))
    .pipe((data: Observable<number>) => {
      data.subscribe((d: number) => {
        console.log('elementAt -> ', d);
      });
      return data;
    });

  // first: will return an observable of the first element
  first$ = of('a', 'b', 'c', 'd', 'e')
    .pipe(first())
    .pipe((data: Observable<string>) => {
      data.subscribe((d: string) => {
        console.log('first -> ', d);
      });
      return data;
    });

  // last: will return an observable of the last element
  last$ = of(true, false)
    .pipe(last())
    .pipe((data: Observable<boolean>) => {
      data.subscribe((d: boolean) => {
        console.log('last -> ', d);
      });
      return data;
    });

  // toArray: returns an observable of values pushed to an array
  toArray$ = of(1, 2, 3, 4, 5).pipe(toArray())
    .pipe((data: Observable<number[]>) => {
      data.subscribe((d: number[]) => {
        console.log('toArray -> ', d);
      })
      return data;
    })

  // every: returns an observable<boolean> if all elements meet the criteria presented
  every$ = of(1, 2, 3, 4, 5)
    .pipe(every(x => x < 4))
    .pipe((data: Observable<boolean>) => {
      data.subscribe((d: boolean) => {
        console.log('every -> ', d);
      })
      return data;
    })

  // find: works the same as array.find, where the first element that meets the criteria is returned
  find$ = of(1, 2, 3, 4, 5, 6).pipe(find((x: number) => x > 99))
    .pipe((data: Observable<any>) => {
      data?.subscribe((d: T) => {
        console.log('find -> ', d);
      })
      return data;
    })
  
  // findIndex: works the same as findIndex in arrays, where the first index that meets the criteria is returned
  findIndex$ = of(1, 2, 3, 4, 5).pipe(findIndex((n: number) => n >= 4))
    .pipe((data: Observable<number>) => {
      data.subscribe((d: number) => {
        console.log('findIndex -> ', d);
      })
      return data;
    })

  // isEmpty: returns an observable<boolean> if the values passed into of is empty
  isEmpty$ = of().pipe(isEmpty())
    .pipe((data: Observable<boolean>) => {
      data.subscribe((d: boolean) => {
        console.log('isEmpty -> ', d);
      })
      return data;
    })

  isEmpty2$ = of('is not empty', 'at all').pipe(isEmpty())
    .pipe((data: Observable<boolean>) => {
      data.subscribe((d: boolean) => {
        console.log('isEmpty2 -> ', d);
      })
      return data;
    })
}

interface T {
  T: boolean | null | number | object | string | undefined;
}