import { Route} from '@angular/router';
import {SearcherComponent} from 'src/searcher/searcher.component'; 
  
export const appRoutes: Route[] = [
    {path:'', component: SearcherComponent},
    {path:'searcher', component: SearcherComponent}
];                                 