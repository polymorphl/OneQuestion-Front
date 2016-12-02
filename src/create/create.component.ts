import { Component } from '@angular/core';
const STYLES = require('../../public/scss/main.scss');

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styles: [STYLES, require('./create.component.scss')]
})

export class CreateComponent {
  firstname: any;
  question: any;
  save() {
    console.log(this.question);
  }
}
