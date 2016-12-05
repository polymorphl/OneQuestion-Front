import {Component, OnInit} from '@angular/core';
import {QuestionService} from "../services/question.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
const STYLES = require('../../public/scss/main.scss');

@Component({
  selector: 'created',
  templateUrl: 'created.component.html',
  styles: [STYLES, require('./created.component.scss')]
})

export class CreatedComponent implements OnInit {

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private questionService: QuestionService
  ) {}

  private owner_shortcode: string
  private share_shortcode: string

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.owner_shortcode = params['owner_shortcode']
      this.share_shortcode = params['share_shortcode']
    });
  }

}
