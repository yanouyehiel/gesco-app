import { Injectable } from '@angular/core';
import { Absence } from '../modeles/Absence';
import { Firestore, collectionData, docData, addDoc } from '@angular/fire/firestore';
import { collection, deleteDoc, doc, updateDoc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Cours } from '../modeles/Cours';
import { Devoir } from '../modeles/Devoir';
import { Note } from '../modeles/Note';
import { Student } from '../modeles/Student';
import { Livre } from '../modeles/Livre';
import { Matiere } from '../modeles/Matiere';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: Firestore) { }

  getStudents(): Observable<Student[]> {
    const studentsRef = collection(this.firestore, 'students');
    return collectionData(studentsRef, { idField: 'id' }) as Observable<Student[]>;
  }

  getBooks(): Observable<Livre[]> {
    const booksRef = collection(this.firestore, 'livres');
    return collectionData(booksRef, { idField: 'id' }) as Observable<Livre[]>
  }

  getMatieres(): Observable<Matiere[]> {
    const matieresRef = collection(this.firestore, 'matieres');
    return collectionData(matieresRef, { idField: 'id' }) as Observable<Matiere[]>
  }

  //Méthodes sur les opérations sur les absences
  getAbsences(): Observable<Absence[]> {
    const absencesRef = collection(this.firestore, 'absences');
    return collectionData(absencesRef, { idField: 'id'}) as Observable<Absence[]>;
  }

  getAbsenceById(id: any): Observable<Absence> {
    const AbsenceRef = doc(this.firestore, `absences/${id}`);
    return docData(AbsenceRef, { idField: 'id'}) as Observable<Absence>;
  }

  addAbsence(absence: Absence) {
    const AbsencesRef = collection(this.firestore, 'absences');
    return addDoc(AbsencesRef, absence);
  }

  deleteAbsence(absence: Absence) {
    const AbsenceDocRef = doc(this.firestore, `absences/${absence.id}`);
    return deleteDoc(AbsenceDocRef);
  }

  updateAbsence(absence: Absence) {
    const AbsenceDocRef = doc(this.firestore, `absences/${absence.id}`);
    return updateDoc(AbsenceDocRef,
      {
        student: absence.student,
        date: absence.date,
        periode: absence.periode
      }
    );
  }

  //Méthodes sur les opérations sur les cours
  getCours(): Observable<Cours[]> {
    const coursRef = collection(this.firestore, 'cours');
    return collectionData(coursRef, { idField: 'id'}) as Observable<Cours[]>;
  }

  getCoursById(id: any): Observable<Cours> {
    const coursRef = doc(this.firestore, `cours/${id}`);
    return docData(coursRef, { idField: 'id'}) as Observable<Cours>;
  }

  addCours(cours: Cours) {
    const coursRef = collection(this.firestore, 'cours');
    return addDoc(coursRef, cours);
  }

  deleteCours(cours: Cours) {
    const coursDocRef = doc(this.firestore, `cours/${cours.id}`);
    return deleteDoc(coursDocRef);
  }

  updateCours(cours: Cours) {
    const coursDocRef = doc(this.firestore, `cours/${cours.id}`);
    return updateDoc(coursDocRef,
      {
        titre: cours.titre,
        date: cours.date,
        description: cours.description
      }
    );
  }

  //Méthodes sur la manipulation des données de devoirs
  getDevoirs(): Observable<Devoir[]> {
    const devoirRef = collection(this.firestore, 'devoirs');
    return collectionData(devoirRef, { idField: 'id'}) as Observable<Devoir[]>;
  }

  getDevoirById(id: any): Observable<Devoir> {
    const devoirRef = doc(this.firestore, `devoirs/${id}`);
    return docData(devoirRef, { idField: 'id'}) as Observable<Devoir>;
  }

  addDevoir(devoir: Devoir) {
    const devoirRef = collection(this.firestore, 'devoirs');
    return addDoc(devoirRef, devoir);
  }

  deleteDevoir(devoir: Devoir) {
    const devoirDocRef = doc(this.firestore, `devoirs/${devoir.id}`);
    return deleteDoc(devoirDocRef);
  }

  updateDevoir(devoir: Devoir) {
    const devoirDocRef = doc(this.firestore, `devoirs/${devoir.id}`);
    return updateDoc(devoirDocRef,
      {
        livre: devoir.livre,
        numero_page: devoir.numero_page,
        numero_exo: devoir.numero_exo
      }
    );
  }

  //Méthodes sur la manipulation des données des notes
  getNotes(): Observable<Note[]> {
    const noteRef = collection(this.firestore, 'notes');
    return collectionData(noteRef, { idField: 'id'}) as Observable<Note[]>;
  }

  getNoteById(id: any): Observable<Note> {
    const noteRef = doc(this.firestore, `notes/${id}`);
    return docData(noteRef, { idField: 'id'}) as Observable<Note>;
  }

  addNote(note: Note) {
    const noteRef = collection(this.firestore, 'notes');
    return addDoc(noteRef, note);
  }

  deleteNote(note: Note) {
    const noteDocRef = doc(this.firestore, `notes/${note.id}`);
    return deleteDoc(noteDocRef);
  }

  updateNote(note: Note) {
    const noteDocRef = doc(this.firestore, `notes/${note.id}`);
    return updateDoc(noteDocRef,
      {
        sequence: note.sequence,
        matiere: note.matiere,
        student: note.student,
        note: note.note, 
        annee_scolaire: note.annee_scolaire
      }
    );
  }
}
