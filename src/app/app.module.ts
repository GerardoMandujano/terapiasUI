import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';  // Importa el módulo de Material
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { FormsModule } from '@angular/forms';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
=======
import { InicioComponent } from './feature/pages/inicio/inicio.component';
import { NavbarComponent } from './shared/pages/navbar/navbar/navbar.component';
import { FooterComponent } from './shared/pages/footer/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './shared/menu/menu/menu.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
>>>>>>> 65452e58424193190af9e4462801ceca4d91f8d1

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LoadingSpinnerComponent,
    MainLayoutComponent
=======
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    LayoutComponent,
    LoginLayoutComponent,
    
>>>>>>> 65452e58424193190af9e4462801ceca4d91f8d1
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
