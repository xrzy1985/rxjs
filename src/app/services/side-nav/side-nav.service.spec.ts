import { TestBed } from '@angular/core/testing';
import { SideNavService } from './side-nav.service';

describe('SideNavService', () => {
  let service: SideNavService;

  describe('Test Suite', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(SideNavService);
    });

    describe('Service', () => {
      it('should create the SideNavService', () => {
        expect(service).toBeTruthy();
      });

      it('should instantiate isOpen', () => {
        expect(service.isOpen).toBeDefined();
      });
    })
    
    describe('getIsOpen', () => {
      it('should return instance of a boolean', () => {
        expect(service.getIsOpen()).toBeInstanceOf(Boolean);
      });

      it('should return true if isOpen is set to true', () => {
        service.isOpen = true;
        expect(service.getIsOpen()).toBeTrue();
      });

      it('should return false once isOpen is set to false', () => {
        expect(service.getIsOpen()).toBeFalse();
      });
    });

    describe('setIsOpen', () => {
      it('should set isOpen to true', () => {
        service.setIsOpen();
        expect(service.isOpen).toBeTrue();
      });

      it('should set isOpen to false', () => {
        service.isOpen = true;
        service.setIsOpen();
        expect(service.isOpen).toBeFalse();
      });

      it('should set isOpen to the boolean being passed into the method', () => {
        service.setIsOpen(true);
        expect(service.isOpen).toBeTrue();
        service.setIsOpen(false);
        expect(service.isOpen).toBeFalse();
      });
    });
  });
});
