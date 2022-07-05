import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { Routes,RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecyclehookComponent } from './lifecyclehook/lifecyclehook.component';
import { TemplateRefernceComponent } from './template-refernce/template-refernce.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';

const appRoutes:Routes = [
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'home' , component:HomeComponent},
{path:'about' , component:AboutComponent},
{path:'contact' , component:ContactComponent},
{path: 'profile', component:ProfileComponent },
{path: 'helpdesk', component:HelpdeskComponent },
{path: 'login', component:LoginpageComponent },
{path: 'ByProduct', component:ParentComponent },
{path: 'Lifecyclehook', component:LifecyclehookComponent },




]

@NgModule({
  declarations: [
    AppComponent,
    LifecyclehookComponent,
    TemplateRefernceComponent,
    ProfileComponent,
    HelpdeskComponent,
    LoginpageComponent,
    CardComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
