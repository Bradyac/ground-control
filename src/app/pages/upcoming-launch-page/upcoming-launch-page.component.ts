import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upcoming-launch-page',
  templateUrl: './upcoming-launch-page.component.html',
  styleUrls: ['./upcoming-launch-page.component.css'],
})
export class UpcomingLaunchPageComponent implements OnInit {
  launch_name: string;
  image: string = '';
  rocket_name: string;
  rocket_description: string;
  provider_name: string;
  provider_description: string;
  provider_logo_url: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const launchId = this.route.snapshot.paramMap.get('launchId');
    this.getUpcomingLaunch(launchId);
  }

  async getUpcomingLaunch(launchId) {
    const fetch_url =
      'https://ground-control.netlify.app/.netlify/functions/launches/' +
      launchId;
    await fetch(fetch_url)
      .then((response) => response.json())
      .then((data) => {
        this.setUpcomingLaunchData(data[0]);
      });
  }

  setUpcomingLaunchData(data) {
    this.launch_name = data.name;
    this.image = data.image_url ? data.image_url : '';
    this.rocket_name = data.rocket.name;
    this.rocket_description = data.rocket.description;
    this.provider_name = data.provider.name;
    this.provider_description = data.provider.description;
    this.provider_logo_url = data.provider.logo_url
      ? data.provider.logo_url
      : '';
  }
}
