import { Component } from '@angular/core';

import { numberservice } from '../contact-service/numberservice'

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  numberservice = numberservice;

  constructor() { }


}