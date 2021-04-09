import { Component, OnInit } from '@angular/core';
import FakeLaunchData from 'src/assets/fake-launch-data.json';

@Component({
  selector: 'app-upcoming-launches-page',
  templateUrl: './upcoming-launches-page.component.html',
  styleUrls: ['./upcoming-launches-page.component.css'],
})
export class UpcomingLaunchesPageComponent implements OnInit {
  title = 'ground-control';
  UpcomingLaunchData: any;
  list = [];

  ngOnInit(): void {
    this.getUpcomingLaunchData();
    // this.setUpcomingLaunchData(FakeLaunchData);
  }

  getUpcomingLaunchData() {
    fetch('https://lldev.thespacedevs.com/2.0.0/launch/upcoming/?format=json')
      .then((response) => response.json())
      .then((data) => {
        this.setUpcomingLaunchData(data);
      });
  }

  setUpcomingLaunchData(data) {
    this.UpcomingLaunchData = data;
    this.UpcomingLaunchData.results.forEach((element) => {
      this.list.push(element);
    });
  }
}
