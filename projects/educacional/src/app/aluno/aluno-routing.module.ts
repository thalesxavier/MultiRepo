import { AlunoComponent } from './aluno.component';
import { Routes } from '@angular/router';


export const ALUNO_ROUTES: Routes = [  
  { path: 'aluno', component: AlunoComponent }
];

export class AlunoRoutingModule { }