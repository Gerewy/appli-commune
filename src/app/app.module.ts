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
import { PpdGareComponent } from './ppd/ppd-gare/ppd-gare.component';
import { PpdLagneauComponent } from './ppd/ppd-lagneau/ppd-lagneau.component';
import { PpdCarrefourComponent } from './ppd/ppd-carrefour/ppd-carrefour.component';
import { PpdZoningComponent } from './ppd/ppd-zoning/ppd-zoning.component';
import { PpdFootComponent } from './ppd/ppd-foot/ppd-foot.component';


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
      {path: 'courcellesmotte', component: PpdGareComponent},
      {path: 'carrefourmarket', component: PpdCarrefourComponent},
      {path: 'placelagneau', component: PpdLagneauComponent},
      {path: 'zoning', component: PpdZoningComponent},
      {path: 'foot', component: PpdFootComponent}
    ])  
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    TopBarComponent, 
    AccueilComponent, 
    IntroComponent, 
    CommrComponent, 
    ComdecoorComponent, 
    TblnomComponent, 
    DclpuiComponent, 
    PtsattComponent, 
    ZonesetperimetresComponent, 
    MissionsComponent, 
    PpdComponent, 
    PpdGareComponent, 
    PpdLagneauComponent, 
    PpdCarrefourComponent, PpdZoningComponent, PpdFootComponent 
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
