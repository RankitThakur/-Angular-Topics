import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  select:boolean = true;
  selectedProduct:string = ""
  constructor() { }

  ngOnInit(): void {
  }
  productselected:boolean = false;
  productValue:string = ""
  onSeclect(value:string){
    this.productselected = true;
    this.productValue = value
  }
  onAddProduct(){
    this.select = false
    this.selectedProduct = this.productValue
  }
}
