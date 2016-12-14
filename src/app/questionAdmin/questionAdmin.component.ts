import { Component, OnInit } from '@angular/core'
import { Question, QuestionService } from '../../services/question.service'
import { Router, ActivatedRoute } from '@angular/router'
import { Answer } from "../../services/answer.service"
const STYLES = require('../../../public/scss/main.scss')

@Component({
  selector: 'question-admin',
  templateUrl: 'questionAdmin.component.pug',
  styles: [STYLES, require('./questionAdmin.component.scss')]
})

export class QuestionAdminComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      public questionService: QuestionService
  ) {}

  public responses: Array<Answer>
  public question: Question = new Question('', '')
  public submitted: boolean = false
  public errorMessage: string = ''

  private owner_id: string
  private mixed_shortcode: string
  private owner_shortcode: string
  private share_shortcode: string

  ngOnInit() {
      this.route.params.subscribe(params => {
          if (params['mixed_shortcode']) {
              this.mixed_shortcode = params['mixed_shortcode']
              this.owner_shortcode = params['mixed_shortcode'].substr(0, 12)
              this.share_shortcode = params['mixed_shortcode'].substr(12, 24)
              this.questionService.getQuestion(this.share_shortcode)
                  .then((data) => {
                      if (data.owner_shortcode !== this.owner_shortcode ||
                          data.share_shortcode !== this.share_shortcode) {
                          this.router.navigate(['404'])
                      } else {
                          this.owner_id = data.owner.id.toString()
                          this.question = new Question(data.owner.firstname, data.question)
                          this.responses = data.responses
                              .map((e: any) => new Answer(e.contributor.firstname, e.response))
                      }
                  })
                  .catch((reason: any) => {
                      this.router.navigate(['404'])
                  })
          }
      })
  }

  save() {
    this.questionService.saveQuestion(this.mixed_shortcode, this.question)
        .then(
            data => {
              console.log(data)
            },
            error => {
              this.errorMessage = error.status + " " + error.statusText
            }
        )
    this.submitted = true
  }

  delete() {
    this.questionService.deleteQuestion(this.mixed_shortcode, this.question)
        .then(
            data => {
              this.router.navigate(['/thankyou'])
            },
            error => {
              this.errorMessage = error.status + " " + error.statusText
            }
        )
    this.submitted = true
  }

}
