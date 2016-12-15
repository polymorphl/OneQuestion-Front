import {Injectable} from "@angular/core";
import {QuestionService, Question} from "./question.service";
import {Router} from "@angular/router";
import {Answer, AnswerService} from "./answer.service";

@Injectable()
export class CommonService {

    constructor(
        private router: Router,
        private questionService: QuestionService,
        private answerService: AnswerService
    ) {}

    private validateEmail(email: string): boolean {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            .test(email);
    }

    public isValidShare(params: any): Promise<any> {
        return new Promise((resolve) => {
            params.subscribe((params: any) => {
                this.questionService.getQuestion(params['share_shortcode'])
                    .then((data) => {
                        if (data.share_shortcode !== params['share_shortcode']) {
                            this.router.navigate(['404'])
                        } else {
                            resolve(data);
                        }
                    })
                    .catch((reason: any) => {
                        this.router.navigate(['404'])
                    })
            })
        })
    }

    public isValidQuestion(question: Question): boolean {
        return !!question.firstname.length &&
            !!question.question.length &&
            this.validateEmail(question.email)
    }

    public isValidAnswer(answer: Answer): boolean {
        return !!answer.firstname.length &&
            !!answer.response.length &&
            this.validateEmail(answer.email)
    }

    public isValidMixed(params: any, serviceName: string, funcName: string, code?: string): Promise<any> {
        return new Promise((resolve) => {
            params.subscribe((params: any) => {
                if (params['mixed_shortcode']) {
                    const owner_shortcode: string = params['mixed_shortcode'].substr(0, 12)
                    const share_shortcode: string = params['mixed_shortcode'].substr(12, 24)
                    this[serviceName][funcName](code ? owner_shortcode : share_shortcode)
                        .then((data: any) => {
                            if (code) {
                                for (var i = 0, len = data.responses.length; i < len; i++) {
                                    if (data.responses[i].id === data.index_response &&
                                        data.responses[i].contributor.contributor_shortcode === owner_shortcode &&
                                        data.share_shortcode === share_shortcode) {
                                        resolve(data)
                                        return
                                    }
                                }
                                this.router.navigate(['404'])
                            } else {
                                if (data.owner_shortcode !== owner_shortcode ||
                                    data.share_shortcode !== share_shortcode) {
                                    this.router.navigate(['404'])
                                } else {
                                    resolve(data)
                                }
                            }
                        })
                        .catch((reason: any) => {
                            this.router.navigate(['404'])
                        })
                }
            })
        })
    }
}