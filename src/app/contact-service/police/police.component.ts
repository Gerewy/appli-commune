import { Component, OnInit } from '@angular/core';
import {numberservice} from '../numberservice';

@Component({
  selector: 'app-police',
  templateUrl: './police.component.html',
  styleUrls: ['./police.component.css']
})
export class PoliceComponent implements OnInit {
  numberservice = numberservice;

  constructor() { }

  ngOnInit() {
  }

}