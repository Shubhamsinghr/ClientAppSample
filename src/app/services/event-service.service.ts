import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { EventFormModel } from '../model/event-form-model.model';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

public saveEvent = new Subject<any >();
public formList: EventFormModel[] = [
  { eventName: 'Toyota', eventDate: '12/11/10', address: 'bhfg'  },
  { eventName: 'Toyota', eventDate: '12/11/10', address: 'dfgdf'  },
  { eventName: 'Toyota', eventDate: '12/11/10', address: 'dgd'  },
];
public eventEdit: EventFormModel= new EventFormModel();

onSaveEventForm(formdata:any) {
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

setEventEditRecord(event:any)
{
  return this.eventEdit= event;
}

setEventsList(events:any)
{
this.formList = events;
}


  constructor() { }
}
