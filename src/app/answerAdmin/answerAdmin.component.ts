import { Component, OnInit } from '@angular/core'
import { Answer, AnswerService } from '../../services/answer.service'
import { Question, QuestionService } from '../../services/question.service'
import { Router, ActivatedRoute } from '@angular/router'
import {CommonService} from "../../services/common.service";
const STYLES = require('../../../public/scss/main.scss')

@Component({
    selector: 'response-admin',
    templateUrl: 'answerAdmin.component.pug',
    styles: [STYLES, require('./answerAdmin.component.scss')]
})

export class AnswerAdminComponent implements OnInit {

    public question: Question = new Question('', '')
    public responses: Array<Answer>
    public response: Answer = new Answer('', '')
    public submitted: boolean = false
    public errorMessage: string = ''
    public validate: boolean = false

    private mixed_shortcode: string
    private contributor_shortcode: string
    private share_shortcode: string
    private myAnswer: Answer

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public answerService: AnswerService,
        private utils: CommonService
    ) {}

    ngOnInit() {
        this.validate = false
        this.utils.isValidMixed(this.route.params, "answerService", "getAnswer", "contributor")
            .then(
                (data) => {
                    this.validate = true
                    this.contributor_shortcode = data.contributor_shortcode
                    this.share_shortcode = data.question.share_shortcode
                    this.question = new Question(data.question.firstname || 'unknownName', data.question.question, data.question.created_at)
                    this.myAnswer = new Answer((data.contributor && data.contributor.firstname) || "unknownName", data.response)
                    this.responses = data.question.responses.map(
                        (e: any) => new Answer((e.contributor && e.contributor.firstname) || "unknownName", e.response)
                    )
                }
            )
    }

    save() {
        this.submitted = true
    }

    deleteAnswer() {
        this.submitted = true
    }

}
