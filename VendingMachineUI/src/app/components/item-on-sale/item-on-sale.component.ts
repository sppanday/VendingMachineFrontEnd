import { SaleItems } from './../../modal/saleItem.info';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { SharedService } from '../../shared/shared.service';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'app-item-on-sale',
  templateUrl: './item-on-sale.component.html',
  styleUrls: ['./item-on-sale.component.scss']
})
export class ItemOnSaleComponent implements OnInit {
  itemList = [];
  countValue = 0;
  loadingSpinner = this.sharedService.loading.asObservable();

  constructor(
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.sharedService.getAllItems()
    .pipe(map(data => this.itemList = data)).subscribe();
  }

  getCurrency() {
    return 'AUD';
  }
}
