import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { NoteService } from './note-service.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgCalendarModule } from 'ionic2-calendar';
import { ViewnotepagePage } from './pages/viewnotepage/viewnotepage.page';
import { AddnotepagePage } from './pages/addnotepage/addnotepage.page';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgCalendarModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NoteService,
    SQLite,
    NgCalendarModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent, ViewnotepagePage, AddnotepagePage],
})
export class AppModule {}
