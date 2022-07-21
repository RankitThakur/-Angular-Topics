import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { PageNotefoundComponent } from './day5/page-notefound/page-notefound.component';
import { UsersDataComponent } from './day5/users-data/users-data.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { HomeComponent } from './home/home.component';
import { LifecyclehookComponent } from './lifecyclehook/lifecyclehook.component';
import { ParentComponent } from './parent/parent.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ObservablesComponent } from './observables/observables.component';
import { DataResolver } from './resolver/data.resolver';
import { UserResolver } from './resolver/user.resolver';
import { Comp1Component } from './subjects/comp1/comp1.component';
import { AdminGuard } from './guard/admin.guard'; 
import { Admin2Guard } from './guard/admin2.guard';
import { RouterguardGuard } from './guard/routerguard.guard';
import { ChildroutesComponent } from './dummy/day7/childroutes/childroutes.component';
import { Chlidroute1Component } from './dummy/day7/chlidroute1/chlidroute1.component';
import { Chlidroute2Component } from './dummy/day7/chlidroute2/chlidroute2.component';
import { FragmentComponent } from './dummy/day7/fragment/fragment.component';
import { QueryparamComponent } from './dummy/day7/queryparam/queryparam.component';
import { TemplateformsComponent } from './dummy/day7/templateforms/templateforms.component';
import { ViewchildComponent } from './dummy/day7/viewchild/viewchild.component';


const routes: Routes = [
  { 
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  
  { 
    path:'home' , 
    component: HomeComponent,
    canActivate: [ RouterguardGuard ]
  },
  { 
    path:'usersdata' ,
    component: UsersDataComponent, 
    canDeactivate: [Admin2Guard ]
  },
  {  
    path:'usersdata/:name/:useId',
    component: UsersDataComponent
  },
  { 
    path: 'about/:name/:useId',
    component: AboutComponent
  },
  { 
    path: 'contact', 
    component: ContactComponent
  },
  // {path: 'profile', component:ProfileComponent },
  { 
    path: 'helpdesk', 
    component: HelpdeskComponent 
  },
  { 
    path: 'ByProduct', 
    component: ParentComponent
  },
  { 
    path: 'Lifecyclehook', 
    component: LifecyclehookComponent 
  },
  { path: 'routing', 
    component: ChildroutesComponent, 
  },
  { 
    path:'viewchlid', 
    component: ViewchildComponent,
  } ,
  { 
    path:'child',
    component: ChildroutesComponent,
    canActivateChild: [AdminGuard],
    children: [
      { path: 'childroute1', component: Chlidroute1Component },
      { path: 'childroute2', component: Chlidroute2Component}
    ]
  },
  {
    path: "quaryparam/:name/:userId", 
    component: QueryparamComponent
  },
  {
    path: 'fragment', 
    component: FragmentComponent
  },
  {
    path: "myForm", 
    component: TemplateformsComponent,
  },
  {
    path: "reactiveforms", 
    component: ReactiveformComponent
  },
  {
    path:'custempipe', 
    component: CustomPipeComponent, 
  },
  {
    path: 'observables',
    component: ObservablesComponent,
    resolve: {result: DataResolver}
  },
  {
    path: 'comp1',
    component: Comp1Component
  },
  {
    path: 'htpp', 
    loadChildren:() => import('./http-demo/http.module')
    .then(mod => mod.HttpModule)
  },
  {
    path: 'dynamic', 
    loadChildren:() => import('./dynamic/dynamic.module')
    .then(mod => mod.DynamicModule)
  },
  { 
    path: 'new', 
    loadChildren: () => import('./loginpage/login.module')
    .then(mod => mod.LoginModule)
  },
  { 
    path: 'confirm', 
    loadChildren: () => import('./confirm-password/password.module')
    .then(mod => mod.PasswordModule)
  },

  // {
  //   path: "dynamic",
  //   loadChildren:<any> './dynamic/dynamic.module#DynamicModule'
  // },
  { 
    path: '**', 
    component: PageNotefoundComponent 
  }
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [DataResolver, UserResolver],
  exports: [RouterModule],
})

export class AppRoutingModule { 
  constructor() {
    console.log("app root module")
  }
}
