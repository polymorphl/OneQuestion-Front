import { Component } from '@angular/core';
const STYLES = require('../../public/scss/main.scss');

@Component({
  selector: 'contributor',
  templateUrl: './contributor.component.html',
  styles: [STYLES, require('./contributor.component.scss')]
})

export class ContributorComponent { }
