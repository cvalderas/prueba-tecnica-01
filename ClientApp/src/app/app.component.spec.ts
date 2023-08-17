import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { of } from 'rxjs';
import { Client } from './interface/clients';
import { PhoneFormatPipe } from './phone-format.pipe';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let appServiceSpy: jasmine.SpyObj<AppService>;

  beforeEach(async () => {
    appServiceSpy = jasmine.createSpyObj('AppService', ['getClientsEF']);

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: AppService, useValue: appServiceSpy }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    component.unsubstribe$.next(null);
    component.unsubstribe$.complete();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ClientApp'`, () => {
    expect(component.title).toEqual('ClientApp');
  });

  it('should call getClients on init', () => {
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
    appServiceSpy.getClientsEF.and.returnValue(of(clients));

    component.ngOnInit();

    expect(appServiceSpy.getClientsEF).toHaveBeenCalledWith(1);
    expect(component.clients).toEqual(clients);
  });

  it('should call getClients with the next page on nextPage', () => {
    const clients: Client[] = [
      {
        clientId: 3,
        nombre: 'Client 3',
        email: 'client3@gmail.com',
        telefono: '1234567890',
        codigoPais: 1,
        nombrePais: 'Mexico'
      },
      {
        clientId: 4,
        nombre: 'Client 4',
        email: 'client4@gmail.com',
        telefono: '1234567890',
        codigoPais: 1,
        nombrePais: 'Mexico'
      }
    ];
    appServiceSpy.getClientsEF.and.returnValue(of(clients));
    component.currentPage = 2;

    component.nextPage();

    expect(appServiceSpy.getClientsEF).toHaveBeenCalledWith(3);
    expect(component.clients).toEqual(clients);
  });

  it('should call getClients with the previous page on previousPage', () => {
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
    appServiceSpy.getClientsEF.and.returnValue(of(clients));
    component.currentPage = 2;

    component.previousPage();

    expect(appServiceSpy.getClientsEF).toHaveBeenCalledWith(1);
    expect(component.clients).toEqual(clients);
  });
});
