import { HomeComponent } from './app/annexes/home/home.component'
import { QuestionCreateComponent } from './app/questionCreate/questionCreate.component'
import { QuestionAdminComponent } from './app/questionAdmin/questionAdmin.component'
import { QuestionPublicComponent } from './app/questionPublic/questionPublic.component'
import { AnswerAdminComponent } from './app/answerAdmin/answerAdmin.component'
import {NotFoundComponent} from "./app/annexes/notFound/notFound.component"
import {ThankYouComponent} from "./app/annexes/thankYou/thankYou.component"

const host: string = "http://localhost:3000/v1"

// question
export const saveQuestionUrl: string = host + '/question/'
export const getQuestionUrl: string = host  + '/question/'
export const createQuestionUrl: string = host +'/create'
export const deleteQuestionUrl: string = host + '/question/'
// ---------

// answer
export const createResponseUrl: string = host + '/question/'
export const saveResponseUrl: string = host + '/response/'
export const getResponseURL: string = host + '/response/'
// ---------

const appRoutes = [
    { path: '', component: HomeComponent }, // home
    { path: 'create', component: QuestionCreateComponent }, // creation question
    { path: 'question/:mixed_shortcode/edit', component: QuestionAdminComponent }, // vue question admin
    { path: 'question/:share_shortcode', component: QuestionPublicComponent }, // vue public
    { path: 'response/:mixed_shortcode/edit', component: AnswerAdminComponent}, // vue contributor admin
    { path: 'thankyou', component: ThankYouComponent},
    { path: '**', component: NotFoundComponent}
]

export default appRoutes
