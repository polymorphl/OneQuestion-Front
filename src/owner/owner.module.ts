import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { OwnerComponent } from './owner.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    OwnerComponent
  ],
  bootstrap: [ OwnerComponent ]
})

export class OwnerModule { }
