import { SignupRequestPayload } from './../signup/signup-request.payload';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {

  }

  signup(signUpRequestPayload: SignupRequestPayload): Observable<any> {
    return this.httpClient.post('http://localhost:8085/api/auth/signup', signUpRequestPayload, {responseType: 'text' })
  }
}

