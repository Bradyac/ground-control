import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ground-control';
  UpcomingLaunchData: any;
  list = [];

  ngOnInit(): void {
    this.getUpcomingLaunchData();
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
