import { Component, OnInit } from '@angular/core'
import { Question } from '../classes/question.class'
import { Response } from '../classes/response.class'
const STYLES = require('../../public/scss/main.scss')

@Component({
  selector: 'contributor',
  templateUrl: './contributor.component.html',
  styles: [STYLES, require('./contributor.component.scss')]
})

export class ContributorComponent implements OnInit {

  public submitted: boolean = false
  public model: Question
  public newResponse: Response

  ngOnInit() {
    this.model = new Question('SSaluuut', 'Putain de bien ou quoi ????', [
      new Response('Tropb1sesite', 'Ouais ca va putain de bien yo'),
      new Response('user678', 'Vazy dis pas yo comme ça toi'),
      new Response('stupeflipfan', 'azy la jte defonce')
    ])
    this.newResponse = new Response('', 'Putain j\'ai trop envie de répondre')
  }

  addResponse() {
    // save Response
    // get Response

    this.model.responses.push(this.newResponse)
    this.submitted = true
  }
}
