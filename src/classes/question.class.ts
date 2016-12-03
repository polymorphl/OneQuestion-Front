import {Response} from './response.class'

export class Question {

    constructor(
        public firstname: string,
        public question: string,
        public email?: string
    ) {
    }

}