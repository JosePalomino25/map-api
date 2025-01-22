import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Citizens} from "../citizens";


@Injectable({
  providedIn: 'root'
})
export class CitizensService {
  private apiURL=environment.apiURL;
  constructor(private http:HttpClient) { }

  getProducts():Observable<Citizens[]> {
    const endpoint = this.apiURL + '/public-api/requests?limit=5&page=1'
    return this.http.get<Citizens[]>(endpoint);
  }


}
