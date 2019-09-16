import { AlertService } from './alert.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../classes/user';
import { Alert } from '../classes/alert';

// import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: Observable<User | null> = null;

  constructor(
    private router: Router,
    private alertService: AlertService
  ) { 
    // this.currentUser = Observable.of(null);
  }

  public singup(firstName:string, lastName:string, email: string, password: string): Observable<boolean> {
    return null;
  }

  public login(email: string, password: string): Observable<boolean> {
    return null;
  }

  public logout(): void {
    this.router.navigate(['/login']);
    this.alertService.alert.next(new Alert('You have been signed out'));
  }
}
