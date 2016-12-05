import { Component, Injectable } from '@angular/core';

const STYLES = require('../../public/scss/main.scss');

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styles: [STYLES, require('./home.component.scss')]
})

export class HomeComponent {}
