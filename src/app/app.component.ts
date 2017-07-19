import { Component } from '@angular/core';
import {DataService }from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor (private dataService: DataService){

  }

  strdata : string = '';

  ngOnInit(){
    this.strdata = this.dataService.getProductData();
    console.log(this.dataService.getProductData());
  }
}