import { Component, OnInit } from '@angular/core'
import { Answer, AnswerService } from '../../services/answer.service'
import { Question, QuestionService} from "../../services/question.service"
import { Router, ActivatedRoute } from '@angular/router'
import {UtilsService} from "../../services/utils.service";
const STYLES = require('../../../public/scss/main.scss')

@Component({
  selector: 'question-public',
  templateUrl: 'questionPublic.component.pug',
  styles: [STYLES, require('./questionPublic.component.scss')]
})

export class QuestionPublicComponent implements OnInit {

  public fetched: boolean = false
  public submitted: boolean = false
  public question: Question = new Question('', '')
  public responses: Array<Answer>
  public newAnswer: Answer
  public errorMessage: string

  private share_shortcode: string

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private questionService: QuestionService,
      private answerService: AnswerService,
      private utils: UtilsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.share_shortcode = params['share_shortcode']
      this.questionService.getQuestion(this.share_shortcode)
          .then((data) => {
            if (data.share_shortcode !== this.share_shortcode) {
              this.router.navigate(['404'])
            } else {
              this.fetched = true
              this.question = new Question(data.owner.firstname, data.question)
              this.responses = data.responses.map((e: any) => (
                  new Answer(e.contributor.firstname, e.response)
              ))
            }
          })
          .catch((reason: any) => {
            this.router.navigate(['404'])
          })
    })
    this.newAnswer = new Answer('yolasticot', 'Putain j\'ai trop envie de répondre')
  }

  private isValid(): boolean {
    return !!this.newAnswer.firstname.length &&
        !!this.newAnswer.response.length &&
        this.utils.validateEmail(this.newAnswer.email)
  }

  addResponse() {
    if (this.isValid()) {
      this.answerService.createAnswer(this.newAnswer, this.share_shortcode)
          .then(
              (keys) => {
                if (keys && keys.error === false) {
                  this.router.navigate(['/response/' + keys.data.contributor_shortcode + keys.data.question.share_shortcode + '/edit'])
                }
              },
              (error) => {
                this.errorMessage = error
              }
          )
    } else {
      this.errorMessage = 'Please complete the form inputs'
    }
  }
}
