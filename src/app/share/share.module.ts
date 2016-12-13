import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ShareComponent } from './share.component';
import {FormsModule} from "@angular/forms";
import {QuestionService} from "../../services/question.service";
import {HttpClient} from "../../services/http.service";

@NgModule({
  imports: [
    BrowserModule,
      FormsModule
  ],
  declarations: [
    ShareComponent
  ],
  bootstrap: [ ShareComponent ],
  providers: [QuestionService, HttpClient]
})

export class ShareModule { }
