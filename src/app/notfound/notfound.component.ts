import { Component, Injectable } from '@angular/core';

const STYLES = require('../../../public/scss/main.scss');

@Component({
  selector: 'notfound',
  templateUrl: 'notfound.component.pug',
  styles: [STYLES, require('./notfound.component.scss')]
})

export class NotFoundComponent {}
