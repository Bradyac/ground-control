import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-upcoming-launch-page',
  templateUrl: './upcoming-launch-page.component.html',
  styleUrls: ['./upcoming-launch-page.component.css'],
})
export class UpcomingLaunchPageComponent implements OnInit {
  launchCardData;
  watch_url;
  mission_name: string;
  mission_type: string;
  mission_description: string;
  rocket_name: string;
  rocket_description: string;
  provider_name: string;
  provider_description: string;
  provider_logo_url: string = '';
  pad_name: string;
  pad_wiki_url: string;
  pad_map_url: string;
  pad_map_image_url: string = '';

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

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
    // launch card
    this.launchCardData = {
      id: data._id,
      name: data.name,
      image_url: data.image_url,
      date: data.date,
      status: data.status,
      watch_url: '',
    };

    if (data.watch_url) {
      var embed_url = data.watch_url.replace('/watch?v=', '/embed/');
      this.watch_url = this.sanitizer.bypassSecurityTrustResourceUrl(embed_url);
    }

    // mission (?)
    if (data.mission) {
      this.mission_name = data.mission.name;
      this.mission_type = data.mission.type;
      this.mission_description = data.mission.description;
    }

    // rocket
    this.rocket_name = data.rocket.name;
    this.rocket_description = data.rocket.description;

    // provider
    this.provider_name = data.provider.name;
    this.provider_description = data.provider.description;
    this.provider_logo_url = data.provider.logo_url
      ? data.provider.logo_url
      : '';

    // pad
    this.pad_name = data.pad.location_name;
    this.pad_wiki_url = data.pad.wiki_url;
    this.pad_map_url = data.pad.map_url;
    this.pad_map_image_url = data.pad.map_image_url;
  }
}
