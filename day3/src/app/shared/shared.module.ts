import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillterPipe } from '../fillter.pipe';


@NgModule({
  declarations: [
    FillterPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FillterPipe
  ]
})
export class SharedModule { }
