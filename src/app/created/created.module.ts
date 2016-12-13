import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CreatedComponent } from './created.component';
import {HttpClient} from "../../services/http.service";
import {QuestionService} from "../../services/question.service";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    CreatedComponent
  ],
  bootstrap: [ CreatedComponent ],
  providers: [ QuestionService, HttpClient ]
})

export class CreatedModule { }
