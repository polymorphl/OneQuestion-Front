import { Component } from '@angular/core'
const STYLES = require('../../public/scss/main.scss')

@Component({
  selector: 'app',
  templateUrl: './app.component.pug',
  styles: [STYLES, require('./app.component.scss')]
})

export class AppComponent {

}
