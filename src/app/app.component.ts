import { Component,HostListener} from '@angular/core';
import { AdminService } from './services/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  data :any="";
  // constructor(){
  //   console.log('This is app-componets of our ng-App');
  // 
// }


  // item=['virat','rohit','chaal','sachin'];
  
  // addItem(newItem:any){
  //   this.item.push(newItem);
  // }
  // currentItem:any="sending Data form parent componet....!"
constructor(private admin:AdminService){
  console.log(this.admin.getData());
  this.data=this.admin.getData();
}
}
