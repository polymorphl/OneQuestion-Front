import { HttpClient } from './http.service'
import { Injectable } from '@angular/core'
import { saveResponseUrl, createResponseUrl, getResponseURL } from '../routes'

export class Answer {
    constructor(
        public firstname: string,
        public response: string,
        public email?: string
    ) {}
}

@Injectable()
export class AnswerService {

    constructor (
        private http: HttpClient,
    ) {}

    private createResponseUrl: string = createResponseUrl
    private saveResponseUrl: string = saveResponseUrl
    private getResponseUrl: string = getResponseURL

    public getAnswer(contributor_shortcode: string) {
        return this.http.get(this.getResponseUrl + contributor_shortcode)
    }

    public saveAnswer(owner_id: string, answer: Answer): Promise<Answer> {
        return this.http.post(this.saveResponseUrl + owner_id + "/admin", answer)
    }

    public createAnswer(answer: Answer, share_shortcode: string): Promise<any> {
        return this.http.post(this.createResponseUrl + share_shortcode, answer)
    }

}
