import { Component, OnInit } from '@angular/core';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
import { RouterModule, Routes , Router} from '@angular/router';
import { EventServiceService } from './../../services/event-service.service';
import { EventFormModel } from '../../model/event-form-model.model';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  public eventsList: EventFormModel[]=[];

constructor(private _Router:Router, private _EventServiceService:EventServiceService ) {
  this._EventServiceService.saveEvent.subscribe(
    (formData: any) => {
        if(formData!= null) {
         this.addFormToList(formData);
    }
  }
)
 }


  ngOnInit() {
    debugger;
    this.eventsList = this._EventServiceService.getEventsList();
  }

 	


  addFormToList(formData):void
  {
    this.eventsList = this._EventServiceService.getEventsList();
    this.eventsList.push(formData); 
    this._EventServiceService.setEventsList(this.eventsList);
   }

  navigateToAddEventPage(){
    debugger;
    this._Router.navigate(['/event/add']);
  }

  deleteEvent(event,index):void{
    this.eventsList.splice(index,1);
  }

 editEvent(event,index):void{
  debugger;
  // this.eventsList.splice(index,1, event)
  this._Router.navigate(['/event/edit']);
  }

}
