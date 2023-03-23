import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController, ToastController } from '@ionic/angular';
import { ModalCoursPage } from 'src/app/components/modal-cours/modal-cours.page';
import { Cours } from 'src/app/modeles/Cours';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-cours',
  templateUrl: './gestion-cours.page.html',
  styleUrls: ['./gestion-cours.page.scss'],
})
export class GestionCoursPage implements OnInit {
  @ViewChild(IonModal)
  modal!: IonModal;
  coursIsEmpty: boolean = true;
  cour: Cours = {
    titre: '',
    description: '',
    date: new Date()
  };
  cours!: Cours[];
  searchItem!: string;

  constructor(private dataService: DataService,
    private modalCtrl: ModalController,
    private router: Router) { 
      this.dataService.getCours().subscribe(res => {
        console.log(res);
        this.cours = res;
        this.coursIsEmpty = false;
      });
  }

  dateParser(date: Date) {
    let newDate = new Date(date).toLocaleDateString('fr-FR', {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    return newDate;
  }

  ngOnInit() {
  }

  async openModalCours() {
    const modal = await this.modalCtrl.create({
      component: ModalCoursPage,
      componentProps: { },
      breakpoints: [0, 0.5, 1],
      initialBreakpoint: 0.7
    });
    modal.present();
  }

  btnBack() {
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }

}
