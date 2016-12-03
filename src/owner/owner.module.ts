import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { OwnerComponent } from './owner.component';
import {FormsModule} from "@angular/forms";
import {HttpClient} from "../services/http.service";
import {QuestionService} from "../services/question.service";

@NgModule({
  imports: [
    BrowserModule,
      FormsModule
  ],
  declarations: [
    OwnerComponent
  ],
  bootstrap: [ OwnerComponent ],
  providers: [QuestionService, HttpClient]
})

export class OwnerModule { }
