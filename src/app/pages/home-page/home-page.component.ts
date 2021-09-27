import { Component, OnInit } from '@angular/core';
import { Launch } from 'src/app/interfaces/launch';
import { UpcomingLaunchService } from 'src/app/services/upcoming-launch.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  launch: Launch;

  constructor(private upcomingLaunchService: UpcomingLaunchService) {}

  ngOnInit(): void {
    this.upcomingLaunchService.getNextLaunch().subscribe((data) => {
      this.launch = data;
    });
  }
}
