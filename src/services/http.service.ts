import {Injectable} from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'

@Injectable()
export class HttpClient {

    constructor(private http: Http) {}

    public get(url: string): Promise<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' })
        let options = new RequestOptions({ headers: headers })
        return new Promise((resolve, reject) => {
            return this.http.get(url, options)
                .toPromise()
                .then((res: Response) => {
                    resolve(this.extractData(res))
                })
                .catch((error: Response | any) => {
                    reject(this.handleError(error))
                })
        })
    }

    public post(url: string, data: any): Promise<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' })
        let options = new RequestOptions({ headers: headers })
        return new Promise((resolve, reject) => {
            return this.http.post(url, data, options)
                .toPromise()
                .then((res: Response) => {
                    resolve(this.extractData(res))
                })
                .catch((error: Response | any) => {
                    reject(this.handleError(error))
                })
        })
    }
    private extractData(res: Response) {
        let body = res.json()
        return body || { }
    }

    private handleError (error: Response | any) {
        return error
    }}