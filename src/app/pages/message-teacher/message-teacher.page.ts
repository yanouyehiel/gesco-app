import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-teacher',
  templateUrl: './message-teacher.page.html',
  styleUrls: ['./message-teacher.page.scss'],
})
export class MessageTeacherPage implements OnInit {
  messageIsEmpty: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnBack() {
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }
}
