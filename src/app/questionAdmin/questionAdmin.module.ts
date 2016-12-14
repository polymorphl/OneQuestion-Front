import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { QuestionAdminComponent } from './questionAdmin.component'
import {FormsModule} from "@angular/forms"
import {HttpClient} from "../../services/http.service"
import {QuestionService} from "../../services/question.service"

@NgModule({
  imports: [
    BrowserModule,
      FormsModule
  ],
  declarations: [
    QuestionAdminComponent
  ],
  bootstrap: [ QuestionAdminComponent ],
  providers: [QuestionService, HttpClient]
})

export class QuestionAdminModule { }
