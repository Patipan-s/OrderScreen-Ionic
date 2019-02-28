import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, AbstractControl } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {

  public cart : Array<any> = []
  public consumerForm : FormGroup
  public totalPrice : number 
  public totalPiece : number 

  public name: AbstractControl
  public tel: AbstractControl
  public email: AbstractControl
  public address: AbstractControl

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController) {
   
    this.cart = this.navParams.get('cart');
    this.consumerForm = this.navParams.get('consumerForm');
    this.totalPrice = this.navParams.get('totalPrice');
    this.totalPiece = this.navParams.get('totalPiece');

    this.name = this.consumerForm.controls['name'].value
    this.tel = this.consumerForm.controls['tel'].value
    this.email = this.consumerForm.controls['email'].value
    this.address = this.consumerForm.controls['address'].value
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmPage');
    this.presentLoading();
    // console.log(this.cart);
    // console.log(this.consumerForm);
    // console.log(this.totalPrice);
    // console.log(this.totalPiece);
    // console.log(this.name);
    // console.log(this.tel);
    // console.log(this.email);
    // console.log(this.address);
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 100
      // duration: 1000
    });
    loader.present();
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Make sure that is your right informations',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: () => {
            this.nextPage()
          }
        }
      ]
    });
    alert.present(); 
  }

  nextPage(){
    this.navCtrl.push(HomePage)
  }

}
