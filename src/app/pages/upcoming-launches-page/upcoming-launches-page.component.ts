import { Component, OnInit } from '@angular/core';

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
    this.getUpcomingLaunch();
  }

  async getUpcomingLaunch() {
    await fetch('.netlify/functions/launches')
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
