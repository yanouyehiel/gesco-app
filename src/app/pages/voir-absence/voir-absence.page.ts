import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Absence } from 'src/app/modeles/Absence';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-voir-absence',
  templateUrl: './voir-absence.page.html',
  styleUrls: ['./voir-absence.page.scss'],
})
export class VoirAbsencePage implements OnInit {
  absences!: Absence[];
  absenceIsEmpty: boolean = true;
  searchItem!: string;
  name!: string;

  dateParser(date: Date) {
    let newDate = new Date(date).toLocaleDateString('fr-FR', {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    return newDate;
  }

  getNameStudent(id: number) {
    this.dataService.getNameStudent().subscribe(
      (result: any) => {
        this.name = result.children.nom + ' ' + result.children.prenom
      },
      error => {
        console.log(error)
      }
    )
  }
  
  constructor(private router: Router,
    private dataService: DataService) {
    this.dataService.getAbsences().subscribe(res => {
      console.log(res);
      this.absences = res;
      this.absenceIsEmpty = false;
    });
  }

  ngOnInit() {
  }

  btnBack() {
    this.router.navigateByUrl('/home-parent', { replaceUrl: true });
  }

}
