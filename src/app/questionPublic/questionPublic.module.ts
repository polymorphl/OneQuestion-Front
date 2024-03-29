import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { QuestionPublicComponent } from './questionPublic.component'
import {FormsModule} from "@angular/forms"
import {QuestionService} from "../../services/question.service"
import {HttpClient} from "../../services/http.service"

@NgModule({
  imports: [
    BrowserModule,
      FormsModule
  ],
  declarations: [
    QuestionPublicComponent
  ],
  bootstrap: [ QuestionPublicComponent ],
  providers: [QuestionService, HttpClient]
})

export class QuestionPublicModule { }
