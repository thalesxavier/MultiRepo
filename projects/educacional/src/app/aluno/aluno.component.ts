import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edu-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {
  public title: string = 'Aluno Component';
  constructor() { }

  ngOnInit(): void {
  }

}
