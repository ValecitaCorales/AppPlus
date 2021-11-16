import { Injectable } from '@angular/core';
import  { HttpClient,  HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators'; 
import { Observable } from 'rxjs';
import { InfoUsuario } from '../interfaces/info-usuario';

@Injectable({
  providedIn: 'root'
})
export class APIClientService {

  httpOptions = { 
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin': '*' 
    }) 
  } 
 
  apiURL = 'https://github.com/RArayaH/alus1/blob/main/db.json'; 

  constructor(private http:HttpClient) {}

  getData():Observable<any>{    
    return this.http.get(this.apiURL,this.httpOptions)
  }

  getAsignaturas():Observable<any>{ 
    return this.http.get(this.apiURL + '/asignaturas/').pipe(retry(3)); 
  }
  getAsignatura(id):Observable<any>{ 
    return this.http.get(this.apiURL + '/asignaturas/' + id).pipe(retry(3)); 
  }
  createPost(asignaturas):Observable<any>{ 
    return this.http.post(this.apiURL+'/asignaturas',asignaturas,this.httpOptions).pipe(retry(3)); 
  }
  updatePost(id,asignaturas):Observable<any>{ 
    return this.http.put(this.apiURL+'/asignaturas/'+id,asignaturas,this.httpOptions).pipe(retry(3)); 
  }
  deletePost(id):Observable<any>{ 
    return this.http.delete(this.apiURL+'/asignaturas/'+id,this.httpOptions); 
  }
  
}
