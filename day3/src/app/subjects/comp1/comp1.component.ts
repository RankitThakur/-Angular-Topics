import { Component, OnInit  } from '@angular/core';

import { SubjectService } from 'src/app/services/subject.service';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private sub: SubjectService ) { }

  ngOnInit(): void {
    this.sub.live.next(true);
  }

  ngOnDestroy(): void{
    this.sub.live.next(false);

  }

}
