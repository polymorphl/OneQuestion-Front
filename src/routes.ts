import { HomeComponent } from './app/home/home.component'
import { CreateComponent } from './app/create/create.component'
import { CreatedComponent } from './app/created/created.component'
import { OwnerComponent } from './app/owner/owner.component'
import { ShareComponent } from './app/share/share.component'
import { ResponseComponent } from './app/response/response.component'
import {BackOfficeComponent} from "./app/backoffice/backoffice.component";
import {NotFoundComponent} from "./app/notfound/notfound.component";
import {ThankYouComponent} from "./app/annexes/thankyou.component";

const host: string = "http://localhost:3000/v1"

// question
export const saveQuestionUrl: string = host + '/question/'
export const getQuestionsUrl: string = host  + '/questions'
export const getQuestionUrl: string = host  + '/question/'
export const createQuestionUrl: string = host +'/create'
export const deleteQuestionUrl: string = host + '/question/'
// ---------

// response
export const createResponseUrl: string = host + '/response/'
export const saveResponseUrl: string = host + '/response/'
// ---------

const appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'create', component: CreateComponent },
    { path: 'created/:mixed_shortcode', component: CreatedComponent },
    { path: 'question/:mixed_shortcode/edit', component: OwnerComponent },
    { path: 'question/:share_shortcode', component: ShareComponent },
    { path: 'response/:mixed_shortcode/edit', component: ResponseComponent},
    { path: 'backoffice', component: BackOfficeComponent},
    { path: 'thankyou', component: ThankYouComponent},
    { path: '**', component: NotFoundComponent}
]

export default appRoutes
