import { Component } from '@angular/core';
const STYLES = require('../../public/scss/main.scss');

@Component({
  selector: 'my-app',
  template: require('./app.component.pug'),
  styles: [STYLES, require('./app.component.scss')]
})

export class AppComponent {

}
