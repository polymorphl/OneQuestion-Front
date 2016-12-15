import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { LoadingComponent } from './loading.component'


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    LoadingComponent
  ],
  bootstrap: [ LoadingComponent ]
})

export class LoadingModule {}
