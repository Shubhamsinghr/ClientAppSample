import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './layout/home/home.component';
import { ContactComponent } from './layout/contact/contact.component';
import { AboutComponent } from './layout/about/about.component';
import { EventComponent } from './layout/event/event.component';
import { EditEventComponent } from './layout/event/edit-event/edit-event.component';
import { ViewEventComponent } from './layout/event/view-event/view-event.component';
import { AddEventComponent } from './layout/event/add-event/add-event.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'event',
    component: EventComponent,
    children:[
      {
        path: '',
        component: EventComponent
      },
      {
        path: 'edit',
        component: EditEventComponent
      },
      {
        path: 'view',
        component: ViewEventComponent
      },
      {
        path: 'add',
        component: AddEventComponent
      }
       
    ]
  }
 
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
