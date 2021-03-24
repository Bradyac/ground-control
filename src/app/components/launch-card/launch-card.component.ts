import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.css'],
})
export class LaunchCardComponent implements OnInit {
  @Input() data: any;
  name: string;
  image: string;
  date: string;
  status: string;
  statusColor: string;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.data) {
      // console.log(this.data);
      this.name = this.data.name;
      this.image = this.data.image
        ? this.data.image
        : 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20210314085034.png';
      let launchDate = new Date(this.data.net);
      this.date = launchDate.toLocaleString();
      this.assignStatus(this.data.status.id);
    }
  }

  assignStatus(status) {
    switch (status) {
      case 1:
        this.status = 'GO';
        this.statusColor = '--success-color';
        break;
      case 2:
        this.status = 'TBD';
        this.statusColor = '--warning-color';
        break;
      case 3:
        this.status = 'SUCCESS';
        this.statusColor = '--success-color';
        break;
      default:
        this.status = 'N/A';
        this.statusColor = '--default-color';
        break;
    }
  }
}
