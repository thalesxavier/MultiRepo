import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';

import { PROF_ROUTES } from './professor-routing.module';
import { ProfessorComponent } from './professor.component';


@NgModule({
  declarations: [
    ProfessorComponent
  ],
  imports: [
    CommonModule,
    PoTemplatesModule,
    PoModule,  
    RouterModule.forChild(PROF_ROUTES)
  ]
})

export class ProfessorModule { }
