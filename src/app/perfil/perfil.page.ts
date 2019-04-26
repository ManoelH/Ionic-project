import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  imagem;
  constructor(private menuCtrl:MenuController, private camera:Camera) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  tirarFoto(){
    this.camera.getPicture({
      quality:100,
      allowEdit:true,
      saveToPhotoAlbum:true,
      encodingType: this.camera.EncodingType.JPEG,
      destinationType: this.camera.DestinationType.DATA_URL
    }).then(foto => {
      this.imagem = 'data:image/jpeg;base64,' + foto;
   });
  }
}
