import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable()
export class AuthService {
  // public isLoggedIn: boolean;
  user: any;
  error: any;

  constructor(public auth: AngularFireAuth) {
    // this.isLoggedIn = false;
  }

  async emailSignin(email: string, password: string) {
    try {
      const credential = await this.auth.signInWithEmailAndPassword(
        email,
        password
      );
      this.user = credential.user;
      this.error = null;
      // this.isLoggedIn = true;
    } catch (error) {
      this.error = error;
    }
  }

  async googleSignin() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.auth.signInWithPopup(provider);
      this.user = credential.user;
      this.error = null;
      // this.isLoggedIn = true;
    } catch (error) {
      this.error = error;
    }
  }

  async signOut() {
    await this.auth.signOut();
    this.user = null;
    // this.isLoggedIn = false;
  }

  async sessionSave() {
    // sessionStorage.setItem(this.isLoggedIn, true);
  }
}
