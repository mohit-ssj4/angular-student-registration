import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class BackendService {
  constructor(private httpClient: HttpClient) {}

  registerUrl = "https://ionic-server-app.herokuapp.com/trainee/register";
  loginUrl = "https://ionic-server-app.herokuapp.com/trainee/login";

  public register(formData): Observable<any> {
    const options = new HttpHeaders({ "Content-Type": "application/json" });
    return this.httpClient.post(this.registerUrl, formData, {
      headers: options
    });
  }

  public login(formData): Observable<any> {
    const options = new HttpHeaders({ "Content-Type": "application/json" });
    return this.httpClient
      .post(this.loginUrl, formData, { observe: "response" })
      .pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse) {
    return error.status.toString();
  }
}
