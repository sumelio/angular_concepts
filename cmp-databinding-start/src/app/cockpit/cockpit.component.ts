import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') bpCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    console.log(nameInput);
    this.serverCreated.emit({serverName: this.serverContentInput.nativeElement.value, serverContent: nameInput.value });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bpCreated.emit({serverName: this.serverContentInput.nativeElement.value, serverContent: nameInput.value});
  }

  onCHangeFirst
}
