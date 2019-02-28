import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-cristans',
  templateUrl: './cristans.page.html',
  styleUrls: ['./cristans.page.scss'],
})
export class CristansPage implements OnInit {

  ngOnInit() {
  }

  constructor(private iab: InAppBrowser,) { }

  openBlank(){
    this.iab.create('https://www.youtube.com/watch?v=qTAcq-Z_l9A&t=1448s', '_blank');
  }
  openSystem(){
    this.iab.create('https://www.youtube.com/watch?v=qTAcq-Z_l9A&t=1448s', '_system');
  }

}
