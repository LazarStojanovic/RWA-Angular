import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./posts/components/home/home.component";
import { AboutComponent } from "./posts/components/about/about.component";
import { RequestsComponent } from "./posts/containers/requests/requests.component";
import { RequestDetailComponent } from "./posts/components/request-detail/request-detail.component";
import { OffersComponent } from "./posts/containers/offers/offers.component";
import { OfferDetailComponent } from "./posts/components/offer-detail/offer-detail.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "posts/requests", component: RequestsComponent },
  { path: "posts/requests/:id", component: RequestDetailComponent },
  { path: "posts/offers", component: OffersComponent },
  { path: "posts/offers/:id", component: OfferDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
