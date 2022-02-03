import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ALUNO_ROUTES } from './aluno-routing.module';
import { AlunoComponent } from './aluno.component';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [
    AlunoComponent
  ],
  imports: [
    CommonModule,    
    PoTemplatesModule,
    PoModule,  
    RouterModule.forChild(ALUNO_ROUTES)
  ]
})

export class AlunoModule { }
