import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  describe('Test Suite', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(UserService);
    });
  
    describe('Service', () => {
      it('should be created', () => {
        expect(service).toBeTruthy();
      });
    })
  })
});
