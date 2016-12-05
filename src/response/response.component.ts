import { Component, OnInit } from '@angular/core'
import { Response } from '../classes/response.class'
import { QuestionService } from '../services/question.service'
const STYLES = require('../../public/scss/main.scss')

@Component({
  selector: 'response',
  templateUrl: 'response.component.html',
  styles: [STYLES, require('./response.component.scss')]
})

export class ResponseComponent implements OnInit {

  public response: Response = new Response('', '')
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
              this.response = data.question;
            })
  }

  save() {
    // API CALL
/*    this.questionService.saveQuestion(this.response)
        .then(
            data => {
              console.log(data)
            },
            error => {
              this.errorMessage = error.status + " " + error.statusText
            }
        )
    this.submitted = true;
    */
  }

}
