import { HttpClient } from './http.service'
import { Question } from '../classes/question.class'
import {Response} from '@angular/http';
import { Injectable } from '@angular/core'
import { saveQuestionUrl, createQuestionUrl, getQuestionUrl, deleteQuestionUrl } from '../routes'

import { Observable }     from 'rxjs/Observable'

@Injectable()
export class QuestionService {

    constructor (
        private http: HttpClient,
    ) {}

    private saveQuestionUrl: string = saveQuestionUrl
    private getQuestionUrl: string = getQuestionUrl
    private createQuestionUrl: string = createQuestionUrl
    private deleteQuestionUrl: string = deleteQuestionUrl

    public saveQuestion(mixed_shortcode: string, question: Question): Promise<Response> {
        return new Promise((resolve, reject) => {
            return this.http.post(this.saveQuestionUrl + mixed_shortcode + "/edit", question)
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

    public deleteQuestion(mixed_shortcode: string, question: Question): Promise<Response> {
        return new Promise((resolve, reject) => {
            return this.http.post(this.deleteQuestionUrl + mixed_shortcode + "/delete", question)
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

    public getQuestion(share_shortcode: string): Promise<any>{
        return new Promise((resolve, reject) => {
                return this.http.get(this.getQuestionUrl + share_shortcode)
                    .then(
                        (data) => {
                            resolve(data)
                        },
                        error => {
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
