import { Component, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';

import { ComputerComponent } from '../computer/computer.component';
import { CatComponent } from '../dummy/cat/cat.component';
import { CowComponent } from '../dummy/cow/cow.component';
import { DogComponent } from '../dummy/dog/dog.component';
import { LaptopComponent } from '../laptop/laptop.component';
// import { LaptopComponent } from '../laptop/laptop.component';
import { MobileComponent } from '../mobile/mobile.component';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  @ViewChild("container", { read: ViewContainerRef, static: true } )
  container!: ViewContainerRef;
  product: any= {
    mobile: "mobile",
    computer: "computer",
    laptop: "laptop"
  }
  dummy: any = DogComponent;
  constructor() { }

  ngOnInit(): void {
  }

  createComponent(name: string) {
   const componentType = this.getComponent(name)
   this.container.clear();
   const component = this.container.createComponent(componentType)
   component.instance.nameData = name;
  }
  
  getComponent(compName: string): Type<any> {
    let type: Type<any> = MobileComponent;
    switch(compName){
      case this.product.mobile: {
        type = MobileComponent;
        break;
      }
      case this.product.computer: {
        type = ComputerComponent;
        break;
      }
      case this.product.laptop: {
        type = LaptopComponent;
        break;
      }
    }
    return type
  }

  assign(component: any){
    if(component === "cow")
    this.dummy = CowComponent;

    else if (component === "dog") 
    this.dummy = DogComponent;

    else if(component === "cat")
    this.dummy = CatComponent;
  }
 
  close(){
    console.log("new")
  }  
}
