import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Stuff } from '../../models/Stuff';
import { StuffService } from '../../services/stuff.service';

@IonicPage()
@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage /*implements OnInit*/ {
    
  index: number;
  cd: Stuff;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public stuffService: StuffService) {
  }

  ngOnInit() {
      this.index = this.navParams.get('index');
      this.cd = this.stuffService.cdList[this.index];
  }

  dismissModal() {
      this.viewCtrl.dismiss();
  }

  onToggleCd() {
      this.cd.isLended = !this.cd.isLended;
  }

}
