import {Component, } from '@angular/core'

const STYLES = require('../../../public/scss/main.scss')

@Component({
    selector: 'loading',
    templateUrl: 'loading.component.pug',
    styles: [STYLES, require('./loading.component.scss')]
})

export class LoadingComponent {
}
