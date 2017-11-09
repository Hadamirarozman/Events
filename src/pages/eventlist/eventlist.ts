import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { MapsPage } from '../maps/maps';
import { PopupEventPage } from '../popup-event/popup-event';
import { Http, Headers } from '@angular/http';
import * as moment from 'moment'; // import momentjs
import {LoggedInCallback, CognitoUtil, Callback} from "../../providers/cognito.service";
import {EventsService} from "../../providers/events.service";
import {LoginComponent} from "../../pages/auth/login.component";
import {UserLoginService} from "../../providers/userLogin.service";
import { ModalController } from 'ionic-angular';


export class GetAccess {
  public idToken: string;
}
@Component({
  selector: 'page-eventlist',
  templateUrl: 'eventlist.html',
})
export class EventlistPage implements LoggedInCallback {
  public date: string;
  public events;
  private todaydate = moment().format("YYYY-MM-DD");
  public getAccess: GetAccess = new GetAccess();
 
  

  constructor(public modalCtrl: ModalController, private http: Http, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,public eventService: EventsService, public cognitoUtil: CognitoUtil, public userService: UserLoginService, public nav: NavController) 
  {
  console.log('home');
  console.log('date: ', this.todaydate);
  this.userService.isAuthenticated(this);
  let headers = new Headers(
    {
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '*',  
        'Authorization': this.getAccess.idToken
    });
  this.http.get('https://g5mhbciwo5.execute-api.ap-southeast-1.amazonaws.com/stage/showevents?eventdate='+ this.todaydate, {headers:headers})
  .map(res => res.json())
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
  
isLoggedInCallback(message: string, isLoggedIn: boolean) {
  console.log("The user is logged in: " + isLoggedIn);
  if (isLoggedIn) {
      this.eventService.sendLoggedInEvent();
      //this.nav.setRoot(ControlPanelComponent);
      //this.nav.setRoot(TabsPage);
      this.cognitoUtil.getIdToken(new IdTokenCallback(this));
      console.log('token from dashboard here: ', this.getAccess.idToken);
  }else{
    this.eventService.sendLoggedInEvent();
    //this.nav.setRoot(ControlPanelComponent);
    this.nav.setRoot(LoginComponent);
  }
}

  presentLoadingText() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Opening Maps'
    });
  
    loading.present();
  
    setTimeout(() => {
      this.navCtrl.push(MapsPage);
    }, 1000);
  
    setTimeout(() => {
      loading.dismiss();
    }, 3000);
  
  }


  presentModal() {
    let modal = this.modalCtrl.create(PopupEventPage);
    modal.present();
  }
}
export class IdTokenCallback implements Callback {
  constructor(public home: EventlistPage) {

  }

  callback() {

  }

  callbackWithParam(result) {
      this.home.getAccess.idToken = result;
      
  }
}
