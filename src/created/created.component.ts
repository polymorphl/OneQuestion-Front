import { Component } from '@angular/core';
const STYLES = require('../../public/scss/main.scss');

@Component({
  selector: 'created',
  templateUrl: './created.component.html',
  styles: [STYLES, require('./created.component.scss')]
})

export class CreatedComponent { }
