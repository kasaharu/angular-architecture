import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { HeroDetailModule } from './features/hero-detail/hero-detail.module';
import { HeroesModule } from './features/heroes/heroes.module';
import { MessagesModule } from './shared/messages/messages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, CoreModule, DashboardModule, HeroesModule, HeroDetailModule, MessagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
