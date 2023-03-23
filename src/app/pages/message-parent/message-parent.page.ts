import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-parent',
  templateUrl: './message-parent.page.html',
  styleUrls: ['./message-parent.page.scss'],
})
export class MessageParentPage implements OnInit {
  messageIsEmpty: boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnBack() {
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }
}
