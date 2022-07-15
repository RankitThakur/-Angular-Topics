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
import { ViewchildComponent } from  './day7/viewchild/viewchild.component';
import { StaticDataComponent } from './day7/static-data/static-data.component';
import { ChildroutesComponent } from './day7/childroutes/childroutes.component';
import { Chlidroute1Component } from './day7/chlidroute1/chlidroute1.component';
import { Chlidroute2Component } from './day7/chlidroute2/chlidroute2.component';
import { QueryparamComponent } from './day7/queryparam/queryparam.component';
import { FragmentComponent } from './day7/fragment/fragment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplateformsComponent } from './day7/templateforms/templateforms.component';
import { FormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustemPipeComponent } from './custem-pipe/custem-pipe.component';
import { CustemPipePipe } from './custem-pipe.pipe';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { FillterPipe } from './fillter.pipe';
import { RouterguardGuard } from './routerguard.guard';
import { AdminGuard } from './admin.guard';
import { HttpServiceService } from './http-service.service';
import { HttpPutAndPostdataComponent } from './http-put-and-postdata/http-put-and-postdata.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { Admin2Guard } from './admin2.guard';

const appRoutes:Routes = [
  { 
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  
  { 
    path:'home' , 
    component:HomeComponent,canActivate :[ RouterguardGuard ]
  },
  { 
    path:'usersdata' ,
    component:UsersDataComponent, canDeactivate : [Admin2Guard ]
  },
  {  
    path:'usersdata/:name/:useId',
    component:UsersDataComponent
  },
  { 
    path:'about/:name/:useId',
    component:AboutComponent
  },
  { 
    path:'contact', 
    component:ContactComponent
  },
  // {path: 'profile', component:ProfileComponent },
  { 
    path: 'helpdesk', 
    component:HelpdeskComponent 
  },
  { 
    path: 'login', 
    component:LoginpageComponent 
  },
  { 
    path: 'ByProduct', 
    component:ParentComponent
  },
  { 
    path: 'Lifecyclehook', 
    component:LifecyclehookComponent 
  },
  { path: 'routing', 
    component: ChildroutesComponent, 
  },
  { 
    path:'viewchlid', 
    component:ViewchildComponent,
  } ,
  { 
    path:'child',
    component:ChildroutesComponent,canActivateChild : [AdminGuard],
    children: [
      { path: 'childroute1', component:Chlidroute1Component },
      { path:'childroute2', component: Chlidroute2Component}
      ]
  
  },
  {
    path:"quaryparam/:name/:userId", component:QueryparamComponent
  },
  {
    path:'fragment',  component:FragmentComponent
  },
  {
    path:"myForm", component: TemplateformsComponent
  },
  {
    path: "reactiveforms", component: ReactiveformComponent
  },
  {
  path:'custempipe', component: CustemPipeComponent, 
  },
  { 
    path: '**', 
    component:PageNotefoundComponent 
  }, 
  // {path:'newchild',component:ChildroutesComponent }



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
    StaticDataComponent,
    ChildroutesComponent,
    Chlidroute1Component,
    Chlidroute2Component,
    QueryparamComponent,
    FragmentComponent,
    TemplateformsComponent,
    ReactiveformComponent,
    CustemPipeComponent,
    CustemPipePipe,
    ConfirmPasswordComponent,
    FillterPipe,
    HttpPutAndPostdataComponent,
    HttpDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [
    ServiceService,
    MynewserviceService,
    RouterguardGuard,
    AdminGuard,
    HttpServiceService,
    Admin2Guard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
