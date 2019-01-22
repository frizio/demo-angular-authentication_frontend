import { Component, OnInit } from '@angular/core';
import { EventService } from './../../services/event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  public specialEvents = [];

  constructor(
    private _eventService: EventService
  ) { }

  ngOnInit() {
    this._eventService
          .getSpecialEvents()
          .subscribe(
            (res) => {
              console.log("The response is  " + JSON.stringify(res));
              this.specialEvents = res;
            },
            (err) => console.log("There is an error" + JSON.stringify(err))
          );
  }

}
