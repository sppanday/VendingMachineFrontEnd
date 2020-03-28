import { SharedService } from './../../shared.service';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { SaleItems } from './../../modal/saleItem.info';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-on-sale',
  templateUrl: './item-on-sale.component.html',
  styleUrls: ['./item-on-sale.component.scss']
})
export class ItemOnSaleComponent implements OnInit {
  itemList: SaleItems[];

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.sharedService.getAllItems()
    .pipe(map(data => this.itemList = data)).subscribe();
  }

}
