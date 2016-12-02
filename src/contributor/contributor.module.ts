import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ContributorComponent } from './contributor.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ContributorComponent
  ],
  bootstrap: [ ContributorComponent ]
})

export class ContributorModule { }
