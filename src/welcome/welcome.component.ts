import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AppInfoService } from 'src/app-info/app-info.service';
import { Pipe, PipeTransform } from '@angular/core';
import {FormGroup, FormArray, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

 

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['/welcome.component.css'],
})
export class WelcomeComponent {
    
  title = 'Klaudia Searcher Project';

constructor(public appInfo: AppInfoService){
  
}   


}
