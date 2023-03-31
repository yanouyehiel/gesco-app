import { Injectable } from '@angular/core';
import { Firestore, collectionData, docData, addDoc } from '@angular/fire/firestore';
import { collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Parent } from '../modeles/Parent';
import { Router } from '@angular/router';
import { Teacher } from '../modeles/Teacher';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  endpointUrl = environment.baseUrl;
  LOGIN_URL = this.endpointUrl + '/login';
  LOGOUT_URL = this.endpointUrl + '/logout';
  
  user!: any;

  constructor(
    private firestore: Firestore,
    private router: Router,
    private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    })
  }

  login(_email: string, _password: string) {

    const loginData = {
      email: _email,
      password: _password,
      grant_type: 'password',
      client_id: 2,
      client_secret: 'EHuLmVk4981Ys8Jj6FpwSD1FEMvSqgMM0auvQaet',
      scope: '*'
    }

    return new Observable<boolean>((observer) => {
      this.http.post(this.LOGIN_URL, loginData, this.httpOptions).subscribe(result => {
        observer.next(true);
        observer.complete();
      }, error => {
        observer.error(false);
        observer.complete();
      })
    })
    //return this.http.post('http://localhost:8000/api-gesco/login', data);
  }

  profile() {
    return this.http.get('http://localhost:8000/api-gesco/profile').subscribe(
      (result: any) => {
        this.user = result.user
        if (this.user.role_id == 2) {
          this.router.navigate(['/home'])
        }
        if (this.user.role_id == 3) {
          this.router.navigate(['/home-parent'])
        }
      }, err => {
        localStorage.removeItem('token')
        this.router.navigate(['/login'])
      }
    );
  }

  logout() {
    return new Observable<boolean>((observer) => {
      this.http.get(this.LOGOUT_URL).subscribe(result => {
        observer.next(true);
        observer.complete();
      }, error => {
        observer.error(false);
        observer.complete();
      })
    })
    //return this.http.get('http://localhost:8000/api-gesco/logout');
  }

  async registerParent(parent: Parent) {
    try {
      const parentRef = collection(this.firestore, 'parents');
      return addDoc(parentRef, parent);
    } catch (e) {
      return null;
    }
  }

  loginParent(): Observable<Parent[]> {
    const parentRef = collection(this.firestore, 'parents');
    return collectionData(parentRef, { idField: 'id'}) as Observable<Parent[]>;
  }

  loginTeacher(): Observable<Teacher[]> {
    const parentRef = collection(this.firestore, 'teachers');
    return collectionData(parentRef, { idField: 'id'}) as Observable<Teacher[]>;
  }

  /*loginParent(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/home']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }

  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('Inscription réussie !');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }*/
}
