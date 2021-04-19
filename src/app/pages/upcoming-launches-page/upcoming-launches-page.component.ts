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
    var temp = this.getUpcomingLaunch();
    // this.setUpcomingLaunchData(FakeLaunchData);
  }

  async getUpcomingLaunch() {
    var data = await fetch(
      'https://ground-control.netlify.app/.netlify/functions/launches'
    )
      .then((response) => response.json())
      .then((data) => {
        this.setUpcomingLaunchData(data);
      });
  }

  setUpcomingLaunchData(data) {
    this.UpcomingLaunchData = data;
    this.UpcomingLaunchData.forEach((element) => {
      this.list.push(element);
    });
  }
}
