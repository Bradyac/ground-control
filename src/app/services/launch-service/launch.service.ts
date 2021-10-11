import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Launch } from '../../interfaces/launch';
import { Rocket } from '../../types/rocket';
import { Mission } from '../../types/mission';
import { Provider } from '../../types/provider';
import { Pad } from '../../types/pad';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class UpcomingLaunchService {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  // get list of upcoming launches to disaplay on upcoming-launches page
  getUpcomingLaunches(query: string = ''): Observable<any> {
    let url = '.netlify/functions/launches' + query;
    return this.http.get<any>(url).pipe(
      map((response) => {
        let totalLaunches: number = response.collectionSize;
        let launches: Launch[] = [];
        response.launches.forEach((data) => {
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
        return { totalLaunches, launches };
      })
    );
  }

  // get selected launch to display on upcoming-launch page
  getUpcomingLaunch(slug: string): Observable<Launch> {
    return this.http.get<any>('.netlify/functions/launch/' + slug).pipe(
      map((response) => {
        let launch: Launch;
        let data = response[0];
        let rocket: Rocket = {
          name: data.rocket.name,
          description: data.rocket.description,
          info_url: data.rocket.info_url,
          wiki_url: data.rocket.wiki_url,
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
          info_url: data.provider.info_url,
          wiki_url: data.provider.wiki_url,
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
          watch_url = this.sanitizer.bypassSecurityTrustResourceUrl(embed_url);
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
        return launch;
      })
    );
  }

  getNextLaunch(): Observable<Launch> {
    return this.http.get<any>('.netlify/functions/launch/next').pipe(
      map((response) => {
        let data = response[0];
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
        return launch;
      })
    );
  }

  assignStatus(status_code: number): string[] {
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
        status = ['FAILURE', '--error-color'];
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
