import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Devoir } from 'src/app/modeles/Devoir';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-voir-devoir',
  templateUrl: './voir-devoir.page.html',
  styleUrls: ['./voir-devoir.page.scss'],
})
export class VoirDevoirPage implements OnInit {
  devoirs!: Devoir[];
  devoirIsEmpty: boolean = false;
  searchItem!: string;
  
  constructor(private router: Router,
    private dataService: DataService) {
    this.dataService.getDevoirs().subscribe(res => {
      console.log(res);
      this.devoirs = res;
      this.devoirIsEmpty = false;
    });
  }

  ngOnInit() {
  }

  btnBack() {
    this.router.navigateByUrl('/home-parent', { replaceUrl: true });
  }
}
