import { Component, OnInit } from '@angular/core'
import { Question } from '../classes/question.class'
import { Response } from '../classes/response.class'
import {QuestionService} from "../services/question.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
const STYLES = require('../../public/scss/main.scss')

@Component({
  selector: 'share',
  templateUrl: 'share.component.html',
  styles: [STYLES, require('./share.component.scss')]
})

export class ShareComponent implements OnInit {

  public fetched: boolean = false
  public submitted: boolean = false
  public question: Question = new Question('', '')
  public responses: Array<Response>
  public newResponse: Response

  private share_shortcode: string

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private questionService: QuestionService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.share_shortcode = params['share_shortcode']
      this.questionService.getQuestion(this.share_shortcode)
          .then((data) => {
            if (data.share_shortcode !== this.share_shortcode) {
              this.router.navigate(['404'])
            } else {
              this.fetched = true;
              this.question = new Question(data.owner.firstname, data.question)
              this.responses = data.responses.map((e: any) => (
                  new Response(e.firstname, e.response)
              ))
            }
          })
          .catch((reason: any) => {
            this.router.navigate(['404'])
          })
    });
    this.newResponse = new Response('yolasticot', 'Putain j\'ai trop envie de répondre')
  }

  addResponse() {
    // save & get new response
    this.responses.push(new Response(this.newResponse.firstname, this.newResponse.response))
    this.submitted = true
  }
}
