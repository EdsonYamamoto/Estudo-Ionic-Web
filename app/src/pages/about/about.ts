import { Component, Injectable } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
//import { HTTP } from '@ionic-native/http';

@Injectable()
export class MyService {
  constructor(private http: HttpClient) { }
}
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public platform: Platform;
  public httpClient: HttpClient;
  constructor(
    public alertCtrl: AlertController,
    //public http: HTTP
  ) { };

  doAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }
  public dataJSON = [{
    titulo: "My Neighbor Totoro",
    descricao: "Hayao Miyazaki • 1988",
    botao: "View",
    img: "https://ionicframework.com/dist/preview-app/www/assets/img/thumbnail-totoro.png"
  },
  {
    titulo: "MOB",
    descricao: "1988",
    botao: "Vasd",
    img: "https://ionicframework.com/dist/preview-app/www/assets/img/thumbnail-totoro.png"
  },
  {
    titulo: "teste3",
    descricao: "1",
    botao: "oi",
    img: "https://ionicframework.com/dist/preview-app/www/assets/img/thumbnail-totoro.png"
  }]

  doPromptAlert() {
    const alert = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },

        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
            console.log(data);
          }
        }
      ]
    });
    alert.present();
  }

}
