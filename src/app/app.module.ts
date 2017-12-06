import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
//import { Toast } from '@ionic-native/toast';

//local storage 
import { SQLite } from '@ionic-native/sqlite';

//app pages and component
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventlistPage} from '../pages/eventlist/eventlist';
import { WelcomePage } from '../pages/welcome/welcome';
import { MapsPage } from '../pages/maps/maps';
import { DiscoverPage } from '../pages/discover/discover';
import { TabsPage } from '../pages/tabs/tabs';
import { CalendarPage } from '../pages/calendar/calendar';
import { PopupEventPage } from '../pages/popup-event/popup-event';
import { SearchPage } from '../pages/search/search';
import { SocialmediaPage } from '../pages/socialmedia/socialmedia';

//aws cognito auth pages
import {ControlPanelComponent} from "../pages/controlpanel/controlpanel";
import {LoginComponent} from "../pages/auth/login.component";
import {RegisterComponent} from "../pages/auth/register.component";
import {ConfirmRegistrationComponent} from "../pages/auth/confirmRegistration.component";
import {ResendCodeComponent} from "../pages/auth/resendCode.component";
import {ForgotPasswordStep1Component} from "../pages/auth/forgotPassword1.component";
import {ForgotPasswordStep2Component} from "../pages/auth/forgotPassword2.component";
import {LogoutComponent} from "../pages/auth/logout.component";


// aws cognito services
import {CognitoUtil} from "../providers/cognito.service";
import {AwsUtil} from "../providers/aws.service";
import {EventsService} from "../providers/events.service";
import {UserLoginService} from "../providers/userLogin.service";
import {UserParametersService} from "../providers/userParameters.service";
import {UserRegistrationService} from "../providers/userRegistration.service";


//plugins
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NgCalendarModule } from 'ionic2-calendar';
import { FilterProvider } from '../providers/filter/filter';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EventlistPage,
    WelcomePage,
    MapsPage,
    DiscoverPage,
    TabsPage,
    CalendarPage,
    SearchPage,
    PopupEventPage,
    SocialmediaPage,

    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ConfirmRegistrationComponent,
    ResendCodeComponent,
    ForgotPasswordStep1Component,
    ForgotPasswordStep2Component,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp),
    IonicPageModule.forChild(EventlistPage),
  ],



  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EventlistPage,
    WelcomePage,
    MapsPage,
    DiscoverPage,
    PopupEventPage,
    TabsPage,
    SearchPage,
    CalendarPage,
    SocialmediaPage,


    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ConfirmRegistrationComponent,
    ResendCodeComponent,
    ForgotPasswordStep1Component,
    ForgotPasswordStep2Component,
    ControlPanelComponent
  ],


  providers: [
    StatusBar,
    SplashScreen,
    AwsUtil,
    UserLoginService,
    UserParametersService,
    UserRegistrationService,
    EventsService,
    CognitoUtil,
    SocialSharing,
    SQLite,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FilterProvider,
    //Toast
  ]
})
export class AppModule {}
