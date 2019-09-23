import { Component, OnInit, Input } from '@angular/core';
import {Request } from '../../models/request.model';
@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.css']
})
export class RequestsListComponent implements OnInit {
  @Input() requests: Request[];
  constructor() { }

  ngOnInit() {
  }

}
