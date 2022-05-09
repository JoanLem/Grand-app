import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HaircutComponent } from './components/haircut/haircut.component';
import { MenubarModule } from 'primeng/menubar';
import { VentasComponent } from './components/ventas/ventas.component';

import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

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
  ],
  imports: [
    BrowserModule,
    // MenubarModule,
    RouterModule.forRoot([
      // {path:'', component: HomeComponent },
      { path: 'cortes', component: HaircutComponent },
      { path: 'ventas', component: VentasComponent },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
