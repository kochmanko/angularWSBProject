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
  pageNo: number;
  isActive:boolean;
  maxPage: number;

  headingTitle = this.appInfo.appName;
  arcticles: any = [];
  art: any;

constructor(public appInfo: AppInfoService){
  this.phase="";
  this.pageNo=1;
  this.isActive=false;
  this.sort="newest";
  this.maxPage=1;
 
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
  document.getElementById("paging").style.display="none";
}

hideNoResult(){
  document.getElementById("errorInfo").style.display="none";
  document.getElementById("paging").style.display="inline-flex";
}
searchForResults(){
 
  this.hideNoResult();
  var startDateStr = this.startDate.toString().slice(0,10).replace(/-/g,"");
  var endDateStr = this.endDate.toString().slice(0,10).replace(/-/g,"");
  this.appInfo.getArticles(this.phase,startDateStr, this.endDate,this.sort,(this.pageNo-1).toString()).then(response => { console.log(response);
    this.art = response;      
    this.arcticles = this.art.response.docs; 
    console.log("hits:"+this.art.response.meta.hits)
    var hits = this.art.response.meta.hits;
    if(hits%10 == 0 && hits<=1000)
      this.maxPage = (hits/10);
    else if (hits<=1000){     
      this.maxPage = Math.trunc((hits/10)+1);
    }
    else
      this.maxPage=100;

      console.log("maxPage:"+this.maxPage)

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

goNext(){
  if(this.pageNo<this.maxPage)
  this.pageNo++;
  this.searchForResults();

}

goPrevious(){
  if(this.pageNo>1)
  this.pageNo--;
  this.searchForResults();
}

goLast(){
  this.pageNo=this.maxPage;
  this.searchForResults();
}

goFirst(){
  this.pageNo=1;
  this.searchForResults();
}

find(){
  document.getElementById("processingImg").style.display="inline";
  document.getElementById("findBtn").style.display="none";
  this.pageNo=1;
  this.delay(2000);
}
}
