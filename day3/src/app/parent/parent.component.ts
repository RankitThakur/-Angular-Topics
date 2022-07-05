import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  productselected:boolean = false;
  productValue:string = ""
  onSeclect(value:string){
    this.productselected = true;
    this.productValue = value
  }
  select:boolean = true;
  selectedProduct:string = ""
  onAddProduct(){
    this.select = false
    this.selectedProduct = this.productValue
  }
}
