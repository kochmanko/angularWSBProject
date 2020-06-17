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
  //document.getElementById("processingImg").style.display="none";
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

async delay(ms: number) {
  await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>this.searchForResults());
}

errorInfo(error){
  console.error(error);
  this.showNoResult();
}

showNoResult(){
  document.getElementById("errorInfo").style.display="inline";
}
searchForResults(){
 

  var startDateStr = this.startDate.toString().slice(0,10).replace(/-/g,"");
  var endDateStr = this.endDate.toString().slice(0,10).replace(/-/g,"");
  this.appInfo.getArticles(this.phase,startDateStr, this.endDate,this.sort).then(response => { console.log(response);
    this.art = response;      
    this.arcticles = this.art.response.docs; 
    console.log("response:"+response);
    console.log("this.arcticles:"+this.arcticles);
    var test=this.arcticles.toString();
    if(test=="")      
    {
      console.log("null");
      this.showNoResult();
    }
  }).catch(error => this.errorInfo(error));
  this.isActive=true;

  document.getElementById("processingImg").style.display="none";
  document.getElementById("findBtn").style.display="inline";
  document.getElementById("listStyleName").style.display="inline";
}

find(){
  document.getElementById("processingImg").style.display="inline";
  document.getElementById("findBtn").style.display="none";
  this.delay(2000);
}
}
