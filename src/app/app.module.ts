import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { rootReducer } from "./store";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MainComponentComponent } from './components/main-component/main-component.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, MainComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
