import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ HttpClientModule} from '@angular/common/http'
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { CountryComponent } from './country/country.component';

@NgModule({
  declarations: [
    AppComponent,
      CountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
