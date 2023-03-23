import { SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, IonCheckbox, LoadingController } from '@ionic/angular';
import { Parent } from 'src/app/modeles/Parent';
import { Teacher } from 'src/app/modeles/Teacher';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  parents!: Parent[];
  teachers!: Teacher[];
  isParent!: IonCheckbox;
  isTeacher!: IonCheckbox;
  email: string = '';
  password: string = '';

  constructor(
    private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private authService: AuthService,
    private router: Router
  ) {
    // this.isParent.checked = true;
    // this.isTeacher.checked = true;
  }

  ngOnInit() {
    
  }

  /*async register() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    const user = await this.authService.registerParent(this.parent);
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl('/home', { replaceUrl: true });
    } else {
      this.showAlert('L\'inscription a échouée', 'Veuillez réessayer !');
    }
  }*/

  async login() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    this.router.navigateByUrl('/home-parent', { replaceUrl: true });
    /*if (this.isParent.checked) {
      this.authService.loginParent().subscribe(res => {
        this.parents = res;
        console.log(res)
        if (res.find((element) => (element.email == this.email && element.password == this.password))) {
          this.router.navigateByUrl('/home', { replaceUrl: true });
        } else {
          this.showAlert('La connexion a échoué', 'Identifiants incorrects !');
        }
      });
    }
    if (this.isTeacher.checked) {
      this.authService.loginTeacher().subscribe(res => {
        console.log(res)
        this.teachers = res;
        if (res.find((element) => (element.email == this.email && element.password == this.password))) {
          this.router.navigateByUrl('/home', { replaceUrl: true });
        } else {
          this.showAlert('La connexion a échoué', 'Identifiants incorrects !');
        }
      });
    }*/
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
