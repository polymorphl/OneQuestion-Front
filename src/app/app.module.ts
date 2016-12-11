import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'
import { HttpModule, JsonpModule }  from '@angular/http';

import appRoutes from '../routes'

import { HomeComponent } from '../home/home.component'
import { CreateComponent } from '../create/create.component'
import { CreatedComponent } from '../created/created.component'
import { OwnerComponent } from '../owner/owner.component'
import { ShareComponent } from '../share/share.component'
import {QuestionService} from "../services/question.service";
import {HttpClient} from "../services/http.service";
import {ResponseComponent} from "../response/response.component";
import {ThankYouComponent} from "../annexes/thankyou.component";
import {BackOfficeComponent} from "../backoffice/backoffice.component";
import {NotFoundComponent} from "../notfound/notfound.component";

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
        CreateComponent,
        CreatedComponent,
        OwnerComponent,
        ShareComponent,
        ResponseComponent,
        ThankYouComponent,
        BackOfficeComponent,
        NotFoundComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [ QuestionService, HttpClient ]
})

export class AppModule { }
