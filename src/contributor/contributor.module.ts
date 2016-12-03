import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ContributorComponent } from './contributor.component';
import {FormsModule} from "@angular/forms";
import {QuestionService} from "../services/question.service";
import {HttpClient} from "../services/http.service";

@NgModule({
  imports: [
    BrowserModule,
      FormsModule
  ],
  declarations: [
    ContributorComponent
  ],
  bootstrap: [ ContributorComponent ],
  provicer: [QuestionService, HttpClient]
})

export class ContributorModule { }
