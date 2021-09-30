import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { HeroDetailModule } from './features/hero-detail/hero-detail.module';
import { HeroesModule } from './features/heroes/heroes.module';
import { SharedModule } from './shared/shared.module';
import { HeadingModule } from './ui/heading/heading.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DashboardModule,
    HeroesModule,
    HeroDetailModule,
    SharedModule,
    HeadingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
