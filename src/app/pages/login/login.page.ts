import { SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonCheckbox, LoadingController } from '@ionic/angular';
import { Parent } from 'src/app/modeles/Parent';
import { Teacher } from 'src/app/modeles/Teacher';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  wrongCredentials = false;

  constructor(
    private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {
  }

  ngOnInit() {
    
  }

  goToHomeTeacher() {
    this.router.navigateByUrl('/home', { replaceUrl: true });
  }

  goToHomeParent() {
    this.router.navigateByUrl('/home-parent', { replaceUrl: true });
  }

  async login() {
    this.wrongCredentials = false;
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.authService.login(this.email, this.password).subscribe((result: any) => {
      localStorage.setItem('token', result.access_token)
      this.goToHomeTeacher()
    }, error => {
      this.wrongCredentials = true;
    })
    await loading.dismiss();
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['Ok'],
    });
    await alert.present();
  }

}
