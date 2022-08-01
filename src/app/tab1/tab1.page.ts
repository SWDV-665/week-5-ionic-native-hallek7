import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogServiceServicePage } from '../input-dialog-service.service';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
selector: 'app-tab1',
templateUrl: 'tab1.page.html',
styleUrls: ['tab1.page.scss'],
providers: [GroceriesServiceService]
})
export class Tab1Page {
title = 'Grocery List';

constructor(
  public navCtrl: NavController,
  public toastCtrl: ToastController,
  public alertCtrl: AlertController,
  public dataService: GroceriesServiceService,
  public inputDialogService: InputDialogServiceServicePage,
  public socialSharing: SocialSharing
  )
  {
}

loadItems() {
  //return this.dataService.getItems;
  return this.dataService.items;
}

async removeItem(item, index) {
  console.log('Removing Item -', item, index);
  const toast = await this.toastCtrl.create({
    message: 'Removing Item -' + index + '...',
    duration: 3000
  });
  await toast.present();
  this.dataService.removeItem(index);
}

async shareItem(item, index) {
  console.log('Sharing Item -', item, index);
  const toast = await this.toastCtrl.create({
    message: 'Sharing Item -' + index + '...',
    duration: 3000
  });
  await toast.present();
  const message ='Grocery Item - Name: ' + item.name + 'Quantity:' + item.quantity;
  const subject ='Shared via Groceries App';
 // Check if sharing via email is supported
this.socialSharing.share().then(() => {
  console.log('Message Shared');
  // Sharing via email is possible
}).catch((error) => {
  console.log('Message Share failed',error);
  // Sharing via email is not possible
});


}

async editItem(item, index) {
  console.log('Edit Item -', item, index);
  const toast = await this.toastCtrl.create({
    message: 'Editing Item -' + index + '...',
    duration: 3000
  });
  await toast.present();
  this.inputDialogService.showPrompt(item, index);
}
async addItem() {
  console.log('Adding Item');
  this.inputDialogService.showPrompt();
}
}
