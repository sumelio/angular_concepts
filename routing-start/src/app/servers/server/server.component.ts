import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { Route, ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.data
    .subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    )
    // // let id = this.route.snapshot.queryParams.allowEdit;
    // // console.log(this.route.snapshot.queryParams.allowEdit);
    // let id = this.route.snapshot.params['id'];
    // console.log(id);
    // this.server = this.serversService.getServer(Number(id));

    // this.route.params.subscribe(
    //   (params: Params) => {
    //     // id = params.allowEdit;
    //     id = params['id'];
    //     console.log(id);
    //     this.server = this.serversService.getServer(+id);
    //   }
    // );
  }

  onEdit() {
     // this.router.navigate(['edit'],{ queryParams: { allowEdit: '1'}, relativeTo: this.route});
     // this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'merge'});
     this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
