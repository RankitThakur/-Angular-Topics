import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { NewComponent } from './new/new.component';

const appRoutes:Routes= [{
  path:'ngclass' , Component:NgclassComponent
}]


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NgclassComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  RouterModule.forRoot(appRoutes)

})
export class AppModule { }
