import { Route} from '@angular/router';
import {SearcherComponent} from 'src/searcher/searcher.component'; 
import {InformationComponent} from 'src/information/information.component';
import {MenuComponent} from 'src/menu/menu.component';
import {WelcomeComponent} from 'src/welcome/welcome.component';
import {ErrorComponent} from 'src/error/error.component';
  
export const appRoutes: Route[] = [
    {path:'', component: WelcomeComponent},
    {path:'searcher', component: SearcherComponent},
    {path:'home', component: WelcomeComponent},
    {path:'**', component: ErrorComponent}
];                                 