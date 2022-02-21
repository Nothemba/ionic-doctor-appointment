import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'https://ionic-project-api.herokuapp.com/users/register';
const adminUrl = "https://ionic-project-api.herokuapp.com/admin/getAdmin"
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 

  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  getAdmin(): Observable<any> {
    return this.http.get(adminUrl);
  }
}
