import { Component, OnInit } from '@angular/core';
import { Launch } from 'src/app/interfaces/launch';
import { UpcomingLaunchService } from 'src/app/services/launch-service/launch.service';

@Component({
  selector: 'app-upcoming-launches-page',
  templateUrl: './upcoming-launches-page.component.html',
  styleUrls: ['./upcoming-launches-page.component.css'],
})
export class UpcomingLaunchesPageComponent implements OnInit {
  upcoming: boolean = true;
  fetchedAll: boolean = false;
  launches: Launch[] = [];
  page = 1;
  distance = 2;
  totalLaunches = -1;

  constructor(private upcomingLaunchService: UpcomingLaunchService) {}

  ngOnInit(): void {
    this.upcomingLaunchService.getUpcomingLaunches().subscribe((data) => {
      this.totalLaunches = data.totalLaunches;
      this.launches = data.launches;
      if (this.launches.length >= data.totalLaunches) {
        this.fetchedAll = true;
      }
    });
  }

  // Executed when the Upcoming / Previous radio buttons are toggled at the top of the page
  toggleLaunchType(isUpcoming) {
    // rest to page 1
    this.page = 1;
    this.fetchedAll = false;

    // fetch launches (a list of upcoming / previous launches with the total amount of upcoming / previous launches)
    // totalLaunches is sent with the data to determine when to stop the infinite scroll
    this.upcoming = isUpcoming;
    this.upcomingLaunchService
      .getUpcomingLaunches('?page=' + this.page + '&upcoming=' + this.upcoming)
      .subscribe((data) => {
        this.launches = [];
        data.launches.forEach((launch) => {
          this.launches.push(launch);
        });

        if (this.launches.length >= data.totalLaunches) {
          this.fetchedAll = true;
        }
      });
  }

  onScroll() {
    if (this.launches.length < this.totalLaunches) {
      ++this.page;
      this.upcomingLaunchService
        .getUpcomingLaunches(
          '?page=' + this.page + '&upcoming=' + this.upcoming
        )
        .subscribe((data) => {
          setTimeout(() => {
            data.launches.forEach((launch) => {
              this.launches.push(launch);
            });
          }, 1000);
        });
    } else {
      this.fetchedAll = true;
    }
  }
}
