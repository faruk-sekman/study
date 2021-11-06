import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

// shared module
import {SharedModule} from "src/app/_core/shared.module"


import {HomeModule} from "./components/home/home.module";
import {MyVotedModule} from "./components/my-voted/my-voted.module";
import {ItemAddModule} from "./components/item-add/item-add.module";

import {Interceptor} from './_core/_interceptor/interceptor';

import {AppComponent} from './app.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    MyVotedModule,
    ItemAddModule,
    SharedModule.forRoot()
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
