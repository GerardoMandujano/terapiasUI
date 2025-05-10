import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';  // Importa el módulo de Material
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './feature/pages/inicio/inicio.component';
import { NavbarComponent } from './shared/pages/navbar/navbar/navbar.component';
import { FooterComponent } from './shared/pages/footer/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './shared/menu/menu/menu.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    LayoutComponent,
    LoginLayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
