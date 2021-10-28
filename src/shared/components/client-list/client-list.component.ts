import { Component, OnInit } from '@angular/core';
import { IClient } from 'src/shared/models/client.model';
import { ClientService } from 'src/shared/services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  constructor(private clientService: ClientService) {}

  /** CONSTANTS */
  clients: IClient[] = [];
  selectedClient?: IClient;

  /** METHODS */
  onSelect(client: IClient): void {
    this.selectedClient = client;
  }
  ngOnInit() {
    this.clientService.getClients()
      .then(clients => this.clients = clients);
  }

}
