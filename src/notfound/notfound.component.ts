import { Component, Injectable } from '@angular/core';

const STYLES = require('../../public/scss/main.scss');

@Component({
  selector: 'notfound',
  templateUrl: 'notfound.component.html',
  styles: [STYLES, require('./notfound.component.scss')]
})

export class NotFoundComponent {}
