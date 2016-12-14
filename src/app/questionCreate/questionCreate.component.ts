import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Question, QuestionService } from '../../services/question.service'
import {UtilsService} from "../../services/utils.service";
const STYLES = require('../../../public/scss/main.scss')

@Component({
    selector: 'create',
    templateUrl: 'questionCreate.component.pug',
    styles: [STYLES, require('./questionCreate.component.scss')]
})

export class QuestionCreateComponent implements OnInit {

    constructor(
        private router: Router,
        private questionService: QuestionService,
        private utils: UtilsService
    ) {}

    public errorMessage: string
    public question: Question

    ngOnInit(): void {
        this.question = new Question('PersonnePasNormale', 'Bonjour je recherche du clax, ça clax ici ?', 'toto@toto.com')
    }

    private isValid(): boolean {
        return !!this.question.firstname.length &&
                !!this.question.question.length &&
                this.utils.validateEmail(this.question.email)
    }

    save(): boolean {
        if (this.isValid()) {
            this.questionService.createQuestion(this.question)
                .then(
                    (keys) => {
                        if (keys && keys.owner_data && keys.owner_data.owner_shortcode && keys.share_shortcode) {
                            this.router.navigate(['/question/' + keys.owner_data.owner_shortcode + keys.share_shortcode + '/edit'])
                        } else {
                            this.errorMessage = "An error occured, please retry in few seconds."
                        }
                    },
                    (error:string) =>  this.errorMessage = <any>error
                )
        } else {
            this.errorMessage = "Please fill all inputs"
        }
        return false
    }
}
