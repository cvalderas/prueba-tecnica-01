import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  perPage = 10;

  constructor(
    private http: HttpClient
  ) { }

  getClientsEF(page: number) {
    return this.http.get('https://localhost:7132/api/Client/ef?page=' + page + '&perPage=' + this.perPage);
  }

  getClientsSP() {
    return this.http.get('https://localhost:7132/api/Client/sp');
  }
}
