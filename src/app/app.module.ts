import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { FormsModule }   from '@angular/forms'
import { RouterModule } from '@angular/router'
import { HttpModule, JsonpModule }  from '@angular/http'

import appRoutes from '../routes'

import { HomeComponent } from './annexes/home/home.component'
import { QuestionCreateComponent } from './questionCreate/questionCreate.component'
import { QuestionAdminComponent } from './questionAdmin/questionAdmin.component'
import { QuestionPublicComponent } from './questionPublic/questionPublic.component'
import {QuestionService} from "../services/question.service"
import {HttpClient} from "../services/http.service"
import {AnswerAdminComponent} from "./answerAdmin/answerAdmin.component"
import {ThankYouComponent} from "./annexes/thankYou/thankYou.component"
import {NotFoundComponent} from "./annexes/notFound/notFound.component"
import {CommonService} from "../services/common.service";
import {AnswerService} from "../services/answer.service";
import {ResponsesComponent} from "../components/responses/responses.component";
import {QuestionComponent} from "../components/question/question.component";
import {LoadingComponent} from "../components/loading/loading.component";
import {WillRedirectionComponent} from "../components/willRedirection/willRedirection.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        QuestionCreateComponent,
        QuestionAdminComponent,
        QuestionPublicComponent,
        AnswerAdminComponent,
        ThankYouComponent,
        NotFoundComponent,
        ResponsesComponent,
        QuestionComponent,
        LoadingComponent,
        WillRedirectionComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        QuestionService,
        AnswerService,
        HttpClient,
        CommonService
    ]
})

export class AppModule { }
