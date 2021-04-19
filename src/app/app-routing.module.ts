import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UpcomingLaunchPageComponent } from './pages/upcoming-launch-page/upcoming-launch-page.component';
import { UpcomingLaunchesPageComponent } from './pages/upcoming-launches-page/upcoming-launches-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'upcoming-launches', component: UpcomingLaunchesPageComponent },
  {
    path: 'upcoming-launches/:launchId',
    component: UpcomingLaunchPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
