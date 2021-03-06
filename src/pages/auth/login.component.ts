import {Component} from "@angular/core";
import {CognitoCallback, LoggedInCallback} from "../../providers/cognito.service";
import {AlertController, NavController, NavParams, MenuController} from "ionic-angular";
import {UserLoginService} from "../../providers/userLogin.service";
import {EventsService} from "../../providers/events.service";
//import {ControlPanelComponent} from "../controlpanel/controlpanel";
import {RegisterComponent} from "./register.component";
import {ForgotPasswordStep1Component} from "./forgotPassword1.component";
import { TabsPage } from '../../pages/tabs/tabs';
@Component({
    templateUrl: 'login.html'
})
export class LoginComponent implements CognitoCallback, LoggedInCallback {
    email: string;
    password: string;

    constructor(public nav: NavController,
                public navParam: NavParams,
                public alertCtrl: AlertController,
                public userService: UserLoginService,
                public eventService: EventsService,
                public menu: MenuController) {
        console.log("LoginComponent constructor");
        //this.menu.enable(false);
        if (navParam != null && navParam.get("email") != null)
            this.email = navParam.get("email");

    }

    ionViewLoaded() {
        console.log("Checking if the user is already authenticated. If so, then redirect to the secure site");
        this.userService.isAuthenticated(this);
    }

    signMeIn() {
        console.log("in onLogin");
        if (this.email == null || this.password == null) {
            this.doAlert("Error", "All fields are required");
            return;
        }
        this.userService.authenticate(this.email, this.password, this);
    }

    cognitoCallback(message: string, result: any) {
        if (message != null) { //error
            this.doAlert("Error", message);
            console.log("result: " + message);
        } else { //success
            console.log("Redirect to Home");
            this.nav.setRoot(TabsPage);
        }
    }

    isLoggedInCallback(message: string, isLoggedIn: boolean) {
        console.log("The user is logged in: " + isLoggedIn);
        if (isLoggedIn) {
            this.eventService.sendLoggedInEvent();
            //this.nav.setRoot(ControlPanelComponent);
            this.nav.setRoot(TabsPage);
        }
    }

    navToRegister() {
        this.nav.push(RegisterComponent);
    }

    navToForgotPassword() {
        this.nav.push(ForgotPasswordStep1Component);
    }

    doAlert(title: string, message: string) {

        let alert = this.alertCtrl.create({
            title: title,
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    }

}