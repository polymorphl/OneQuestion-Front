import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule }  from '@angular/platform-browser';
import { CreateComponent } from './create.component';
import { QuestionService } from '../services/question.service'
import {HttpClient} from "../services/http.service";

@NgModule({
  imports: [
    BrowserModule, FormsModule
  ],
  declarations: [
    CreateComponent
  ],
  bootstrap: [ CreateComponent ],
  providers: [ QuestionService, HttpClient ]
})

export class CreateModule { }
