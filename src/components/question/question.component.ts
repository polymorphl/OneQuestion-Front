import {Component, Input} from '@angular/core'
import {Question} from "../../services/question.service";

const STYLES = require('../../../public/scss/main.scss')

@Component({
    selector: 'question',
    templateUrl: 'question.component.pug',
    styles: [STYLES, require('./question.component.scss')]
})

export class QuestionComponent {
    @Input()
    question: Question
}
