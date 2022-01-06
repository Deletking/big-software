import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterUser } from 'src/app/core/models/register-user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }


  registerPost(data: RegisterUser): Observable<any> {
    return this.http.post(`${environment.API_URL}`, data);
  }

}
