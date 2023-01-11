import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }
  getData(){
  return{
    name:'anil',
    id:8,
    city:'dhili'
  }
}
}