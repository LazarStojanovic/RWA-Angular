import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule, ROUTES } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule} from '@ngrx/store';
import { reducers , effects} from './store';
import { RequestsComponent } from './containers/requests/requests.component';
import { EffectsModule } from '@ngrx/effects';
import { RequestsService } from './services/request.service';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RequestsListComponent } from './components/requests-list/requests-list.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RequestDetailComponent } from './components/request-detail/request-detail.component';
import { OffersComponent } from './containers/offers/offers.component';
import { OfferDetailComponent } from './components/offer-detail/offer-detail.component';
import { OffersListComponent } from './components/offers-list/offers-list.component';

@NgModule({
  declarations: [RequestsComponent, FooterComponent, HeaderComponent, RequestsListComponent, HomeComponent, AboutComponent, RequestDetailComponent, OffersComponent, OfferDetailComponent, OffersListComponent,],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [RequestsService],
  exports: [HeaderComponent,RequestsComponent,FooterComponent,HomeComponent,AboutComponent,RequestsListComponent,RequestDetailComponent,OffersComponent, OfferDetailComponent, OffersListComponent,]
})
export class PostsModule { }
