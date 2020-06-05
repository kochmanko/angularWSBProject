import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['/app.component.css']
})
export class AppComponent {
  title = 'Klaudia Searcher Project';

  func(val){
    console.warn('COunter changed:'+val);
  }
}
