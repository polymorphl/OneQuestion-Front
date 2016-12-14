import { Component, OnInit } from '@angular/core'
const STYLES = require('../../../../public/scss/main.scss')

@Component({
  selector: 'thankyou',
  templateUrl: 'thankYou.component.pug',
  styles: [STYLES, require('./thankYou.component.scss')]
})

export class ThankYouComponent implements OnInit {

  public firstname: string = ''

  ngOnInit() {
  }
}
