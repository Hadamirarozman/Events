import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';



@Component({
  selector: 'page-popup-event',
  templateUrl: 'popup-event.html',
})
export class PopupEventPage {

  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
  minDate = new Date().toISOString();
  param1: string;
  param2: string;
  param3: Date;


  constructor(private sqlite: SQLite, public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController) {
  // Receiving data via navController
        this.param1 = navParams.get('param1'); 
        this.param2 = navParams.get('param2');
        this.param3 = navParams.get('param3');
    
    
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
  }
 
  cancel() {
    this.viewCtrl.dismiss();
  }
 
  save() {
    this.viewCtrl.dismiss(this.event);
  }
 
}