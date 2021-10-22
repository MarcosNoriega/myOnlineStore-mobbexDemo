import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import Product from '../Interfaces/Product.Interface';

@Injectable({
  providedIn: 'root'
})
export class MyOnlineStoreService {

  headers: HttpHeaders;
  productIntoCard$ = new EventEmitter<Product[]>();

  constructor(private http: HttpClient) {
    this.builderHeader();
  }

  /**
   * build the necessary headers for subsequent http requests.
   */
  private builderHeader(): void {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

  }

  public checkout(dataOrder: any): Observable<any> {
    return this.http.post(`${environment.urlMyOnlineStore}/checkout`, dataOrder, {headers: this.headers});
  }

  public getProduct(): Observable<any> {
    return this.http.get(`${environment.urlMyOnlineStore}/products`, { headers: this.headers });
  }
}
