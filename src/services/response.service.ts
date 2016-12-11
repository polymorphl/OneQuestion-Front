import { HttpClient } from './http.service'
import { Response } from '../classes/response.class'
import {Response} from '@angular/http';
import { Injectable } from '@angular/core'
import { saveResponseUrl, createResponseUrl } from '../routes'

import { Observable }     from 'rxjs/Observable'

@Injectable()
export class ResponseService {

    constructor (
        private http: HttpClient,
    ) {}

    private createResponseUrl: string = createResponseUrl
    private saveResponseUrl: string = saveResponseUrl

    public saveResponse(owner_id: string, response: Response): Promise<Response> {
        return new Promise((resolve, reject) => {
            return this.http.post(this.saveResponseUrl + owner_id + "/admin", response)
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

    public createResponse(response: Response): Promise<any> {
        return this.http.post(this.createResponseUrl, response)
    }

}
