import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { WillRedirectionComponent } from './willRedirection.component'


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    WillRedirectionComponent
  ],
  bootstrap: [ WillRedirectionComponent ]
})

export class WillRedirectionModule {}
