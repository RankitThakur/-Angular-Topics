import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-fragment',
  templateUrl: './fragment.component.html',
  styleUrls: ['./fragment.component.css']
})
export class FragmentComponent implements OnInit {

  constructor(private Router: ActivatedRoute) { }
  ngOnInit(): void {
    this.Router.fragment.subscribe(params => {
      this.JumpTo(params)

    })
  }
  JumpTo(section:any){
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({behavior: "smooth"});
    },1000)
  }

}
