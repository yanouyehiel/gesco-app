import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonModal, ModalController } from '@ionic/angular';
import { ModalNotePage } from 'src/app/components/modal-note/modal-note.page';
import { DataService } from 'src/app/services/data.service';
import { Note } from 'src/app/modeles/Note';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-note',
  templateUrl: './gestion-note.page.html',
  styleUrls: ['./gestion-note.page.scss'],
})
export class GestionNotePage implements OnInit {
  @ViewChild(IonModal)
  modal!: IonModal;
  noteIsEmpty: boolean = false;
  notes!: Note[];
  searchItem!: string;

  constructor(private modalCtrl: ModalController,
    private dataService: DataService,
    private router: Router) { 
      this.dataService.getNotes().subscribe(res => {
        console.log(res);
        this.notes = res;
        this.noteIsEmpty = false;
      });
  }

  ngOnInit() {
  }

  async openModalNote() {
    const modal = await this.modalCtrl.create({
      component: ModalNotePage,
      componentProps: { },
      breakpoints: [0, 0.5, 1],
      initialBreakpoint: 0.8
    });
    modal.present();
  }

  btnBack() {
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }

}
