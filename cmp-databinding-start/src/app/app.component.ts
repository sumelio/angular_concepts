import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
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


  onBLueprintAdded(eventData: {serverName: string, serverContent: string}) {
    console.log(eventData);
    this.serverElements.push({
      type: 'blueprint',
      name: eventData.serverName,
      content: eventData.serverContent
    });
  }

  onCHangeFirst() {
    this.serverElements[0].name = 'CHanged..';
  }

  onDestroyirst() {
    console.log(this.serverElements.length);
    this.serverElements[0] = null;
    this.serverElements.splice(0, 1);
    console.log(this.serverElements.length);
  }

}
