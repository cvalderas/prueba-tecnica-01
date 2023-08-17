import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Subject, takeUntil } from 'rxjs';
import { Client } from './interface/clients';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ClientApp';

  clients: Client[] = [];

  currentPage = 1;

  unsubstribe$ = new Subject();
  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getClients()
  }

  getClients(page: number = 1) {
    this.appService.getClientsEF(page)
      .pipe(takeUntil(this.unsubstribe$))
      .subscribe((clients: Client[]) => {
        this.clients = clients;
      }
      );
  }

  nextPage() {
    this.currentPage++;
    this.getClients(this.currentPage);
  }

  previousPage() {
    this.currentPage--;
    this.getClients(this.currentPage);
  }
}
