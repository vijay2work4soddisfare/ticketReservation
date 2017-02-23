import { Component, OnInit } from '@angular/core';
import { VendorService } from './vendor.service';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css'],
  providers:[VendorService]
})
export class VendorComponent implements OnInit {

  items;
  constructor( public vendor: VendorService) {
    this.vendor.vendorInfo().subscribe(data=>{
      this.vendorInfo=data;
      if(this.vendorInfo!=undefined) {
        this.items=this.vendor.itemsForVendor(this.vendorInfo.$key);
      }
    });
    this.vendor.getManagerKey().subscribe(data=>{
      this.managerKey=data;
      //console.log("vender Info : ",this.vendorInfo);
      if(this.managerKey!=undefined) {
        this.halls=this.vendor.halls(this.managerKey);
      }
    });

  }
  halls;
  vendorInfo;
  managerKey;

  ngOnInit() {
  }

}
