import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LogementListComponent } from './components/logement-list/logement-list.component'; // Ajout pour ngSwitch

@NgModule({
  declarations: [
    AppComponent,
    LogementListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule // Ajout pour résoudre l'erreur ngSwitch
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

