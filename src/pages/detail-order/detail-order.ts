import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmPage } from '../confirm/confirm';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/**
 * Generated class for the DetailOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-order',
  templateUrl: 'detail-order.html',
})
export class DetailOrderPage {

  public cart : Array<any> = []
  public totalPrice : number = 0
  public badge : number = 0
  public detailShow : boolean = true
  public consumerForm : FormGroup
  public totalPiece : number = 0
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public formBuilder: FormBuilder) {

    this.cart = this.navParams.get('cart');
    this.checkBadge()

    this.consumerForm = this.formBuilder.group({
      name: ['', Validators.required],
      tel: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
      address: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailOrderPage');
    console.log(this.cart);
    this.checkTotalPrice()
  }

  increaseAmount(item){
    item.amount += 1
    this.checkTotalPrice()
  }

  decreaseAmount(item){
    item.amount -= 1
    this.checkTotalPrice()
  }

  delCart(index){
    this.cart.splice(index, 1)
    this.checkTotalPrice()
  }

  checkTotalPrice(){
    this.totalPrice = 0
    this.cart.forEach(element => {
      this.totalPrice = this.totalPrice + (element.cost * element.amount)
    })
    this.checkBadge()
    this.checkPiece()
    console.log(this.totalPiece)
    console.log(this.totalPrice)
  }

  checkBadge(){
    this.badge = this.cart.length
    //why cannot use expression "this.badge = 0"
    if(this.badge < 1){
      this.detailShow = true
    }else{
      this.detailShow = false
    }
  }

  checkPiece(){
    this.totalPiece = 0
    this.cart.forEach(element => {
      this.totalPiece = this.totalPiece + element.amount
    });
  }

  nextPage(){
    if(this.consumerForm.valid){
      this.navCtrl.push(ConfirmPage, {  cart: this.cart,
                                        consumerForm: this.consumerForm,
                                        totalPrice: this.totalPrice,
                                        totalPiece: this.totalPiece })
    }else{
      console.log('Invalid FormGroup')
    }
  }
  
}
