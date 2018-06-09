import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import {AuthGuard} from "./auth.guard";
import {PendingChangesGuard} from "./pending-changes.guard";

const appRoutes: Routes = [
  {
    path: 'component1',
    component: FirstComponent,
    canDeactivate: [
      PendingChangesGuard
    ]
  },
  {
    path: 'component2',
    component: SecondComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: '',
    component: FirstComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    PageNotFoundComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    AuthGuard,
    PendingChangesGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
