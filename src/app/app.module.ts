import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { HeroesModule } from './features/heroes/heroes.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeroesModule, DashboardModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
