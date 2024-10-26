import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehanceComponent } from './behance.component';

describe('BehanceComponent', () => {
  let component: BehanceComponent;
  let fixture: ComponentFixture<BehanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
