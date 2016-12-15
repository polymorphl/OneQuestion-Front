import { Component, OnInit } from '@angular/core'
import { Answer, AnswerService } from '../../services/answer.service'
import { Question, QuestionService} from "../../services/question.service"
import { Router, ActivatedRoute } from '@angular/router'
import {CommonService} from "../../services/common.service";
const STYLES = require('../../../public/scss/main.scss')

@Component({
    selector: 'question-public',
    templateUrl: 'questionPublic.component.pug',
    styles: [STYLES, require('./questionPublic.component.scss')]
})

export class QuestionPublicComponent implements OnInit {

    public validate: boolean = false
    public question: Question = new Question('', '')
    public responses: Array<Answer>
    public newAnswer: Answer
    public errorMessage: string
    public sended: boolean = false

    private share_shortcode: string

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private answerService: AnswerService,
        private common: CommonService
    ) {}

    ngOnInit() {
        this.common.isValidShare(this.route.params)
            .then(
                (data) => {
                    this.share_shortcode = data.share_shortcode
                    this.validate = true
                    this.question = new Question(data.owner.firstname, data.question, '', (new Date(data.created_at)).toDateString())
                    this.responses = data.responses.map((e: any) => (
                        new Answer(e.contributor.firstname, e.response, '', (new Date(e.created_at)).toDateString())
                    ))
                }
            )
        this.newAnswer = new Answer('yolasticot', 'Putain j\'ai trop envie de répondre', 'jmesuisretrouver@pourmefu.paris')
    }

    addResponse() {
        if (this.common.isValidAnswer(this.newAnswer)) {
            this.answerService.createAnswer(this.newAnswer, this.share_shortcode)
                .then(
                    (keys) => {
                        if (keys && keys.error === false) {
                            this.sended = true
                            setTimeout(() => {
                                this.router.navigate(['/response/' + keys.data.contributor_shortcode + keys.data.question.share_shortcode + '/edit'])
                            }, 1000)
                        }
                    },
                    (error) => {
                        this.errorMessage = error
                    }
                )
        } else {
            this.errorMessage = 'Please complete the form inputs'
        }
    }
}
