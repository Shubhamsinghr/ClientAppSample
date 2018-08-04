import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventFormModel } from '../../../model/event-form-model.model';
import { Router } from '@angular/router';
import { EventServiceService } from '../../../services/event-service.service';
@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {

  public  eventForm : EventFormModel= new EventFormModel();
  public registerForm: FormGroup;
  public submitted = false;

  constructor(private _Router:Router, private formBuilder: FormBuilder, private _EventServiceService:EventServiceService) { 
this

  }

  ngOnInit() {
    debugger;
      this.registerForm = this.formBuilder.group({
          eventName: ['', Validators.required],
          eventDate: ['', Validators.required],
          address: ['', [Validators.required]],
      });
      this.eventForm = this._EventServiceService.getEventEditRecord();
  }



  // convenience getter for easy access to form fields
  // get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      
      this._EventServiceService.setEventEditRecord(this.eventForm);
      this._Router.navigate(['/event']);

  }
}
