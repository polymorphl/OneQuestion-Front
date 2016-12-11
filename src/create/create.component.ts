import { Component, OnInit } from '@angular/core'
import { Question } from '../classes/question.class'
import { Router } from '@angular/router'
import { QuestionService } from '../services/question.service'
const STYLES = require('../../public/scss/main.scss')

@Component({
    selector: 'create',
    template: require('./create.component.pug'),
    styles: [STYLES, require('./create.component.scss')]
})

export class CreateComponent implements OnInit {

    constructor(
        private router: Router,
        private questionService: QuestionService
    ) {}

    public errorMessage: string
    public question: Question

    ngOnInit(): void {
        this.question = new Question('monsieurOuille', 'Je te pose une question moi ?', '')
    }

    save(): boolean {
        // CALL API
        this.questionService.createQuestion(this.question)
            .then(
                (keys) => {
                    this.router.navigate(['/created/' + keys.owner_data.owner_shortcode + '/' + keys.share_shortcode])
                },
                (error:string) =>  this.errorMessage = <any>error
            )
        return false
    }
}
