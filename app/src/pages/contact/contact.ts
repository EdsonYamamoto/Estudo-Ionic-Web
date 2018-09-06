import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public dataJSON;
  public dataAux;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController) {
    let db = firebase.firestore();
    var auxint = 0;
    this.dataAux
    let auxString = '[';
    db.collection('teste').where("Deletado", "==", false).get().then(res => {
      res.forEach(item => {

        //pegue todos os dados do banco e crie um novo JSON com as informações de 
        auxint++;
        auxString += '{"id":"' + item.id + '","documento":' + JSON.stringify(item.data()) + '}';

        if (res.size != auxint)
          auxString += ', ';
      })
      auxString += ']';
      this.dataJSON = JSON.parse(auxString);

    }).catch(err => {
      console.log('algum erro ' + err);
    });
  }
  doAlert(a: string) {
    const alert = this.alertCtrl.create({
      title: 'ID',
      subTitle: 'Olha o ID: ' + a,
      buttons: [
        {
          text: 'Deleta seu arrombado',
          handler: () => {
            let db = firebase.firestore();
            db.collection('teste').doc(a).update({ Deletado: true, DataUpdate: firebase.firestore.FieldValue.serverTimestamp() }).then(res => {
              const alert1 = this.alertCtrl.create({
                title: 'Deletado',
                subTitle: 'Voce deletou o item: ' + a,
                buttons: [
                  {
                    text: 'Deletado',
                    handler: () => {
                      location.reload();
                    }
                  }
                ]
              })
              alert1.present();
            }).catch(() => {
              console.log("ocorreu um erro");
            })
          }
        },
        {
          text: 'deleta não',
          role: 'cancel',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }
}