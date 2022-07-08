import { NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes,RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecyclehookComponent } from './lifecyclehook/lifecyclehook.component';
import { TemplateRefernceComponent } from './template-refernce/template-refernce.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { NewComponent } from './new/new.component';
import { NgclassComponent } from './day4/ngclass/ngclass.component';
import { HostListenerComponent } from './day4/host-listener/host-listener.component';
import { NewDirective } from './new.directive';
import { EmployeeComponent } from './employee/employee.component';
import { SalaryComponent } from './salary/salary.component';
import { ServiceService } from './service/service.service';
import { User1Component } from './day5/user1/user1.component';
import { User2Component } from './day5/user2/user2.component';
import { MynewserviceService } from './mynewservice.service';
import { RoutingComponent } from './day5/routing/routing.component';
import { PageNotefoundComponent } from './day5/page-notefound/page-notefound.component';
import { UsersDataComponent } from './day5/users-data/users-data.component';
import{ ViewchildComponent } from  './day7/viewchild/viewchild.component';
import { StaticDataComponent } from './day7/static-data/static-data.component';


const appRoutes:Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'usersdata' , component:UsersDataComponent},
  {path:'usersdata/:name/:useId' , component:UsersDataComponent},
  {path:'about/:name/:useId' , component:AboutComponent},
  {path:'contact' , component:ContactComponent},
  // {path: 'profile', component:ProfileComponent },
  {path: 'helpdesk', component:HelpdeskComponent },
  {path: 'login', component:LoginpageComponent },
  {path: '', component:StaticDataComponent,data:{ name:'Rankit thakur', id:"23"} },
  {path: 'ByProduct', component:ParentComponent },
  {path: 'Lifecyclehook', component:LifecyclehookComponent },
  {path: 'routing', component:RoutingComponent},
  {path: '**', component:PageNotefoundComponent },
  {path:'viewchlid', component:ViewchildComponent},




]

@NgModule({
  declarations: [
    AppComponent,
    LifecyclehookComponent,
    TemplateRefernceComponent,
    HelpdeskComponent,
    LoginpageComponent,
    CardComponent,
    ParentComponent,
    NewComponent,
    NgclassComponent,
    HostListenerComponent,
    NewDirective,
    EmployeeComponent,
    SalaryComponent,
    User2Component,
    User1Component,
    RoutingComponent,
    PageNotefoundComponent,
    UsersDataComponent,
    ViewchildComponent,
    StaticDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    
  ],

  providers: [ServiceService,
  MynewserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
