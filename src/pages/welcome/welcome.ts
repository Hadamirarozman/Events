import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {LoginComponent} from "../../pages/auth/login.component";
import {RegisterComponent} from "../../pages/auth/register.component";
import {LoggedInCallback} from "../../providers/cognito.service";
import {EventsService} from "../../providers/events.service";
import { TabsPage } from '../../pages/tabs/tabs';
//import {AwsUtil} from "../../providers/aws.service";
//import {CognitoUtil} from "../../providers/cognito.service";
import {UserLoginService} from "../../providers/userLogin.service";



@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage implements LoggedInCallback{
  public loginpage = LoginComponent;
  public registerPage = RegisterComponent;


  constructor( public navCtrl: NavController, public eventService: EventsService,public userService: UserLoginService ) {

    console.log('welcome');
    
    
  }


  isLoggedInCallback(message: string, isLoggedIn: boolean) {
    console.log("The user is logged in: " + isLoggedIn);
    if (isLoggedIn) {
        this.eventService.sendLoggedInEvent();
        //this.nav.setRoot(ControlPanelComponent);
        this.navCtrl.setRoot(TabsPage);
    }else{
      console.log('User not loggedin');
      this.eventService.sendLoggedInEvent();
      //this.nav.setRoot(ControlPanelComponent);
      //this.navCtrl.setRoot(WelcomePage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
    this.userService.isAuthenticated(this);

  }
  login(){
    this.navCtrl.push(this.loginpage);
   }
 
   signup(){
    this.navCtrl.push(this.registerPage, {}, {animate:false});
   }

   


}
