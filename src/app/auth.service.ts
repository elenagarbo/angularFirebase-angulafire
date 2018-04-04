import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
  private authService: AuthService) {}


  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
    if(this.authService.isLoggedIn()) return true;
    // else navigate to login
  }


  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Nice, it worked!');
      this.router.navigateByUrl('/profile');
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
    });
  }

  emailSignup(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(value => {
     console.log('Sucess', value);
     this.router.navigateByUrl('/profile');
    })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider)
      .then(value => {
     console.log('Sucess', value),
     this.router.navigateByUrl('/profile');
   })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
  }

  twitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider();
    return this.oAuthLogin(provider)
      .then(value => {
     console.log('Sucess', value),
     this.router.navigateByUrl('/profile');
   })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider);
  }
}
