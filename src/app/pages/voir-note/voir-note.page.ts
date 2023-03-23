import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/modeles/Note';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-voir-note',
  templateUrl: './voir-note.page.html',
  styleUrls: ['./voir-note.page.scss'],
})
export class VoirNotePage implements OnInit {
  noteIsEmpty: boolean = false;
  notes!: Note[];
  searchItem!: string;
  
  constructor(private dataService: DataService, private router: Router) {
    this.dataService.getNotes().subscribe(res => {
      console.log(res);
      this.notes = res;
      this.noteIsEmpty = false;
    });
  }

  ngOnInit() {
  }

  btnBack() {
    this.router.navigateByUrl('/home-parent', { replaceUrl: true });
  }
}
