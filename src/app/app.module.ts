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
import {InformationComponent} from 'src/information/information.component';
import {MenuComponent} from 'src/menu/menu.component';
import {WelcomeComponent} from 'src/welcome/welcome.component';
import {ErrorComponent} from 'src/error/error.component';


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
    InformationComponent,
    MenuComponent,
    WelcomeComponent,
    ErrorComponent
  ],
  providers: [AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
