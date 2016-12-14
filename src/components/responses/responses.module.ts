import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { ResponsesComponent } from './responses.component'


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ResponsesComponent
  ],
  bootstrap: [ ResponsesComponent ]
})

export class ResponsesModule {}
