import { Component } from '@angular/core';
const STYLES = require('../../public/scss/main.scss');

@Component({
  selector: 'backoffice',
  templateUrl: 'backoffice.component.html',
  styles: [STYLES, require('./backoffice.component.scss')]
})

export class BackOfficeComponent {

}
