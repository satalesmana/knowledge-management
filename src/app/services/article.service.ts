import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private baseUrl:string;

  constructor(private http:HttpClient) { 
    this.baseUrl = 'http://localhost/kmlp3iapi/index.php/api/'
  }

  public add(data:any):Observable<any> {
	  return Observable.create(observer => {
	    this.http.post(this.baseUrl+'add/knowledge', JSON.stringify(data) ).subscribe((respond:any) => {
        observer.next(respond);
        observer.complete();
        return {unsubcribe() {respond}};
	    });
	       
	  });
  }

  public list(data:any):Observable<any> {
    return Observable.create(observer => {
        this.http.post(this.baseUrl+'getlist/knowledge',JSON.stringify(data)).subscribe((respond:any) => {
            let outputs:any = [];
            if (respond.data.length > 0) {
              outputs = respond.data
            }
            observer.next(outputs);
            observer.complete(outputs);
           return {unsubcribe() {outputs}};
        });  
    });
  }
}
