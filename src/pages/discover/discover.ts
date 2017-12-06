import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';

import * as moment from 'moment'; // import momentjs

//providers 
import {LoggedInCallback, CognitoUtil, Callback} from "../../providers/cognito.service";
import {EventsService} from "../../providers/events.service";
import {UserLoginService} from "../../providers/userLogin.service";

//operator Api
import 'rxjs/add/operator/map';

//pages
//import { EventlistPage } from "../../pages/eventlist/eventlist";
import { LoginComponent } from "../../pages/auth/login.component";


export class GetAccess {
  public idToken: string;
}
@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html',
})
export class DiscoverPage implements LoggedInCallback {

  categoryUrl : string = 'https://g5mhbciwo5.execute-api.ap-southeast-1.amazonaws.com/stage/eventsbycategory?category=<category>';
  categories : any;
  items : any; 
  public date;
  public events;
  private todaydate = moment().format("YYYY-MM-DD");
  public getAccess: GetAccess = new GetAccess();
 

  constructor( 


    
    private http: Http, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadingCtrl: LoadingController, 
    public nav: NavController,  
    public eventService: EventsService, 
    public cognitoUtil: CognitoUtil, 
    public userService: UserLoginService,
    public modalCtrl: ModalController
  
  )
  {
    this.loadCategories();
    console.log('home');
    console.log('date: ', this.todaydate);
    this.userService.isAuthenticated(this);
    let headers = new Headers(
      {
          'Content-Type': 'application/json', 
          'Access-Control-Allow-Origin': '*',  
          'Authorization': this.getAccess.idToken
      });
    this.http.get('https://g5mhbciwo5.execute-api.ap-southeast-1.amazonaws.com/stage/searchcategory', {headers:headers})
    .map(res => res.json())
    .subscribe(
        data => {
          this.events = data;
          console.log('category here: ',data);
        },
        // Jika ada error
        err => console.log("error is "+err),
        // Jika request complete
        () => console.log('read events Complete '+ this.events)
    );
  
  }





   //Our function to load categories
  loadCategories() {
      (
      {
          'Content-Type': 'application/json', 
          'Access-Control-Allow-Origin': '*',  
          'Authorization': this.getAccess.idToken
      });
    this.http.get( this.categoryUrl )
      .map(res => res.json())
      .subscribe(data => {
        let categoryArray = {};
 
        data.forEach(function(item){
          categoryArray[item.id] = item.name;
        })
 
        this.categories = categoryArray;
 
        console.log(categoryArray);
      });
  }
 


  //authentication token


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

  
  }export class IdTokenCallback implements Callback {
    constructor(public home: DiscoverPage) {
  
    }
  
    callback() {
  
    }
  
    callbackWithParam(result) {
        this.home.getAccess.idToken = result;
        
    }
    
  }
  
  