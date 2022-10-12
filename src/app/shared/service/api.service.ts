import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {

   }

   getType(type:string='1'){
    return this.http.get("https://pokeapi.co/api/v2/generation/"+type).pipe(map( (data:any) => data))
   }

}
