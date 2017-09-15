import { TestBed, inject } from '@angular/core/testing';

import { Cart.ServiceService } from './cart.service.service';

describe('Cart.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Cart.ServiceService]
    });
  });

  it('should be created', inject([Cart.ServiceService], (service: Cart.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
