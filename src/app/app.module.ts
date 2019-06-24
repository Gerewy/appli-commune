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
import { ContactServiceComponent } from './contact-service/contact-service.component';
import { OutsideComponent } from './contact-service/outside/outside.component';
import { PompierComponent } from './contact-service/pompier/pompier.component';
import { MedicComponent } from './contact-service/medic/medic.component';
import { PoliceComponent } from './contact-service/police/police.component';
import { CommunicationComponent } from './contact-service/communication/communication.component';
import { LogistiqueComponent } from './contact-service/logistique/logistique.component';

i


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
      {path: 'foot', component: PpdFootComponent},
      {path: 'contact', component: ContactServiceComponent},
      {path: 'd1pompier', component: PompierComponent},
      {path: 'd3police', component: PoliceComponent},
      {path: 'd2medical', component: MedicComponent},
      {path: 'd4logistique', component: LogistiqueComponent},
      {path: 'd5communication', component: CommunicationComponent},
      {path: 'exterieur', component: OutsideComponent}
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
    PpdCarrefourComponent, PpdZoningComponent, PpdFootComponent, ContactServiceComponent, OutsideComponent, PompierComponent, MedicComponent, PoliceComponent, CommunicationComponent, LogistiqueComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
