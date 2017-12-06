import { Component } from '@angular/core';
import { MenuController, IonicPage, NavController, NavParams, LoadingController, Platform } from 'ionic-angular';

import { MapsPage } from '../maps/maps';
import { PopupEventPage } from '../popup-event/popup-event';
import { FormBuilder } from '@angular/forms';

import { Http, Headers } from '@angular/http';
//import { SocialSharing } from '@ionic-native/social-sharing';

import * as moment from 'moment'; // import momentjs
import { LoggedInCallback, CognitoUtil, Callback } from "../../providers/cognito.service";
import { EventsService } from "../../providers/events.service";
import { LoginComponent } from "../../pages/auth/login.component";
import { UserLoginService } from "../../providers/userLogin.service";
import { ModalController } from 'ionic-angular';


export class GetAccess {
  public idToken: string;
}
@IonicPage()
@Component({
  selector: 'page-eventlist',
  templateUrl: 'eventlist.html',
})
export class EventlistPage implements LoggedInCallback {
  rootPage: any;
  items: Array<{ title: string, page: any }> = [];

  public date: string;
  public events;
  private todaydate = moment().format("YYYY-MM-DD");
  public getAccess: GetAccess = new GetAccess();
 
  

  constructor( 
    
    public menu: MenuController, 
    public platform: Platform, 
    public formBuilder: FormBuilder, 
    public modalCtrl: ModalController, 
    private http: Http, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadingCtrl: LoadingController,
    public eventService: EventsService, 
    public cognitoUtil: CognitoUtil, 
    public userService: UserLoginService, 
    public nav: NavController)
    
    
  {  
    this.rootPage = EventlistPage;
    this.items = [
      {
        title: 'Type One',
        page: 'PopupEventPage'
      },
     
    ];
        this.platform = platform;
        console.log('home');
        console.log('date: ', this.todaydate);
        this.userService.isAuthenticated(this);
        let headers = new Headers(
          {
              'Content-Type': 'application/json', 
              'Access-Control-Allow-Origin': '*',  
              'Authorization': this.getAccess.idToken
          });
        this.http.get('https://g5mhbciwo5.execute-api.ap-southeast-1.amazonaws.com/stage/eventsbycategory?category=<category>' ,{headers:headers})
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


//open maps 

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

  
//add data popout 

  addData() {
    this.navCtrl.push(PopupEventPage, {
      param1:"{{event.eventname}}" ,
      param2:"{{event.venue}}", 
      param3:"{{event.eventdate}}" 
    })
  }

//popout page 

itemTapped(event, item) {
  this.navCtrl.push(item.page);
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
