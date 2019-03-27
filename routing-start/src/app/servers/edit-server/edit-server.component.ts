import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  constructor(private serversService: ServersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // const id =  this.route.snapshot.params['id'];
    //let id =  this.route.snapshot.queryParams;
    //console.log(id);

    //const id2 =  this.route.snapshot.fragment;
    let id = 1;
    //console.log(id2);
    this.route.params.subscribe(
      params => {
        console.log(params);
        id = +params['id'];
        this.server = this.serversService.getServer(id);
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
      }
    );

   this.route.queryParams
   .subscribe(
      (queryParams: Params) => {
        console.log(queryParams);
        console.log((+queryParams['allowEdit']))
        this.allowEdit = (+queryParams['allowEdit']) ? true : false;
      }
   )
   ;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
