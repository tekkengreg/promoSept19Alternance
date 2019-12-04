import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


interface User {
  email: string,
  password: string,
  firstname?: string,
  lastname?: string
}


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // user: User = { email: '', password: '' }
  user: User = { email: 'dupont@example.com', password: 'azerty' }
  token: string = null

  constructor(private http: HttpClient, private router: Router) { }

  getToken() {
    return localStorage.getItem('token');
  }

  signin() {
    this.http.post('http://192.168.146.107:3000/auth/login', this.user)
      .subscribe(
        (data:any) => {
          localStorage.setItem('token',data.access_token)
          this.router.navigateByUrl('/')
        },
        err => console.log(err)
      )
    }
    
    getProfile(){
      this.http.get('http://192.168.146.107:3000/users/1')
        .subscribe(
          (data:any) => {
            console.log(data)
          },
          err => console.log(err)
        )

  }

}

















/*

  getToken(): string {
    // return localStorage.getItem('token')
    return this.token;
  }


 signin() {
    this.http.post('http://192.168.146.107:3000/auth/login', this.user)
      .subscribe(
        (res: any) => {
          // localStorage.setItem('token', res.access_token)
          this.token = res.access_token;
          this.router.navigateByUrl('/');
        },
        err => console.log('http er', err)
      )

  }

  getProfile() {
    this.http.get('http://192.168.146.107:3000/users/1')
      .subscribe(
        (res: any) => {
          console.log( 'yo',res)
          this.user = {...this.user, firstname:res[0].firstname, lastname:res[0].lastname}
          console.log( this.user)
        },
        err => console.log('http er', err)
      )
  }
  */