import { HttpClient } from './http.service'
import { Response } from '@angular/http'
import { Injectable } from '@angular/core'
import { saveQuestionUrl, createQuestionUrl, getQuestionUrl, deleteQuestionUrl } from '../routes'

export class Question {
    constructor(
        public firstname: string,
        public question: string,
        public email?: string,
        public created?: string,
        public updated?: string
    ) {}
}

@Injectable()
export class QuestionService {

    constructor (
        private http: HttpClient
    ) {}

    private saveQuestionUrl: string = saveQuestionUrl
    private getQuestionUrl: string = getQuestionUrl
    private createQuestionUrl: string = createQuestionUrl
    private deleteQuestionUrl: string = deleteQuestionUrl

    public saveQuestion(mixed_shortcode: string, question: Question): Promise<Response> {
        return this.http.post(this.saveQuestionUrl + mixed_shortcode + "/edit", question)
    }

    public deleteQuestion(mixed_shortcode: string, question: Question): Promise<Response> {
        return this.http.post(this.deleteQuestionUrl + mixed_shortcode + "/delete", question)
    }

    public getQuestion(share_shortcode: string): Promise<any>{
        return this.http.get(this.getQuestionUrl + share_shortcode)
    }

    public createQuestion(question: Question): Promise<any> {
        return this.http.post(this.createQuestionUrl, question)
    }

}
