import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [AppComponent, UserListComponent],
  imports: [BrowserModule, AppRoutingModule, StoreDevtoolsModule.instrument({ maxAge: 25 })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
