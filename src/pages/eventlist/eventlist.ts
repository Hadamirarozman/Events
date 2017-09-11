import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MapsPage } from '../maps/maps';

@IonicPage()
@Component({
  selector: 'page-eventlist',
  templateUrl: 'eventlist.html',
})
export class EventlistPage {
  event: string = "food";
  isAndroid: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
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

}
