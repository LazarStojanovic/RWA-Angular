import { Component, OnInit } from '@angular/core';
import { Request } from '../../models/request.model';
import { Store } from '@ngrx/store';  
import { Observable } from 'rxjs';  
import * as fromStore from '../../store';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  requests: Observable<Request[]>;

  
  constructor(private store:Store<fromStore.PostState>) { }

  ngOnInit() {
    this.requests = this.store.select(fromStore.getAllRequests);  

    this.store.dispatch(new fromStore.LoadRequests());
  }

}
