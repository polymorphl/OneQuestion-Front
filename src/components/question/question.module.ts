import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { QuestionComponent } from './question.component'


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    QuestionComponent
  ],
  bootstrap: [ QuestionComponent ]
})

export class QuestionModule {}
