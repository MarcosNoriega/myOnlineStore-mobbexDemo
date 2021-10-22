import { Component, OnInit } from '@angular/core';
import { MyOnlineStoreService } from '../../service/myOnlineStore.service';
import { OrderData, Customer } from '../../Interfaces/OrderData.Interface';
import Product from 'src/app/Interfaces/Product.Interface';
import { environment } from 'src/environments/environment';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  productsIntoCard: Product[] = [];
  productCardProcessed: any = [];
  total = 0;
  dataOrder: OrderData;

  constructor(private myOnlineStoreService: MyOnlineStoreService) {
  }

  ngOnInit(): void {
    this.myOnlineStoreService.productIntoCard$.subscribe((res: Product[]) => {
      this.productsIntoCard = [];
      this.productsIntoCard.push(...res);

      this.calculateTotal();
    });
  }

  processOrder(): void {
    this.buildOrder();
    this.myOnlineStoreService.checkout(this.dataOrder).subscribe(res => {
      document.location.href = res.data.url;
    });
  }

  private calculateTotal(): void {
    this.total = 0;

    this.productsIntoCard.map((product: Product) => {
      this.total += product.total;
    });
  }

  private buildOrder(): void {
    this.dataOrder = {
      total: this.total.toString(),
      items: this.productsIntoCard,
      description: 'Checkout de Prueba',
      reference: Date.now().toString(),
      currency: environment.currency,
      test: true,
      customer: environment.customer
    };
  }

  deleteProductToCard(product: Product): void {
    this.productsIntoCard = this.productsIntoCard.filter(p => p._id !== product._id);
    this.myOnlineStoreService.productIntoCard$.emit(this.productsIntoCard);
  }
}
