import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ResponseComponent } from './response.component';
import {FormsModule} from "@angular/forms";
import {HttpClient} from "../../services/http.service";
import {QuestionService} from "../../services/question.service";

@NgModule({
  imports: [
    BrowserModule,
      FormsModule
  ],
  declarations: [
    ResponseComponent
  ],
  bootstrap: [ ResponseComponent ],
  providers: [QuestionService, HttpClient]
})

export class ResponseModule { }
