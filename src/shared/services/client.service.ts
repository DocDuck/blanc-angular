import { Injectable } from '@angular/core';
import { CLIENTS } from '../mocks/clients.mock';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  getClients() {
    return Promise.resolve(CLIENTS);
  }
}
