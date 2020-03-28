import { SaleItems } from './modal/saleItem.info';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable(
    {providedIn: 'root'}
)
 /*         itemId: number;
            itemName: string;
            price: number;
            numOfItems: number;
            numOfItemsAvailable: number;
            numOfItemsSold: number; */
export class SharedService {
    getAllItems(): Observable<SaleItems[]> {
        return of([
            {itemId: 1, itemName: 'Coke', price: 3, numOfItems: 20},
            {itemId: 2, itemName: 'Fanta', price: 4, numOfItems: 20 },
            {itemId: 3, itemName: 'Sprite', price: 5, numOfItems: 20},
            {itemId: 4, itemName: 'TamTam', price: 3, numOfItems: 20},
            {itemId: 5, itemName: 'Cake', price: 4, numOfItems: 20 },
            {itemId: 6, itemName: 'Cigerrette', price: 5, numOfItems: 20},
            {itemId: 7, itemName: 'Sleeping Pills', price: 3, numOfItems: 20},
            {itemId: 8, itemName: 'Antibiotics', price: 4, numOfItems: 20 },
            {itemId: 9, itemName: 'Paracetamol', price: 5, numOfItems: 20},
            {itemId: 10, itemName: 'idorphin', price: 6, numOfItems: 22}
        ]).pipe(catchError((error) => this.handleErrors(error)));
        }
    handleErrors(error: ErrorEvent) {
    if (error) {
        console.log('Error occured while retrieving data from server');
    }
    return of([]);
    }
}

