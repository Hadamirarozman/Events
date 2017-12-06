import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { SQLite } from '@ionic-native/sqlite';  
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html'
})
export class CalendarPage {
  eventSource = [];
  viewTitle: string;
  isToday: boolean;
  selectedDay = new Date();
 
  calendar = {
    mode: 'month',
    currentDate: new Date(),
    formatDayHeader: 'E'
  };
  
  constructor(public navCtrl: NavController) { }
 

onViewTitleChanged(title) {
    this.viewTitle = title;
}
onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
}
changeMode(mode) {
    this.calendar.mode = mode;
}
today() {
    this.calendar.currentDate = new Date();
}
onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
        (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
}
onCurrentDateChanged(event:Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
}


onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
}
markDisabled = (date:Date) => {
    var current = new Date();
    current.setHours(0, 0, 0);
    return date < current;
};
}