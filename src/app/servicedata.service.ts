import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError,throwError } from 'rxjs';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicedataService {
  configUrl = 'assets/config.json';

  
  url:string="https://jsonplaceholder.typicode.com/posts/1/comments";
  constructor(private httpservice:HttpClient) { }



getConfig() {
  return this.http.get<Config>(this.configUrl);
}
 }
 
 

