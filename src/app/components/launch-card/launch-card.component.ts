import { Component, Input } from '@angular/core';
import { Launch } from 'src/app/interfaces/launch';

@Component({
  selector: 'app-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.css'],
})
export class LaunchCardComponent {
  currentRoute: string;
  @Input() launch: Launch;
  status: string[];

  constructor() {
    this.currentRoute = window.location.href;
  }

  ngOnInit() {
    this.status = ['N/A', '--default-color'];
  }

  onCopy(event) {
    event.target.innerHTML = 'Copied!';
    setTimeout(() => {
      event.target.innerHTML = 'Share';
    }, 2000);
  }
}
