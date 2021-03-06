import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult } from '@ionic-native/barcode-scanner';

import { ItemDetailPage } from '../item-detail/item-detail';
import { GESTURE_PRIORITY_SLIDING_ITEM } from 'ionic-angular/gestures/gesture-controller';

@Component({
  selector: 'page-scanned',
  templateUrl: 'scanned.html',
})
export class ScannedPage {

  public items = [];

  result: BarcodeScanResult;
  resultTwo: any = '';
  constructor(private barcode: BarcodeScanner, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScannedPage');

    this.items = [
      {title: 'Plastic Bottle', description: 'Recycle Bin', img: 'assets/imgs/bottle.png'},
      {title: 'Pizza Box', description: 'Compost Bin', img: 'assets/imgs/pizzabox.png'},
      {title: 'Ziplock', description: 'Landfill Bin', img: 'assets/imgs/ziplock.png'}
    ];
  }


  async scanBarcode(){
    try{

        const options: BarcodeScannerOptions = {
          prompt: 'Point your camera at a barcode',
          torchOn: true
        }

        this.result = await this.barcode.scan(options);
            if(this.result.text = '096619756803'){
            this.resultTwo = '096619756803'; // Kirkland waterbottle
            let itemTemp = 0;
            this.viewItem(this.items[itemTemp]);
            } // if
        
      } catch(error){ 
      console.log(error);
    }
  } // asyncScanbarcode


  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }
} // class
