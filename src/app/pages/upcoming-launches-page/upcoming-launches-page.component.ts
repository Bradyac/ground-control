import { Component, OnInit } from '@angular/core';
import { Launch } from 'src/app/interfaces/launch';
import { UpcomingLaunchService } from 'src/app/services/upcoming-launch-service/upcoming-launch.service';

@Component({
  selector: 'app-upcoming-launches-page',
  templateUrl: './upcoming-launches-page.component.html',
  styleUrls: ['./upcoming-launches-page.component.css'],
})
export class UpcomingLaunchesPageComponent implements OnInit {
  launches: Launch[];

  constructor(private upcomingLaunchService: UpcomingLaunchService) {}

  ngOnInit(): void {
    this.upcomingLaunchService.getUpcomingLaunches().subscribe((data) => {
      this.launches = data;
    });
  }
}
