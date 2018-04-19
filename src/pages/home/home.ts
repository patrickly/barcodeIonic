import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions, BarcodeScanResult } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  result: BarcodeScanResult;

  constructor(private barcode: BarcodeScanner, public navCtrl: NavController) {}

  async scanBarcode(){
    try{

        const options: BarcodeScannerOptions = {
          prompt: 'Point your camera at a barcode',
          torchOn: true
        }

        this.result = await this.barcode.scan(options);
    
      } catch(error){
      console.log(error);
    }
  }

}
