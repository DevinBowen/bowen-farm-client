import { inject, Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Credentials } from '../types/auth'

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient)

  login(credentials: Credentials): Observable<any> {
    return this.http.post('http://localhost:3000/auth/login', credentials)
  }

  create(credentials: Credentials): Observable<any> {
    return this.http.post('http://localhost:3000/auth/register', credentials)
  }
}