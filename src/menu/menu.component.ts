import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AppInfoService } from 'src/app-info/app-info.service';
import { Pipe, PipeTransform } from '@angular/core';
import {FormGroup, FormArray, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

 

@Component({
  selector: 'mainMenu',
  templateUrl: './menu.component.html',
  styleUrls: ['/menu.component.css'],
})
export class MenuComponent {
    
 

constructor(public appInfo: AppInfoService, private router: Router){
  
}   

goHome() {
  console.log("home");
  this.router.navigate(['']); 
}

goSearch() {
  console.log("searcher");
 // this.router.navigate(['searcher']); 
 this.router.navigate(['/searcher']);
}


}
