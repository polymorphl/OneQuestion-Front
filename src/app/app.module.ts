import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import appRoutes from '../routes'

import { HomeComponent } from '../home/home.component'
import { CreateComponent } from '../create/create.component'
import { CreatedComponent } from '../created/created.component'
import { OwnerComponent } from '../owner/owner.component'
import { ContributorComponent } from '../contributor/contributor.component'

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  declarations: [
      AppComponent,
      HomeComponent,
      CreateComponent,
      CreatedComponent,
      OwnerComponent,
      ContributorComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
