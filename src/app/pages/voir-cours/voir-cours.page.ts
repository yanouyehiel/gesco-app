import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cours } from 'src/app/modeles/Cours';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-voir-cours',
  templateUrl: './voir-cours.page.html',
  styleUrls: ['./voir-cours.page.scss'],
})
export class VoirCoursPage implements OnInit {
  coursIsEmpty: boolean = true;
  cours!: Cours[];
  searchItem!: string;
  
  constructor(private router: Router,
    private dataService: DataService) {
    this.dataService.getCours().subscribe(res => {
      console.log(res);
      this.cours = res;
      this.coursIsEmpty = false;
    });
  }

  ngOnInit() {
  }

  dateParser(date: Date) {
    let newDate = new Date(date).toLocaleDateString('fr-FR', {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    return newDate;
  }

  btnBack() {
    this.router.navigateByUrl('/home-parent', { replaceUrl: true });
  }

}
