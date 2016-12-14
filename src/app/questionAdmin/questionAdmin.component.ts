import { Component, OnInit } from '@angular/core'
import { Question, QuestionService } from '../../services/question.service'
import { Router, ActivatedRoute } from '@angular/router'
import { Answer } from "../../services/answer.service"
import {CommonService} from "../../services/common.service";
const STYLES = require('../../../public/scss/main.scss')

@Component({
    selector: 'question-admin',
    templateUrl: 'questionAdmin.component.pug',
    styles: [STYLES, require('./questionAdmin.component.scss')]
})

export class QuestionAdminComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public questionService: QuestionService,
        private common: CommonService
    ) {}

    public responses: Array<Answer>
    public question: Question = new Question('', '')
    public submitted: boolean = false
    public errorMessage: string = ''

    private owner_id: string
    private mixed_shortcode: string
    private owner_shortcode: string
    private share_shortcode: string

    ngOnInit() {
        this.init()
    }

    init() {
        this.common.isValidMixed(this.route.params, "questionService", "getQuestion")
            .then(
                (data) => {
                    this.mixed_shortcode = data.owner.owner_shortcode + data.share_shortcode
                    this.owner_shortcode = data.owner.owner_shortcode
                    this.share_shortcode = data.share_shortcode
                    this.owner_id = data.owner.id.toString()
                    this.question = new Question(data.owner.firstname, data.question, '', (new Date(data.created_at)).toDateString())
                    this.responses = data.responses.map((e: any) => (
                        new Answer(e.contributor.firstname, e.response, '', (new Date(e.created_at)).toDateString())
                    ))
                }
            )
    }

    save() {
        this.questionService.saveQuestion(this.mixed_shortcode, this.question)
            .then(
                data => {
                    console.log(data)
                },
                error => {
                    this.errorMessage = error.status + " " + error.statusText
                }
            )
        this.submitted = true
    }

    deleteQuestion() {
        this.questionService.deleteQuestion(this.mixed_shortcode, this.question)
            .then(
                data => {
                    this.router.navigate(['/thankyou'])
                },
                error => {
                    this.errorMessage = error.status + " " + error.statusText
                }
            )
        this.submitted = true
    }

}
