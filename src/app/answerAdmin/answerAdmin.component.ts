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
                    this.share_shortcode = data.share_shortcode
                    this.question = new Question(data.owner.firstname, data.question, '', (new Date(data.created_at)).toDateString())
                    this.responses = data.responses.map(
                        (e: any) => {
                            if (e.id === data.index_response) {
                                this.contributor_shortcode = e.contributor.contributor_shortcode
                                this.myAnswer = new Answer(e.contributor.firstname, e.response, '', (new Date(e.created_at)).toDateString())
                            }
                            return new Answer(e.contributor.firstname, e.response, '', (new Date(e.created_at)).toDateString())
                        }
                    )
                }
            )
    }

    save() {
        this.answerService.saveAnswer(this.contributor_shortcode + this.share_shortcode, this.myAnswer)
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

    deleteAnswer() {
        this.answerService.deleteAnswer(this.contributor_shortcode + this.share_shortcode, this.myAnswer)

        this.router.navigate(['/question/' + this.share_shortcode])
    }

}
