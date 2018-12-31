import { Component } from '@angular/core';
import { MenuController, IonicPage, ModalController } from 'ionic-angular';
import { LendBookPage } from '../lend-book/lend-book';
import { Stuff } from '../../models/Stuff';
import { StuffService } from '../../services/stuff.service';

@IonicPage()
@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

  bookList: Stuff[];

  constructor(private modalCtrl: ModalController,
              private stuffService: StuffService,
              private menuCtrl: MenuController) {
  }

  ionViewWillEnter() {
      this.bookList = this.stuffService.bookList.slice();
  }
    
  onLoadBook(index: number) {
    let modal = this.modalCtrl.create(LendBookPage,{index: index});
    modal.present();
  }

  onToggleMenu() {
      this.menuCtrl.open();
  }

}