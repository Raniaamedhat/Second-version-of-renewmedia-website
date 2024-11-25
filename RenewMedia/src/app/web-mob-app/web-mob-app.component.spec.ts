import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebMobAppComponent } from './web-mob-app.component';

describe('WebMobAppComponent', () => {
  let component: WebMobAppComponent;
  let fixture: ComponentFixture<WebMobAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebMobAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebMobAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
