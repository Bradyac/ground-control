import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingLaunchesPageComponent } from './upcoming-launches-page.component';

describe('UpcomingLaunchesPageComponent', () => {
  let component: UpcomingLaunchesPageComponent;
  let fixture: ComponentFixture<UpcomingLaunchesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingLaunchesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingLaunchesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
