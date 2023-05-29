import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCeGjWbAyUWmiuBY5UldYKmDg_aaumpEIw",
      authDomain: "autorevise-a58bc.firebaseapp.com",
      databaseURL: "https://autorevise-a58bc-default-rtdb.firebaseio.com",
      projectId: "autorevise-a58bc",
      storageBucket: "autorevise-a58bc.appspot.com",
      messagingSenderId: "603945718838",
      appId: "1:603945718838:web:95332e0b70e68bd5ab7497",
      // measurementId: "G-48LHT4GRTE"
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: [RootComponent],
  bootstrap: [RootComponent],
  providers: [AuthService]
})
export class AppModule {}
