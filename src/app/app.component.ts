import { Component } from '@angular/core';
const STYLES = require('../../public/scss/main.scss');

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [STYLES, require('./app.component.scss')]
})

export class AppComponent {

}
