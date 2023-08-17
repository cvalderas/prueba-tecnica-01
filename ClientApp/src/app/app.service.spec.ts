import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppService } from './app.service';
import { Client } from './interface/clients';

describe('AppService', () => {
  let service: AppService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppService]
    });
    service = TestBed.inject(AppService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get clients using EF', () => {
    const page = 1;

    const clients: Client[] = [
      {
        clientId: 1,
        nombre: 'Client 1',
        email: 'client@gmail.com',
        telefono: '1234567890',
        codigoPais: 1,
        nombrePais: 'Mexico'
      },
      {
        clientId: 2,
        nombre: 'Client 2',
        email: 'client2@gmail.com',
        telefono: '1234567890',
        codigoPais: 1,
        nombrePais: 'Mexico'
      }
    ];

    service.getClientsEF(page).subscribe((response) => {
      expect(response).toEqual(clients);
    }

    );

    const request = httpMock.expectOne(`https://localhost:7132/api/Client/ef?page=${page}&perPage=${service.perPage}`);
    expect(request.request.method).toBe('GET');
    request.flush(clients);
  });

  it('should get clients using SP', () => {
    const clients = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];

    service.getClientsSP().subscribe((response) => {
      expect(response).toEqual(clients);
    }

    );

    const request = httpMock.expectOne(`https://localhost:7132/api/Client/sp`);
    expect(request.request.method).toBe('GET');
    request.flush(clients);
  }

  );

}

);
