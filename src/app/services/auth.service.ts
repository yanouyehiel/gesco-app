import { Injectable } from '@angular/core';
import { Firestore, collectionData, docData, addDoc } from '@angular/fire/firestore';
import { collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Parent } from '../modeles/Parent';
import { Router } from '@angular/router';
import { Teacher } from '../modeles/Teacher';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private currentParentSubject!: BehaviorSubject<Parent>;
  //public currentParent!: Observable<Parent>;

  constructor(
    private firestore: Firestore,
    private router: Router) {
    //this.currentParentSubject = new BehaviorSubject<Parent>(JSON.parse(localStorage.getItem('currentParent')));
    //this.currentParent = this.currentParentSubject.asObservable();
  }

  /*public get currentParentValue(): Parent {
    return this.currentParentSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(`auth/login`, { email, password })
    .pipe(map(user => {
      if (user && user.token) {
        // store user details in local storage to keep user logged in
        localStorage.setItem('currentUser', JSON.stringify(user.result));
        this.currentUserSubject.next(user);
      }
     
      return user;
    }));
  }*/

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
