import { TestBed } from '@angular/core/testing';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  describe('Test Suite', () => {
    describe('service', () => {
      it('should be created', () => {
        expect(service).toBeTruthy();
      });
    });

    describe('setLoggedInStatus', () => {
      it('should set the observable to true when true is passed into method', () => {
        service.setLoggedInStatus(true);
        service.getLoggedInStatus().subscribe((data: boolean) => {
          expect(data).toBeTrue();
        });
      });

      it('should return false when observable is set to false', () => {
        service.setLoggedInStatus(false);
        service.getLoggedInStatus().subscribe((data: boolean) => {
          expect(data).toBeFalse();
        });
      });

      it('should not set the value of the observable if null or undefined is passed into method', () => {
        service.setLoggedInStatus(true);
        service.setLoggedInStatus(null);
        service.getLoggedInStatus().subscribe((data: boolean) => {
          expect(data).toBeTrue();
        });
        service.setLoggedInStatus(undefined);
        service.getLoggedInStatus().subscribe((data: boolean) => {
          expect(data).toBeTrue();
        });
      });
    });

    describe('getLoggedInStatus', () => {
      it('should return an Observable of the loggedInStatus', () => {
        expect(service.getLoggedInStatus()).toBeInstanceOf(Observable);
      });

      it('should return true when observable is set to true', () => {
        service.setLoggedInStatus(true);
        service.getLoggedInStatus().subscribe((data: boolean) => {
          expect(data).toBeTrue();
        });
      });

      it('should return false when observable is set to false', () => {
        service.setLoggedInStatus(false);
        service.getLoggedInStatus().subscribe((data: boolean) => {
          expect(data).toBeFalse();
        });
      });
    });

    describe('encrypted', () => {
      it('should return a type of string from method', () => {
        expect(service.encrypted('string')).toBeInstanceOf(String);
      });

      it('should return an encrypted string from string passed in', () => {
        expect(service.encrypted('string')).toBe('gP3m1ta+tSSQrMFvbLVoWA==');
      });

      it('should return a string, and not be null or undefined', () => {
        expect(service.encrypted('string')).not.toBeNull();
        expect(service.encrypted('string')).not.toBeUndefined();
      });

      it('should return an encryption string value if empty string is passed into method', () => {
        expect(service.encrypted('')).toBe('rxe2vJOHmBXAZVOxZawg2w==');
      });

      it('should return empty string if null or undefined is passed into method', () => {
        expect(service.encrypted(null)).toBe('');
        expect(service.encrypted(undefined)).toBe('');
      });
    });

    describe('decrypted', () => {
      it('should return a type of string from method', () => {
        expect(service.decrypted('string')).toBeInstanceOf(String);
      });

      it('should return an encrypted string from string passed in', () => {
        expect(service.decrypted('gP3m1ta+tSSQrMFvbLVoWA==')).toBe('string');
      });

      it('should return a string, and not be null or undefined', () => {
        expect(service.encrypted('gP3m1ta+tSSQrMFvbLVoWA==')).not.toBeNull();
        expect(
          service.encrypted('gP3m1ta+tSSQrMFvbLVoWA==')
        ).not.toBeUndefined();
      });

      it('should return an empty string value if empty string is passed into method', () => {
        expect(service.decrypted('')).toBe('');
      });

      it('should expect encrypted string to be an empty string once decrypted', () => {
        expect(service.decrypted('rxe2vJOHmBXAZVOxZawg2w==')).toBe('');
      });

      it('should return empty string if null or undefined is passed into method', () => {
        expect(service.decrypted(null)).toBe('');
        expect(service.decrypted(undefined)).toBe('');
      });
    });
  });
});
