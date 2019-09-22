import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule} from '@ngrx/store';
import { StoreDevtoolsModule} from '@ngrx/store-devtools';

import { PostsModule } from './posts/posts.module';
import { reducers } from './posts/store';
import { RequestsService } from './posts/services/request.service';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    PostsModule,
    EffectsModule.forRoot([])
  ],
  providers: [RequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
