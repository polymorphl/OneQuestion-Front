import { HomeComponent } from './home/home.component'
import { CreateComponent } from './create/create.component'
import { CreatedComponent } from './created/created.component'
import { OwnerComponent } from './owner/owner.component'
import { ShareComponent } from './share/share.component'
import { ResponseComponent } from './response/response.component'
import {BackOfficeComponent} from "./backoffice/backoffice.component";

const host: string = "http://localhost:3000/v1"

export const saveQuestionUrl: string = host + '/question/1234/admin'
export const getQuestionsUrl: string = host  + '/questions'
export const createQuestionUrl: string = host +'/create'

const appRoutes = [
    { path: '', component: HomeComponent },
    { path: 'create', component: CreateComponent },
    { path: 'created/:owner_shortcode/:contributor_shortcode', component: CreatedComponent },
    { path: 'question/:mixed_shortcode/admin', component: OwnerComponent },
    { path: 'question/:contributor_shortcode', component: ShareComponent },
    { path: 'response/:mixed_shortcode/admin', component: ResponseComponent},
    { path: 'backoffice', component: BackOfficeComponent}
]

export default appRoutes
