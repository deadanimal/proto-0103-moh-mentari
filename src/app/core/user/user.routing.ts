import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PendaftaranComponent} from './pendaftaran/pendaftaran.component';
import { KonsultasiComponent } from './konsultasi/konsultasi.component';
import { LaporanComponent } from './laporan/laporan.component';
import { IntervensiComponent} from './intervensi/intervensi.component';
import { IntervensiAktivitiComponent } from './intervensi-aktiviti/intervensi-aktiviti.component';
import { IntervensiPesertaComponent } from './intervensi-peserta/intervensi-peserta.component';
import { PendaftaranDaftarComponent } from './pendaftaran-daftar/pendaftaran-daftar.component';
import { PendaftaranTemujanjiComponent } from './pendaftaran-temujanji/pendaftaran-temujanji.component'

export const UserRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'pendaftaran',
                children: [
                    {
                        path: 'pendaftaranDaftar',
                        component: PendaftaranDaftarComponent
                    },
                    {
                        path: 'pendaftaranTemujanji',
                        component: PendaftaranTemujanjiComponent
                    }
                ]
            },
            {
                path: 'konsultasi',
                component: KonsultasiComponent
            },
            {
                path: 'laporan',
                component: LaporanComponent
            },
            {
                path: 'intervensi',
                
                children: [
                    {
                        path: 'aktivitiIntervensi',
                        component: IntervensiAktivitiComponent
                    },
                    {
                        path: 'pesertaIntervensi',
                        component: IntervensiPesertaComponent
                    }
                ]
            }
        ]
    }
]