import { Component, OnInit } from '@angular/core';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  columnDefs = [
		{headerName: 'Event', field: 'Event' },
		{headerName: 'Date', field: 'Date' },
    {headerName: 'Place', field: 'Place'},
    {headerName: 'Edit', field: 'edit'},
    {headerName: 'Delete', field: 'delete'}
    {headerName: 'Action', field: 'delete'}
	];

	rowData = [
		{ Event: 'Toyota', Date: '12/11/10', Place: 35000,edit:'Edit',delete : 'X' },
		{ Event: 'Ford', Date: '12/11/10', Place: 32000 ,edit:'Edit',delete : 'X'},
		{ Event: 'Porsche', Date: '12/11/10', Place: 72000 ,edit:'Edit',delete : 'X'}
	];


  deleteEvent():void{
debugger;

  }

  addEvent():void{
debugger;

  }

}
