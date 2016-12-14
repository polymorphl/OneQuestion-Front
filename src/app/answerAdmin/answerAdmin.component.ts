import { Component, OnInit } from '@angular/core'
import { Answer, AnswerService } from '../../services/answer.service'
import { Question, QuestionService } from '../../services/question.service'
import { Router, ActivatedRoute } from '@angular/router'
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

    private mixed_shortcode: string
    private contributor_shortcode: string
    private share_shortcode: string

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public answerService: AnswerService
    ) {}

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['mixed_shortcode']) {
                this.mixed_shortcode = params['mixed_shortcode']
                this.contributor_shortcode = params['mixed_shortcode'].substr(0, 12)
                this.share_shortcode = params['mixed_shortcode'].substr(12, 24)
                this.answerService.getAnswer(this.share_shortcode)
                    // .then((data) => {
                    //     if (data.owner_shortcode !== this.contributor_shortcode ||
                    //         data.share_shortcode !== this.share_shortcode) {
                    //         this.router.navigate(['404'])
                    //     } else {
                    //         this.question = new Question(data.owner.firstname, data.question)
                    //         this.responses = data.responses
                    //             .map((e: any) => new Answer(e.contributor.firstname, e.response))
                    //     }
                    // })
                    // .catch((reason: any) => {
                    //     this.router.navigate(['404'])
                    // })
            }
        })
    }

    save() {
        this.submitted = true
    }

}
