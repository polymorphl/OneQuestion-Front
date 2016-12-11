import { HomeComponent } from './home/home.component'
import { CreateComponent } from './create/create.component'
import { CreatedComponent } from './created/created.component'
import { OwnerComponent } from './owner/owner.component'
import { ShareComponent } from './share/share.component'
import { ResponseComponent } from './response/response.component'
import {BackOfficeComponent} from "./backoffice/backoffice.component";
import {NotFoundComponent} from "./notfound/notfound.component";
import {ThankYouComponent} from "./annexes/thankyou.component";

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
    { path: 'created/:owner_shortcode/:share_shortcode', component: CreatedComponent },
    { path: 'question/:mixed_shortcode/admin', component: OwnerComponent },
    { path: 'question/:share_shortcode', component: ShareComponent },
    { path: 'response/:mixed_shortcode/admin', component: ResponseComponent},
    { path: 'backoffice', component: BackOfficeComponent},
    { path: 'thankyou', component: ThankYouComponent},
    { path: '**', component: NotFoundComponent}
]

export default appRoutes
