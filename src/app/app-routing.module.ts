import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'voir-absence',
    loadChildren: () => import('./pages/voir-absence/voir-absence.module').then( m => m.VoirAbsencePageModule)
  },
  {
    path: 'gestion-note',
    loadChildren: () => import('./pages/gestion-note/gestion-note.module').then( m => m.GestionNotePageModule)
  },
  {
    path: 'gestion-devoir',
    loadChildren: () => import('./pages/gestion-devoir/gestion-devoir.module').then( m => m.GestionDevoirPageModule)
  },
  {
    path: 'gestion-absence',
    loadChildren: () => import('./pages/gestion-absence/gestion-absence.module').then( m => m.GestionAbsencePageModule)
  },
  {
    path: 'gestion-cours',
    loadChildren: () => import('./pages/gestion-cours/gestion-cours.module').then( m => m.GestionCoursPageModule)
  },
  {
    path: 'voir-devoir',
    loadChildren: () => import('./pages/voir-devoir/voir-devoir.module').then( m => m.VoirDevoirPageModule)
  },
  {
    path: 'voir-note',
    loadChildren: () => import('./pages/voir-note/voir-note.module').then( m => m.VoirNotePageModule)
  },
  {
    path: 'voir-cours',
    loadChildren: () => import('./pages/voir-cours/voir-cours.module').then( m => m.VoirCoursPageModule)
  },
  {
    path: 'profile-teacher',
    loadChildren: () => import('./pages/profile-teacher/profile-teacher.module').then( m => m.ProfileTeacherPageModule)
  },
  {
    path: 'message-teacher',
    loadChildren: () => import('./pages/message-teacher/message-teacher.module').then( m => m.MessageTeacherPageModule)
  },
  {
    path: 'modal-absence',
    loadChildren: () => import('./components/modal-absence/modal-absence.module').then( m => m.ModalAbsencePageModule)
  },
  {
    path: 'modal-cours',
    loadChildren: () => import('./components/modal-cours/modal-cours.module').then( m => m.ModalCoursPageModule)
  },
  {
    path: 'modal-note',
    loadChildren: () => import('./components/modal-note/modal-note.module').then( m => m.ModalNotePageModule)
  },
  {
    path: 'modal-devoir',
    loadChildren: () => import('./components/modal-devoir/modal-devoir.module').then( m => m.ModalDevoirPageModule)
  },
  {
    path: 'home-parent',
    loadChildren: () => import('./pages/home-parent/home-parent.module').then( m => m.HomeParentPageModule)
  },
  {
    path: 'profile-parent',
    loadChildren: () => import('./pages/profile-parent/profile-parent.module').then( m => m.ProfileParentPageModule)
  },
  {
    path: 'message-parent',
    loadChildren: () => import('./pages/message-parent/message-parent.module').then( m => m.MessageParentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
