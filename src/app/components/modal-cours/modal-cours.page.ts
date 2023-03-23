import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Cours } from 'src/app/modeles/Cours';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modal-cours',
  templateUrl: './modal-cours.page.html',
  styleUrls: ['./modal-cours.page.scss'],
})
export class ModalCoursPage implements OnInit {
  cours: Cours = {
    titre: '',
    description: '',
    date: new Date()
  }

  constructor(private dataService: DataService, private toastCtrl: ToastController) {
    
  }

  ngOnInit() {
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastCtrl.create({
      message: 'Le cours a bien été enregistré !',
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  async addCours(cours: Cours) {
    await this.dataService.addCours({titre: cours.titre, date: cours.date, description: cours.description});
    this.presentToast('middle');
  }

}
