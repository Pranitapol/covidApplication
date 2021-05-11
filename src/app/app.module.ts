import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { UserComponent } from './user/user.component';
import {  NgxPaginationModule} from "ngx-pagination";
import { ProfileComponent } from './profile/profile.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProfileComponent,
    RepoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
