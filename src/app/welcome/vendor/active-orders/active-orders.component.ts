import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-active-orders',
  templateUrl: './active-orders.component.html',
  styleUrls: ['./active-orders.component.css']
})
export class ActiveOrdersComponent implements OnInit {

  @Input() orders;
  @Input() vendorKey;
  constructor() { }

  ngOnInit() {
  }

}
