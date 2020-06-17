import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AppInfoService } from 'src/app-info/app-info.service';
import { Pipe, PipeTransform } from '@angular/core';
import {FormGroup, FormArray, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

 

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['/error.component.css'],
})
export class ErrorComponent {
    
 

constructor(public appInfo: AppInfoService){
  
}   



}
