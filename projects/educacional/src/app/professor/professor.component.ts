import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'edu-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {
  public title: string = 'Professor Component';

  constructor() { }

  ngOnInit(): void {
  }

}
