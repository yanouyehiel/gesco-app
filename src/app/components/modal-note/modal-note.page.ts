import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Note } from 'src/app/modeles/Note';
import { Student } from 'src/app/modeles/Student';
import { Matiere } from 'src/app/modeles/Matiere';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modal-note',
  templateUrl: './modal-note.page.html',
  styleUrls: ['./modal-note.page.scss'],
})
export class ModalNotePage implements OnInit {
  note: Note = {
    sequence: '',
    matiere: '',
    student: '',
    note: '',
    annee_scolaire: ''
  }
  sequences!: string[];
  students!: Student[];
  matieres!: Matiere[];

  constructor(private dataService: DataService,
    private toastCtrl: ToastController) {
    this.sequences = ["1", "2", "3", "4", "5"];
    this.dataService.getStudents().subscribe(res => {
      console.log(res);
      this.students = res;
    });
    this.dataService.getMatieres().subscribe(res => {
      console.log(res);
      this.matieres = res;
    });
  }

  ngOnInit() {
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastCtrl.create({
      message: 'La note a ete enregistree !',
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  async updateNote() {
    this.dataService.updateNote(this.note);
    const toast = await this.toastCtrl.create({
      message: 'Note modifiée avec succès !',
      duration: 1500
    });
    toast.present();
  }

  async addNote(note: Note) {
    await this.dataService.addNote({
      sequence: note.sequence,
      matiere: note.matiere,
      student: note.student,
      note: note.note,
      annee_scolaire: note.annee_scolaire
    });
    this.presentToast('middle');
  }

}
