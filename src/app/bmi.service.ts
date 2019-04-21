import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBmi } from './IBmi';

@Injectable({
  providedIn: 'root'
})
export class BmiService {

  private _url: string = "http://127.0.0.1:5000/forecast";

  constructor(private http: HttpClient) { }

  getEmployess(): Observable<IBmi[]> {
    return this.http.get<IBmi[]>(this._url);
  }

  Postdata(fileUp: File) {
    const httpPoint = this._url;
    const formdt: FormData = new FormData();
    formdt.append('pic', fileUp, fileUp.name);
    return this.http.post(httpPoint, formdt);
  }

}
