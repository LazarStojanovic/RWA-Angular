import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import * as fromStore from '../../store';
import { Store } from '@ngrx/store';
import { getAllRequests } from '../../store';
@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
  request$;

  constructor(private store:Store<fromStore.PostState>,private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.store.select(getAllRequests).subscribe(requests =>{
      this.request$ = requests.find(request => request.id == id);
      console.log(this.request$)
    })
  }

}
