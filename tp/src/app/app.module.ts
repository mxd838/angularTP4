import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersPageComponent } from './user/page/users-page/users-page.component';
import { DetailComponent } from './user/page/detail/detail.component';
import { DisplayComponent } from './user/component/display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersPageComponent,
    DetailComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
