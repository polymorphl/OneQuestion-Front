import { Component, OnInit } from '@angular/core';
import { Question } from '../classes/question.class';
const STYLES = require('../../public/scss/main.scss');

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styles: [STYLES, require('./create.component.scss')]
})

export class CreateComponent implements OnInit {

  public submitted: boolean
  public model: Question

  ngOnInit() {
    this.submitted = true;
    this.model = new Question('default', 'default')
    console.log(this.model);
  }

  save() {
    this.submitted = true;
    console.log(this.model);
  }
}
