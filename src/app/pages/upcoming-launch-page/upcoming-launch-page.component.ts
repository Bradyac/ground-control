import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upcoming-launch-page',
  templateUrl: './upcoming-launch-page.component.html',
  styleUrls: ['./upcoming-launch-page.component.css'],
})
export class UpcomingLaunchPageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    var data = this.getUpcomingLaunch(routeParams.get('launchId'));
    console.log(data);
  }

  async getUpcomingLaunch(launchId) {
    return await fetch(
      'https://ground-control.netlify.app/.netlify/functions/launches/' +
        launchId
    ).then((response) => response.json());
  }
}
