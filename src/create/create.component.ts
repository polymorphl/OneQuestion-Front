import { Component, OnInit } from '@angular/core';
import { Question } from '../classes/question.class';
import { Router } from '@angular/router'
const STYLES = require('../../public/scss/main.scss');

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styles: [STYLES, require('./create.component.scss')]
})

export class CreateComponent implements OnInit {

  constructor(
      private router: Router,
  ) {}

  public model: Question

  ngOnInit(): void {
    this.model = new Question('default', 'default')
    console.log(this.model, 'yo');
  }

  save(): boolean {
    // CALL API
    this.router.navigate(['/created'])
    return false;
  }
}
