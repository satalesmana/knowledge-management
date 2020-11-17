import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public baseUrl:string;
  constructor(private http:HttpClient) { 
    this.baseUrl = 'http://localhost/kmlp3iapi/index.php/'
  }

  public cek_auth(data:any):Observable<any> {
	  return Observable.create(observer => {
	    this.http.post(this.baseUrl+'auth/cek', JSON.stringify(data) ).subscribe((respond:any) => {
        observer.next(respond);
        observer.complete();
        return {unsubcribe() {respond}};
	    });
	       
	  });
  }

}
