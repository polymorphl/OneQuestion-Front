import { Component } from '@angular/core';
const STYLES = require('../../public/scss/main.scss');

@Component({
  selector: 'owner',
  templateUrl: './owner.component.html',
  styles: [STYLES, require('./owner.component.scss')]
})

export class OwnerComponent { }
