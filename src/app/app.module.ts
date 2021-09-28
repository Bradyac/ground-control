import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LaunchCardComponent } from './components/launch-card/launch-card.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UpcomingLaunchesPageComponent } from './pages/upcoming-launches-page/upcoming-launches-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { UpcomingLaunchPageComponent } from './pages/upcoming-launch-page/upcoming-launch-page.component';
import { ClipboardModule } from 'ngx-clipboard';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LaunchCardComponent,
    CountdownTimerComponent,
    HomePageComponent,
    UpcomingLaunchesPageComponent,
    AboutPageComponent,
    UpcomingLaunchPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClipboardModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
