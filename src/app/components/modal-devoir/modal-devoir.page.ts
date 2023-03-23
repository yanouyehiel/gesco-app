import { Component, OnInit } from '@angular/core';
import { Devoir } from 'src/app/modeles/Devoir';
import { Livre } from 'src/app/modeles/Livre';
import { ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modal-devoir',
  templateUrl: './modal-devoir.page.html',
  styleUrls: ['./modal-devoir.page.scss'],
})
export class ModalDevoirPage implements OnInit {
  devoir: Devoir = {
    livre: '',
    numero_page: '',
    numero_exo: ''
  };
  livres!: Livre[];

  constructor(private dataService: DataService, private toastCtrl: ToastController) {
    this.dataService.getBooks().subscribe(res => {
      console.log(res);
      this.livres = res;
    });
  }

  ngOnInit() {
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastCtrl.create({
      message: 'Le devoir a été enregistré !',
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  async addDevoir(devoir: Devoir) {
    await this.dataService.addDevoir({livre: devoir.livre, numero_page: devoir.numero_page, numero_exo: devoir.numero_exo});
    this.presentToast('middle');
  }

}
