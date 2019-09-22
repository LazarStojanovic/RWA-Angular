import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule, ROUTES } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule} from '@ngrx/store';
import { reducers , effects} from './store';
import { PostsComponent } from './containers/posts/posts.component';
import { EffectsModule } from '@ngrx/effects';
import { RequestsService } from './services/request.service';
@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    //RouterModule,
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [RequestsService],
  exports: [PostsComponent]
})
export class PostsModule { }
