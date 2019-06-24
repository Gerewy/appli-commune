import { Component, OnInit } from '@angular/core';

import { numberservice } from './numberservice'

@Component({
  selector: 'app-contact-service',
  templateUrl: './contact-service.component.html',
  styleUrls: ['./contact-service.component.css']
})
export class ContactServiceComponent  {

  numberservice = numberservice;
  
  }

