import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AppInfoService } from 'src/app-info/app-info.service';
import { Pipe, PipeTransform } from '@angular/core';
import {FormGroup, FormArray, FormBuilder} from '@angular/forms';

 

@Component({
  selector: 'information',
  templateUrl: './information.component.html',
  styleUrls: ['/information.component.css'],
})
export class InformationComponent {
    
 

constructor(public appInfo: AppInfoService){
 
}   

zoom(){
  document.getElementById("icon").style.width="200px";
}

notZoom(){
  document.getElementById("icon").style.width="150px";
}

}
