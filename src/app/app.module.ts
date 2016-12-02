import { NgModule } from '@angular/core'
import { BrowserModule }  from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from '../home/home.component'
import { CreateComponent } from '../create/create.component'
import { CreatedComponent } from '../created/created.component'
import { OwnerComponent } from '../owner/owner.component'
import { ContributorComponent } from '../contributor/contributor.component'

const appRoutes =  [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'created', component: CreatedComponent },
  { path: 'question/:owner_shortcode/admin', component: OwnerComponent },
  { path: 'question/:contributor_shortcode', component: ContributorComponent },
]

@NgModule({
  imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
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
