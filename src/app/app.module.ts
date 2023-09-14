import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
//* CONFIGURACIÓN DEL MÓDULO

//*  @ => Decorador 
@NgModule({
  declarations: [ //! COMPONENTES y DIRECTIVAS
    AppComponent, DashboardComponent, AboutComponent, NotFoundComponent
  ],
  imports: [ //! MODULOS
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ ApiService ], //! SERVICIOS
  bootstrap: [AppComponent]
})
export class AppModule {

 }
