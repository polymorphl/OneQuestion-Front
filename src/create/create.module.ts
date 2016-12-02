import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule }  from '@angular/platform-browser';
import { CreateComponent } from './create.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule
  ],
  declarations: [
    CreateComponent
  ],
  bootstrap: [ CreateComponent ]
})

export class CreateModule { }
