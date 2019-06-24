import { Component, OnInit } from '@angular/core';

import {numberservice} from '../numberservice'

@Component({
  selector: 'app-pompier',
  templateUrl: './pompier.component.html',
  styleUrls: ['./pompier.component.css']
})
export class PompierComponent implements OnInit {
  numberservice = numberservice;

  constructor() { }

  ngOnInit() {
  }

}