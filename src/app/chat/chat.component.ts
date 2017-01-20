import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  dummy: string = "it works 12345697979!";
  constructor() { }

  ngOnInit() {
  }

}
