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

@NgModule({
  imports:  [ 
    BrowserModule, 
    ReactiveFormsModule,
    NgbModule.forRoot( ),
    RouterModule.forRoot([

      {path: '', component: AccueilComponent},
      {path: 'intro', component: IntroComponent},
      {path: 'radio', component: CommrComponent},
    ])  
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    TopBarComponent, 
    AccueilComponent, 
    IntroComponent, CommrComponent 
    ],
  bootstrap:    [ AppComponent,AccueilComponent ]
})
export class AppModule { }
