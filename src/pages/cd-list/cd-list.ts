import { Component } from '@angular/core';
import { IonicPage, MenuController, ModalController, NavParams } from 'ionic-angular';
import { LendCdPage } from '../lend-cd/lend-cd';
import { Stuff } from '../../models/Stuff';
import { StuffService } from '../../services/stuff.service';

@IonicPage()
@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage{

  cdList: Stuff[];

  constructor(private modalCtrl: ModalController,
              private stuffService: StuffService,
              private menuCtrl: MenuController) {
  }

  ionViewWillEnter() {
    this.cdList = this.stuffService.cdList.slice();
  }
    
  onLoadCd(index: number) {
      let modal = this.modalCtrl.create(LendCdPage,{index:index});
      modal.present();
  }
    
  onToggleMenu() {
      this.menuCtrl.open();
  }

}
