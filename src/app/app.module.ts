import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { IntroComponent } from './intro/intro.component';
import { CommrComponent } from './commr/commr.component';
import { ComdecoorComponent } from './comdecoor/comdecoor.component';
import { TblnomComponent } from './tblnom/tblnom.component';
import { DclpuiComponent } from './dclpui/dclpui.component';
import { PtsattComponent } from './ptsatt/ptsatt.component';
import { ZonesetperimetresComponent } from './zonesetperimetres/zonesetperimetres.component';
import { MissionsComponent } from './missions/missions.component';
import { PpdComponent } from './ppd/ppd.component';
import { PpdLieuxComponent } from './accueil/ppd-lieux/ppd-lieux.component';

@NgModule({
  imports:  [ 
    BrowserModule, 
    ReactiveFormsModule,
    NgbModule.forRoot( ),
    RouterModule.forRoot([

      {path: '', component: AccueilComponent},
      {path: 'intro', component: IntroComponent},
      {path: 'radio', component: CommrComponent},
      {path: 'comdecoor', component: ComdecoorComponent},
      {path:'tableaunom', component: TblnomComponent},
      {path: 'PUI', component: DclpuiComponent},
      {path: 'points', component: PtsattComponent},
      {path: 'zonesetperimetres', component: ZonesetperimetresComponent},
      {path: 'missions', component: MissionsComponent},
      {path: 'ppd', component: PpdComponent},
      {path: 'ppd-lieux', component: PpdLieuxComponent}
    ])  
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    TopBarComponent, 
    AccueilComponent, 
    IntroComponent, CommrComponent, ComdecoorComponent, TblnomComponent, DclpuiComponent, PtsattComponent, ZonesetperimetresComponent, MissionsComponent, PpdComponent, PpdLieuxComponent 
    ],
  bootstrap:    [ AppComponent,AccueilComponent ]
})
export class AppModule { }
