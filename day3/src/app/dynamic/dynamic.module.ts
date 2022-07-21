import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ComputerComponent } from '../computer/computer.component';
import { CatComponent } from '../dummy/cat/cat.component';
import { CowComponent } from '../dummy/cow/cow.component';
import { DogComponent } from '../dummy/dog/dog.component';
import { LaptopComponent } from '../laptop/laptop.component';
import { MobileComponent } from '../mobile/mobile.component';
import { DynamicComponent } from './dynamic.component';

const route: Routes = [
  { path: "dynamic", 
    component: DynamicComponent} 
]

@NgModule({
  declarations: [
    DynamicComponent,
    LaptopComponent,
    ComputerComponent,
    MobileComponent,
    DogComponent,
    CatComponent,
    CowComponent,
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(route)
  ],
})
export class DynamicModule { }
