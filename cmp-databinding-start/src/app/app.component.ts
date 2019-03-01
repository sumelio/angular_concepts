import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Jus' }];

  onServerAdded(eventData: {serverName: string, serverContent: string}) {
    console.log(eventData);
    this.serverElements.push({
      type: 'server',
      name: eventData.serverName,
      content: eventData.serverContent
    });
  }


  onBlueprintAdded(eventData: {serverName: string, serverContent: string}) {
    console.log(eventData);
    this.serverElements.push({
      type: 'blueprint',
      name: eventData.serverName,
      content: eventData.serverContent
    });
  }

}
