import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-option',
  templateUrl: 'option.html',
})
export class OptionPage {

  public Transactions : any
  public Transaction : Array<string> = [
    'Add','Delete'
  ]
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.Transactions = 'Add'
  }

}
