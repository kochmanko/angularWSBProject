import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {   console.log("IN1");}
  transform(url) {
    console.log("IN");
    //return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return this.sanitizer.sanitize(SecurityContext.HTML,url);
  }

}