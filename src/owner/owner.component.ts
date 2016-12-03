import { Component, OnInit } from '@angular/core'
import { Question } from '../classes/question.class'
import { QuestionService } from '../services/question.service'
const STYLES = require('../../public/scss/main.scss')

@Component({
  selector: 'owner',
  templateUrl: './owner.component.html',
  styles: [STYLES, require('./owner.component.scss')]
})

export class OwnerComponent implements OnInit {

  public question: Question = new Question('toto', 'tata')
  public submitted: boolean = false
  public errorMessage: string = ''

  constructor(
      public questionService: QuestionService
  ) {}

  ngOnInit() {
    this.questionService.getQuestion()
        .then(
            data => {
              console.log(data);
              this.question = data.question;
            })
  }

  save() {
    // API CALL
    this.questionService.saveQuestion(this.question)
        .then(
            data => {
              console.log(data)
            },
            error => {
              this.errorMessage = error.status + " " + error.statusText
            }
        )
    this.submitted = true;
  }

}
