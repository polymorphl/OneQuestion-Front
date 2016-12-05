import { HttpClient } from './http.service'
import { Question } from '../classes/question.class'
import {Response} from '@angular/http';
import { Injectable } from '@angular/core'
import { saveQuestionUrl, getQuestionsUrl, createQuestionUrl } from '../routes'

import { Observable }     from 'rxjs/Observable'

@Injectable()
export class QuestionService {

    private saveQuestionUrl = saveQuestionUrl
    private getQuestionsUrl = getQuestionsUrl
    private createQuestionUrl = createQuestionUrl
    constructor (
        private http: HttpClient,
    ) {}

    // private instance variable to hold base url

    public saveQuestion(question: Question): Promise<Response> {
        return new Promise((resolve, reject) => {
            return this.http.post(this.saveQuestionUrl, question)
                .then(
                    data => {
                        resolve(data)
                    },
                    error => {
                        reject(error)
                    }
                )
        })
    }

    public getQuestion(): Promise<any>{
        return new Promise((resolve, reject) => {
            return this.http.get(this.getQuestionsUrl)
                .then(
                    (data) => {
                        const question = data[0]
                        console.log(question)
                        resolve({
                            question: new Question(question.firstname, question.question),
                            responses: question.responses
                        })
                    },
                    error => {
                        console.log(error)
                        reject(error)
                    }
                )
            }
        )
    }

    public createQuestion(question: Question): Promise<any> {
        return this.http.post(this.createQuestionUrl, question)
    }

}
