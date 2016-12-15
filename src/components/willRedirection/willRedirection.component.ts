import {Component} from '@angular/core'

const STYLES = require('../../../public/scss/main.scss')

@Component({
    selector: 'will-redirection',
    templateUrl: 'willRedirection.component.pug',
    styles: [STYLES, require('./willRedirection.component.scss')]
})

export class WillRedirectionComponent {
}
