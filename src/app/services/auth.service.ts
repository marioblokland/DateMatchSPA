import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';

  constructor(private http: HttpClient) {
  }

  register(model: any): Observable<any> {
    return this.http.post(this.baseUrl + 'register', model);
  }

  login(model: any): Observable<any> {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
        }
      }));
  }
}
