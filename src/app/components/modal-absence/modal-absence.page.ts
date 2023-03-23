import { Component, OnInit } from '@angular/core';
import { Absence } from 'src/app/modeles/Absence';
import { Student } from 'src/app/modeles/Student';
import { ToastController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modal-absence',
  templateUrl: './modal-absence.page.html',
  styleUrls: ['./modal-absence.page.scss'],
})
export class ModalAbsencePage implements OnInit {
  absence: Absence = {
    student: '',
    date: new Date(),
    periode: ''
  };

  students!: Student[];
  periodes: string[] = ["7h30-9h30", "10h-12h", "12h30-15h"];
  
  constructor(private dataService: DataService, private toastCtrl: ToastController) {
    this.dataService.getStudents().subscribe(res => {
      console.log(res);
      this.students = res;
    });
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastCtrl.create({
      message: 'L\'absence a bien été enregistrée !',
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  ngOnInit() {
    
  }

  async addAbsence(absence: Absence) {
    await this.dataService.addAbsence({student: absence.student, date: absence.date, periode: absence.periode});
    this.presentToast('middle');
  }

}
