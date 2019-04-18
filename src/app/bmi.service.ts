import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBmi } from './IBmi';

@Injectable({
  providedIn: 'root'
})
export class BmiService {

  private _url: string = "http://127.0.0.1:5000/";

  constructor(private http: HttpClient) { }

  getEmployess(): Observable<IBmi[]> {
    return this.http.get<IBmi[]>(this._url);
  }

}
