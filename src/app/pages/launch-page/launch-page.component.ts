import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Launch } from 'src/app/interfaces/launch';
import { LaunchService } from 'src/app/services/launch-service/launch.service';

@Component({
  selector: 'app-launch-page',
  templateUrl: './launch-page.component.html',
  styleUrls: ['./launch-page.component.css'],
})
export class LaunchPageComponent implements OnInit {
  launch: Launch;

  constructor(
    private route: ActivatedRoute,
    private upcomingLaunchService: LaunchService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.upcomingLaunchService.getUpcomingLaunch(slug).subscribe((data) => {
      this.launch = data;
    });
  }
}
