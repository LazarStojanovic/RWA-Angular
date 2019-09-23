import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { getAllOffers } from '../../store';
@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.css']
})
export class OfferDetailComponent implements OnInit {
  offer$;

  constructor(private store:Store<fromStore.PostState>,private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.store.select(getAllOffers).subscribe(offers =>{
      this.offer$ = offers.find(offer=> offer.id == id);
      console.log(this.offer$)
    })
  }

}