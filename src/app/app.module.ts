import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { provideFirebaseApp,  initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    provideFirebaseApp(() => initializeApp( {
      apiKey: "AIzaSyDk0u95LGolp4KzdrwbqUGRLS9dvDizs1I",
      authDomain: "fire-crud-641bb.firebaseapp.com",
      projectId: "fire-crud-641bb",
      storageBucket: "fire-crud-641bb.appspot.com",
      messagingSenderId: "350254050779",
      appId: "1:350254050779:web:3d28d6e6960bc7a5ff8bfe"
    })),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
