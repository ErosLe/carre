import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { provideAnimations } from '@angular/platform-browser/animations'; // szükséges az animációkhoz
import { importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



//bootstrapApplication(AppComponent).catch((err) => console.error(err));
bootstrapApplication(AppComponent, {
  providers: [
    
    importProvidersFrom(MatDialogModule, MatButtonModule),
    provideAnimations(), provideAnimationsAsync()
  ]
}).catch(err => console.error(err));

//bootstrapApplication(HeaderComponent)/*jshint esversion: 6 */


