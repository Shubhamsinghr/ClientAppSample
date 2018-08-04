import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventServiceService } from './../../../services/event-service.service';
import { EventFormModel } from '../../../model/event-form-model.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {

   
  public  eventForm : EventFormModel= new EventFormModel();
  public registerForm: FormGroup;
  public submitted = false;

  constructor(private _Router:Router, private formBuilder: FormBuilder, private _EventServiceService:EventServiceService) { }

  ngOnInit() {
    debugger;
      this.registerForm = this.formBuilder.group({
          eventName: ['', Validators.required],
          eventDate: ['', Validators.required],
          address: ['', [Validators.required]],
      });
  }

  // convenience getter for easy access to form fields
  // get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      this._EventServiceService.onSaveEventForm(this.eventForm);
      this._Router.navigate(['/event']);

  }



}
