import { Component, OnInit } from '@angular/core'
import { Question } from '../classes/question.class'
import { Response } from '../classes/response.class'
import {QuestionService} from "../services/question.service";
const STYLES = require('../../public/scss/main.scss')

@Component({
  selector: 'contributor',
  templateUrl: './contributor.component.html',
  styles: [STYLES, require('./contributor.component.scss')]
})

export class ContributorComponent implements OnInit {

  public fetched: boolean = false
  public submitted: boolean = false
  public question: Question
  public responses: Array<Response>
  public newResponse: Response

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.question = new Question('', '')
    this.questionService.getQuestion()
        .then(
            data => {
              console.log(data);
              this.fetched = true;
              this.question = data.question
              this.responses = data.responses.map((e: any) => {
                return {
                  firstname: e.firstname,
                  response: e.response
                }
              })
            },
            error => {
              console.log(error)
            }
        )
    this.newResponse = new Response('dzadada', 'Putain j\'ai trop envie de répondre')
  }

  addResponse() {
    // save Response
    // get Response

    this.responses.push(new Response(this.newResponse.firstname, this.newResponse.response))
    this.submitted = true
  }
}
