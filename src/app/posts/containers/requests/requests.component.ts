import { Component, OnInit } from '@angular/core';
import { Request } from '../../models/request.model';
import { Store } from '@ngrx/store';  
import { Observable } from 'rxjs';  
import * as fromStore from '../../store';
@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  requests: Observable<Request[]>;

  
  constructor(private store:Store<fromStore.PostState>) { }

  ngOnInit() {
    this.requests = this.store.select(fromStore.getAllRequests);  

    this.store.dispatch(new fromStore.LoadRequests());
  }

}
