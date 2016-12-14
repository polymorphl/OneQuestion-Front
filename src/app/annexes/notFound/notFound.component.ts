import { Component, Injectable } from '@angular/core'

const STYLES = require('../../../../public/scss/main.scss')

@Component({
  selector: 'not-found',
  templateUrl: 'notFound.component.pug',
  styles: [STYLES, require('./notFound.component.scss')]
})

export class NotFoundComponent {}
