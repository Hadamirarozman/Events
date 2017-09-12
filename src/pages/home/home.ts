import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public date: string;
  public events;

  constructor(private http: Http) {}

  getData() {
    // Buat permintaan pada API
    this.http.get('https://g5mhbciwo5.execute-api.ap-southeast-1.amazonaws.com/stage/events?eventdate='+this.date)
    // Pemetaan
    .map(res => res.json())
    // Subscribe
    .subscribe(
        data => {
          this.events = data;
        },
        // Jika ada error
        err => console.log("error is "+err),
        // Jika request complete
        () => console.log('read events Complete '+ this.events)
    );
  }

}
