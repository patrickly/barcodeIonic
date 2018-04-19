import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult } from '@ionic-native/barcode-scanner';

import {  NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item'
import { ItemDetailPage } from '../item-detail/item-detail';
import {ScannedPage} from '../scanned/scanned';

import { Data } from '../../providers/data/data';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  public items = [];

  result: BarcodeScanResult;
  dataToEncode: string;

  constructor(private barcode: BarcodeScanner, public navCtrl: NavController,
      public dataService: Data) {



     }

ionViewDidLoad(){

  this.items = [
    {title: 'Plastic Bottle', description: 'Recycle'},
    {title: 'hi2', description: 'test2'},
    {title: 'hi3', description: 'test3'}
  ];
  
}


  async encodeData(){
    try{
      await this.barcode.encode(this.barcode.Encode.TEXT_TYPE, this.dataToEncode);
    } catch (error) {
      console.error(error);
    }
  } 


   scanBarcodez(){

        this.navCtrl.push(ScannedPage);

  }
  


  /*
  addItem(){
 
    let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
 
  }
 
  saveItem(item){
    this.items.push(item);
    this.dataService.save(this.items);
  }
 */
  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

}
