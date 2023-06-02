import { Injectable } from '@angular/core';
import { setPersistence, user } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any;
  error: any;

  constructor(public auth: AngularFireAuth) {
    const user = sessionStorage.getItem('user');
    this.user = user ? JSON.parse(user) : null;
  }

  async emailSignin(email: string, password: string) {
    try {
      const credential = await this.auth.signInWithEmailAndPassword(
        email,
        password
      );

      this.user = credential.user;
      this.error = null;
      sessionStorage.setItem('user', JSON.stringify(this.user));
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
      sessionStorage.setItem('user', JSON.stringify(this.user));
    } catch (error) {
      this.error = error;
    }
  }

  async signOut() {
    await this.auth.signOut();
    this.user = null;
    sessionStorage.removeItem('user');
  }
}
