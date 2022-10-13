import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import{ AppComponent } from './app.component';
import { LoginComponent } from './Shared/login/login.component';
import { SidebarComponent } from './Shared/sidebar/sidebar.component';
import { NoEncontradoComponent } from './Shared/no-encontrado/no-encontrado.component';

import { CitasComponent } from './Shared/sidebar/componentes/citas/citas.component';
import { ClientesComponent } from './Shared/sidebar/componentes/clientes/clientes.component';
import { TrabajadoresComponent } from './Shared/sidebar/componentes/trabajadores/trabajadores.component';
import { VehiculosComponent } from './Shared/sidebar/componentes/vehiculos/vehiculos.component';
import { CalendarioComponent } from './Shared/sidebar/componentes/calendario/calendario.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedAppModuleModule } from './Shared/modulesApp/shared-module.module';
import { MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SidebaruserComponent } from './Shared/sidebaruser/sidebaruser.component';
import { Calendario_userComponent } from './Shared/sidebaruser/componentes_user/calendario/calendario.component';
import { ServicioComponent } from './Shared/sidebaruser/componentes_user/servicio/servicio.component';
import { Vehiculos_userComponent } from './Shared/sidebaruser/componentes_user/vehiculos/vehiculos.component';
import { SidebartrComponent } from './Shared/sidebartr/sidebartr.component';
import { ServiAsigComponent } from './Shared/sidebartr/componentes_tr/servi-asig/servi-asig.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    NoEncontradoComponent,
    CitasComponent ,
    ClientesComponent,
    TrabajadoresComponent,
    VehiculosComponent,
    CalendarioComponent,
    SidebaruserComponent,
    ServicioComponent,
    Calendario_userComponent,
    Vehiculos_userComponent,
    SidebartrComponent,
    ServiAsigComponent,

  
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal'}),
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedAppModuleModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
