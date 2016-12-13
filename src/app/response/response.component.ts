import { Component, OnInit } from '@angular/core'
import { Response } from '../../classes/response.class'
import { QuestionService } from '../../services/question.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
const STYLES = require('../../../public/scss/main.scss')

@Component({
  selector: 'response',
  templateUrl: 'response.component.pug',
  styles: [STYLES, require('./response.component.scss')]
})

export class ResponseComponent implements OnInit {

  public response: Response = new Response('', '')
  public submitted: boolean = false
  public errorMessage: string = ''

  private share_shortcode: string

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      public questionService: QuestionService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.share_shortcode = params['share_shortcode']
      this.questionService.getQuestion(this.share_shortcode)
          .then((data) => {
            if (data.share_shortcode !== this.share_shortcode) {
              this.router.navigate(['404'])
            } else {

            }
          })
          .catch((reason: any) => {
            this.router.navigate(['404'])
          })
    });
  }

  save() {
    // API CALL
    // this.responseService.saveResponse(this.response)
    //     .then(
    //         data => {
    //           console.log(data)
    //         },
    //         error => {
    //           this.errorMessage = error.status + " " + error.statusText
    //         }
    //     )
    this.submitted = true;
  }

}
