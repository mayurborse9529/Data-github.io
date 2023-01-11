import { Component, OnInit ,Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Output() newItemEvent=new EventEmitter<any>();
  
  addnewitem(Value:any){
    this.newItemEvent.emit(Value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}

