import { Component, ViewChild } from '@angular/core';
import { Events, MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomePage } from '../pages/welcome/welcome';

// cognito pages and services
import {AwsUtil} from "../providers/aws.service";
import {ControlPanelComponent} from "../pages/controlpanel/controlpanel";
import {LoginComponent} from "../pages/auth/login.component";
import {LogoutComponent} from "../pages/auth/logout.component";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(NavController) navCtrl;
  public loginPage = LoginComponent;
  public homePage = ControlPanelComponent;
  public logoutPage = LogoutComponent;
  public settingsPage = ControlPanelComponent;
  public splash = new SplashScreen();
  public rootPage: any;
  public welcomePage = WelcomePage;

  //rootPage: any = WelcomePage;

  //pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar,
    public events: Events,
    public awsUtil: AwsUtil,
    public menu: MenuController) {
    
    this.initializeApp();

    // used for an example of ngFor and navigation
    /*
    this.pages = [
      { title: 'Home', component: TabsPage },
      { title: 'Discover', component: DiscoverPage}
    ];
    */

  }

  initializeApp() {
    this.platform.ready().then(() => {
     
      this.statusBar.styleDefault();
      this.awsUtil.initAwsService();
      //this.rootPage = this.loginPage;
      this.rootPage = this.welcomePage;
      console.log("Hiding splash screen");
      this.splash.hide();
      this.listenToLoginEvents();
      //this.menu.close();
    });
  }

  openPage(page) {
    
    //this.nav.setRoot(page.component); -- old code
    this.rootPage = page;
    // close the menu when clicking a link from the menu
    //this.menu.close();
  }
  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
        this.enableMenu(true);
    });


    this.events.subscribe('user:logout', () => {
        this.enableMenu(false);
    });
  }
  enableMenu(loggedIn) {
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }
}
