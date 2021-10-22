import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any;
  @Output() productToCard: any = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCard(): void {
    this.productToCard.emit(this.product);
  }

}
