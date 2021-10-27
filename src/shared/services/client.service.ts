import { Injectable } from '@angular/core';

import { CLIENTS } from '../mocks/clients.mock';

@Injectable()
export class ClientService {
  getClients() {
    return Promise.resolve(CLIENTS);
  }
}