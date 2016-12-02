import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HomeComponent } from './home.component';

import { QuestionService } from './home.service'

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    HomeComponent
  ],
  bootstrap: [ HomeComponent ],
  providers: [ QuestionService ]
})

export class HomeModule {}
