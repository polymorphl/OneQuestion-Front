import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { AnswerAdminComponent } from './answerAdmin.component'
import {FormsModule} from "@angular/forms"
import {HttpClient} from "../../services/http.service"
import {QuestionService} from "../../services/question.service"

@NgModule({
  imports: [
    BrowserModule,
      FormsModule
  ],
  declarations: [
    AnswerAdminComponent
  ],
  bootstrap: [ AnswerAdminComponent ],
  providers: [QuestionService, HttpClient]
})

export class AnswerAdminModule { }
