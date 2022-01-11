import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterUser } from '@core/models/register-user.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }


  registerUser(data: RegisterUser): Observable<any> {
    return this.http.post(`${environment.API_URL}`, data);
  }

}
