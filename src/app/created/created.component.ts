import {Component, OnInit} from '@angular/core';
import {QuestionService} from "../../services/question.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
const STYLES = require('../../../public/scss/main.scss');

@Component({
  selector: 'created',
  templateUrl: 'created.component.pug',
  styles: [STYLES, require('./created.component.scss')]
})

export class CreatedComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private questionService: QuestionService
  ) {}

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
                      }
                  })
                  .catch((reason: any) => {
                      this.router.navigate(['404'])
                  })
          }
      })
  }

}
