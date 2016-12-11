import { HttpClient } from '../services/http.service'
import { Question } from '../classes/question.class'
import { Injectable } from '@angular/core'
import { getQuestionsUrl} from '../routes'

import { Observable }     from 'rxjs/Observable'

@Injectable()
export class BackOfficeService {

    constructor (
        private http: HttpClient,
    ) {}

    private getQuestionsUrl = getQuestionsUrl

    public getQuestions(): Promise<any>{
        return new Promise((resolve, reject) => {
                return this.http.get(this.getQuestionsUrl)
                    .then(
                        (data) => {
                            const question = data[0]
                            resolve({
                                question: new Question(question.firstname, question.question),
                                responses: question.responses
                            })
                        },
                        error => {
                            reject(error)
                        }
                    )
            }
        )
    }
}
