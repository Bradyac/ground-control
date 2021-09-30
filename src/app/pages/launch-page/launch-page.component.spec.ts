import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingLaunchPageComponent } from './upcoming-launch-page.component';

describe('UpcomingLaunchPageComponent', () => {
  let component: UpcomingLaunchPageComponent;
  let fixture: ComponentFixture<UpcomingLaunchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingLaunchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingLaunchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
