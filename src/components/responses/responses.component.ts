import {Component, Input} from '@angular/core'
import {Answer} from "../../services/answer.service";

const STYLES = require('../../../public/scss/main.scss')

@Component({
    selector: 'responses',
    templateUrl: 'responses.component.pug',
    styles: [STYLES, require('./responses.component.scss')]
})

export class ResponsesComponent {
    @Input()
    responses: Array<Answer>
}
