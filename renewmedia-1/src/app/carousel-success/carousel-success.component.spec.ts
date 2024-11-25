import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSuccessComponent } from './carousel-success.component';

describe('CarouselSuccessComponent', () => {
  let component: CarouselSuccessComponent;
  let fixture: ComponentFixture<CarouselSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselSuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
