import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { NotFoundComponent } from './notFound.component'

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    NotFoundComponent
  ],
  bootstrap: [ NotFoundComponent ]
})

export class NotFoundModule {}
