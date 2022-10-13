import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Shared/login/login.component';
import { SidebarComponent } from './Shared/sidebar/sidebar.component';

import { CitasComponent } from './Shared/sidebar/componentes/citas/citas.component';
import { ClientesComponent } from './Shared/sidebar/componentes/clientes/clientes.component';
import { TrabajadoresComponent } from './Shared/sidebar/componentes/trabajadores/trabajadores.component';
import { VehiculosComponent } from './Shared/sidebar/componentes/vehiculos/vehiculos.component';
import { CalendarioComponent } from './Shared/sidebar/componentes/calendario/calendario.component';

import { SidebaruserComponent } from './Shared/sidebaruser/sidebaruser.component';
import { Calendario_userComponent } from './Shared/sidebaruser/componentes_user/calendario/calendario.component';
import { ServicioComponent } from './Shared/sidebaruser/componentes_user/servicio/servicio.component';
import { Vehiculos_userComponent } from './Shared/sidebaruser/componentes_user/vehiculos/vehiculos.component';


const routes: Routes = [ 
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'side',
        component: SidebarComponent,
        children: [
            {path: 'citas', component:CitasComponent},
            {path: 'clientes', component:ClientesComponent},
            {path: 'trabajadores', component:TrabajadoresComponent},
            {path: 'vehiculos', component:VehiculosComponent},
            {path: 'calendario', component:CalendarioComponent}
            ],
    },
    {
        path: 'side_user',
        component: SidebaruserComponent,
        children: [
            {path: 'calendario_user', component:Calendario_userComponent},
            {path: 'servicio', component:ServicioComponent },
            {path: 'vehiculo_user', component:Vehiculos_userComponent },
        ]
    }
]
 
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

    export class AppRoutingModule{}