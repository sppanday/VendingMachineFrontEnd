import { SaleItems } from './modal/saleItem.info';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

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
            {itemId: 1, itemName: 'Tamtam', price: 3, numOfItems: 20},
            {itemId: 2, itemName: 'Cake', price: 4, numOfItems: 20 },
            {itemId: 3, itemName: 'Cigerrette', price: 5, numOfItems: 20},
            {itemId: 1, itemName: 'Sleeping Pills', price: 3, numOfItems: 20},
            {itemId: 2, itemName: 'Antibiotics', price: 4, numOfItems: 20 },
            {itemId: 3, itemName: 'Paracetamol', price: 5, numOfItems: 20}
        ]);
        }
}

