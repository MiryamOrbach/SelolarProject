import { Injectable } from '@angular/core';
import { User } from '../models/User.module';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }
  baseRoute = "api/users/";
  login(name: string, password: string): Observable<User> {
    console.log("wellcome to user service");
    return this.http.get<User>(environment.baseURL + this.baseRoute + "getUserById/" + name + "/" + password);


  }
}
