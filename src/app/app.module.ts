import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppInfoService } from 'src/app-info/app-info.service';
import {HttpClientModule} from '@angular/common/http';
import {appRoutes} from './app.routes';
import {RouterModule} from '@angular/router';
import {SafePipe} from 'src/searcher/pipe.component';
import {SearcherComponent} from 'src/searcher/searcher.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent, 
    SafePipe,
    SearcherComponent,
  ],
  providers: [AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
