import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AppInfoService{  

    appName= 'Searcher projext APP ';

    constructor(public http:HttpClient){}
 
    getArticles(phrase, startDate,endDate,sort,pageNo){
         
         var searchString = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=D9CGHALAe1bVGseQQ8ftSovuc9YYXT7r&q="
        +phrase+ "&fl=headline,web_url&begin_date="+startDate+"&end_date="+endDate+"&sort="+sort+"&page="+pageNo;
         var test = this.http.get(searchString).toPromise();
         
         console.log(test);
         return test;
    }

    getUsers(){
        //var test = this.http.get('https://developer.nytimes.com/proxy/https/api.nytimes.com/svc/search/v2/articlesearch.json?api-key=D9CGHALAe1bVGseQQ8ftSovuc9YYXT7r&q=president&fl=headline,web_url&begin_date=20171201&end_date=20180430&sort=newest').;
        var test = this.http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=D9CGHALAe1bVGseQQ8ftSovuc9YYXT7r&q=&fl=headline,web_url&begin_date=20171201&end_date=20180430&sort=newest').toPromise();
        
        console.log(test);
        return test;
   }

}