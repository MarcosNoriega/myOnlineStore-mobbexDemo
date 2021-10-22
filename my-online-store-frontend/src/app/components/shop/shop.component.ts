import { Component, OnInit } from '@angular/core';
import Product from 'src/app/Interfaces/Product.Interface';
import { MyOnlineStoreService } from 'src/app/service/myOnlineStore.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: any = [];
  productsIntoCard: Product[] = [];

  constructor(private myOnlineStoreService: MyOnlineStoreService) {
    this.getProduct();
   }

  ngOnInit(): void {
    this.myOnlineStoreService.productIntoCard$.subscribe((res: Product[]) => {
      this.productsIntoCard = res;
    });
  }

  getProduct(): void {
    this.myOnlineStoreService.getProduct().subscribe(res => {
      this.products.push(...res);
    });
  }

  addToCard(event: Product): void {
    const productFinded: Product = this.productsIntoCard.find((product: Product) => product.name === event.name);

    if (productFinded) {
      productFinded.quantity++;
      productFinded.total = productFinded.quantity * productFinded.price;
      this.myOnlineStoreService.productIntoCard$.emit(this.productsIntoCard);
      return;
    }

    event.quantity = 1;
    event.total = event.quantity * event.price;
    this.productsIntoCard.push(event);
    this.myOnlineStoreService.productIntoCard$.emit(this.productsIntoCard);
  }

}
