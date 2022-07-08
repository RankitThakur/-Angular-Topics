import { Component ,HostListener} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day3';

data:any = "rankit"

fun(data1:any){
  console.log(data1)
}
}




