import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { CreatedComponent } from './created.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    CreatedComponent
  ],
  bootstrap: [ CreatedComponent ]
})

export class CreatedModule { }
