import { Component, OnInit } from '@angular/core';
import { EventService } from './../../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public events = [];

  constructor(
    private _eventService: EventService
  ) { }

  ngOnInit() {
    this._eventService
          .getEvents()
          .subscribe(
            (res) => {
              console.log("The response is  " + JSON.stringify(res));
              this.events = res;
            },
            (err) => console.log("There is an error" + JSON.stringify(err))
          );
  }
  
}
