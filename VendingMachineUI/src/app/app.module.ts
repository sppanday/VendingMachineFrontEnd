import { MaterialModule } from './material/material.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ItemOnSaleComponent } from './components/item-on-sale/item-on-sale.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchFilterPipe,
    ItemOnSaleComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
