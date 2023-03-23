import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-parent',
  templateUrl: './home-parent.page.html',
  styleUrls: ['./home-parent.page.scss'],
})
export class HomeParentPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openMenu() {
    this.router.navigateByUrl('/menu-parent', { replaceUrl: true });
  }

}
