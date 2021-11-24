import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiTrendingService {

  constructor(private api: HttpClient) { }

  getGifts() {
    const apiKey = `pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa`;
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;

    return this.api.get(url).toPromise();
  }
}
