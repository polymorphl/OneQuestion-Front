import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule }  from '@angular/platform-browser'
import { QuestionCreateComponent } from './questionCreate.component'
import { QuestionService } from '../../services/question.service'
import {HttpClient} from "../../services/http.service"

@NgModule({
  imports: [
    BrowserModule, FormsModule
  ],
  declarations: [
    QuestionCreateComponent
  ],
  bootstrap: [ QuestionCreateComponent ],
  providers: [ QuestionService, HttpClient ]
})

export class QuestionCreateModule { }
