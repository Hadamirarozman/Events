import { Component } from '@angular/core';
import {  NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


@Component({
  selector: 'page-popup-event',
  templateUrl: 'popup-event.html',
})
export class PopupEventPage {
  
  serviceData: string;

  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
  minDate = new Date().toISOString();

  
  data = { date:"", type:"", description:"", amount:0 };
  

  constructor( 
    public navCtrl: NavController, 
    private navParams: NavParams, 
    private sqlite: SQLite,
    public viewCtrl: ViewController ) 
    
    
    {
  // Receiving data via navController
      this.navParams.get('param1'); 
      this.navParams.get('param2');
    // Receiving data via Service
  

    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
  }
 
  cancel() {
    this.viewCtrl.dismiss();
  }
 
  save() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
    
    
        db.executeSql('create table saving(name VARCHAR(32))', {})
          .then(() => console.log('Executed SQL'))
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }

 

}
