import { Component, OnInit,Input } from '@angular/core';
import {Offer } from '../../models/offer.model';
@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {
  @Input() offers: Offer[];
  constructor() { }

  ngOnInit() {
  }

}
