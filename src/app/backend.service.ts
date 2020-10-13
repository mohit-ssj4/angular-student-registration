import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BackendService {

  constructor(private httpClient: HttpClient) { }

  registerUrl = 'https://ionic-server-app.herokuapp.com/trainee/register';

  register(formData): Observable<any> {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.registerUrl, formData, { headers: options });
  }
}