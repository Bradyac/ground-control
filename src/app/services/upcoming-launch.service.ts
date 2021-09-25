import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Launch } from '../interfaces/launch';
import { Rocket } from '../types/rocket';
import { Mission } from '../types/mission';
import { Provider } from '../types/provider';
import { Pad } from '../types/pad';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class UpcomingLaunchService {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  getUpcomingLaunches(): Observable<Launch[]> {
    return this.http.get<any[]>('.netlify/functions/launches').pipe(
      map((response) => {
        let launches: Launch[] = [];
        response.forEach((data) => {
          let launch: Launch = {
            _id: data._id,
            name: data.name,
            status: this.assignStatus(data.status),
            date: new Date(data.date),
            slug: data.slug,
            image_url:
              data.image_url ||
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20210314085034.png',
            watch_url: data.watch_url,
          };
          launches.push(launch);
        });
        return launches;
      })
    );
  }

  getUpcomingLaunch(slug: string): Observable<Launch> {
    return this.http.get<any>('.netlify/functions/launches/' + slug).pipe(
      map((response) => {
        let launch: Launch;
        response.forEach((data) => {
          let rocket: Rocket = {
            name: data.rocket.name,
            description: data.rocket.description,
          };

          let mission: Mission;
          if (data.mission) {
            mission = {
              name: data.mission.name,
              type: data.mission.type,
              description: data.mission.description,
            };
          }

          let provider: Provider = {
            name: data.provider.name,
            description: data.provider.description,
            logo_url: data.provider.logo_url || '',
          };

          let pad: Pad = {
            name: data.pad.location_name,
            wiki_url: data.pad.wiki_url,
            map_url: data.pad.map_url,
            map_image_url: data.pad.map_image_url || '',
          };

          // Clean video URL
          let watch_url;
          if (data.watch_url) {
            var embed_url = data.watch_url.replace('/watch?v=', '/embed/');
            watch_url =
              this.sanitizer.bypassSecurityTrustResourceUrl(embed_url);
          }

          launch = {
            _id: data._id,
            name: data.name,
            status: this.assignStatus(data.status),
            date: new Date(data.date),
            slug: data.slug,
            image_url:
              data.image_url ||
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20210314085034.png',
            watch_url: watch_url,
            rocket: rocket,
            mission: mission,
            provider: provider,
            pad: pad,
          };
        });
        return launch;
      })
    );
  }

  // for some reason I am unable to put the arg type as number even though it is a number
  assignStatus(status_code): string[] {
    let status = [];
    switch (status_code) {
      case 1:
        status = ['GO', '--success-color'];
        break;
      case 2:
        status = ['TBD', '--warning-color'];
        break;
      case 3:
        status = ['SUCCESS', '--success-color'];
        break;
      case 4:
        status = ['FAIL', '--error-color'];
        break;
      case 6:
        status = ['IN FLIGHT', '--secondary-color'];
        break;
      default:
        status = ['N/A', '--default-color'];
        break;
    }
    return status;
  }
}
