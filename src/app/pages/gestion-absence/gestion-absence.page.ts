import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonModal, ModalController, ToastController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ModalAbsencePage } from 'src/app/components/modal-absence/modal-absence.page';
import { Absence } from 'src/app/modeles/Absence';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gestion-absence',
  templateUrl: './gestion-absence.page.html',
  styleUrls: ['./gestion-absence.page.scss'],
})
export class GestionAbsencePage implements OnInit {
  @ViewChild(IonModal)
  name!: string;
  absences!: Absence[];
  absence!: Absence;
  absenceIsEmpty: boolean = true;
  searchItem!: string;

  dateParser(date: Date) {
    let newDate = new Date(date).toLocaleDateString('fr-FR', {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    return newDate;
  }

  nameStudent(student: any) {
    return student.id === 2;
  }

  constructor(private dataService: DataService,
    private modalCtrl: ModalController,
    private router: Router) 
  { 
    this.dataService.getAbsences().subscribe(res => {
      console.log(res);
      this.absences = res;
      this.absenceIsEmpty = false;
    });
  }

  ngOnInit() {
  }

  async addAbsence() {
    const modal = await this.modalCtrl.create({
      component: ModalAbsencePage,
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
