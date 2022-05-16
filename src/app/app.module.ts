import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HaircutComponent } from './components/haircut/haircut.component';
import { VentasComponent } from './components/ventas/ventas.component';

import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
// import { CrudComponent } from './produtos/pages/crud/crud.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    HaircutComponent,
    VentasComponent,
    PageNotFoundComponent,
    HomeComponent,
    // CrudComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
   AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
