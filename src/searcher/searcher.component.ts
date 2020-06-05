import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AppInfoService } from 'src/app-info/app-info.service';
import { Pipe, PipeTransform } from '@angular/core';
import {FormGroup, FormArray, FormBuilder} from '@angular/forms';

 

@Component({
  selector: 'searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['/searcher.component.css'],
})
export class SearcherComponent {
    
  phase: string ;
  startDate: Date; 
  endDate: Date; 
  sort: string;
  isActive:boolean;

  headingTitle = this.appInfo.appName;
  arcticles: any = [];
  art: any;

constructor(public appInfo: AppInfoService){
  this.phase="";
  this.isActive=false;
  this.sort="newest";
  //this.startDate = "20171201";
  //this.endDate="20180430";
}   

changeSort(){
  if(this.sort=="newest"){
    this.sort="oldest";
    document.getElementById
  }
  else{
      this.sort="newest";
  }
}
find(){
      console.log("clicked");
      console.log(this.phase);
    
      var startDateStr = this.startDate.toString().slice(0,10).replace(/-/g,"");
      var endDateStr = this.endDate.toString().slice(0,10).replace(/-/g,"");

      console.log(startDateStr);
      this.appInfo.getArticles(this.phase,startDateStr, this.endDate,this.sort).then(response => { console.log(response);
        this.art = response;
        console.log("Art:");
        console.log(this.art.response.docs);
        this.arcticles = this.art.response.docs;
        console.log("After:");
        console.log(this.arcticles);
      }).catch(error => console.error(error));
      this.isActive=true;
      
  }  

}