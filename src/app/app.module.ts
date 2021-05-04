import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { HeroDetailModule } from './features/hero-detail/hero-detail.module';
import { HeroesModule } from './features/heroes/heroes.module';
import { InMemoryDataService } from './data-access/in-memory/in-memory-data.service';
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
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    HeadingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
