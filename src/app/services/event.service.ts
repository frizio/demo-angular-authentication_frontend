import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl  = "http://localhost:3000/api/events";
  private _specialUrl = "http://localhost:3000/api/special";

  constructor(
    private _http: HttpClient
  ) { }

  getEvents() {
    return this._http.get<any>(this._eventsUrl);
  }

  
  getSpecialEvents() {
    return this._http.get<any>(this._specialUrl);
  }


}
