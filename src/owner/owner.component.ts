import { Component, OnInit } from '@angular/core'
import { Question } from '../classes/question.class'
const STYLES = require('../../public/scss/main.scss')

@Component({
  selector: 'owner',
  templateUrl: './owner.component.html',
  styles: [STYLES, require('./owner.component.scss')]
})

export class OwnerComponent implements OnInit {

  public model: Question
  public submitted: boolean

  ngOnInit() {
    this.model = new Question('Salut ma gueule', 'bien ou bien ? répondez franchement')
  }

  save() {
    // API CALL
    this.submitted = true;
  }

}
