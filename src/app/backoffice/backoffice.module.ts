import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BackOfficeComponent } from './backoffice.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        BackOfficeComponent
    ],
    bootstrap: [ BackOfficeComponent ]
})

export class BackOfficeModule { }
