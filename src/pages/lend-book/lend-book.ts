import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Stuff } from '../../models/Stuff';
import { StuffService } from '../../services/stuff.service';

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit {
    
  index: number;
  book: Stuff;

  constructor( public navParams: NavParams,
               public viewCtrl: ViewController,
               public stuffService: StuffService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.stuffService.bookList[this.index];
  }
    
  dismissModal() {
      this.viewCtrl.dismiss();
  }
    
  onToggleBook() {
      this.book.isLended = !this.book.isLended;
  }

}