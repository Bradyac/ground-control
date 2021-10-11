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
import { LaunchPageComponent } from './pages/launch-page/launch-page.component';
import { ClipboardModule } from 'ngx-clipboard';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LaunchCardComponent,
    CountdownTimerComponent,
    HomePageComponent,
    UpcomingLaunchesPageComponent,
    AboutPageComponent,
    LaunchPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClipboardModule,
    HttpClientModule,
    NgxPaginationModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
