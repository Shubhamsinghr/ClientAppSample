import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './layout/home/home.component';
import { ContactComponent } from './layout/contact/contact.component';
import { EventComponent } from './layout/event/event.component';
import { AboutComponent } from './layout/about/about.component';
import { AgGridModule } from 'ag-grid-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditEventComponent } from './layout/event/edit-event/edit-event.component';
import { ViewEventComponent } from './layout/event/view-event/view-event.component';
import { AddEventComponent } from './layout/event/add-event/add-event.component';
//import { NgGridModule } from ' ';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    EventComponent,
    AboutComponent,
    EditEventComponent,
    ViewEventComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    NgbModule.forRoot()
    //NgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
