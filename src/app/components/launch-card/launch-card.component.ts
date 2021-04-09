import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.css'],
})
export class LaunchCardComponent {
  @Input() data: any;
  name: string;
  image: string;
  launchDate: Date;
  date: string;
  status: string;
  statusColor: string;

  ngOnChanges() {
    if (this.data) {
      this.name = this.data.name;
      this.image = this.data.imageLink
        ? this.data.imageLink
        : 'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/falcon2520925_image_20210314085034.png';
      this.launchDate = new Date(this.data.date);
      this.date = this.launchDate.toLocaleString();
      this.assignStatus(this.data.status);
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
      case 4:
        this.status = 'FAIL';
        this.statusColor = '--error-color';
      case 6:
        this.status = 'IN FLIGHT';
        this.statusColor = '--secondary-color';
        break;
      default:
        this.status = 'N/A';
        this.statusColor = '--default-color';
        break;
    }
  }
}
