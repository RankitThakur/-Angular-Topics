import { Component, OnInit , HostListener } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-host-listener',
  templateUrl: './host-listener.component.html',
  styleUrls: ['./host-listener.component.css']
})
export class HostListenerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  @HostListener('click') onclick(){
    alert("host-listener")
  }
}
