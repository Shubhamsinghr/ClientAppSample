import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { EventFormModel } from '../model/event-form-model.model';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

public saveEvent = new Subject<any >();
public formList: EventFormModel[] = [
  { eventName: 'Toyota', eventDate: '2018-08-15', address: 'bhfg'  },
  { eventName: 'Toyota', eventDate: '2018-08-15', address: 'dfgdf'  },
  { eventName: 'Toyota', eventDate: '2018-08-15', address: 'dgd'  }
];
public eventEdit: any;

onSaveEventForm(formdata:any) {
  debugger;
  this.saveEvent.observers.length > 1 ? this.saveEvent.observers.splice(0,1):'';
  this.saveEvent.next(formdata);
}

getEventsList()
{
  return this.formList;
}

getEventEditRecord()
{
  return this.eventEdit;
}

setEventEditRecord(event:any,index)
{
  let model = {
  Event :event,
  EventIndex : index,
  }
  return this.eventEdit= model;
}

clearEditEventField()
{
  this.eventEdit = null;
}

setEventsList(events:any)
{
this.formList = events;
}


private _webApiUrl = 'api/values/GetEventsList'; 

        constructor(private _http: HttpClient) { 

        }

 /** GET Events from the server */
       
      getEvents(): Observable<EventInterface[]>
      {
        debugger;
           return this._http.get<EventInterface[]>(this._webApiUrl);
      }
   
    }

    interface EventInterface
    {
    eventName : string;
    eventDate : string;
    address : string;
    }