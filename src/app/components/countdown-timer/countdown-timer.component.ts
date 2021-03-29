import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css'],
})
export class CountdownTimerComponent {
  @Input() launchDate: Date;
  interval: NodeJS.Timeout;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnChanges() {
    if (this.launchDate) {
      this.interval = setInterval(
        () => this.setTimeUntilLaunch(this.launchDate),
        1000
      );
    }
  }

  setTimeUntilLaunch(launchDate: Date) {
    let timeDifference = launchDate.getTime() - Date.now();

    if (timeDifference > -1) {
      this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    } else {
      clearInterval(this.interval);
    }
  }
}
