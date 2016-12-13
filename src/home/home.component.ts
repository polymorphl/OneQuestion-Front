import { Component, Injectable } from '@angular/core';

const STYLES = require('../../public/scss/main.scss');

@Component({
  selector: 'home',
  templateUrl: 'home.component.pug',
  styles: [STYLES, require('./home.component.scss')]
})

export class HomeComponent {}
