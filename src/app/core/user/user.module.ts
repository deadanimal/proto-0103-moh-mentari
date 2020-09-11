import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { RouterModule } from '@angular/router';
import { UserRoutes } from './user.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PendaftaranComponent } from './pendaftaran/pendaftaran.component';
import { KonsultasiComponent } from './konsultasi/konsultasi.component';
import { LaporanComponent } from './laporan/laporan.component';
import { IntervensiComponent } from './intervensi/intervensi.component';
import { IntervensiAktivitiComponent } from './intervensi-aktiviti/intervensi-aktiviti.component';
import { IntervensiPesertaComponent } from  './intervensi-peserta/intervensi-peserta.component';
import { PendaftaranDaftarComponent } from './pendaftaran-daftar/pendaftaran-daftar.component'
import { PendaftaranTemujanjiComponent } from './pendaftaran-temujanji/pendaftaran-temujanji.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PendaftaranComponent,
    KonsultasiComponent,
    LaporanComponent,
    IntervensiComponent,
    IntervensiAktivitiComponent, 
    IntervensiPesertaComponent,
    PendaftaranDaftarComponent,
    PendaftaranTemujanjiComponent],


  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(UserRoutes)
  ]
})
export class UserModule { }
