import { Component, OnInit } from '@angular/core'
const STYLES = require('../../public/scss/main.scss')

@Component({
  selector: 'thankyou',
  templateUrl: 'thankyou.component.pug',
  styles: [STYLES, require('./thankyou.component.scss')]
})

export class ThankYouComponent implements OnInit {

  public firstname: string = ''

  ngOnInit() {
  }
}
