import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-id',
  templateUrl: './demo-id.component.html',
  styleUrls: ['./demo-id.component.scss']
})
export class DemoIdComponent implements OnInit {
  id = '';

  constructor(
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._activatedRoute.data.subscribe(res => {
      this.id = res['breadcrumb'] ? res['breadcrumb'] : '';
    })
  }

}
