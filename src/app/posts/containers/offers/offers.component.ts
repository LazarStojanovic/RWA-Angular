import { Component, OnInit } from '@angular/core';
import { Offer } from '../../models/offer.model';
import { Store } from '@ngrx/store';  
import { Observable } from 'rxjs';  
import * as fromStore from '../../store';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  offers: Observable<Offer[]>;

  
  constructor(private store:Store<fromStore.PostState>) { }

  ngOnInit() {
    this.offers = this.store.select(fromStore.getAllOffers);  

    this.store.dispatch(new fromStore.LoadOffers());
  }

}
