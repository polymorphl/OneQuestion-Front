import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ContributorComponent } from './contributor.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
      FormsModule
  ],
  declarations: [
    ContributorComponent
  ],
  bootstrap: [ ContributorComponent ]
})

export class ContributorModule { }
