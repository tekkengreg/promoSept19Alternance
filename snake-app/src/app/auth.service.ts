import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*
POST http://192.168.146.107:3000/auth/login
{
    "email": "dupont@example.com",
    "password": "azerty"
}
*/

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signin(user) {
    this.http.post('http://192.168.146.107:3000/auth/login', user).subscribe(res=>console.log(res))
  }

}
