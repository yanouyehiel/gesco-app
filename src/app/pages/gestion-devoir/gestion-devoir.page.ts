import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { ModalDevoirPage } from 'src/app/components/modal-devoir/modal-devoir.page';
import { Devoir } from 'src/app/modeles/Devoir';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-devoir',
  templateUrl: './gestion-devoir.page.html',
  styleUrls: ['./gestion-devoir.page.scss'],
})
export class GestionDevoirPage implements OnInit {
  @ViewChild(IonModal)
  modal!: IonModal;
  devoirs!: Devoir[];
  devoirIsEmpty: boolean = false;
  searchItem!: string;

  constructor(private modalCtrl: ModalController,
    private dataService: DataService,
    private router: Router) { 
      this.dataService.getDevoirs().subscribe(res => {
        console.log(res);
        this.devoirs = res;
        this.devoirIsEmpty = false;
      });
  }

  ngOnInit() {
  }

  async addDevoir() {
    const modal = await this.modalCtrl.create({
      component: ModalDevoirPage,
      componentProps: { },
      breakpoints: [0, 0.5, 1],
      initialBreakpoint: 0.6
    });
    modal.present();
  }

  btnBack() {
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }
}
