import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { OwnerComponent } from './owner.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    BrowserModule,
      FormsModule
  ],
  declarations: [
    OwnerComponent
  ],
  bootstrap: [ OwnerComponent ]
})

export class OwnerModule { }
