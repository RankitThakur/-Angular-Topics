import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS, } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HttpServiceService } from './http-service.service';
import { ServiceService } from './service/service.service';
import { LifecyclehookComponent } from './lifecyclehook/lifecyclehook.component';
import { TemplateRefernceComponent } from './template-refernce/template-refernce.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { NewComponent } from './new/new.component';
import { NgclassComponent } from './day4/ngclass/ngclass.component';
import { HostListenerComponent } from './day4/host-listener/host-listener.component';
import { EmployeeComponent } from './employee/employee.component';
import { SalaryComponent } from './salary/salary.component';
import { User1Component } from './day5/user1/user1.component';
import { User2Component } from './day5/user2/user2.component';
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
import { TemplateformsComponent } from './day7/templateforms/templateforms.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';
import { HttpPutAndPostdataComponent } from './http-put-and-postdata/http-put-and-postdata.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { ObservablesComponent } from './observables/observables.component';
import { ChildComponent } from './child/child.component';
import { InputPerentComponent } from './input-perent/input-perent.component';
import { Comp1Component } from './subjects/comp1/comp1.component';
import { Comp2Component } from './subjects/comp2/comp2.component';
import { Comp3Component } from './subjects/comp3/comp3.component';
import { Comp4Component } from './subjects/comp4/comp4.component';
import { FinalcompComponent } from './subjects/finalcomp/finalcomp.component';
import { FillterPipe } from './fillter.pipe';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { MobileComponent } from './mobile/mobile.component';
import { ComputerComponent } from './computer/computer.component';
import { LaptopComponent } from './laptop/laptop.component';
import { HttpErrorInterceptor } from './interceptor/http-error.interceptor';
import { NewDirective } from './new.directive';
import { AdminGuard } from './admin.guard';
import { RouterguardGuard } from './routerguard.guard';
import { Admin2Guard } from './admin2.guard';
import { DogComponent } from './dummy/dog/dog.component';
import { CatComponent } from './dummy/cat/cat.component';
import { CowComponent } from './dummy/cow/cow.component';
import { AsyncPipeExampleComponent } from './async-pipe-example/async-pipe-example.component';






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
    CustomPipeComponent,
    ConfirmPasswordComponent,
    FillterPipe,
    HttpPutAndPostdataComponent,
    HttpDemoComponent,
    ObservablesComponent,
    ChildComponent,
    InputPerentComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    FinalcompComponent,  
    DynamicComponent,
    LaptopComponent,
    ComputerComponent,
    MobileComponent,
    DogComponent,
    CatComponent,
    CowComponent,
    AsyncPipeExampleComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,

  ],
  providers: [
    RouterguardGuard,
    AdminGuard,
    Admin2Guard,
    ServiceService,
    HttpServiceService,
    {
     provide: HTTP_INTERCEPTORS,
     useClass:HttpErrorInterceptor,
     multi:true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
