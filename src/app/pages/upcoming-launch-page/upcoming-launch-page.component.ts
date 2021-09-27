import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Launch } from 'src/app/interfaces/launch';
import { UpcomingLaunchService } from 'src/app/services/upcoming-launch-service/upcoming-launch.service';

@Component({
  selector: 'app-upcoming-launch-page',
  templateUrl: './upcoming-launch-page.component.html',
  styleUrls: ['./upcoming-launch-page.component.css'],
})
export class UpcomingLaunchPageComponent implements OnInit {
  launch: Launch;

  constructor(
    private route: ActivatedRoute,
    private upcomingLaunchService: UpcomingLaunchService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.upcomingLaunchService.getUpcomingLaunch(slug).subscribe((data) => {
      this.launch = data;
    });
  }
}
