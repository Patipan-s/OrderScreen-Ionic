import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { DetailOrderPage } from '../detail-order/detail-order';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public FoodType : any
  public badge : number = 0
  public cart : Array<string> = []
  public check : boolean = false
  public checkInclude : number
  // public products = [
  //   {id:1,name:'Original PorkSteak',cost:59},
  //   {id:2,name:'Black peppered Steak',cost:69},
  //   {id:3,name:'Avocado Shoulder Steak',cost:79},
  //   {id:4,name:'Avocado Chop Steak',cost:99},
  //   {id:5,name:'Crispy Chicken Steak',cost:79},
  //   {id:6,name:'Chicken Breast Steak',cost:99},
  // ]

  public productsTitle : Array<string> = [
    'MainCourse','Snack','Drink'
  ]

  // type1MainCourse/type2Snack/type3Drink
  public productsLists : any[][] = [
    [
      {type:1,id:1,name:'Original PorkSteak',cost:59},
      {type:1,id:2,name:'Black peppered Steak',cost:69},
      {type:1,id:3,name:'Avocado Shoulder Steak',cost:79},
      {type:1,id:4,name:'Avocado Chop Steak',cost:99},
      {type:1,id:5,name:'Crispy Chicken Steak',cost:79},
      {type:1,id:6,name:'Chicken Breast Steak',cost:99}
    ],
    [
      {type:2,id:1,name:'Stream Fish Ball',cost:49},
      {type:2,id:2,name:'French Fries',cost:59},
      {type:2,id:3,name:'Fish & Ships',cost:59},
      {type:2,id:4,name:'Chicken Fingers',cost:79},
      {type:2,id:5,name:'Baked Spanish and Cheese',cost:89},
      {type:2,id:6,name:'Croquette',cost:99}
    ],
    [
      {type:3,id:1,name:'Coke',cost:40},
      {type:3,id:2,name:'Iced Bugget',cost:15}
    ]
  ]

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController) {

  }

  ionViewWillEnter(){
    this.FoodType = 'MainCourse'
    this.checkBadge()
    console.log(this.cart)
  }

  addProduct(item){
    this.checkInclude = this.cart.indexOf(item)
    if(this.checkInclude == -1){
      item.amount = 1
      this.cart.push(item)
      console.log('Added Successful')
      console.log(this.cart)
      this.checkBadge()
    }else{
      this.toastCtrl.create({
        message: 'This Product has been added',
        showCloseButton: true,
        position: 'top',
        duration: 2000,
        closeButtonText: 'Done'
      }).present();
    }
  }

  checkBadge(){
    this.badge = this.cart.length
  }

  nextPage(){
    this.navCtrl.push(DetailOrderPage, { cart: this.cart })
  }

}
