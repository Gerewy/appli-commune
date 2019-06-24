import { Component, OnInit } from '@angular/core';
import {numberservice} from '../numberservice'

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {

  numberservice = numberservice;
  
  constructor() { }

  ngOnInit() {
  }

}