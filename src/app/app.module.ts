import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './presenters/user-list/user-list.component';
import { RootStoreModule } from './store/root-store.module';
import { HomeComponent } from './containers/home/home.component';
import { DetailComponent } from './containers/detail/detail.component';
import { TodoListComponent } from './presenters/todo-list/todo-list.component';
import { PostListComponent } from './presenters/post-list/post-list.component';

@NgModule({
  declarations: [AppComponent, UserListComponent, HomeComponent, DetailComponent, TodoListComponent, PostListComponent],
  imports: [BrowserModule, AppRoutingModule, StoreDevtoolsModule.instrument({ maxAge: 25 }), HttpClientModule, RootStoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
