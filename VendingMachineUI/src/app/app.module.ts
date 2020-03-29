import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ItemOnSaleComponent } from './components/item-on-sale/item-on-sale.component';
import { SearchComponent } from './components/search/search.component';
import { MaterialModule } from './material/material.module';
import { SearchFilterPipe } from './search-filter.pipe';
import { ShoppingTrolleyComponent } from './shopping-trolley/shopping-trolley.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchFilterPipe,
    ItemOnSaleComponent,
    ShoppingTrolleyComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
