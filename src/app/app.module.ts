import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './presenters/user-list/user-list.component';
import { RootStoreModule } from './store/root-store.module';
import { HomeComponent } from './containers/home/home.component';

@NgModule({
  declarations: [AppComponent, UserListComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, StoreDevtoolsModule.instrument({ maxAge: 25 }), HttpClientModule, RootStoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
