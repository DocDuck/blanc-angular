import { Component, OnInit } from '@angular/core';
import { IClient } from '../models/client.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'blanc-clients',
  template: `
      <pre>{{clients | json}}</pre>
    `
})
export class ClientListComponent implements OnInit {
  clients: IClient[] = [];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.getClients()
      .then(heroes => this.clients = heroes);
  }
}